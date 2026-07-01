import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Hero } from "@/components/hero";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Button,
  ProjectCard,
} from "@/components/ui";
import type { Metadata } from "next";
import { services, processSteps, principles, projects } from "@/lib/content";

const featured = projects.slice(0, 3);

export const metadata: Metadata = {
  description:
    "Einfach Design Studio creates architecture and interiors that are functional, timeless, and centred around the people who use them. Book a consultation in Dubai, UAE.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Einfach Design Studio — Architecture & Interior Design",
    description:
      "Design with clarity. Architecture and interiors designed around people — confident decisions before construction begins.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <Hero />

      <hr className="hairline" />

      {/* APPROACH */}
      <section className="py-14 md:py-20">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Approach"
              title={
                <>
                  Good design rarely starts with drawings. It starts with{" "}
                  <span className="text-accent">understanding.</span>
                </>
              }
            />
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              Before thinking about forms, materials, or finishes, we take time
              to understand how people live, work, and move through a space.
            </p>
            <p>
              Every decision is shaped around how that space should{" "}
              <span className="text-foreground">perform</span> — not just how it
              should look.
            </p>
            <p className="text-foreground">
              The result is architecture and interiors that feel intuitive,
              purposeful, and built to last.
            </p>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* SERVICES */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our Services"
              title="A complete design discipline."
            />
            <Link
              href="/services"
              className="link-underline shrink-0 text-sm text-accent"
            >
              All services →
            </Link>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.index} delay={i * 0.04}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col bg-background p-8 transition-colors duration-500 hover:bg-surface"
                >
                  <span className="font-display text-3xl font-light text-accent">
                    {s.index}
                  </span>
                  <h3 className="font-display mt-5 text-2xl font-light">
                    {s.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <span className="link-underline mt-6 text-xs text-foreground/70">
                    Learn more →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* WHY */}
      <section className="py-14 md:py-20">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Why Einfach?" title="Principles over trends." />
          </div>
          <ul className="lg:col-span-8 lg:grid lg:grid-cols-2 lg:gap-x-12">
            {principles.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <li className="flex items-start gap-4 border-b border-line py-5">
                  <span className="font-display mt-1 text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <hr className="hairline" />

      {/* PROCESS */}
      <section className="py-14 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Our Process"
            title="From first conversation to final detail."
            align="center"
          />
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <Reveal key={step.index} delay={i * 0.04}>
                <div className="h-full bg-background p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-4xl font-light text-accent">
                      {step.index}
                    </span>
                    <h3 className="font-display text-2xl font-light">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* FEATURED PROJECTS */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured Projects"
              title="A selection of recent work."
              intro="Residential, commercial, and workplace projects that reflect our commitment to thoughtful, lasting design."
            />
            <Button href="/projects" variant="ghost" className="shrink-0">
              View Projects
            </Button>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative overflow-hidden rounded-sm border border-line px-6 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[100px]"
            />
            <Reveal className="relative">
              <Eyebrow>Let&apos;s Create Better Spaces</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Spaces that feel right — not just on day one, but for years to
                come.
              </h2>
              <div className="mt-10 flex justify-center">
                <Button href="/contact">Book a Consultation</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
