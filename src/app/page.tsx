import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";
import { DonatePanelPreview } from "@/components/DonatePanelPreview";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/metadata";

export const metadata = buildMetadata(ROUTES.home);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container hero__inner">
          <div>
            <p className="eyebrow hero__eyebrow reveal" style={{ ["--reveal-delay" as string]: "60ms" }}>
              Freetown, Sierra Leone
            </p>
            <h1 className="hero__title reveal" id="hero-title" style={{ ["--reveal-delay" as string]: "120ms" }}>
              Beyond survival.
              <br />
              Built for leadership.
            </h1>
            <p className="hero__sub reveal" style={{ ["--reveal-delay" as string]: "240ms" }}>
              A leadership institute for the children of Kroo Bay and Susan&rsquo;s Bay &mdash; through education,
              shelter, mentorship, and the slow work of keeping a child safe long enough to become themselves.
            </p>
            <div className="hero__ctas reveal" style={{ ["--reveal-delay" as string]: "340ms" }}>
              <Link href="/donate" className="btn btn--primary btn--lg">Become a monthly partner</Link>
              <Link href="/about" className="btn btn--inverse btn--lg">Read our story</Link>
            </div>
            <p className="hero__caption reveal" style={{ ["--reveal-delay" as string]: "440ms" }}>
              Vision 2019. Programs 2022. Sierra Leone NGO + US 501(c)(3).
            </p>
          </div>
          <div className="hero__portrait reveal" aria-hidden="true" style={{ ["--reveal-delay" as string]: "180ms" }} />
        </div>
      </section>

      {/* THREE ROLES */}
      <section className="section section--wash" aria-labelledby="three-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Three ways to be part of this</p>
            <h2 id="three-title">Funders invest. Volunteers build. Partners amplify.</h2>
            <p>
              Every relationship with the foundation falls into one of three lanes. Pick the one that fits, and
              we&rsquo;ll meet you on your terms.
            </p>
          </div>
          <ThreeRolesStrip />
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="section section--white" aria-labelledby="story-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Story</p>
            <h2 id="story-title">From the children of Kroo Bay.</h2>
            <p>Real names, real photographs, with consent on file. We never use a child&rsquo;s image to sell despair.</p>
          </div>
          <article className="story">
            <div
              className="story__image"
              role="img"
              aria-label="Aminata, age 12, reading at the JDF community library in Kroo Bay."
            />
            <div className="story__copy">
              <p className="eyebrow">Education</p>
              <h3 className="story__name">Aminata</h3>
              <p className="story__meta">Class 6 · 6 minute read · April 2026</p>
              <p className="story__quote">
                &ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really me.&rdquo;
              </p>
              <p className="story__body">
                Aminata joined the JDF education program in 2023. By the end of her second year she had read 47 books
                from the community library and was promoted two grades ahead of her age cohort. She is now studying for
                her secondary school entrance exam.
              </p>
              <Link href="/stories/aminata" className="btn btn--secondary">Read Aminata&rsquo;s story</Link>
            </div>
          </article>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section section--wash" aria-labelledby="programs-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">What we do</p>
            <h2 id="programs-title">Three programs, one promise.</h2>
            <p>
              We run education, shelter, and mentorship in Freetown &mdash; in Kroo Bay and Susan&rsquo;s Bay, the
              communities most other organisations leave behind.
            </p>
          </div>
          <div className="programs">
            <article className="prog">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="prog__title">Educate</h3>
              <p className="prog__body">
                School fees, books, uniforms, transport, and a community library. We follow each child term-by-term, not year-by-year.
              </p>
              <Link href="/programs/education" className="prog__cta">See education &rarr;</Link>
            </article>
            <article className="prog">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="prog__title">Shelter</h3>
              <p className="prog__body">
                Safe housing for children at risk, with families wherever possible. We build family stability, not orphanages.
              </p>
              <Link href="/programs/shelter" className="prog__cta">See shelter &rarr;</Link>
            </article>
            <article className="prog">
              <div className="prog__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
              </div>
              <h3 className="prog__title">Mentor</h3>
              <p className="prog__body">
                A trusted adult, every week. Mentors are local, trained, and stay with a child for years &mdash; not weeks.
              </p>
              <Link href="/programs/mentorship" className="prog__cta">See mentorship &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY (DARK) */}
      <section className="section section--dark" aria-labelledby="acct-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Where the money goes</p>
            <h2 id="acct-title">Radical accountability, on a single page.</h2>
            <p>We publish the numbers, the channels, and the things we will not do. No fine print, no PDFs hidden three clicks deep.</p>
          </div>
          <div className="acct__row">
            <div className="stat">
              <div className="stat__num">100%</div>
              <div className="stat__label">of donor gifts directed to programs after processor fees</div>
              <div className="stat__source">Source: Accountability page, Q1 2026.</div>
            </div>
            <div className="stat">
              <div className="stat__num">23</div>
              <div className="stat__label">children promoted to the next grade in 2024</div>
              <div className="stat__source">Source: JDF Program Records, 2024.</div>
            </div>
          </div>
          <div className="acct__cta">
            <Link href="/accountability" className="btn btn--inverse btn--lg">Read the accountability page &rarr;</Link>
          </div>
        </div>
      </section>

      {/* DONATE PANEL PREVIEW */}
      <section className="section section--wash" aria-labelledby="give-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Give</p>
            <h2 id="give-title">Start your monthly partnership.</h2>
            <p>Set the cadence here. Confirm payment on the next page. You can pause or cancel any time, no questions.</p>
          </div>
          <DonatePanelPreview />
        </div>
      </section>

      {/* schema.org Organization JSON-LD (home only) */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NGO",
          name: SITE.name,
          alternateName: "JDF",
          url: `${SITE.url}/`,
          logo: `${SITE.url}/brand/logo-teal.svg`,
          image: `${SITE.url}/og/og-default.png`,
          description: SITE.defaultDescription,
          foundingDate: "2019",
          founder: {
            "@type": "Person",
            name: "Mrs. Ellaline V. Wright-Hook",
            jobTitle: "Founder & Chair",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "Freetown",
            addressCountry: "SL",
          },
          areaServed: [
            { "@type": "Place", name: "Kroo Bay, Freetown" },
            { "@type": "Place", name: "Susan's Bay, Freetown" },
          ],
          knowsAbout: ["Education", "Shelter", "Mentorship", "Kinship care", "Child safeguarding"],
          sameAs: [
            "https://www.instagram.com/joslyndivine",
            "https://www.linkedin.com/company/joslyndivine",
            "https://www.youtube.com/@joslyndivine",
          ],
          contactPoint: [
            { "@type": "ContactPoint", contactType: "general enquiries", email: "hello@joslyndivine.com" },
            { "@type": "ContactPoint", contactType: "partnerships", email: "partnerships@joslyndivine.com" },
            { "@type": "ContactPoint", contactType: "founder", email: "founder@joslyndivine.com" },
          ],
        }}
      />
    </>
  );
}
