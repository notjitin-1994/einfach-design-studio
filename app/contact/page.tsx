"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow } from "@/components/ui";

const projectTypes = [
  "New build",
  "Renovation",
  "Workplace",
  "Commercial",
  "Design review",
  "Other",
];

const contactDetails = [
  { icon: Mail, label: "Email", value: "hello@einfachdesignstudio.com", href: "mailto:hello@einfachdesignstudio.com" },
  { icon: Phone, label: "Phone", value: "+971 XX XXX XXXX", href: "tel:+971000000000" },
  { icon: MapPin, label: "Location", value: "Dubai, United Arab Emirates", href: undefined },
];

const socials = ["Instagram", "LinkedIn", "Behance", "Pinterest"];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-line">
        <Container className="py-20 md:py-28">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-display mt-7 max-w-4xl text-balance text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.02]">
            Let&apos;s start the{" "}
            <span className="italic text-accent">conversation.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            Every successful project begins with a conversation. Whether you’re
            planning a new build, renovating, or seeking an independent design
            opinion, we&apos;d love to hear from you.
          </p>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12">
          {/* Details */}
          <div className="lg:col-span-4">
            <p className="eyebrow">Direct</p>
            <ul className="mt-6 space-y-7">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="eyebrow">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="link-underline mt-1 inline-block text-base"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 text-base">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-12">Follow our journey</p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline text-sm text-muted hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <Reveal>
              <div className="rounded-sm border border-line p-6 md:p-10">
                {sent ? (
                  <div className="flex min-h-[24rem] flex-col items-center justify-center text-center">
                    <span className="font-display text-6xl font-light text-accent">✓</span>
                    <h2 className="font-display mt-6 text-3xl font-light">Thank you.</h2>
                    <p className="mt-3 max-w-md text-muted">
                      Your message has reached us. We&apos;ll be in touch within
                      two business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="link-underline mt-8 text-sm text-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="grid gap-8"
                  >
                    <div className="grid gap-8 sm:grid-cols-2">
                      <Field label="Full name" name="name" placeholder="Your name" />
                      <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                    </div>

                    <div>
                      <p className="eyebrow mb-3">Project type</p>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((t) => (
                          <label
                            key={t}
                            className="cursor-pointer rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors has-[:checked]:border-accent has-[:checked]:bg-accent has-[:checked]:text-white hover:border-accent/50"
                          >
                            <input type="radio" name="projectType" value={t} className="sr-only" />
                            {t}
                          </label>
                        ))}
                      </div>
                    </div>

                    <Field
                      label="Tell us about your project"
                      name="message"
                      textarea
                      placeholder="What are you hoping to achieve? Timeline, location, anything that helps us understand."
                    />

                    <div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-deep"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <p className="mt-4 text-xs text-muted">
                        We typically reply within two business days.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  const base =
    "mt-2 w-full rounded-sm border border-line bg-surface px-4 py-3 text-base text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent";
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className={base + " resize-none"}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={base}
        />
      )}
    </label>
  );
}
