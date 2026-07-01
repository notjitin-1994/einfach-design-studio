import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of residential, commercial, and workplace projects by Einfach Design Studio — spaces shaped around people, designed with purpose.",
  openGraph: {
    title: "Projects · Einfach Design Studio",
    description:
      "Residential, commercial, and workplace work from our Dubai studio. Every project starts with understanding and ends with clarity.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
