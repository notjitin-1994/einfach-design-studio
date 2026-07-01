import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with Einfach Design Studio. Tell us about your project — new build, renovation, workplace, or commercial. Dubai, UAE.",
  openGraph: {
    title: "Contact · Einfach Design Studio",
    description:
      "Every successful project begins with a conversation. Reach out about your new build, renovation, workplace, or commercial project.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
