import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";

export const metadata = buildMetadata(ROUTES.programs);

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="What we run, where we run it, and why."
        lede="Three programs, two communities, one promise: keep a child safe and rigorous long enough to become themselves. We work in Kroo Bay and Susan&rsquo;s Bay, Freetown — through education, shelter, and mentorship."
      />

      <section className="section section--white">
        <div className="container">
          <div style={{ display: "grid", gap: "var(--space-7)" }}>
            <article className="card prog-row">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h3 className="card__title">Educate</h3>
                <p className="card__body">
                  School fees, books, uniforms, transport, and a community library. We follow each child
                  term-by-term, not year-by-year &mdash; and we keep going long after a child stops being a
                  fundraising appeal.
                </p>
                <p className="micro">
                  <strong>23</strong> children promoted in 2024 &nbsp;·&nbsp;
                  <strong>47</strong> books in our library &nbsp;·&nbsp;
                  <strong>1:6</strong> mentor-to-child ratio
                </p>
              </div>
              <Link href="/programs/education" className="btn btn--secondary">See education &rarr;</Link>
            </article>

            <article className="card prog-row">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div>
                <h3 className="card__title">Shelter</h3>
                <p className="card__body">
                  Safe housing for children at risk, with families wherever possible. We build family stability,
                  not orphanages &mdash; kinship care first, group housing only when no kinship option is safe.
                </p>
                <p className="micro">
                  <strong>11</strong> children placed in 2024 &nbsp;·&nbsp;
                  <strong>9 of 11</strong> in kinship care &nbsp;·&nbsp;
                  <strong>0</strong> institutional placements
                </p>
              </div>
              <Link href="/programs/shelter" className="btn btn--secondary">See shelter &rarr;</Link>
            </article>

            <article className="card prog-row">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
              </div>
              <div>
                <h3 className="card__title">Mentor</h3>
                <p className="card__body">
                  A trusted adult, every week, for years. Mentors are local, trained, and stay with a child long
                  enough to matter. The cadence is what works; the relationship is what works.
                </p>
                <p className="micro">
                  <strong>34</strong> active mentors &nbsp;·&nbsp;
                  <strong>3.2 yrs</strong> average pairing &nbsp;·&nbsp;
                  <strong>92%</strong> retention rate
                </p>
              </div>
              <Link href="/programs/mentorship" className="btn btn--secondary">See mentorship &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--wash" aria-labelledby="three-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Three ways to be part of this</p>
            <h2 id="three-title">Funders invest. Volunteers build. Partners amplify.</h2>
          </div>
          <ThreeRolesStrip />
        </div>
      </section>
    </>
  );
}
