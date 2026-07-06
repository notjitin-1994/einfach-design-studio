import Link from "next/link";
import { nav } from "@/lib/content";
import { Logo } from "./logo";
import { Container } from "./ui";

const socials = ["Instagram", "LinkedIn", "Behance", "Pinterest"];

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Einfach Design Studio — architecture and interiors designed around
            the people who use them. Confident decisions, before construction
            begins.
          </p>
          <p className="mt-6 text-sm text-muted">
            UAE &amp; India
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Connect</p>
          <ul className="mt-5 space-y-3">
            {socials.map((s) => (
              <li key={s}>
                <Link
                  href="#"
                  className="link-underline text-sm text-foreground/80 hover:text-foreground"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@einfachdesignstudio.com"
            className="link-underline mt-6 inline-block text-sm text-accent"
          >
            hello@einfachdesignstudio.com
          </a>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Einfach Design Studio. All rights reserved.</p>
          <p>einfachdesignstudio.com</p>
        </Container>
      </div>
    </footer>
  );
}
