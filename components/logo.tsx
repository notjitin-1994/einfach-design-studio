import Link from "next/link";
import { cn } from "@/lib/utils";

const SB_BRAND =
  "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/brand";

export function Logo({
  className,
  withWordmark,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  // The new logo asset includes the wordmark, so `withWordmark` is kept for
  // API compatibility but no longer changes rendering.
  void withWordmark;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:outline-none",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${SB_BRAND}/eds-logo-black.png`}
        alt="Einfach Design Studio"
        className="h-8 w-auto object-contain [html.dark_&]:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${SB_BRAND}/eds-logo-white.png`}
        alt="Einfach Design Studio"
        className="hidden h-8 w-auto object-contain [html.dark_&]:block"
      />
    </Link>
  );
}
