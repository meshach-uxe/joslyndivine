import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";
import { DonatePanelPreview } from "@/components/DonatePanelPreview";
import { CountUp } from "@/components/CountUp";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/metadata";
import { PHOTOS } from "@/lib/photography";

export const metadata = buildMetadata(ROUTES.home);

export default function HomePage() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow home-hero__place">
              Freetown, Sierra Leone
            </p>
            <h1 id="hero-title">
              Beyond survival. <span>Built for leadership.</span>
            </h1>
            <p className="home-hero__lede">
              A leadership institute for the children of Kroo Bay and Susan&rsquo;s Bay &mdash; through education,
              shelter, mentorship, and the slow work of keeping a child safe long enough to become themselves.
            </p>
            <div className="home-hero__actions">
              <Link href="/donate" className="btn btn--primary">
                Become a monthly partner <span className="cta-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/about" className="btn btn--tertiary">Read our story</Link>
            </div>
            <p className="home-hero__caption">
              Vision 2019. Programs 2022. Sierra Leone NGO + <span>US 501(c)(3).</span>
            </p>
          </div>
          <div className="home-hero__visual">
            <figure className="home-hero__figure">
              <Image
                src={PHOTOS.study.src}
                alt={PHOTOS.study.alt}
                fill
                priority
                unoptimized
              />
              <figcaption>Stock photograph · Ronaldo Guiraldelli / Pexels</figcaption>
            </figure>
            <div className="home-hero__links">
              <Link href="/programs" className="home-hero__link">
                <span><strong>Our work</strong><span>Education, shelter and mentorship</span></span>
                <span className="action-arrow" aria-hidden="true">&rarr;</span>
              </Link>
              <Link href="/get-involved" className="home-hero__link">
                <span><strong>Get involved</strong><span>Funders, volunteers and partners</span></span>
                <span className="action-arrow" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="section home-story" aria-labelledby="story-title">
        <div className="container">
          <article className="story">
            <div className="story__media">
              <Image
                src={PHOTOS.library.src}
                alt={PHOTOS.library.alt}
                fill
                unoptimized
              />
            </div>
            <div className="story__copy">
              <p className="eyebrow">One child <span aria-hidden="true">/</span> Education</p>
              <h2 id="story-title">It started with a library card.</h2>
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
          <div className="home-story__consent">
            <p>
              Real names, told with signed guardian consent. We publish a child&rsquo;s photograph only with
              permission &mdash; and never to sell despair.
            </p>
            <p>
              The library photograph is illustrative stock imagery. A child&rsquo;s photograph appears on this site
              only with signed guardian consent &mdash; see our{" "}
              <Link href="/accountability#safeguarding">safeguarding &amp; consent policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* The Wednesday quote and giving breakdown */}
      <section className="section section--dark wednesday" aria-labelledby="wednesday-title">
        <div className="container wednesday__inner">
          <div className="wednesday__copy">
            <h2 className="eyebrow" id="wednesday-title">What a monthly gift actually buys</h2>
            <blockquote className="wednesday__quote">
              &ldquo;Tell them they are not paying for one thing. They are paying for a whole long line of small things.
              The shoes, the books, the bus fare. Each one is small. But if you forget one, the child is not in school on
              Wednesday. So tell them: they are paying for <span className="hl">Wednesday</span>.&rdquo;
            </blockquote>
            <p className="wednesday__cite">
              <span>Ya Hawa, Aminata&rsquo;s grandmother · Kroo Bay, Freetown</span>
              <Link href="/stories/aminata">Read Aminata&rsquo;s story <span className="cta-arrow" aria-hidden="true">&rarr;</span></Link>
            </p>
          </div>
          <section className="wednesday-ledger" aria-labelledby="wednesday-ledger-title">
            <h3 id="wednesday-ledger-title">One Wednesday</h3>
            <p>The small things that keep a child in school.</p>
            <dl className="wednesday-ledger__rows">
              <div><dt>Bus fare to school</dt><dd>$0.40</dd></div>
              <div><dt>Exercise books</dt><dd>$1.25</dd></div>
              <div><dt>A hot lunch</dt><dd>$0.60</dd></div>
              <div><dt>Shoes that fit</dt><dd>$8.00</dd></div>
              <div className="wednesday-ledger__total"><dt>A month of Wednesdays</dt><dd>$30/mo</dd></div>
            </dl>
            <p>Illustrative amounts. A $30 monthly partnership covers the continuity &mdash; not any single line.</p>
          </section>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="section home-programs" aria-labelledby="programs-title">
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
      <section className="section home-impact" aria-labelledby="acct-title">
        <div className="container home-impact__grid">
          <div className="section__head reveal-up">
            <p className="eyebrow">Where the money goes</p>
            <h2 id="acct-title">Radical accountability, on a single page.</h2>
            <p>We publish the numbers, the channels, and the things we will not do. No fine print, no PDFs hidden three clicks deep.</p>
            <Link href="/accountability" className="btn btn--secondary">
              Read the accountability page <span className="cta-arrow" aria-hidden="true">&rarr;</span>
            </Link>
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
        </div>
      </section>

      {/* DONATE PANEL PREVIEW */}
      <section className="section home-give" aria-labelledby="give-title">
        <div className="container home-give__grid">
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
      <section className="section home-roles" aria-labelledby="three-title">
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
    </div>
  );
}
