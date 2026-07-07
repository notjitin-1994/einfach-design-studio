"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";

const HERO_IMAGE = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/residence-design-tirur/01.png";
// TODO: Replace with Joe's hero background video URL once shared.
// Supports direct MP4/WebM URLs. Leave empty to keep the static image fallback.
const HERO_VIDEO: string | null = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/videos/hero.webm";
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const reduce = mounted && Boolean(prefersReduced);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 22 };
  const show = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } };

  return (
    <section className="relative isolate flex h-[calc(100dvh-var(--header-height))] flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {HERO_VIDEO ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.4) contrast(1.05) brightness(0.95)" }}
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <div
            aria-hidden
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${HERO_IMAGE})`,
              filter: "grayscale(0.4) contrast(1.05) brightness(0.95)",
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/45 to-[#0a0a0a]/90" />
        <div className="absolute left-1/2 top-1/3 h-[42vh] w-[64vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center py-24 md:py-28">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.08 },
            },
          }}
        >
          <motion.h1
            variants={{ hidden, show }}
            className="font-display text-balance text-[clamp(2.9rem,8.5vw,7.5rem)] font-light leading-[0.98] text-[#e9e0c9]"
          >
            Design with <span className="italic text-accent">Simplicity.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden, show }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#e9e0c9]/75 md:text-xl"
          >
            Complexity ends here. We create thoughtful architecture and interiors
            that begin with <span className="text-accent">people</span> — not
            assumptions. By understanding how you live, work, and move through a
            space, we help you make better design decisions from the very
            beginning. The result is design that feels{" "}
            <span className="text-accent">simple, purposeful, and timeless</span>.
          </motion.p>

          <motion.div
            variants={{ hidden, show }}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <BookConsultationButton />
          </motion.div>
        </motion.div>
      </Container>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
        className="absolute inset-x-0 bottom-0 z-10"
        style={{ paddingBottom: "calc(1.25rem + env(safe-area-inset-bottom))" }}
      >
        <Container className="flex items-center justify-between gap-6 text-[0.64rem] uppercase tracking-[0.2em] text-[#e9e0c9]/60 sm:text-[0.68rem]">
          <span>Est. 2020</span>
        </Container>
      </motion.footer>
    </section>
  );
}
