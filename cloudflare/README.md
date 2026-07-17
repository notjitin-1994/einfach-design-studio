# Cloudflare media cache — Supabase egress reducer

A Cloudflare Worker that acts as a **caching reverse proxy** for the Supabase
`media` storage bucket. Once deployed and enabled, every media request is
served from Cloudflare's edge cache after the first fetch, so it no longer
counts against your Supabase monthly egress quota.

## What it does

- Request: `GET https://<worker>/media/projects/<slug>/01.webp`
- The Worker fetches `https://<project>.supabase.co/storage/v1/object/public/media/projects/<slug>/01.webp`
- Caches the response at Cloudflare's edge for 1 year (immutable).
- Subsequent requests for the same asset are served from cache — **zero Supabase egress**.

## Deploy (needs YOUR Cloudflare account)

```bash
# one-time: authenticate (opens browser)
npx wrangler login

# from the cloudflare/ directory
cd cloudflare
npx wrangler deploy
```

Note the Worker URL it prints, e.g. `https://eds-media.<your-subdomain>.workers.dev`.

Smoke-test it before enabling:

```bash
curl -I https://eds-media.<your-subdomain>.workers.dev/media/projects/commercial-renovation-ernakulam/04.webp
# expect: HTTP/2 200, cache HIT on second request
```

## Enable in the Next.js app

The app reads `NEXT_PUBLIC_MEDIA_BASE`. Add it to `.env.local` (and your host's
env vars) and **rebuild** (`NEXT_PUBLIC_*` is inlined at build time):

```bash
# .env.local
NEXT_PUBLIC_MEDIA_BASE=https://eds-media.<your-subdomain>.workers.dev/media
```

Then `npm run build && npm run start`. All media (DB-driven galleries + hardcoded
hero/CTA/service images) now resolve through the Worker.

With it unset, the app falls back to direct Supabase URLs — no behavior change.

## Optional: custom domain

Map `cdn.einfachdesignstudio.com` to the Worker for a clean URL (Workers → your
Worker → Triggers → Custom Domains), then set:

```
NEXT_PUBLIC_MEDIA_BASE=https://cdn.einfachdesignstudio.com/media
```

## Notes / limits

- Free tier: 100 000 Worker requests/day. The edge cache absorbs the vast
  majority, so unique-origin fetches are rare.
- The Worker only proxies GET/HEAD under `/media/`.
- A long immutable `Cache-Control` is set on 2xx; errors are not cached.
- This caches **images** (already WebP, ~98% smaller). The **hero video** is
  still served directly from Supabase and is the next big egress item — host it
  on Cloudflare Stream / Vimeo / YouTube to remove it from Supabase entirely.
