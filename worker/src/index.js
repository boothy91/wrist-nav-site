// WristNav Garmin auth Worker.
// Holds the Garmin client secret and does the token exchange and refresh.
// It never sees or stores routes: the phone app sends routes straight to Garmin.

// Verify these against Garmin's developer portal docs once approved.
const TOKEN_URL = "https://connectapi.garmin.com/di-oauth2-service/oauth/token";
const APP_CALLBACK = "wristnav://garmin-callback";

const JSON_HEADERS = { "Content-Type": "application/json" };

function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj), { status, headers: JSON_HEADERS });
}

async function tokenRequest(params, env) {
  if (!env.GARMIN_CLIENT_ID || !env.GARMIN_CLIENT_SECRET) {
    return jsonResponse({ error: "not_configured" }, 503);
  }
  const body = new URLSearchParams({
    client_id: env.GARMIN_CLIENT_ID,
    client_secret: env.GARMIN_CLIENT_SECRET,
    ...params,
  });
  const resp = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  return new Response(await resp.text(), {
    status: resp.status,
    headers: JSON_HEADERS,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("ok");
    }

    // Garmin redirects here after the user signs in; bounce into the app.
    if (request.method === "GET" && url.pathname === "/garmin/callback") {
      return Response.redirect(APP_CALLBACK + url.search, 302);
    }

    if (request.method !== "POST") {
      return new Response("Not found", { status: 404 });
    }

    let data;
    try {
      data = await request.json();
    } catch (e) {
      return jsonResponse({ error: "bad_request" }, 400);
    }

    // App sends: { code, code_verifier, redirect_uri? }
    if (url.pathname === "/garmin/token") {
      if (!data.code || !data.code_verifier) {
        return jsonResponse({ error: "bad_request" }, 400);
      }
      const params = {
        grant_type: "authorization_code",
        code: data.code,
        code_verifier: data.code_verifier,
      };
      if (data.redirect_uri) params.redirect_uri = data.redirect_uri;
      return tokenRequest(params, env);
    }

    // App sends: { refresh_token }
    if (url.pathname === "/garmin/refresh") {
      if (!data.refresh_token) {
        return jsonResponse({ error: "bad_request" }, 400);
      }
      return tokenRequest(
        { grant_type: "refresh_token", refresh_token: data.refresh_token },
        env
      );
    }

    return new Response("Not found", { status: 404 });
  },
};
