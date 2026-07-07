"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, ProjectCard } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";
import { projectCategories, type Project } from "@/lib/content";

const ITEMS_PER_PAGE = 10;

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");
  const [page, setPage] = useState(1);

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const setFilter = (cat: (typeof projectCategories)[number]) => {
    setActive(cat);
    setPage(1);
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Mobile: image as full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/residence-design-tirur/02.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/82 via-[#0a0a0a]/58 to-[#0a0a0a]/92" />
        </div>
        <Container className="relative grid items-stretch gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-20">
          <div className="flex flex-col justify-center text-[#e9e0c9] md:text-foreground">
            <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-[#e9e0c9]/70 md:text-muted">
              <span className="h-px w-6 bg-accent/70" aria-hidden />
              Our Work
            </span>
            <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
              Spaces shaped around{" "}
              <span className="italic text-accent">people.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#e9e0c9]/75 md:text-muted">
              Every project is unique, but our approach remains the same:
              understand first, design with purpose, and refine until every
              decision feels right. A selection of residential, commercial, and
              workplace projects.
            </p>
          </div>
          {/* Desktop: equal-height image column */}
          <div className="relative hidden overflow-hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/residence-design-tirur/02.png"
              alt="Featured architecture project"
              className="duotone absolute inset-0 rounded-sm border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-11">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-8">
            {projectCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={
                    "rounded-sm border px-5 py-2 text-sm transition-colors duration-300 " +
                    (isActive
                      ? "border-accent bg-accent text-white"
                      : "border-line text-muted hover:border-accent/50 hover:text-foreground")
                  }
                >
                  {cat}
                </button>
              );
            })}
            <span className="ml-auto text-xs text-muted">
              {filtered.length} project{filtered.length !== 1 && "s"}
            </span>
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {paginated.map((p, i) => (
              <Reveal key={p.id} delay={(i % 2) * 0.05}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>

          {/* Pagination — desktop only */}
          {totalPages > 1 && (
            <nav
              className="mt-12 hidden items-center justify-center gap-2 sm:flex"
              aria-label="Projects pagination"
            >
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="inline-flex items-center gap-1 rounded-sm border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={
                    "inline-flex h-9 w-9 items-center justify-center rounded-sm border text-sm transition-colors " +
                    (p === page
                      ? "border-accent bg-accent text-white"
                      : "border-line text-muted hover:border-accent/50 hover:text-foreground")
                  }
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="inline-flex items-center gap-1 rounded-sm border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          )}
        </Container>
      </section>

      <hr className="hairline" />

      <section className="py-11 md:py-16">
        <Container>
          <div
            className="relative overflow-hidden rounded-sm border-[0.5px] px-6 py-16 text-center shadow-[0_0_30px_-8px_rgba(153,0,0,0.35)] transition-shadow duration-500 hover:shadow-[0_0_50px_-5px_rgba(153,0,0,0.5)] md:px-16 md:py-24"
            style={{ borderColor: "var(--accent)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/process/01-understand.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: "blur(0.3px) brightness(0.4)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"
            />
            <Reveal className="relative">
              <Eyebrow>Inspired by what you see?</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Let&apos;s create something{" "}
                <span className="italic text-accent">together.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
                Every project starts with a conversation. Tell us about your
                space and we&apos;ll help you take the next step.
              </p>
              <div className="mt-10 flex justify-center">
                <BookConsultationButton />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
