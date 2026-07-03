"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const CYCLE: Record<string, string> = {
  system: "light",
  light: "dark",
  dark: "system",
};

const LABELS: Record<string, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Before mount, render a blank placeholder to avoid hydration mismatch
  const current = mounted ? (theme ?? "system") : "system";
  const resolved = mounted ? resolvedTheme : "dark";

  const Icon =
    current === "system" ? Monitor : resolved === "dark" ? Moon : Sun;

  return (
    <button
      type="button"
      aria-label={`Theme: ${LABELS[current] ?? current}${current === "system" ? ` (${resolved})` : ""}. Click to switch.`}
      title={`${LABELS[current] ?? current}${current === "system" ? ` (${resolved})` : ""}`}
      onClick={() => setTheme(CYCLE[current] ?? "system")}
      className={cn(
        "relative inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-foreground/80 transition-colors hover:text-accent hover:border-accent/50",
        className,
      )}
    >
      {mounted ? (
        <Icon className="h-4 w-4" />
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
