"use client";

import type { ReactNode } from "react";
import { useConsultation } from "./consultation-context";
import { cn } from "@/lib/utils";

type BookConsultationButtonProps = {
  children?: ReactNode;
  className?: string;
};

export function BookConsultationButton({
  children = "Book a Consultation",
  className,
}: BookConsultationButtonProps) {
  const { open } = useConsultation();
  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-accent-deep shadow-[0_8px_30px_-12px_rgba(251,54,64,0.6)]",
        className,
      )}
    >
      {children}
    </button>
  );
}
