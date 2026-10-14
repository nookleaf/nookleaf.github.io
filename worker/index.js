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

    if (request.method === "GET" && url.pathname === "/api/editions") {
      const publicData = {};
      for (const [id, item] of Object.entries(rawData)) {
        publicData[id] = {
          id: id,
          name: item.name,
          disabled: Boolean(item.disabled),
          isEa: Boolean(item.isEa),
          size: item.size || "-",
          date: item.date || "-",
          filename: item.filename || "",
          changelog: Array.isArray(item.changelog) ? item.changelog : []
        };
      }
      return new Response(JSON.stringify(publicData), {
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    if (request.method === "POST" && url.pathname === "/api/download") {
      try {
        const { token, editionId } = await request.json();

        if (!editionId) {
          return new Response(JSON.stringify({ success: false, error: "Missing editionId" }), {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        if (env.TURNSTILE_SECRET_KEY) {
          if (!token) {
            return new Response(JSON.stringify({ success: false, error: "Missing Turnstile token" }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }

          const formData = new FormData();
          formData.append("secret", env.TURNSTILE_SECRET_KEY);
          formData.append("response", token);

          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            body: formData,
          });
          const outcome = await verifyRes.json();

          if (!outcome.success) {
            return new Response(JSON.stringify({ success: false, error: "Captcha invalid" }), {
              status: 403,
              headers: { ...corsHeaders, "Content-Type": "application/json" }
            });
          }
        }

        const edition = rawData[editionId];
        if (!edition || !edition.url) {
          return new Response(JSON.stringify({ success: false, error: "Link not found or not ready" }), {
            status: 404,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        return new Response(JSON.stringify({ success: true, downloadUrl: edition.url }), {
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
