import Link from "next/link";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/content";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-edge", className)}>{children}</div>;
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-2", className)}>
      <span className="h-px w-6 bg-accent/70" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display mt-5 text-balance text-[clamp(1.9rem,4.2vw,3.4rem)] leading-[1.05] font-light">
        {title}
      </h2>
      {intro && (
        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href">;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  const styles = cn(
    "group inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300",
    variant === "primary" &&
      "bg-accent text-white hover:bg-accent-deep shadow-[0_8px_30px_-12px_rgba(251,54,64,0.6)]",
    variant === "ghost" &&
      "border border-line bg-foreground/10 text-foreground backdrop-blur-md hover:border-accent hover:text-accent hover:shadow-[0_0_0_1px_#fb3640,0_0_28px_-6px_rgba(251,54,64,0.65)]",
    className,
  );
  if (!href) {
    return (
      <button className={styles} {...(rest as object)}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={styles} {...rest}>
      {children}
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block focus-visible:outline-none"
      aria-label={`${project.title}, ${project.category}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className="duotone object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
        <div className="absolute left-5 top-5">
          <span className="rounded-full border border-white/30 bg-black/25 px-3 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5 text-white">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-light">{project.title}</h3>
              <p className="mt-1 text-xs text-white/75">
                {project.location} · {project.year}
              </p>
            </div>
            <span className="translate-y-2 text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              ↗
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
