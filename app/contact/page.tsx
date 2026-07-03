"use client";

import { useState, type ChangeEvent } from "react";
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

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[+\d\s\-()]{7,20}$/;

type FormValues = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const FIELD_LIMITS: Record<keyof FormValues, number> = {
  name: 100,
  email: 254,
  phone: 20,
  projectType: 50,
  message: 2000,
};

const INITIAL: FormValues = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

function stripControlChars(s: string): string {
  return s.replace(/[\u0000-\u001f\u007f]/g, "");
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const name = stripControlChars(values.name).trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";

  const email = stripControlChars(values.email).trim();
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  const phone = stripControlChars(values.phone).trim();
  const phoneDigits = (phone.match(/\d/g) || []).length;
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!PHONE_RE.test(phone)) errors.phone = "Phone number contains invalid characters.";
  else if (phoneDigits < 7) errors.phone = "Phone number must have at least 7 digits.";

  if (!values.projectType) errors.projectType = "Please select a project type.";
  else if (!projectTypes.includes(values.projectType)) errors.projectType = "Invalid project type.";

  const message = stripControlChars(values.message).trim();
  if (!message) errors.message = "Please tell us about your project.";
  else if (message.length < 10) errors.message = "Please provide at least 10 characters.";

  return errors;
}

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState<FormValues>(INITIAL);
  const [errors, setErrors] = useState<FormErrors>({});

  const update = (field: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const raw = e.target.value;
    const cleaned = stripControlChars(raw).slice(0, FIELD_LIMITS[field]);
    setValues((v) => ({ ...v, [field]: cleaned }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setSent(true);
  };

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

            <div className="mt-10 overflow-hidden rounded-sm border border-line">
              <iframe
                title="Einfach Design Studio location — Dubai, UAE"
                src="https://maps.google.com/maps?q=Dubai,+United+Arab+Emirates&t=&z=11&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-dark"
              />
            </div>

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
                      onClick={() => {
                        setSent(false);
                        setValues(INITIAL);
                        setErrors({});
                      }}
                      className="link-underline mt-8 text-sm text-accent"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        name="name"
                        placeholder="Your name"
                        value={values.name}
                        onChange={update("name")}
                        error={errors.name}
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        value={values.email}
                        onChange={update("email")}
                        error={errors.email}
                      />
                    </div>

                    <Field
                      label="Phone number"
                      name="phone"
                      type="tel"
                      placeholder="+971 XX XXX XXXX"
                      value={values.phone}
                      onChange={update("phone")}
                      error={errors.phone}
                    />

                    <div>
                      <p className="eyebrow mb-3">Project type</p>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((t) => (
                          <label
                            key={t}
                            className={`cursor-pointer rounded-sm border px-4 py-2 text-sm transition-colors ${
                              values.projectType === t
                                ? "border-accent bg-accent text-white"
                                : "border-line text-muted hover:border-accent/50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="projectType"
                              value={t}
                              checked={values.projectType === t}
                              onChange={() => {
                                setValues((v) => ({ ...v, projectType: t }));
                                if (errors.projectType)
                                  setErrors((er) => ({ ...er, projectType: undefined }));
                              }}
                              className="sr-only"
                            />
                            {t}
                          </label>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className="mt-2 text-xs text-accent">{errors.projectType}</p>
                      )}
                    </div>

                    <Field
                      label="Tell us about your project"
                      name="message"
                      textarea
                      placeholder="What are you hoping to achieve? Timeline, location, anything that helps us understand."
                      value={values.message}
                      onChange={update("message")}
                      error={errors.message}
                    />

                    <div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-deep"
                      >
                        Send message
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                      <p className="mt-2 text-xs text-muted">
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
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  textarea?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}) {
  const base =
    `mt-2 w-full rounded-sm border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent ${
      error ? "border-accent" : "border-line"
    }`;
  return (
    <label className="block">
      <span className="eyebrow">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          placeholder={placeholder}
          className={base + " resize-none"}
          value={value}
          onChange={onChange}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={base}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <p className="mt-1.5 text-xs text-accent">{error}</p>}
    </label>
  );
}
