"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

const COLORS: Record<string, string> = {
  dark: "#000f08",
  light: "#e9e0c9",
};

export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const color = COLORS[resolvedTheme ?? "dark"] ?? COLORS.dark;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((meta) => meta.setAttribute("content", color));
  }, [resolvedTheme]);

  return null;
}
