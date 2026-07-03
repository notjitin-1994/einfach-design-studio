"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Container, Button } from "@/components/ui";

const HERO_VIDEO = "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/hero.mp4";
const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const direction = useRef(1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);
  const reduce = mounted && Boolean(prefersReduced);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reduce) {
      video.currentTime = 0;
      return;
    }

    const onTimeUpdate = () => {
      const dur = video.duration;
      if (!dur || !isFinite(dur)) return;
      if (video.playbackRate > 0 && video.currentTime >= dur - 0.08) {
        video.playbackRate = -1;
      } else if (video.playbackRate < 0 && video.currentTime <= 0.08) {
        video.playbackRate = 1;
      }
    };

    const start = () => {
      video.playbackRate = 1;
      video.play().catch(() => {});
      video.addEventListener("timeupdate", onTimeUpdate);
    };

    if (video.readyState >= 2) {
      start();
    } else {
      video.addEventListener("loadeddata", start, { once: true });
    }

    return () => {
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("loadeddata", start);
    };
  }, [reduce]);

  const hidden = reduce ? { opacity: 0 } : { opacity: 0, y: 22 };
  const show = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } };

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src={HERO_VIDEO}
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden
          tabIndex={-1}
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(0.4) contrast(1.05) brightness(0.95)" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#000f08]/70 via-[#000f08]/45 to-[#000f08]/90" />
        <div className="absolute left-1/2 top-1/3 h-[42vh] w-[64vw] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-line" />
      </div>

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
            className="font-display text-balance text-[clamp(2.9rem,8.5vw,7.5rem)] font-light leading-[0.98] text-[#e9e0c9]"
          >
            Design with <span className="italic text-accent">clarity.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden, show }}
            className="mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-[#e9e0c9]/75 md:text-xl"
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
            <Button href="/projects" variant="ghost" className="text-[#e9e0c9]">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
        className="relative"
      >
        <Container className="flex items-center justify-between gap-6 pb-9 pt-4 text-[0.68rem] uppercase tracking-[0.2em] text-[#e9e0c9]/60">
          <span>Dubai, UAE</span>
          <span>Est. 2021</span>
        </Container>
      </motion.footer>
    </section>
  );
}
