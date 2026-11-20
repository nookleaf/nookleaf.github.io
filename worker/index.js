/**
 * Helper to recursively find an edition by its 'id' anywhere in the JSON tree
 * Supports both raw editions.json structure and flat key-value dictionary
 */
function findEditionById(obj, targetId) {
  if (!obj || typeof obj !== "object") return null;
  // If flat dictionary: obj[targetId]
  if (obj[targetId] && obj[targetId].url) return obj[targetId];
  // If matching node
  if (obj.id === targetId && obj.url) return obj;

  for (const key of Object.keys(obj)) {
    const found = findEditionById(obj[key], targetId);
    if (found) return found;
  }
  return null;
}

/**
 * Helper to strip 'url' from the JSON tree for public frontend delivery
 */
function sanitizePublicData(obj) {
  if (!obj || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(sanitizePublicData);
  const copy = { ...obj };
  if ("url" in copy) copy.url = "";
  for (const key of Object.keys(copy)) {
    copy[key] = sanitizePublicData(copy[key]);
  }
  return copy;
}

// In-Memory cache fallback agar link yang sama tidak membebani limit API SafelinkU
const SHORTLINK_CACHE = new Map();

/**
 * Generate shortlink via SafeLinkU REST API with dual format & caching
 */
async function getSafelinkuUrl(originalUrl, env) {
  if (!originalUrl) return "";

  // Jika URL aslinya sendiri sudah merupakan link safelinku, gunakan langsung
  if (originalUrl.includes("safelinku.com") || originalUrl.includes("safelinku.my.id")) {
    return originalUrl;
  }

  const token = env.SAFELINKU_TOKEN ? env.SAFELINKU_TOKEN.trim() : "";
  if (!token) {
    console.warn("SAFELINKU_TOKEN is not defined in Secrets! Returning original URL.");
    return originalUrl;
  }

  // 1. Cek KV Cache jika namespace LINK_CACHE terhubung
  if (env.LINK_CACHE) {
    try {
      const cached = await env.LINK_CACHE.get(originalUrl);
      if (cached && (cached.includes("safelinku.com") || cached.includes("safelinku.my.id"))) {
        return cached;
      }
    } catch (e) {
      console.warn("KV Cache get error:", e);
    }
  }

  // 2. Cek Memory Cache
  if (SHORTLINK_CACHE.has(originalUrl)) {
    const cached = SHORTLINK_CACHE.get(originalUrl);
    if (cached && (cached.includes("safelinku.com") || cached.includes("safelinku.my.id"))) {
      return cached;
    }
  }

  // 3. Request ke API SafeLinkU
  try {
    // Format REST API v1 (POST)
    let shortUrl = "";
    try {
      const res = await fetch("https://safelinku.com/api/v1/links", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          url: originalUrl
        })
      });

      if (res.ok) {
        const data = await res.json();
        shortUrl = data.url || data.shortenedUrl || (data.data && (data.data.url || data.data.shortenedUrl));
      }
    } catch (postErr) {
      console.warn("SafeLinkU POST API error, trying GET fallback:", postErr);
    }

    // Fallback format GET query API
    if (!shortUrl) {
      try {
        const getRes = await fetch(`https://safelinku.com/api?api=${encodeURIComponent(token)}&url=${encodeURIComponent(originalUrl)}`);
        if (getRes.ok) {
          const getData = await getRes.json();
          shortUrl = getData.shortenedUrl || getData.url || (getData.data && (getData.data.url || getData.data.shortenedUrl));
        }
      } catch (getErr) {
        console.warn("SafeLinkU GET API error:", getErr);
      }
    }

    if (shortUrl) {
      // Simpan ke Memory Cache
      SHORTLINK_CACHE.set(originalUrl, shortUrl);

      // Simpan ke KV Cache jika tersedia
      if (env.LINK_CACHE) {
        try {
          await env.LINK_CACHE.put(originalUrl, shortUrl);
        } catch (e) {
          console.warn("KV Cache put error:", e);
        }
      }
      return shortUrl;
    }
  } catch (err) {
    console.error("SafeLinkU API error:", err);
  }

  // Fallback ke link asli jika SafelinkU sedang offline / timeout
  return originalUrl;
}

export default {
  async fetch(request, env) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const rawData = JSON.parse(env.EDITIONS_SECRET_DATA || "{}");

    // Endpoint 1: Mengembalikan struktur JSON publik (field 'url' disembunyikan)
    if (request.method === "GET" && url.pathname === "/api/editions") {
      const publicData = sanitizePublicData(rawData);
      return new Response(JSON.stringify(publicData), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // Endpoint 2: Verifikasi Turnstile dan berikan URL SafelinkU
    if (request.method === "POST" && url.pathname === "/api/download") {
      try {
        const { token, editionId } = await request.json();

        if (!editionId) {
          return new Response(JSON.stringify({ success: false, error: "Missing editionId" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        // Verifikasi token Turnstile jika TURNSTILE_SECRET_KEY diset
        if (env.TURNSTILE_SECRET_KEY) {
          if (!token) {
            return new Response(JSON.stringify({ success: false, error: "Missing Turnstile token" }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }

          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              secret: env.TURNSTILE_SECRET_KEY,
              response: token
            })
          });
          const outcome = await verifyRes.json();

          if (!outcome.success) {
            const errCodes = (outcome["error-codes"] || []).join(", ");
            return new Response(JSON.stringify({
              success: false,
              error: `Captcha invalid (${errCodes || "verification failed"})`
            }), {
              status: 403,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }
        }

        // Cari edisi secara rekursif dari struktur data apapun yang di-paste pengguna
        const edition = findEditionById(rawData, editionId);

        if (!edition || !edition.url) {
          return new Response(JSON.stringify({ success: false, error: "Link not found or not ready" }), {
            status: 404,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        // Konversi link asli (Google Drive) ke link SafeLinkU via REST API
        const finalUrl = await getSafelinkuUrl(edition.url, env);

        return new Response(JSON.stringify({
          success: true,
          url: finalUrl,
          downloadUrl: finalUrl
        }), {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        });
      }
    }

    return new Response("Not Found", { status: 404 });
  }
};
