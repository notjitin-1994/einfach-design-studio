"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui";

const EASE = [0.23, 1, 0.32, 1] as const;
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && Boolean(prefersReduced);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-[90] border-b border-line bg-background/70 backdrop-blur-xl">
      <div className="container-edge flex items-center justify-between pb-2.5 pt-[calc(0.625rem+env(safe-area-inset-top))]">
        <Logo />

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm transition-colors duration-300",
                  active
                    ? "text-foreground"
                    : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" className="px-5 py-2.5">
            Book a Consultation
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-line text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

    </header>

    {/* Mobile overlay menu — full-screen reveal (sibling of header so the
        header's backdrop-filter doesn't trap the fixed overlay in a tiny box) */}
    <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[80] bg-background/95 backdrop-blur-xl md:hidden"
            initial={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            animate={
              reduce
                ? { opacity: 1 }
                : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
            }
            exit={
              reduce
                ? { opacity: 0 }
                : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
            }
            transition={
              reduce ? { duration: 0.2 } : { duration: 0.5, ease: EASE_IN_OUT }
            }
          >
            <div className="container-edge flex h-full flex-col pt-24">
              <nav className="flex flex-1 flex-col justify-center">
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduce ? 0 : 0.07,
                        delayChildren: reduce ? 0 : 0.18,
                      },
                    },
                  }}
                >
                  {nav.map((item) => {
                    const active =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);
                    return (
                      <motion.li
                        key={item.href}
                        variants={{
                          hidden: reduce
                            ? { opacity: 0 }
                            : { opacity: 0, y: 24 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, ease: EASE },
                          },
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center gap-4 border-b border-line/60 py-5"
                        >
                          <span
                            className={cn(
                              "h-px transition-all duration-500",
                              active
                                ? "w-12 bg-accent"
                                : "w-6 bg-muted group-hover:w-12 group-hover:bg-accent",
                            )}
                          />
                          <span
                            className={cn(
                              "font-display text-3xl font-light transition-colors duration-300",
                              active ? "text-accent" : "text-foreground",
                            )}
                          >
                            {item.label}
                          </span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>
              <motion.div
                initial={
                  reduce ? { opacity: 0 } : { opacity: 0, y: 20 }
                }
                animate={
                  reduce
                    ? { opacity: 1 }
                    : {
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.4, duration: 0.5, ease: EASE },
                      }
                }
                className="py-8"
              >
                <Button href="/contact" className="w-full">
                  Book a Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
