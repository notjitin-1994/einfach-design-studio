"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { useConsultation } from "./consultation-context";

const projectTypes = [
  "New build",
  "Renovation",
  "Workplace",
  "Commercial",
  "Design review",
  "Other",
];

const EASE = [0.23, 1, 0.32, 1] as const;

const EMAIL_RE = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
const PHONE_RE = /^[+\d\s\-()]{7,20}$/;

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  description: "",
};

const FIELD_LIMITS: Record<keyof FormState, number> = {
  name: 100,
  email: 254,
  phone: 20,
  projectType: 50,
  description: 2000,
};

function stripControlChars(s: string): string {
  // eslint-disable-next-line no-control-regex
  return s.replace(/[\u0000-\u001f\u007f]/g, "");
}

function trimToLimit(s: string, limit: number): string {
  return s.slice(0, limit);
}

function validate(values: FormState): FieldErrors {
  const errors: FieldErrors = {};

  const name = stripControlChars(values.name).trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Name must be at least 2 characters.";
  else if (name.length > FIELD_LIMITS.name) errors.name = "Name is too long.";

  const email = stripControlChars(values.email).trim();
  if (!email) errors.email = "Please enter your email.";
  else if (email.length > FIELD_LIMITS.email) errors.email = "Email is too long.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  const phone = stripControlChars(values.phone).trim();
  const phoneDigits = (phone.match(/\d/g) || []).length;
  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!PHONE_RE.test(phone)) errors.phone = "Phone number contains invalid characters.";
  else if (phoneDigits < 7) errors.phone = "Phone number must have at least 7 digits.";
  else if (phoneDigits > 15) errors.phone = "Phone number is too long.";

  if (!values.projectType) errors.projectType = "Please select a project type.";
  else if (!projectTypes.includes(values.projectType)) errors.projectType = "Invalid project type.";

  const description = stripControlChars(values.description).trim();
  if (!description) errors.description = "Please tell us about your project.";
  else if (description.length < 10) errors.description = "Please provide at least 10 characters.";
  else if (description.length > FIELD_LIMITS.description) errors.description = "Description is too long.";

  return errors;
}

export function ConsultationModal() {
  const { isOpen, close } = useConsultation();
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && Boolean(prefersReduced);

  const [values, setValues] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setValues(INITIAL);
        setErrors({});
        setSubmitting(false);
        setSent(false);
      }, 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();
    const t = setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      document.body.style.overflow = original;
      lenis?.start();
      clearTimeout(t);
    };
  }, [isOpen]);

  // ESC to close + focus trap
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const update = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const raw = e.target.value;
    const cleaned = trimToLimit(stripControlChars(raw), FIELD_LIMITS[field]);
    setValues((v) => ({ ...v, [field]: cleaned }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validate(values);
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          projectType: values.projectType,
          description: values.description.trim(),
        }),
      });
      if (!res.ok) throw new Error("submit failed");
      setSent(true);
    } catch {
      setErrors({ description: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="consultation-modal"
          className="fixed inset-0 z-[100] flex items-center justify-center overscroll-contain px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.1 : 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close consultation form"
            onClick={close}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: reduce ? 0.15 : 0.3, ease: EASE }}
            className="relative z-10 w-full max-w-2xl rounded-sm border border-line bg-background shadow-2xl"
          >
            {sent ? (
              <div className="flex min-h-[24rem] flex-1 flex-col items-center justify-center p-8 text-center">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent text-accent">
                  <Check className="h-6 w-6" />
                </span>
                <h2 id={titleId} className="font-display mt-6 text-3xl font-light">
                  Thank you.
                </h2>
                <p className="mt-3 max-w-md text-muted">
                  Your consultation request has reached us. We&apos;ll be in
                  touch within two business days.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="link-underline mt-8 text-sm text-accent"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-start justify-between border-b border-line p-5 md:p-6">
                  <div>
                    <span className="eyebrow">Book a consultation</span>
                    <h2
                      id={titleId}
                      className="font-display mt-2 text-balance text-xl font-light leading-tight md:text-2xl"
                    >
                      Tell us about your{" "}
                      <span className="italic text-accent">project.</span>
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={close}
                    aria-label="Close"
                    className="ml-4 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} noValidate className="grid gap-4 p-5 md:grid-cols-2 md:gap-5 md:p-6">
                  <div className="md:col-span-1">
                    <label htmlFor="consult-name" className="eyebrow block">
                      Full name
                    </label>
                    <input
                      ref={firstFieldRef}
                      id="consult-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      maxLength={FIELD_LIMITS.name}
                      value={values.name}
                      onChange={update("name")}
                      placeholder="Your name"
                      className={`mt-2 w-full rounded-sm border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent ${
                        errors.name ? "border-accent" : "border-line"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-accent">{errors.name}</p>
                    )}
                  </div>

                  <div className="md:col-span-1">
                    <label htmlFor="consult-email" className="eyebrow block">
                      Email
                    </label>
                    <input
                      id="consult-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      maxLength={FIELD_LIMITS.email}
                      value={values.email}
                      onChange={update("email")}
                      placeholder="you@email.com"
                      className={`mt-2 w-full rounded-sm border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent ${
                        errors.email ? "border-accent" : "border-line"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-accent">{errors.email}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="consult-phone" className="eyebrow block">
                      Phone number
                    </label>
                    <input
                      id="consult-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      maxLength={FIELD_LIMITS.phone}
                      value={values.phone}
                      onChange={update("phone")}
                      placeholder="+971 XX XXX XXXX"
                      className={`mt-2 w-full rounded-sm border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent ${
                        errors.phone ? "border-accent" : "border-line"
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-accent">{errors.phone}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
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

                  <div className="md:col-span-2">
                    <label htmlFor="consult-desc" className="eyebrow block">
                      Tell us about your project
                    </label>
                    <textarea
                      id="consult-desc"
                      name="description"
                      rows={3}
                      maxLength={FIELD_LIMITS.description}
                      value={values.description}
                      onChange={update("description")}
                      placeholder="What are you hoping to achieve? Timeline, location, anything that helps us understand."
                      className={`mt-2 w-full resize-none rounded-sm border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 outline-none transition-colors focus:border-accent ${
                        errors.description ? "border-accent" : "border-line"
                      }`}
                    />
                    {errors.description && (
                      <p className="mt-1.5 text-xs text-accent">{errors.description}</p>
                    )}
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-accent-deep disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : "Request consultation"}
                      {!submitting && (
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </button>
                    <p className="mt-2 text-xs text-muted">
                      We typically reply within two business days.
                    </p>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
