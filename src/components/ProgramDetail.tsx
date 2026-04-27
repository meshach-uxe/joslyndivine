import Link from "next/link";
import type { ReactNode } from "react";

export type ProgramStat = { num: string; label: string; source: string };
export type ProgramStep = { title: string; body: string };

type ProgramDetailProps = {
  eyebrow: string;
  title: string;
  lede: string;
  what: { heading: string; body: ReactNode };
  steps: ProgramStep[];
  stepsHeading?: string;
  stepsLede?: string;
  outcomes: ProgramStat[];
  story?: ReactNode;
};

export function ProgramDetail({
  eyebrow,
  title,
  lede,
  what,
  steps,
  stepsHeading = "How it works",
  stepsLede,
  outcomes,
  story,
}: ProgramDetailProps) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ padding: "var(--space-5) var(--space-5)", fontSize: 14, color: "var(--color-slate-500)" }}>
        <Link href="/">Home</Link> &middot; <Link href="/programs">Our work</Link> &middot;{" "}
        <span aria-current="page" style={{ color: "var(--color-slate-900)" }}>{eyebrow}</span>
      </nav>

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__lede">{lede}</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: 760 }}>
          <p className="eyebrow">What it is</p>
          <h2>{what.heading}</h2>
          <div className="prose">{what.body}</div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">How it works</p>
            <h2>{stepsHeading}</h2>
            {stepsLede && <p>{stepsLede}</p>}
          </div>
          <ol style={{ display: "grid", gap: "var(--space-4)", listStyle: "none", padding: 0, counterReset: "step" }}>
            {steps.map((step, i) => (
              <li key={i} className="card" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-5)", alignItems: "start" }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--color-amber)", lineHeight: 1, minWidth: 48 }}>{i + 1}</span>
                <div>
                  <h3 className="h3" style={{ marginTop: 0 }}>{step.title}</h3>
                  <p style={{ margin: 0, color: "var(--color-slate-700)" }}>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: 960 }}>
          <p className="eyebrow">Outcomes</p>
          <h2>Outcomes, not inputs.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-7)", marginTop: "var(--space-6)" }}>
            {outcomes.map((s, i) => (
              <div key={i} className="stat">
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__source">{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {story}

      <section className="section section--wash">
        <div className="container">
          <div className="section__head" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            <p className="eyebrow">Give</p>
            <h2>Keep this program running.</h2>
            <p style={{ marginLeft: "auto", marginRight: "auto" }}>
              Monthly partners pay for predictability. The line items that decide whether a child goes to school on
              Wednesday &mdash; that&rsquo;s what your gift covers.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/donate" className="btn btn--primary btn--lg">Become a monthly partner</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function StoriesEmpty() {
  return (
    <section className="section section--wash">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">From this program</p>
          <h2>Stories coming soon.</h2>
          <p>We publish stories with consent, and only when the family has signed the Guardian Consent Form. New stories from this program will appear here as they are ready.</p>
        </div>
        <Link href="/stories" className="btn btn--secondary">Browse all stories &rarr;</Link>
      </div>
    </section>
  );
}
