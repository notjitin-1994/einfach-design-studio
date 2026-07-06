import Link from "next/link";
import { cn } from "@/lib/utils";

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
        "group inline-flex items-center focus-visible:outline-none",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/eds-logo-black.png"
        alt="Einfach Design Studio"
        className="h-8 w-auto object-contain transition-transform duration-500 group-hover:rotate-[8deg] [html.dark_&]:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/eds-logo-white.png"
        alt="Einfach Design Studio"
        className="hidden h-8 w-auto object-contain transition-transform duration-500 group-hover:rotate-[8deg] [html.dark_&]:block"
      />
    </Link>
  );
}
