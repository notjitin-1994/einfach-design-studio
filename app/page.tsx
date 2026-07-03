import Link from "next/link";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "@/components/reveal";
import { Hero } from "@/components/hero";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Button,
  ProjectCard,
} from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";
import type { Metadata } from "next";
import { services, processSteps, principles, projects } from "@/lib/content";

const featured = projects.slice(0, 3);

const SB_MEDIA =
  "https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media";
const SERVICE_IMAGE_POOL = [
  `${SB_MEDIA}/projects/apartment-complex-ernakulam/01.png`,
  `${SB_MEDIA}/projects/apartment-interior-dubai/01.png`,
  `${SB_MEDIA}/projects/apartment-interior-ernakulam/01.jpg`,
  `${SB_MEDIA}/projects/commercial-renovation-ernakulam/01.png`,
  `${SB_MEDIA}/projects/e3-media-office-ajman/01.png`,
  `${SB_MEDIA}/projects/residence-design-tirur/01.png`,
  `${SB_MEDIA}/projects/residence-renovation-ernakulam/01.png`,
  `${SB_MEDIA}/projects/apartment-complex-ernakulam/03.png`,
  `${SB_MEDIA}/projects/apartment-interior-dubai/03.png`,
  `${SB_MEDIA}/projects/residence-design-tirur/03.png`,
  `${SB_MEDIA}/projects/apartment-complex-ernakulam/05.png`,
  `${SB_MEDIA}/projects/residence-renovation-ernakulam/03.png`,
];

function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const serviceImages = shuffle(SERVICE_IMAGE_POOL);

const processImages = [
  `${SB_MEDIA}/process/01-understand.jpg`,
  `${SB_MEDIA}/process/02-define.jpg`,
  `${SB_MEDIA}/process/03-design.jpg`,
  `${SB_MEDIA}/process/04-refine.jpg`,
  `${SB_MEDIA}/process/05-deliver.jpg`,
  `${SB_MEDIA}/process/06-support.jpg`,
];

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
        <Container className="grid items-start gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our Approach"
              title={
                <>
                  Good design rarely starts with drawings. It starts with{" "}
                  <span className="text-accent">understanding.</span>
                </>
              }
            />
          </Reveal>
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
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
          </Reveal>
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

          <Stagger className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <StaggerItem key={s.index}>
                <Link
                  href="/services"
                  className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden p-8"
                >
                  <Image
                    src={serviceImages[i % serviceImages.length]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: "blur(1px) saturate(1.1) brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
                  <div className="relative flex flex-1 flex-col">
                    <span className="font-display text-3xl font-light text-accent">
                      {s.index}
                    </span>
                    <h3 className="font-display mt-5 text-2xl font-light text-white/90">
                      {s.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">
                      {s.description}
                    </p>
                    <span className="link-underline mt-6 text-xs font-medium text-white/70">
                      Learn more →
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
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
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <StaggerItem key={step.index}>
                <div className="group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden p-8">
                  <Image
                    src={processImages[Number(step.index) - 1]}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ filter: "blur(1px) saturate(1.1) brightness(0.9)" }}
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm group-hover:bg-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/40" />
                  <div className="relative flex flex-1 flex-col">
                    <div className="flex items-baseline gap-4">
                      <span className="font-display text-4xl font-light text-accent">
                        {step.index}
                      </span>
                      <h3 className="font-display text-2xl font-light text-white/90">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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
          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <StaggerItem key={p.id}>
                <ProjectCard project={p} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <hr className="hairline" />

      {/* CTA */}
      <section className="py-16 md:py-24">
        <Container>
          <div
            className="relative overflow-hidden rounded-sm border-[0.5px] px-6 py-16 text-center shadow-[0_0_30px_-8px_rgba(251,54,64,0.35)] transition-shadow duration-500 hover:shadow-[0_0_50px_-5px_rgba(251,54,64,0.5)] md:px-16 md:py-24"
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
              <Eyebrow>Let&apos;s Create Better Spaces</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Spaces that feel right — not just on day one, but for years to
                come.
              </h2>
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
