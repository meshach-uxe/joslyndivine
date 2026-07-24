import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";
import { DonatePanelPreview } from "@/components/DonatePanelPreview";
import { CountUp } from "@/components/CountUp";
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

          {/* An honest "One Wednesday" ledger, not a fabricated photo */}
          <div className="hero__ledger reveal" aria-label="What one Wednesday costs to keep a child in school" style={{ ["--reveal-delay" as string]: "220ms" }}>
            <p className="hero__ledger-title">One Wednesday</p>
            <p className="hero__ledger-sub">The small things that keep a child in school.</p>
            <ul className="hero__ledger-rows">
              <li><span>Bus fare to school</span><span className="dots" aria-hidden="true" /><span className="hero__ledger-amt">$0.40</span></li>
              <li><span>Exercise books</span><span className="dots" aria-hidden="true" /><span className="hero__ledger-amt">$1.25</span></li>
              <li><span>A hot lunch</span><span className="dots" aria-hidden="true" /><span className="hero__ledger-amt">$0.60</span></li>
              <li><span>Shoes that fit</span><span className="dots" aria-hidden="true" /><span className="hero__ledger-amt">$8.00</span></li>
            </ul>
            <hr className="hero__ledger-rule" />
            <div className="hero__ledger-total">
              <span className="label">A month of Wednesdays</span>
              <span className="dots" aria-hidden="true" />
              <span className="amt">$30/mo</span>
            </div>
            <p className="hero__ledger-foot">
              Illustrative amounts. A $30 monthly partnership covers the continuity &mdash; not any single line.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="section section--white" aria-labelledby="story-title">
        <div className="container">
          <div className="section__head reveal-up">
            <p className="eyebrow">One child</p>
            <h2 id="story-title">It started with a library card.</h2>
            <p>
              Real names, told with signed guardian consent. We publish a child&rsquo;s photograph only with
              permission &mdash; and never to sell despair.
            </p>
          </div>
          <article className="story reveal-up" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div
              className="story__image"
              role="img"
              aria-label="An illustrative panel in JDF's amber and teal. No child's photograph is shown without consent."
            />
            <div className="story__copy">
              <p className="eyebrow">Education</p>
              <h3 className="story__name">Aminata</h3>
              <p className="story__meta">Class 6 · 6 minute read · April 2026</p>
              <p className="story__quote">
                &ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really me.&rdquo;
              </p>
              <p className="story__body">
                The first thing JDF paid for was school fees. Then a uniform. Then sandals. The fourth thing was a
                library card &mdash; and that was the thing that changed everything. Three years and forty-seven books
                later, Aminata is two grades ahead and studying for her secondary-school exam.
              </p>
              <Link href="/stories/aminata" className="btn btn--secondary">
                Read what one library card started <span className="cta-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
          <p className="honest-caption">
            The panel above is an abstraction, not a stock photo. A child&rsquo;s real photograph appears on this site
            only with signed guardian consent &mdash; see our{" "}
            <Link href="/accountability#safeguarding">safeguarding &amp; consent policy</Link>.
          </p>
        </div>
      </section>

      {/* THE WEDNESDAY BAND — the emotional spine, in Avigea */}
      <section className="section section--dark wednesday" aria-labelledby="wednesday-title">
        <div className="container wednesday__inner reveal-up">
          <p className="eyebrow" style={{ color: "var(--color-amber)" }}>What a monthly gift actually buys</p>
          <span className="amber-rule" />
          <blockquote className="wednesday__quote" id="wednesday-title">
            &ldquo;Tell them they are not paying for one thing. They are paying for a whole long line of small things.
            The shoes, the books, the bus fare. Each one is small. But if you forget one, the child is not in school on
            Wednesday. So tell them: they are paying for <span className="hl">Wednesday</span>.&rdquo;
          </blockquote>
          <p className="wednesday__cite micro">
            <span>Ya Hawa, Aminata&rsquo;s grandmother · Kroo Bay, Freetown</span>
            <Link href="/stories/aminata">Read Aminata&rsquo;s story <span className="cta-arrow" aria-hidden="true">&rarr;</span></Link>
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section section--wash" aria-labelledby="programs-title">
        <div className="container">
          <div className="section__head reveal-up">
            <p className="eyebrow">What we do</p>
            <h2 id="programs-title">Three programs, one child&rsquo;s throughline.</h2>
            <p>
              Education, shelter, and mentorship in Freetown &mdash; in Kroo Bay and Susan&rsquo;s Bay, the communities
              most other organisations leave behind. Here is what each one meant for Aminata.
            </p>
          </div>
          <div className="programs reveal-up" style={{ ["--reveal-delay" as string]: "120ms" }}>
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
              <p className="prog__outcome">Forty-seven books in two years. Two grades ahead.</p>
              <Link href="/programs/education" className="prog__cta">See education <span className="cta-arrow" aria-hidden="true">&rarr;</span></Link>
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
              <p className="prog__outcome">Kinship-first: Aminata is raised by her grandmother &mdash; not an institution.</p>
              <Link href="/programs/shelter" className="prog__cta">See shelter <span className="cta-arrow" aria-hidden="true">&rarr;</span></Link>
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
              <p className="prog__outcome">The same trusted adult, every week, for years &mdash; not weeks.</p>
              <Link href="/programs/mentorship" className="prog__cta">See mentorship <span className="cta-arrow" aria-hidden="true">&rarr;</span></Link>
            </article>
          </div>
        </div>
      </section>

      {/* ACCOUNTABILITY (DARK) */}
      <section className="section section--dark" aria-labelledby="acct-title">
        <div className="container">
          <div className="section__head reveal-up">
            <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Where the money goes</p>
            <h2 id="acct-title">Radical accountability, on a single page.</h2>
            <p>We publish the numbers, the channels, and the things we will not do. No fine print, no PDFs hidden three clicks deep.</p>
          </div>
          <div className="acct__row reveal-up" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="stat">
              <div className="stat__num"><CountUp to={100} suffix="%" /></div>
              <div className="stat__label">of donor gifts directed to programs after processor fees</div>
              <div className="stat__source">Source: Accountability page, Q1 2026.</div>
            </div>
            <div className="stat">
              <div className="stat__num"><CountUp to={23} /></div>
              <div className="stat__label">children promoted to the next grade in 2024</div>
              <div className="stat__source">Source: JDF Program Records, 2024.</div>
            </div>
          </div>
          <div className="acct__cta">
            <Link href="/accountability" className="btn btn--inverse btn--lg">
              Read the accountability page <span className="cta-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* DONATE PANEL PREVIEW */}
      <section className="section section--wash" aria-labelledby="give-title">
        <div className="container">
          <div className="section__head reveal-up">
            <p className="eyebrow">Give</p>
            <h2 id="give-title">Start your monthly partnership.</h2>
            <p>Set the cadence here. Confirm payment on the next page. You can pause or cancel any time, no questions.</p>
          </div>
          <div className="reveal-up" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <DonatePanelPreview />
          </div>
        </div>
      </section>

      {/* THREE ROLES — soft landing for the not-yet-ready */}
      <section className="section section--white" aria-labelledby="three-title">
        <div className="container">
          <div className="section__head reveal-up">
            <p className="eyebrow">Not ready to give?</p>
            <h2 id="three-title">Funders invest. Volunteers build. Partners amplify.</h2>
            <p>
              There&rsquo;s more than one way to stand with these children. Pick the lane that fits where you are.
            </p>
          </div>
          <div className="reveal-up" style={{ ["--reveal-delay" as string]: "120ms" }}>
            <ThreeRolesStrip />
          </div>
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
