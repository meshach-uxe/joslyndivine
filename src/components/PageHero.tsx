import Link from "next/link";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
  tone?: "forest" | "orange" | "cream";
};

export function PageHero({ eyebrow, title, lede, children, tone = "forest" }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero--chapter page-hero--${tone}`}>
      <div className="container">
        {eyebrow && <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}

export function PageBreadcrumb({ links, current }: {
  links: { href: string; label: string }[];
  current: string;
}) {
  return (
    <nav className="page-breadcrumb" aria-label="Breadcrumb">
      <ol className="container">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>{label}</Link>
            <span aria-hidden="true">&middot;</span>
          </li>
        ))}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  );
}
