import { Reveal } from "@/components/reveal";
import { Container, SectionHeading, Button } from "@/components/ui";

export const metadata = {
  title: "About",
  description:
    "Einfach Design Studio is a Dubai-based architecture and interior design practice founded on a better way to design — around people, clarity, and decisions made before construction begins.",
  openGraph: {
    title: "About Einfach Design Studio",
    description:
      "Simplicity isn’t where design begins. It’s where it ends. Meet the studio behind the work.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Oversized faded year mark — graphic device */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26vw] font-light leading-none text-foreground/[0.035] md:block md:text-[20vw]"
        >
          2026
        </span>
        {/* Mobile full-bleed background image */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/apartment-interior-dubai/04.png"
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000f08]/82 via-[#000f08]/58 to-[#000f08]/92" />
        </div>
        <Container className="relative grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="text-[#e9e0c9] md:col-span-7 md:text-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-[#e9e0c9]/70 md:text-muted">
                <span className="h-px w-6 bg-accent" aria-hidden />
                About the Studio
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
                Simplicity has a{" "}
                <span className="italic text-accent">process.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[#e9e0c9]/80 md:text-muted">
                A Dubai-based architecture and interior design practice founded
                on the belief that the best spaces start with clear thinking —
                and decisions made before construction begins.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-[#e9e0c9]/15 pt-6 md:border-line">
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#e9e0c9]/60 md:text-muted">
                    Founded
                  </span>
                  <span className="mt-1 block font-display text-lg">2026</span>
                </div>
                <div className="hidden h-8 w-px bg-[#e9e0c9]/20 sm:block md:bg-line" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#e9e0c9]/60 md:text-muted">
                    Based in
                  </span>
                  <span className="mt-1 block font-display text-lg">
                    Dubai, UAE
                  </span>
                </div>
                <div className="hidden h-8 w-px bg-[#e9e0c9]/20 sm:block md:bg-line" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#e9e0c9]/60 md:text-muted">
                    Practice
                  </span>
                  <span className="mt-1 block font-display text-lg">
                    Architecture &amp; Interiors
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="hidden md:col-span-5 md:block">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/apartment-interior-dubai/04.png"
                  alt="Architectural interior detail"
                  className="duotone h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000f08]/50 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* STATEMENT */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">“Einfach”</p>
            <p className="font-display mt-3 text-xl font-light">
              The German word for <span className="text-accent">simple</span>.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-8">
            <p>
              For us, simplicity isn&apos;t where design begins. It&apos;s where
              it ends. It is the result of understanding people, asking the
              right questions, exploring possibilities, and refining every
              decision until only what truly matters remains.
            </p>
            <p>
              We believe the best spaces don&apos;t compete for attention. They
              quietly support everyday life through thoughtful planning,
              meaningful decisions, and enduring quality.
            </p>
            <p className="text-foreground">
              That&apos;s the standard we bring to every project.
            </p>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* STORY */}
      <section className="py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Story" title="Founded on a better way." />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7">
            <p>
              Einfach Design Studio was founded by two architects brought
              together by a shared belief that good design should solve problems
              before it creates statements.
            </p>
            <p>
              Too often, projects become driven by trends, assumptions, or
              decisions made too late — when changes become costly and
              opportunities have already been lost.
            </p>
            <p className="text-foreground">We believed there was a better way.</p>
            <p>
              One where every project begins with understanding. Where
              architecture and interiors are considered as one complete
              experience. Where clients are guided with clarity from the very
              beginning, allowing better decisions to be made before
              construction starts.
            </p>
            <p>
              Because great design isn&apos;t remembered for how much was added.
              It&apos;s remembered for how naturally everything works together.
            </p>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* VISION & MISSION */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
            <Reveal>
              <div className="h-full bg-background p-10 md:p-12">
                <span className="font-display text-4xl font-light text-accent">
                  Vision
                </span>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  To create architecture and interiors that improve the way
                  people live, work, and experience space through thoughtful,
                  enduring design.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full bg-background p-10 md:p-12">
                <span className="font-display text-4xl font-light text-accent">
                  Mission
                </span>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  To guide clients through the design process with insight,
                  collaboration, and carefully considered solutions that create
                  lasting value long before construction begins.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Work With Us"
            title="Let&apos;s design something that lasts."
          />
          <div className="mt-10 flex justify-center">
            <Button href="/contact">Book a Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
