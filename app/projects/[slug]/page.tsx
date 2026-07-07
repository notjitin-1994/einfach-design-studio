import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Button } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";
import { projects, getProject } from "@/lib/content";
import { cn } from "@/lib/utils";

const bentoSpans = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  "col-span-1 md:col-span-2",
  "col-span-1 md:col-span-2",
  "col-span-2 md:col-span-2",
  "col-span-1 md:col-span-2",
  "col-span-1 md:col-span-2",
  "col-span-2 md:col-span-4",
  "col-span-2 md:col-span-2",
];

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · Einfach Design Studio`,
      description: project.summary,
      images: [{ url: project.image }],
      type: "article",
    },
  };
}

const PHASES = [
  { key: "understand", label: "Understand", index: "01" },
  { key: "define", label: "Define", index: "02" },
  { key: "design", label: "Design", index: "03" },
  { key: "refine", label: "Refine", index: "04" },
  { key: "deliver", label: "Deliver", index: "05" },
  { key: "support", label: "Support", index: "06" },
] as const;

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero — full-bleed thumbnail with dark scrim */}
      <section className="relative isolate flex min-h-[78svh] flex-col overflow-hidden border-b border-line">
        <div className="absolute inset-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
            style={{ filter: "grayscale(0.25) contrast(1.05) brightness(0.85)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/65 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
        </div>
        <Container className="relative mt-auto flex flex-col gap-6 py-14 text-[#e9e0c9] md:py-20">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-[#e9e0c9]/70">
              <span className="h-px w-6 bg-accent/80" aria-hidden />
              {project.category}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
              {project.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-[#e9e0c9]/80">
              {project.hero}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.18em] text-[#e9e0c9]/60">
              <span>{project.location}</span>
              <span className="text-accent/70">/</span>
              {project.tags.map((t, i) => (
                <span key={t}>
                  {t}
                  {i < project.tags.length - 1 && (
                    <span className="ml-3 text-accent/40">·</span>
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Process narrative — the six phases */}
      <section className="py-11 md:py-16">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-6 bg-accent/80" aria-hidden />
              How we approached it
            </span>
            <h2 className="font-display mt-5 max-w-3xl text-balance text-[clamp(1.9rem,4.2vw,3.4rem)] font-light leading-[1.05]">
              The process behind{" "}
              <span className="italic text-accent">{project.title}</span>
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-line border-t border-line">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.key} delay={(i % 2) * 0.05}>
                <div className="grid gap-4 py-8 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm text-accent">
                        {phase.index}
                      </span>
                      <span className="font-display text-xl font-light text-foreground md:text-2xl">
                        {phase.label}
                      </span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-muted md:col-span-9 md:text-lg">
                    {project.process[phase.key]}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery — bento grid */}
      <section className="border-t border-line py-11 md:py-16">
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-muted">
              <span className="h-px w-6 bg-accent/80" aria-hidden />
              The design
            </span>
            <h2 className="font-display mt-5 max-w-3xl text-balance text-[clamp(1.9rem,4.2vw,3.4rem)] font-light leading-[1.05]">
              A closer look
            </h2>
          </Reveal>

          <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
            {project.gallery.map((img, i) => (
              <Reveal
                key={img.src}
                delay={Math.min(i * 0.05, 0.25)}
                className={cn(
                  "group relative overflow-hidden rounded-sm border border-line bg-surface",
                  bentoSpans[i % bentoSpans.length]
                )}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA back to projects */}
      <section className="border-t border-line py-11 md:py-16">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display max-w-xl text-balance text-[clamp(1.7rem,3.6vw,2.8rem)] font-light leading-[1.1]">
              See more of our work.
            </h2>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
              A selection of residential, commercial, and workplace projects —
              each with its own process.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects" variant="ghost">
              All projects
            </Button>
            <Button href="/contact">Start a project</Button>
          </div>
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
              <Eyebrow>Like what you see?</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Let&apos;s create your{" "}
                <span className="italic text-accent">story.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
                Every project is unique. Start a conversation and we&apos;ll
                help you shape what comes next.
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
