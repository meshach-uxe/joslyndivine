import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@/styles/globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Skiplink } from "@/components/Skiplink";
import { Plausible } from "@/components/Plausible";
import { SITE } from "@/lib/metadata";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — Beyond survival. Built for leadership.`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.defaultDescription,
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  formatDetection: { telephone: false },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_GB",
    url: SITE.url,
  },
  twitter: { card: "summary_large_image", site: SITE.twitter },
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Skiplink />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <Plausible />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
