import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  withWordmark = true,
}: {
  className?: string;
  withWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2.5 focus-visible:outline-none",
        className,
      )}
      aria-label="Einfach Design Studio — home"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/einfach-monogram.png"
        alt=""
        aria-hidden="true"
        className="h-8 w-8 object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
      />
      {withWordmark && (
        <span className="font-display text-xl font-medium tracking-tight">
          Einfach
          <span className="text-accent">.</span>
        </span>
      )}
    </Link>
  );
}
