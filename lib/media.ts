/**
 * Media URL origin switch.
 *
 * By default all media is served directly from Supabase storage
 * (MEDIA_BASE === the Supabase public URL prefix). Set
 * `NEXT_PUBLIC_MEDIA_BASE` at build time to route every media URL through a
 * caching proxy instead — e.g. the Cloudflare Worker in `cloudflare/`:
 *
 *   NEXT_PUBLIC_MEDIA_BASE=https://eds-media.<your-subdomain>.workers.dev/media
 *
 * `cdn()` rewrites any full Supabase media URL to the configured base, so the
 * data layer and components switch origins in one place without touching URLs.
 *
 * NOTE: `NEXT_PUBLIC_*` vars are inlined at build time, so setting this var
 * requires a rebuild to take effect.
 */
export const SUPABASE_MEDIA_PREFIX =
  "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media";

export const MEDIA_BASE =
  process.env.NEXT_PUBLIC_MEDIA_BASE ?? SUPABASE_MEDIA_PREFIX;

/** Rewrite a full Supabase media URL to the configured MEDIA_BASE (CDN when set). */
export function cdn(url: string | undefined | null): string {
  if (!url) return "";
  return url.replace(SUPABASE_MEDIA_PREFIX, MEDIA_BASE);
}
