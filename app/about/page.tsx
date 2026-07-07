import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, SectionHeading } from "@/components/ui";
import { BookConsultationButton } from "@/components/book-consultation-button";

export const metadata = {
  title: "About",
  description:
    "Einfach Design Studio is an architecture and interior design practice founded on a better way to design — around people, clarity, and decisions made before construction begins.",
  openGraph: {
    title: "About Einfach Design Studio",
    description:
      "Simplicity isn't where design begins. It's where it ends. Meet the studio behind the work.",
  },
};

const coreValues = [
  {
    title: "Integrity & Responsibility",
    text: "We believe trust is earned through honesty, accountability, and respect for your time, budget, and aspirations.",
  },
  {
    title: "Craft with Purpose",
    text: "We value thoughtful decisions, careful detailing, and quality that stands the test of time.",
  },
  {
    title: "Curiosity",
    text: "We never stop asking questions, exploring possibilities, and learning from every project.",
  },
  {
    title: "Respect",
    text: "We honour people, places, cultures, and the unique story every project carries.",
  },
  {
    title: "Conscious Impact",
    text: "We make responsible choices that create lasting value for our clients, communities, and the environment.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        {/* Oversized faded year mark — graphic device */}
        <span
          aria-hidden
          className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 select-none font-display text-[26vw] font-light leading-none text-foreground/[0.035] md:block md:text-[20vw]"
        >
          2020
        </span>
          {/* Mobile full-bleed background image */}
        <div className="absolute inset-0 md:hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/residence-renovation-ernakulam/03.png"
            alt=""
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(0.35) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/82 via-[#0a0a0a]/58 to-[#0a0a0a]/92" />
        </div>
        <Container className="relative grid items-center gap-12 py-10 md:grid-cols-12 md:py-14">
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
                A Dubai and India-based architecture and interior design practice
                founded on the belief that the best spaces start with clear
                thinking — and decisions made before construction begins.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-[#e9e0c9]/15 pt-6 md:border-line">
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#e9e0c9]/60 md:text-muted">
                    Founded
                  </span>
                  <span className="mt-1 block font-display text-lg">2020</span>
                </div>
                <div className="hidden h-8 w-px bg-[#e9e0c9]/20 sm:block md:bg-line" />
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-[#e9e0c9]/60 md:text-muted">
                    Based in
                  </span>
                  <span className="mt-1 block font-display text-lg">
                    UAE &amp; India
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
                  src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/projects/apartment-interior-ernakulam/01.jpg"
                  alt="Einfach Design Studio project — Ernakulam"
                  className="duotone h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* NAME */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">“Einfach”</p>
            <p className="font-display mt-3 text-xl font-light">
              The German word for <span className="text-accent">simple</span>.
            </p>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-8">
            <p>
              Some names are chosen because they sound good. Ours was chosen
              because it felt true.
            </p>
            <p>
              For us, it represents a moment. The point where complexity fades.
              Where uncertainty becomes clarity. Where everything unnecessary is
              left behind. And what truly matters finally comes into focus.
            </p>
            <p className="text-foreground">
              That&apos;s what our name reminds us of. And that&apos;s what we
              hope every project feels like.
            </p>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* STORY */}
      <section className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our Story" title="Founded on a better way." />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted lg:col-span-7">
            <p>
              Einfach didn&apos;t begin with a business plan. It began with two
              architects who shared a simple belief: Why does everything have to
              be so complicated?
            </p>
            <p>
              Though we came from different personalities and perspectives, we
              were drawn to the same destination — that the best design comes
              from understanding people, not just creating spaces.
            </p>
            <p>
              From a foreseen vision to reality, amidst the chaos of the Middle
              East crisis, we licensed Einfach Design Studio in the UAE to
              create a difference in how design has to be approached.
            </p>
            <p className="text-foreground">
              Today, our purpose remains the same: to simplify complex decisions
              and create thoughtful spaces that quietly make everyday life
              better.
            </p>
            <p>
              Because the best design doesn&apos;t demand attention. It simply
              feels right.
            </p>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* FOUNDERS */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://yzidfofruhqoxujkbvdi.supabase.co/storage/v1/object/public/media/IMG_5715.PNG"
                    alt="Cathrin Yesudas E and Joe V Johnson, co-founders of Einfach Design Studio"
                    loading="lazy"
                    decoding="async"
                    className="duotone h-full w-full object-cover"
                    style={{ transform: "scale(1.2)", transformOrigin: "center center" }}
                  />
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 flex items-center gap-3 text-sm text-muted">
                  <span className="h-px w-6 bg-accent/70" aria-hidden />
                  <span>Cathrin Yesudas E &amp; Joe V Johnson · 2020</span>
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow>The Founders</Eyebrow>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-10 border-t border-line pt-10">
                  <p className="font-display pb-1 text-[clamp(2rem,4.2vw,3.4rem)] font-light leading-[1.15] text-balance">
                    <span className="italic">Cathrin</span> Yesudas E
                    <span className="text-muted"> &amp; </span>
                    <span className="italic">Joe V</span> Johnson
                  </p>
                  <p className="mt-4 text-[0.78rem] uppercase tracking-[0.22em] text-muted">
                    Co-Founders
                  </p>

                  <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed text-muted">
                    <p>
                      Founded in 2020, Einfach is the practice of Cathrin
                      Yesudas E and Joe V Johnson — an architecture and interior
                      design studio based in the UAE and India, working across
                      residential, hospitality, and commercial projects.
                    </p>
                    <p>
                      Joe leads the studio&apos;s architectural and spatial
                      work. Cathrin leads its interiors and material direction.
                      Together they work as a single practice — one name on the
                      door, one set of drawings, one conversation with the
                      client.
                    </p>
                    <p className="text-foreground">
                      The studio&apos;s name is the brief:&nbsp;
                      <span className="italic">einfach</span> — German for
                      <span className="text-accent"> simple</span> — the
                      discipline of removing until what remains is necessary.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* VISION & MISSION */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2">
            <Reveal>
              <div className="h-full bg-background p-10 md:p-12">
                <span className="font-display text-4xl font-light text-accent">
                  Vision
                </span>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  A world where thoughtful design makes everyday life simpler,
                  more meaningful, and more connected to the people it serves.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="h-full bg-background p-10 md:p-12">
                <span className="font-display text-4xl font-light text-accent">
                  Mission
                </span>
                <p className="mt-6 text-lg leading-relaxed text-muted">
                  To guide better design decisions through clarity,
                  understanding, and intention.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <hr className="hairline" />

      {/* CORE VALUES */}
      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Core Values"
            title="What guides our work."
            align="center"
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-background p-8 md:p-10">
                <h3 className="font-display text-xl font-light text-foreground">
                  {v.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {v.text}
                </p>
              </div>
            ))}
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
              <Eyebrow>Work With Us</Eyebrow>
              <h2 className="font-display mx-auto mt-6 max-w-3xl text-balance text-[clamp(2rem,5vw,4rem)] font-light leading-[1.05]">
                Let&apos;s design something that{" "}
                <span className="italic text-accent">lasts.</span>
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
