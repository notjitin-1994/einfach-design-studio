import type { Metadata, Viewport } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ScrollProgress } from "@/components/scroll-progress";
import { ThemeColorMeta } from "@/components/theme-color";
import { ConsultationProvider } from "@/components/consultation-context";
import { ConsultationModal } from "@/components/consultation-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const siteUrl = "https://einfachdesignstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Einfach Design Studio — Architecture & Interior Design",
    template: "%s · Einfach Design Studio",
  },
  description:
    "Einfach Design Studio creates architecture and interiors that are functional, timeless, and centred around the people who use them. Dubai, UAE.",
  keywords: [
    "architecture studio",
    "interior design",
    "workplace strategy",
    "spatial branding",
    "Dubai architects",
    "Einfach Design Studio",
  ],
  authors: [{ name: "Einfach Design Studio" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Einfach Design Studio",
    description:
      "Architecture and interiors designed around people. Confident design decisions, before construction begins.",
    siteName: "Einfach Design Studio",
  },
  icons: {
    icon: [{ url: "/einfach-monogram.png", type: "image/png" }],
    apple: [{ url: "/einfach-monogram.png" }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e9e0c9" },
    { media: "(prefers-color-scheme: dark)", color: "#000f08" },
  ],
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeColorMeta />
          <SmoothScroll>
            <ConsultationProvider>
              <ScrollProgress />
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <SiteFooter />
              <ConsultationModal />
            </ConsultationProvider>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
