import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";
import { ServicesAccordion } from "@/components/services-accordion";
import { getServices } from "@/lib/supabase/queries";

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

export const revalidate = 60;

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Mobile: image as full-bleed background */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/commercial-renovation-ernakulam/03.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/82 via-[#0a0a0a]/58 to-[#0a0a0a]/92" />
        </div>
        <Container className="relative grid items-stretch gap-10 py-14 md:grid-cols-2 md:gap-12 md:py-20">
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
          <div className="relative hidden overflow-hidden md:block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/commercial-renovation-ernakulam/03.png"
              alt="Commercial Renovation, Ernakulam — biophilic framework detail"
              className="duotone absolute inset-0 rounded-sm border border-line object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="py-8 md:py-11">
        <Container>
          <ServicesAccordion services={services} />
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
              <Eyebrow>Not Sure What You Need?</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Start with a{" "}
                <span className="italic text-accent">conversation.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
                Tell us about your project and we&apos;ll help you find the
                right path forward — no obligation.
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
