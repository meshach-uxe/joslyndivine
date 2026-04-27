import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, lede, children }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lede && <p className="page-hero__lede">{lede}</p>}
        {children}
      </div>
    </section>
  );
}
