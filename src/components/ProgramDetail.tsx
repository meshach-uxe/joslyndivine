import Link from "next/link";
import type { ReactNode } from "react";
import { PageBreadcrumb, PageHero } from "./PageHero";

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
    <div className="interior interior--program-detail">
      <PageBreadcrumb links={[{ href: "/", label: "Home" }, { href: "/programs", label: "Our work" }]} current={eyebrow} />

      <PageHero eyebrow={eyebrow} title={title} lede={lede} />

      <section className="section section--white">
        <div className="container chapter-columns">
          <div className="section__head">
            <p className="eyebrow">What it is</p>
            <h2>{what.heading}</h2>
          </div>
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
          <ol className="program-steps" role="list">
            {steps.map((step, i) => (
              <li key={step.title} className="program-step">
                <span className="program-step__number" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Outcomes</p>
            <h2>Outcomes, not inputs.</h2>
          </div>
          <div className="chapter-stats">
            {outcomes.map((s) => (
              <div key={s.label} className="stat">
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
                <div className="stat__source">{s.source}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {story}

      <section className="section section--dark">
        <div className="container chapter-action">
          <div className="section__head">
            <p className="eyebrow">Give</p>
            <h2>Keep this program running.</h2>
            <p>
              Monthly partners pay for predictability. The line items that decide whether a child goes to school on
              Wednesday &mdash; that&rsquo;s what your gift covers.
            </p>
          </div>
          <Link href="/donate" className="btn btn--primary btn--lg">Become a monthly partner</Link>
        </div>
      </section>
    </div>
  );
}

export function StoriesEmpty() {
  return (
    <section className="section section--white">
      <div className="container chapter-action">
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
