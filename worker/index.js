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
 * Generate shortlink via SafeLinkU REST API with detailed diagnostic logging
 */
async function getSafelinkuUrl(originalUrl, env) {
  const debug = {
    hasToken: Boolean(env.SAFELINKU_TOKEN),
    tokenLength: env.SAFELINKU_TOKEN ? env.SAFELINKU_TOKEN.trim().length : 0,
    originalUrlSample: originalUrl ? originalUrl.substring(0, 35) + "..." : "empty",
    status: "init"
  };

  if (!originalUrl) {
    debug.status = "no_url_provided";
    return { url: "", debug };
  }

  // Jika URL aslinya sendiri sudah merupakan link safelinku / shortlink
  if (originalUrl.includes("safelinku.com") || originalUrl.includes("safelinku.my.id") || originalUrl.includes("sfl.gl")) {
    debug.status = "already_shortened_url";
    return { url: originalUrl, debug };
  }

  const token = (env.SAFELINKU_TOKEN ? env.SAFELINKU_TOKEN.trim() : "") || "a3bb15459877babe1ac9e299e6b0e5fc27501cb0";
  debug.tokenSource = env.SAFELINKU_TOKEN ? "environment_secret" : "worker_fallback";
  debug.hasToken = Boolean(token);
  debug.tokenLength = token.length;

  if (!token) {
    debug.status = "missing_safelinku_token";
    console.warn("SAFELINKU_TOKEN is not defined! Returning original URL.");
    return { url: originalUrl, debug };
  }

  // 1. Cek Memory Cache
  if (SHORTLINK_CACHE.has(originalUrl)) {
    const cached = SHORTLINK_CACHE.get(originalUrl);
    debug.status = "memory_cache_hit";
    debug.shortUrl = cached;
    return { url: cached, debug };
  }

  // 2. Request ke API SafeLinkU
  try {
    const res = await fetch("https://safelinku.com/api/v1/links", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
      },
      body: JSON.stringify({
        url: originalUrl
      })
    });

    debug.apiHttpStatus = res.status;
    const rawText = await res.text();
    debug.apiRawResponse = rawText.substring(0, 300);

    let shortUrl = "";
    try {
      const data = JSON.parse(rawText);
      shortUrl = data.url || data.shortenedUrl || (data.data && (data.data.url || data.data.shortenedUrl));
    } catch (parseErr) {
      debug.parseError = parseErr.message;
    }

    if (shortUrl) {
      SHORTLINK_CACHE.set(originalUrl, shortUrl);
      debug.status = "success";
      debug.shortUrl = shortUrl;
      return { url: shortUrl, debug };
    } else {
      debug.status = "api_response_missing_url";
    }
  } catch (err) {
    debug.status = "api_fetch_exception";
    debug.error = err.message;
    console.error("SafeLinkU API error:", err);
  }

  // Fallback ke link asli jika SafeLinkU error
  return { url: originalUrl, debug };
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

    // Endpoint 2: Diagnostic test endpoint untuk SafeLinkU
    if (request.method === "GET" && url.pathname === "/api/test-safelink") {
      const testResult = await getSafelinkuUrl("https://drive.google.com/test", env);
      return new Response(JSON.stringify(testResult, null, 2), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    // Endpoint 3: Verifikasi Turnstile dan berikan URL SafeLinkU
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
        const { url: finalUrl, debug: safelinkDebug } = await getSafelinkuUrl(edition.url, env);

        return new Response(JSON.stringify({
          success: true,
          url: finalUrl,
          downloadUrl: finalUrl,
          debug: safelinkDebug
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
