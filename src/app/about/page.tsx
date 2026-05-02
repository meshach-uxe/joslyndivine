import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";

export const metadata = buildMetadata(ROUTES.about);

const PRINCIPLES = [
  { num: "01", title: "Dignity-led, always.", body: "No before-and-after framing. No exploitative imagery. No story that we wouldn't show to the child's guardian first. The children are not a fundraising prop." },
  { num: "02", title: "Kinship-first care.", body: "When a child needs shelter, we place them with extended family wherever possible — with a stipend and case-worker support. Group housing is only used when no kinship option is safe." },
  { num: "03", title: "Consent on file.", body: "Every story, photograph, and quote is published with signed guardian consent and the child's own assent. Renewed every three years." },
  { num: "04", title: "Local first, always.", body: "Mentors are local. Tutors are local. Procurement is local where it can be. Our office is in Freetown, not London or Washington — and our leadership listens to the team that runs the programmes." },
  { num: "05", title: "Stats are sourced.", body: "Every number on this site has a citation underneath it. If we can't source it, we don't print it. If a stat retires — like our old food-insecurity figure — we say so on the page." },
  { num: "06", title: "Boring, on purpose.", body: "No popups. No retention scripts. No 'urgent' appeals. No autoplay. We'd rather be a quiet, predictable charity that's been running for ten years than a loud one that's been running for two." },
];

const TIMELINE = [
  { year: "2019", title: "Vision set in Freetown.", body: "Mrs. Ellaline V. Wright-Hook returns from the diaspora. Three years of planning, listening, and refusing to launch." },
  { year: "2022", title: "Programs begin.", body: "Education programme launches with 9 children, 2 local mentors, and a single library room with 47 books in Kroo Bay." },
  { year: "2023", title: "Susan's Bay site opens.", body: "Education and mentorship extend to a second community. First annual Accountability report published." },
  { year: "2024", title: "Shelter programme formalised.", body: "Kinship-first placement framework finalised. 11 children placed; 9 of 11 in kinship care, 0 in institutional placements." },
  { year: "2025", title: "US 501(c)(3) status confirmed.", body: "Fiscal sponsorship arrangement finalised, opening US tax-deductible giving and corporate match programmes." },
  { year: "2026", title: "Today.", body: "Three programmes, two communities, 34 active mentors, 23 children promoted up a grade in 2024. Krio language site planned for Phase 2." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small organisation, in a specific community, doing one thing well."
        lede="The Joslyn Divine Foundation supports children in Kroo Bay and Susan&rsquo;s Bay, two of Freetown&rsquo;s most under-served urban communities, through education, shelter, and mentorship. Vision set in 2019. Programs began in 2022."
      >
        <div className="micro" style={{ marginTop: "var(--space-5)", display: "flex", gap: "var(--space-5)", flexWrap: "wrap" }}>
          <span><strong>2019</strong> Vision set</span>
          <span><strong>2022</strong> Programs launched</span>
          <span><strong>2 communities</strong> Kroo Bay, Susan&rsquo;s Bay</span>
          <span><strong>2 jurisdictions</strong> SL NGO + US 501(c)(3)</span>
        </div>
      </PageHero>

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Our story</p>
            <h2>Why this exists.</h2>
          </div>

          <div className="pg-split pg-split--15">
            <div className="prose">
              <p>JDF began with a question that didn&rsquo;t have a good answer: what happens to a child in Kroo Bay after the visiting NGOs leave?</p>
              <p>The vision was set in 2019, when our founder, Mrs. Ellaline V. Wright-Hook, returned to Freetown from the diaspora and walked the same lanes she had walked as a girl. The houses were still there. The school fees were not. The children were the same age she had been; their lives were not.</p>
              <p>For three years she planned, listened, and refused to launch anything she could not sustain. The principle was simple: nothing we couldn&rsquo;t keep doing for ten years. No glossy launch event. No celebrity ambassador. No before-and-after photographs. The children deserved more than a campaign.</p>
              <blockquote>&ldquo;We start with one child, in one community, and we do not stop.&rdquo;</blockquote>
              <p>Programs began in 2022. School fees for nine children, term one. Two mentors, both local, both vetted. One small library room with 47 books. By the end of that academic year, eight of those nine children had passed up a grade.</p>
              <p>Today JDF runs three programs &mdash; education, shelter, mentorship &mdash; in Kroo Bay and Susan&rsquo;s Bay, with a small full-time team in Freetown and a leadership group split between Sierra Leone, the United Kingdom, and the United States. We register as a Sierra Leone NGO and operate in the US through a 501(c)(3) fiscal sponsor, so US donations are tax-deductible.</p>
              <p>We are not large. We will not become large quickly. The point is to keep going.</p>
            </div>

            <aside className="card card--wash" aria-label="Founding facts">
              <h3 className="card__title">Founding facts</h3>
              <dl style={{ margin: 0, display: "grid", gap: "var(--space-3)" }}>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Founder</dt><dd style={{ margin: 0 }}>Mrs. Ellaline V. Wright-Hook</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Vision set</dt><dd style={{ margin: 0 }}>2019, Freetown</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Programs began</dt><dd style={{ margin: 0 }}>2022, with 9 children</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Where we work</dt><dd style={{ margin: 0 }}>Kroo Bay &amp; Susan&rsquo;s Bay, Freetown</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>How we&rsquo;re registered</dt><dd style={{ margin: 0 }}>Sierra Leone NGO + US 501(c)(3) via fiscal sponsor</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Languages</dt><dd style={{ margin: 0 }}>English at launch; Krio in Phase 2</dd></div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">What we believe</p>
            <h2>Six principles, written down so we can be held to them.</h2>
            <p>If we ever break one of these, hold us accountable. They are not aspirational &mdash; they are operational. Every programme decision passes through them.</p>
          </div>

          <div className="story-grid story-grid--2">
            {PRINCIPLES.map((p) => (
              <article key={p.num} className="card">
                <p className="card__eyebrow" style={{ color: "var(--color-amber-dk)" }}>{p.num}</p>
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">The team</p>
            <h2>A small leadership group, named.</h2>
            <p>Every name here is real, every role is real, and every photograph is shared with consent. Photographs are placeholders in this prototype.</p>
          </div>

          <div className="card founder-card" style={{ marginBottom: "var(--space-6)" }}>
            <div className="hero__portrait" style={{ height: 160, width: 160, borderRadius: "var(--radius-lg)" }} aria-hidden="true" />
            <div>
              <p className="card__eyebrow">Founder</p>
              <h3 className="card__title">Mrs. Ellaline V. Wright-Hook</h3>
              <p className="card__body">
                Founder and named lead. Born in Freetown, returned in 2019 after thirty years in the diaspora to set
                the vision for what would become JDF. Holds the founding mandate; chairs the board; sits on every
                safeguarding decision.
              </p>
              <p className="micro">Freetown · founder@joslyndivine.com</p>
            </div>
          </div>

          <div className="story-grid story-grid--4">
            {[
              { role: "Programme director", body: "Runs day-to-day programme delivery in Freetown. Sierra Leonean. Reports to the board." },
              { role: "Operations lead", body: "Procurement, finance, and the unglamorous everyday. The reason term fees arrive on time." },
              { role: "Safeguarding lead", body: "Holds the safeguarding policy. Has the final word on placements, stories, and child contact." },
              { role: "Diaspora lead", body: "Coordinates donors, partners, and volunteers across the UK and US. Reports back to Freetown weekly." },
            ].map((m) => (
              <article key={m.role} className="card">
                <div className="hero__portrait" style={{ height: 96, width: 96, borderRadius: "var(--radius-full)", marginBottom: "var(--space-3)" }} aria-hidden="true" />
                <p className="card__eyebrow">{m.role}</p>
                <h4 className="h4">[Name pending]</h4>
                <p className="micro">{m.body}</p>
              </article>
            ))}
          </div>

          <p className="micro" style={{ marginTop: "var(--space-6)", maxWidth: "60ch" }}>
            Names will be filled in before launch &mdash; every individual is on staff, but we publish names with their explicit consent, not before. <Link href="/accountability">Board members are listed on our Accountability page &rarr;</Link>
          </p>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">How we got here</p>
            <h2>2019 to today.</h2>
            <p>A short list. Every entry is real, sourced, and small on purpose.</p>
          </div>

          <ol style={{ listStyle: "none", padding: 0, position: "relative", paddingLeft: "var(--space-7)" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: 11, top: 8, bottom: 8, width: 2, background: "var(--color-slate-200)" }} />
            {TIMELINE.map((t) => (
              <li key={t.year} style={{ position: "relative", paddingBottom: "var(--space-7)" }}>
                <span aria-hidden="true" style={{ position: "absolute", left: -29, top: 6, width: 24, height: 24, borderRadius: 9999, background: "var(--color-amber)", border: "4px solid var(--color-white)", boxShadow: "0 0 0 1px var(--color-amber)" }} />
                <p className="eyebrow" style={{ marginBottom: "var(--space-2)" }}>{t.year}</p>
                <h3 className="h3" style={{ marginTop: 0 }}>{t.title}</h3>
                <p style={{ color: "var(--color-slate-700)" }}>{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Three ways to be part of this</p>
            <h2>Funders invest. Volunteers build. Partners amplify.</h2>
          </div>
          <ThreeRolesStrip />
        </div>
      </section>
    </>
  );
}
