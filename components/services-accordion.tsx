"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { Service } from "@/lib/content";

const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

export function ServicesAccordion({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div>
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={s.index} delay={Math.min(i * 0.05, 0.2)}>
            <div className="border-b border-line">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-6 py-7 text-left transition-colors duration-300 active:scale-[0.99] md:gap-10 md:py-8"
              >
                <span className="font-display text-2xl font-light text-accent transition-transform duration-300 group-hover:scale-110 md:text-3xl">
                  {s.index}
                </span>
                <h3 className="font-display flex-1 text-balance text-2xl font-light transition-colors duration-300 md:text-3xl">
                  {s.title}
                </h3>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line transition-colors duration-300 group-hover:border-accent">
                  <ChevronDown
                    className="h-4 w-4 text-muted transition-[transform,color] duration-300 group-hover:text-accent"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transitionTimingFunction: EASE,
                    }}
                  />
                </span>
              </button>

              <div
                className="grid"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: `grid-template-rows 350ms ${EASE}`,
                }}
              >
                <div className="overflow-hidden">
                  <div
                    className="grid gap-8 pb-8 md:grid-cols-12 md:gap-10 md:pb-10"
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transition: `opacity 300ms ${EASE}`,
                      transitionDelay: isOpen ? "80ms" : "0ms",
                    }}
                  >
                    <div className="md:col-span-6 md:col-start-2">
                      <p className="text-base leading-relaxed text-muted">
                        {s.description}
                      </p>
                      <Link
                        href="/contact"
                        className="link-underline mt-6 inline-block text-sm text-accent"
                      >
                        Enquire about {s.title} →
                      </Link>
                    </div>
                    <ul className="md:col-span-4 md:col-start-8">
                      {s.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-3 border-b border-line py-3 text-sm text-muted"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
