"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, ProjectCard } from "@/components/ui";
import { projects, projectCategories } from "@/lib/content";

export default function ProjectsPage() {
  const [active, setActive] =
    useState<(typeof projectCategories)[number]>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Mobile: image as full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000f08]/82 via-[#000f08]/58 to-[#000f08]/92" />
        </div>
        <Container className="relative grid items-stretch gap-10 py-20 md:grid-cols-2 md:gap-12 md:py-28">
          <div className="flex flex-col justify-center">
            <Eyebrow>Our Work</Eyebrow>
            <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
              Spaces shaped around{" "}
              <span className="italic text-accent">people.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
              Every project is unique, but our approach remains the same:
              understand first, design with purpose, and refine until every
              decision feels right. A selection of residential, commercial, and
              workplace projects.
            </p>
          </div>
          {/* Desktop: equal-height image column */}
          <div className="relative hidden min-h-[320px] md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
              alt="Featured architecture project"
              className="duotone h-full w-full rounded-sm border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 border-b border-line pb-8">
            {projectCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.05}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
