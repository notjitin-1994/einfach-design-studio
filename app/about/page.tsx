import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, SectionHeading, Button } from "@/components/ui";

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
        <Container className="py-20 md:py-28">
          <Reveal>
            <Eyebrow>About the Studio</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
              Simplicity has a{" "}
              <span className="italic text-accent">process.</span>
            </h1>
          </Reveal>
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
