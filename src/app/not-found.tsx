import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found — Joslyn Divine Foundation",
  description: "The page you were looking for isn't here. Try one of these instead.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 680, margin: "0 auto" }}>
          <span className="micro" style={{ display: "inline-block", padding: "var(--space-2) var(--space-4)", background: "var(--color-amber-soft)", color: "var(--color-amber-dk)", borderRadius: "var(--radius-full)", letterSpacing: ".16em", textTransform: "uppercase", fontWeight: 700, marginBottom: "var(--space-5)" }}>
            404 · page not found
          </span>
          <h1>This page doesn&rsquo;t exist.</h1>
          <p className="page-hero__lede" style={{ marginLeft: "auto", marginRight: "auto" }}>
            It might have moved, been renamed, or never been here. The four pages below are where most people are heading &mdash; pick the one that fits.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap", marginTop: "var(--space-6)" }}>
            <Link href="/" className="btn btn--primary btn--lg">Back to the home page</Link>
            <Link href="/programs" className="btn btn--ghost btn--lg">See our work</Link>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__head" style={{ textAlign: "center", margin: "0 auto var(--space-7)" }}>
            <p className="eyebrow">Where most people are going</p>
            <h2>Try one of these.</h2>
            <p>The four pages people land on most often.</p>
          </div>
          <div className="story-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: 880, margin: "0 auto" }}>
            <Link href="/donate" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="card__title">Donate</h3>
              <p className="micro">/donate &rarr;</p>
            </Link>
            <Link href="/stories" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="card__title">Stories</h3>
              <p className="micro">/stories &rarr;</p>
            </Link>
            <Link href="/get-involved" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="card__title">Get involved</h3>
              <p className="micro">/get-involved &rarr;</p>
            </Link>
            <Link href="/accountability" className="card" style={{ textDecoration: "none", color: "inherit" }}>
              <h3 className="card__title">Accountability</h3>
              <p className="micro">/accountability &rarr;</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark" style={{ textAlign: "center", padding: "var(--space-7) 0" }}>
        <div className="container">
          <p>
            Did you follow a link to get here?{" "}
            <a href="mailto:hello@joslyndivine.com?subject=Broken%20link%20on%20joslyndivine.com" style={{ color: "var(--color-amber)" }}>
              Let us know
            </a>{" "}
            and we&rsquo;ll fix it.
          </p>
        </div>
      </section>
    </>
  );
}
