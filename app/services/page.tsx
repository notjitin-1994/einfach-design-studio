import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Container, SectionHeading, Button } from "@/components/ui";
import { services } from "@/lib/content";

export const metadata = {
  title: "Services",
  description:
    "Architectural, interior, and strategic design services from Einfach Design Studio — concept development, spatial planning, workplace strategy, and design review.",
  openGraph: {
    title: "Services · Einfach Design Studio",
    description:
      "Architecture, interiors, and the thinking in between. Services that help clients make better decisions from concept to completion.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Mobile: image as full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/commercial-renovation-ernakulam/01.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000f08]/82 via-[#000f08]/58 to-[#000f08]/92" />
        </div>
        <Container className="relative grid items-stretch gap-10 py-20 md:grid-cols-2 md:gap-12 md:py-28">
          <div className="flex flex-col justify-center text-[#e9e0c9] md:text-foreground">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[0.74rem] font-medium uppercase tracking-[0.22em] text-[#e9e0c9]/70 md:text-muted">
                <span className="h-px w-6 bg-accent/70" aria-hidden />
                What We Do
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
                Architecture, interiors &amp; the{" "}
                <span className="italic text-accent">thinking</span> in between.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#e9e0c9]/75 md:text-muted">
                We offer architectural, interior, and strategic design services
                that help clients make better decisions from concept to
                completion.
              </p>
            </Reveal>
          </div>
          {/* Desktop: equal-height image column */}
          <div className="relative hidden min-h-[320px] md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/commercial-renovation-ernakulam/01.png"
              alt="Design process and drafting"
              className="duotone h-full w-full rounded-sm border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          {services.map((s, i) => (
            <Reveal key={s.index}>
              <div className="grid gap-8 border-b border-line py-12 md:grid-cols-12 md:gap-12 md:py-16">
                <div className="md:col-span-1">
                  <span className="font-display text-2xl font-light text-accent">
                    {s.index}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-balance text-3xl font-light md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {s.description}
                  </p>
                  <Link
                    href="/contact"
                    className="link-underline mt-6 inline-block text-sm text-accent"
                  >
                    Enquire about {s.title} →
                  </Link>
                </div>
                <ul className="md:col-span-5 md:col-start-8">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 border-b border-line py-4 text-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="py-24 md:py-32">
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="Not Sure What You Need?"
            title="Start with a conversation."
            intro="Tell us about your project and we’ll help you find the right path forward — no obligation."
          />
          <div className="mt-10 flex justify-center">
            <Button href="/contact">Book a Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
