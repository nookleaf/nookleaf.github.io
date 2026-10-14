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

    // Endpoint 2: Verifikasi Turnstile dan berikan URL asli
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

        return new Response(JSON.stringify({
          success: true,
          url: edition.url,
          downloadUrl: edition.url
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
