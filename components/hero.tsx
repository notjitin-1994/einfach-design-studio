"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Container, Button } from "@/components/ui";

const HERO_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80";

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
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background image + brand treatment */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          initial={reduce ? undefined : { scale: 1.05 }}
          animate={reduce ? undefined : { scale: 1.13 }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt=""
            aria-hidden
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.4) contrast(1.05) brightness(0.95)" }}
          />
        </motion.div>

        {/* Premium legibility scrim — brand-dark, multi-stop, bottom-heavy (refined in both themes) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000f08]/70 via-[#000f08]/45 to-[#000f08]/90" />
        {/* Subtle accent warmth — soft radial glow */}
        <div className="absolute left-1/2 top-1/3 h-[42vh] w-[64vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
        {/* Hairline edge at bottom for a refined transition */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

      {/* Content */}
      <Container className="relative flex flex-1 flex-col justify-center py-32 md:py-44">
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
            className="font-display text-balance text-[clamp(2.9rem,8.5vw,7.5rem)] font-light leading-[0.98]"
          >
            Design with <span className="italic text-accent">clarity.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden, show }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted md:text-xl"
          >
            Simple isn&apos;t our style. It&apos;s the outcome of thoughtful
            design. At Einfach Design Studio, we create architecture and
            interiors that are functional, timeless, and centred around the
            people who use them.
          </motion.p>

          <motion.div
            variants={{ hidden, show }}
            className="mt-11 flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/contact">Book a Consultation</Button>
            <Button href="/projects" variant="ghost">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Foot bar — meta + scroll cue */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
        className="relative"
      >
        <Container className="flex items-center justify-between gap-6 pb-9 pt-4 text-[0.68rem] uppercase tracking-[0.2em] text-muted">
          <span>Dubai, UAE</span>
          <span>Est. 2021</span>
        </Container>
      </motion.footer>
    </section>
  );
}
