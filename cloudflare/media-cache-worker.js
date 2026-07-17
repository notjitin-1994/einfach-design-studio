/**
 * Cloudflare Worker — caching reverse proxy for Supabase storage media.
 *
 * Deploy this Worker, then set in the Next.js app:
 *   NEXT_PUBLIC_MEDIA_BASE=https://<your-worker>.workers.dev/media
 * (or a custom domain mapped to the Worker). All media URLs then resolve
 * through Cloudflare's edge cache instead of hitting Supabase, cutting
 * Supabase egress by ~90%+ on repeat requests.
 *
 * Deploy:
 *   npx wrangler deploy cloudflare/media-cache-worker.js --name eds-media --compatibility-date 2024-01-01
 *
 * Free tier covers 100k requests/day; this Worker only caches GET/HEAD.
 */
const SB_ORIGIN = "https://yzidfofruhqoxujkbvdi.supabase.co";
const SB_PUBLIC_PREFIX = "/storage/v1/object/public";

// Cache immutable media for a year at the edge; short TTL for errors.
const CACHE_OK = "public, max-age=31536000, immutable";

export default {
  async fetch(request, _env, ctx) {
    const url = new URL(request.url);

    // Only cache safe reads.
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }
    // Only proxy the /media/ namespace.
    if (!url.pathname.startsWith("/media/")) {
      return new Response("Not found", { status: 404 });
    }

    const cache = caches.default;
    // Normalize the cache key (drop querystrings that don't affect the asset).
    const cacheKey = new Request(`${url.origin}${url.pathname}`, { method: "GET" });

    const cached = await cache.match(cacheKey);
    if (cached) return cached;

    const originUrl = `${SB_ORIGIN}${SB_PUBLIC_PREFIX}${url.pathname}`;
    const origin = await fetch(originUrl, {
      cf: {
        cacheEverything: true,
        cacheTtl: 31536000,
        cacheTtlByStatus: { "200-299": 31536000, "400-499": 60, "500-599": 0 },
      },
    });

    // Don't cache non-2xx aggressively.
    if (!origin.ok) {
      return new Response(origin.body, { status: origin.status, headers: origin.headers });
    }

    const response = new Response(origin.body, origin);
    response.headers.set("Cache-Control", CACHE_OK);
    response.headers.set("CDN-Cache-Control", "max-age=31536000");
    response.headers.delete("Set-Cookie");
    ctx.waitUntil(cache.put(cacheKey, response.clone()));
    return response;
  },
};
