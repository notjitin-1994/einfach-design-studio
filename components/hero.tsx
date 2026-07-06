"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Button } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";

const HERO_IMAGE = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/residence-design-tirur/01.png";
const HERO_VIDEO = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/videos/hero.webm";
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  const reduce = mounted && Boolean(prefersReduced);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const show = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } };

  return (
    <section className="relative isolate flex h-[calc(100svh-var(--header-height))] flex-col overflow-hidden md:h-[calc(100dvh-var(--header-height))]">
      {/* Background layer */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(0.35) contrast(1.05) brightness(0.85)" }}
          poster={HERO_IMAGE}
        >
          <source src={HERO_VIDEO} type="video/webm" />
        </video>
      </div>

      {/* Foreground / legibility layers */}
      <div className="absolute inset-0 -z-10">
        {/* Heavy vignette: darkest at edges, transparent in the center-left reading zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 115% at 22% 50%, rgba(10,10,10,0.22) 0%, rgba(10,10,10,0.60) 55%, rgba(10,10,10,0.90) 100%)",
          }}
        />
        {/* Bottom wash so the footer / CTA row never competes with the video */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/92 via-[#0a0a0a]/25 to-[#0a0a0a]/25" />
        {/* Hairline separator */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-line/60" />
      </div>

      {/* Content */}
      <Container className="relative flex flex-1 flex-col justify-center px-5 py-16 sm:px-6 md:py-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 },
            },
          }}
        >
          {/* Subtle glass panel behind the text group for extra separation on busy footage */}
          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-sm bg-[#0a0a0a]/30 backdrop-blur-md md:-inset-6 md:bg-[#0a0a0a]/22" />

            <motion.span
              variants={{ hidden, show }}
              className="inline-flex items-center gap-2 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#e9e0c9]/70"
            >
              <span className="h-px w-6 bg-accent" aria-hidden />
              Einfach Design Studio
            </motion.span>

            <motion.h1
              variants={{ hidden, show }}
              className="font-display mt-5 text-balance text-[clamp(2.6rem,9vw,6.5rem)] font-light leading-[0.98] tracking-[-0.03em] text-[#e9e0c9] md:mt-6 md:text-[clamp(3.2rem,7vw,6.5rem)]"
              style={{ textShadow: "0 4px 30px rgba(10,10,10,0.55)" }}
            >
              Design with{" "}
              <span className="italic text-accent">clarity.</span>
            </motion.h1>

            <motion.p
              variants={{ hidden, show }}
              className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#e9e0c9]/82 sm:text-lg md:mt-7 md:text-xl"
              style={{ textShadow: "0 2px 18px rgba(10,10,10,0.5)" }}
            >
              Complexity ends here. We create thoughtful architecture and
              interiors that begin with <span className="text-accent">people</span>{" "}
              — not assumptions. The result is design that feels{" "}
              <span className="text-accent">simple, purposeful, and timeless</span>.
            </motion.p>

            <motion.div
              variants={{ hidden, show }}
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-9"
            >
              <BookConsultationButton />
              <Button
                href="/projects"
                variant="ghost"
                className="justify-center border-[#e9e0c9]/20 text-[#e9e0c9] backdrop-blur-sm hover:border-[#e9e0c9]/40 hover:bg-[#e9e0c9]/5 hover:text-white"
              >
                View Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85, duration: 0.8, ease: EASE }}
        className="relative"
      >
        <Container className="flex items-center justify-between gap-6 pb-6 pt-3 text-[0.64rem] uppercase tracking-[0.2em] text-[#e9e0c9]/55 sm:pb-8 sm:text-[0.68rem]">
          <span>Est. 2020</span>
          <span className="hidden sm:inline">Architecture & Interiors</span>
        </Container>
      </motion.footer>
    </section>
  );
}
