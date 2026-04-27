import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { FAQAccordion, type FAQItem } from "@/components/FAQAccordion";

export const metadata = buildMetadata(ROUTES.getInvolved);

const FAQS: FAQItem[] = [
  {
    question: "Where does my money actually go?",
    answer: "Every gift is broken down on our Accountability page: programs, operations, partner orgs, and reserves, refreshed annually. We publish where the money came from and where it went, line by line.",
  },
  {
    question: "Is JDF a registered charity?",
    answer: "Yes. JDF is registered as a Sierra Leone NGO and operates in the United States through a 501(c)(3) fiscal sponsor, so US donations are tax-deductible. The vision was set in 2019; programs began in 2022.",
  },
  {
    question: "Can I volunteer remotely?",
    answer: "Yes. We have ongoing remote needs in design, writing, data, fundraising operations, and web. Tell us what you're good at on the volunteer application and we'll match you to a brief — or hold your application until one fits.",
  },
  {
    question: "How long is a mentor expected to commit?",
    answer: "Mentor pairings work because they last. Our average pairing runs 3.2 years. We ask new in-country mentors for a one-year minimum and a weekly cadence — anything shorter, and the relationship doesn't take.",
  },
  {
    question: "Do you run an orphanage?",
    answer: "No. We work kinship-first: children are placed with extended family wherever possible, with a stipend and case-worker support. Group housing is only used when no kinship option is safe. Of 11 placements in 2024, 9 were kinship.",
  },
  {
    question: "Can my company match my donation?",
    answer: "Most US employers can match through our 501(c)(3) fiscal sponsor. Our Partners page walks corporates through workplace-giving and match programmes — or write to us and we'll send the paperwork your HR team needs.",
  },
  {
    question: "Can I visit the programme in Freetown?",
    answer: "In-country visits are arranged for active funders, partners, and volunteers, with safeguarding clearance and a host on the ground. We don't run drop-in tours — visits are scheduled, prepared, and centred on what's useful to the children, not what's photogenic.",
  },
  {
    question: "How do you protect the children whose stories you share?",
    answer: "Every story, photograph, and quote is published with signed guardian consent and the child's own assent — refreshed every three years. No before-and-after framing, no pity-driven imagery, no images of children in distress. The full policy is on our Accountability page.",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Three ways to be part of this."
        lede="Funders invest. Volunteers build. Partners amplify. Pick the role that fits the time, skill, or resources you have right now — every one of them moves a child closer to the next year of school."
      />

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">The three roles</p>
            <h2>Pick the one that fits where you are.</h2>
            <p>
              Every role is real work. None of them is a tier above another. Funding keeps the doors open;
              volunteers run what&rsquo;s behind those doors; partners help us reach the next street.
            </p>
          </div>

          <div style={{ display: "grid", gap: "var(--space-5)" }}>
            <article className="card card--highlight">
              <p className="card__eyebrow">Funders</p>
              <h3 className="card__title">Invest in a generation, not a transaction.</h3>
              <p className="card__body">
                Predictable monthly support is what keeps a child in school across an academic year. One-time gifts
                move the work forward; monthly gifts make the work possible to plan.
              </p>
              <ul className="prose" style={{ paddingLeft: "var(--space-5)", marginBottom: "var(--space-5)" }}>
                <li>Become a monthly partner &mdash; start at $20.</li>
                <li>Make a one-time gift via card, bank, mobile money, or crypto.</li>
                <li>Sponsor a child&rsquo;s full year of school &mdash; $720.</li>
                <li>Set up a workplace match through your employer.</li>
              </ul>
              <Link href="/get-involved/funders" className="btn btn--primary btn--lg">Become a funder &rarr;</Link>
            </article>

            <article className="card card--wash">
              <p className="card__eyebrow">Volunteers</p>
              <h3 className="card__title">Build alongside our team.</h3>
              <p className="card__body">
                In Freetown or remotely, paid or unpaid, full-time or one Saturday a month &mdash; we match the role
                to the time and skill you actually have. We respond to every application within seven days.
              </p>
              <ul className="prose" style={{ paddingLeft: "var(--space-5)", marginBottom: "var(--space-5)" }}>
                <li>In-country: tutor, mentor, or run a Saturday programme in Kroo Bay.</li>
                <li>Remote skills-based: design, writing, data, fundraising, web.</li>
                <li>Through a partner organisation: see your team&rsquo;s existing skills routed to a JDF brief.</li>
              </ul>
              <Link href="/get-involved/volunteers" className="btn btn--secondary btn--lg">Apply to volunteer &rarr;</Link>
            </article>

            <article className="card">
              <p className="card__eyebrow">Partners</p>
              <h3 className="card__title">Amplify what we already do.</h3>
              <p className="card__body">
                Schools, corporates, faith communities, and other NGOs make our programmes reach further than we could
                alone. Partnerships are case-by-case and conversation-led &mdash; there is no application form.
              </p>
              <ul className="prose" style={{ paddingLeft: "var(--space-5)", marginBottom: "var(--space-5)" }}>
                <li>Schools: twin a classroom, run a pen-pal exchange, host a fundraiser.</li>
                <li>Corporates: workplace giving, match programmes, skills-based volunteering.</li>
                <li>NGOs: shared programme delivery, referrals, joint reporting.</li>
                <li>Faith communities: collections, drives, pastoral support.</li>
              </ul>
              <Link href="/get-involved/partners" className="btn btn--ghost btn--lg">Start a partnership &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">What it adds up to</p>
            <h2>A small organisation. A specific community. Real numbers.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-7)" }}>
            <div className="stat">
              <div className="stat__num">23</div>
              <div className="stat__label">children promoted to the next grade in 2024</div>
              <div className="stat__source">Source: JDF Program Records, 2024.</div>
            </div>
            <div className="stat">
              <div className="stat__num">34</div>
              <div className="stat__label">active mentors paired with a child for an average of 3.2 years</div>
              <div className="stat__source">Source: JDF Mentorship Records, 2024.</div>
            </div>
            <div className="stat">
              <div className="stat__num">7&thinsp;days</div>
              <div className="stat__label">our promised response time on every volunteer or partnership enquiry</div>
              <div className="stat__source">Source: JDF Operations SLA, 2026.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Common questions</p>
            <h2>What people ask before they say yes.</h2>
            <p>
              If your question isn&rsquo;t here, write to <a href="mailto:hello@joslyndivine.com">hello@joslyndivine.com</a> &mdash; a real person replies within seven days.
            </p>
          </div>
          <FAQAccordion items={FAQS} withSchema />
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Ready when you are</p>
          <h2>Pick a role. Take the next step.</h2>
          <p>Every step is small. The pattern is what works.</p>
          <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap", marginTop: "var(--space-5)" }}>
            <Link href="/get-involved/funders" className="btn btn--primary btn--lg">Become a funder</Link>
            <Link href="/get-involved/volunteers" className="btn btn--inverse btn--lg">Volunteer</Link>
            <Link href="/get-involved/partners" className="btn btn--inverse btn--lg">Partner with us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
