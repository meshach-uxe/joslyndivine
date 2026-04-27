import type { Metadata } from "next";

export const SITE = {
  name: "Joslyn Divine Foundation",
  shortName: "JDF",
  url: "https://joslyndivine.com",
  twitter: "@joslyndivine",
  defaultDescription:
    "A Freetown-based charity supporting children in Kroo Bay and Susan's Bay through education, shelter, and mentorship.",
} as const;

type RouteMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
};

export function buildMetadata(r: RouteMetaInput): Metadata {
  const url = `${SITE.url}${r.path === "/" ? "" : r.path}`;
  const ogImage = `${SITE.url}/og/${r.ogImage ?? "og-default.png"}`;
  const title = `${r.title} — ${SITE.name}`;
  return {
    title,
    description: r.description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title,
      description: r.description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: r.title }],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: r.description,
      images: [ogImage],
      site: SITE.twitter,
    },
    robots: r.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
  };
}
