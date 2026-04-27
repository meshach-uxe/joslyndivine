import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";

export const metadata = buildMetadata(ROUTES.accountability);

const PROMISES = [
  { title: "Annual accountability report", body: "A single PDF with income, expenditure, programme outcomes, and governance changes for the prior year.", cadence: "every Q1" },
  { title: "External audit", body: "A full external audit by an independent firm, with the audit letter published unredacted on this page.", cadence: "annually, with FY accounts" },
  { title: "\"Good news\" donor update", body: "A plain-text email to every active donor and monthly partner. What changed; who's at school; what's next.", cadence: "every quarter" },
  { title: "Programme outcomes", body: "Children-promoted, mentor-pairing length, kinship-care ratio, and other operational metrics, with sources.", cadence: "annually, programme pages refreshed" },
  { title: "Safeguarding incident log", body: "A summary count of incidents reported and resolved, anonymised. Zero is the goal; we publish the number whether it is or isn't.", cadence: "annually" },
  { title: "Board meeting minutes", body: "Summary minutes for every formal board meeting, redacted only where a decision involves a named child.", cadence: "within 30 days of each meeting" },
  { title: "Salary band disclosure", body: "The salary band and number of staff in each band, including leadership. We are not a high-pay charity, and we say so plainly.", cadence: "annually, with FY accounts" },
  { title: "7-day reply on enquiries", body: "Every volunteer application, partnership enquiry, and donor question gets a real reply within seven days, including a no.", cadence: "ongoing" },
];

export default function AccountabilityPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Accountability</p>
          <h1>Where the money came from. Where it went. Who runs us.</h1>
          <p className="page-hero__lede">
            One page, refreshed every Q1. Every figure cited. Every promise scheduled. If we ever break one of these,
            hold us to it.
          </p>
          <p className="micro" style={{ marginTop: "var(--space-4)" }}>
            Last refreshed: 12 February 2026 · FY24 figures
          </p>
        </div>
      </section>

      <nav className="anchors" aria-label="Accountability sections">
        <div className="container anchors__row">
          <a href="#money-out">Where it went</a>
          <a href="#money-in">Where it came from</a>
          <a href="#promises">Our promises</a>
          <a href="#safeguarding">Safeguarding &amp; consent</a>
          <a href="#governance">Governance</a>
          <a href="#documents">Documents</a>
          <a href="#cadence">Reporting cadence</a>
        </div>
      </nav>

      {/* WHERE IT WENT */}
      <section className="section section--white" id="money-out">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Where the money went · FY24</p>
            <h2>Four categories. Every one accounted for.</h2>
            <p>
              Total expenditure for the financial year ending 31 December 2024 was $186,400. Below is the full
              breakdown &mdash; programmes, operations, partner organisations, and reserves.
            </p>
          </div>

          <div style={{ display: "flex", height: 48, borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--space-7)" }} aria-label="Expenditure breakdown">
            <div style={{ width: "78%", background: "var(--color-amber)", color: "var(--color-slate-900)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14 }}>78% Programmes</div>
            <div style={{ width: "12%", background: "var(--color-teal)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14 }}>12% Ops</div>
            <div style={{ width: "6%", background: "var(--color-teal-soft)", color: "var(--color-teal-dk)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 12 }}>6%</div>
            <div style={{ width: "4%", background: "var(--color-slate-300)", color: "var(--color-slate-900)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 12 }}>4%</div>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[
              { pct: "78%", amt: "$145,392 of $186,400", title: "Programmes", body: "School fees, mentor stipends, kinship-care stipends, transport, books, programme staff salaries, all programme delivery in Freetown." },
              { pct: "12%", amt: "$22,368 of $186,400", title: "Operations", body: "Office rent and utilities in Freetown, accounting, legal, audit, payroll, fundraising-platform fees. No paid acquisition. No commissions." },
              { pct: "6%", amt: "$11,184 of $186,400", title: "Partner orgs", body: "Sub-grants and joint-programme funding to partner NGOs delivering specialist services we don't run in-house — health, nutrition, child protection." },
              { pct: "4%", amt: "$7,456 of $186,400", title: "Reserves", body: "Operating reserve to cover three months of programme delivery in case of revenue disruption. Required by our governance policy." },
            ].map((b) => (
              <article key={b.title} className="card">
                <p className="card__eyebrow">{b.pct}</p>
                <p className="micro">{b.amt}</p>
                <h3 className="card__title">{b.title}</h3>
                <p className="card__body">{b.body}</p>
              </article>
            ))}
          </div>

          <p className="micro" style={{ marginTop: "var(--space-7)", maxWidth: "60ch" }}>
            Source: JDF Annual Accounts FY2024, audited by [auditor name pending]. Figures in USD at year-end exchange
            rates. Full PDF in <a href="#documents">Documents</a>.
          </p>
        </div>
      </section>

      {/* WHERE IT CAME FROM */}
      <section className="section section--wash" id="money-in">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Where the money came from · FY24</p>
            <h2>Five channels, no single point of failure.</h2>
            <p>
              Total income for FY24 was $193,800. We track every dollar by the channel it arrived through, so you can
              see how the money moves before we ever spend it.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "var(--space-7)", alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", height: 32, borderRadius: "var(--radius-md)", overflow: "hidden", marginBottom: "var(--space-5)" }} aria-label="Income channel mix">
                <div style={{ width: "48%", background: "var(--color-amber)" }} title="48% Card / PayPal" />
                <div style={{ width: "24%", background: "var(--color-teal)" }} title="24% Bank" />
                <div style={{ width: "14%", background: "var(--color-amber-soft)" }} title="14% Mobile" />
                <div style={{ width: "9%", background: "var(--color-slate-100)" }} title="9% In-kind" />
                <div style={{ width: "5%", background: "var(--color-slate-300)" }} title="5% Crypto" />
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
                {[
                  { c: "var(--color-amber)", label: "Card & PayPal — international donors, mostly recurring monthly", pct: "48%", amt: "$93,024" },
                  { c: "var(--color-teal)", label: "Bank transfer — corporate match programmes, large one-time gifts", pct: "24%", amt: "$46,512" },
                  { c: "var(--color-amber-soft)", label: "Mobile money — Sierra Leone and West Africa donors (Orange, Africell)", pct: "14%", amt: "$27,132" },
                  { c: "var(--color-slate-100)", label: "In-kind — books, uniforms, equipment, professional services", pct: "9%", amt: "$17,442" },
                  { c: "var(--color-slate-300)", label: "Crypto — BTC, ETH, USDC; fewer gifts, larger sizes", pct: "5%", amt: "$9,690" },
                ].map((row) => (
                  <li key={row.label} style={{ display: "grid", gridTemplateColumns: "16px 1fr auto auto", gap: "var(--space-3)", alignItems: "center", padding: "var(--space-3) 0", borderBottom: "1px solid var(--color-slate-200)" }}>
                    <span aria-hidden="true" style={{ width: 14, height: 14, borderRadius: "var(--radius-full)", background: row.c, border: "1px solid var(--color-slate-300)" }} />
                    <span style={{ fontSize: 14 }}>{row.label}</span>
                    <strong>{row.pct}</strong>
                    <span className="micro">{row.amt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="card card--wash" aria-label="Income totals">
              <h3 className="card__title">Topline · FY24</h3>
              <dl style={{ display: "grid", gap: "var(--space-3)", margin: 0 }}>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Total income</dt><dd style={{ margin: 0 }}>$193,800</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Total expenditure</dt><dd style={{ margin: 0 }}>$186,400</dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Net surplus</dt><dd style={{ margin: 0 }}>$7,400 <span className="micro">added to operating reserve</span></dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Number of donors</dt><dd style={{ margin: 0 }}>284 <span className="micro">+62% YoY</span></dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Monthly partners</dt><dd style={{ margin: 0 }}>91 <span className="micro">+28% YoY</span></dd></div>
                <div><dt className="micro" style={{ color: "var(--color-slate-500)", fontWeight: 600 }}>Average gift size</dt><dd style={{ margin: 0 }}>$682 <span className="micro">FY24</span></dd></div>
              </dl>
            </aside>
          </div>

          <p className="micro" style={{ marginTop: "var(--space-7)", maxWidth: "60ch" }}>
            Source: JDF Annual Accounts FY2024. Channel mix tracked at the platform level (Stripe, bank statement,
            Orange/Africell merchant reports, in-kind register, BitPay).
          </p>
        </div>
      </section>

      {/* PROMISES */}
      <section className="section section--white" id="promises">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Our promises</p>
            <h2>Eight things we publish, and how often.</h2>
            <p>
              These are not aspirations. Each one has a cadence and an owner. If a promise is overdue by more than 30
              days, write to <a href="mailto:hello@joslyndivine.com">hello@joslyndivine.com</a> and we&rsquo;ll fix it.
            </p>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            {PROMISES.map((p) => (
              <article key={p.title} className="card">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__body">{p.body}</p>
                <p className="micro" style={{ color: "var(--color-teal-dk)", fontWeight: 600 }}>Cadence · {p.cadence}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SAFEGUARDING */}
      <section className="section section--wash" id="safeguarding">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Safeguarding &amp; consent</p>
            <h2>How we protect the children whose stories we share.</h2>
            <p>
              Every story, photograph, and quote on this site is published with signed guardian consent and the
              child&rsquo;s own assent &mdash; refreshed every three years. Below is what that means in practice.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: "var(--space-7)", alignItems: "start" }}>
            <div className="prose">
              <p>
                Child protection is not a paragraph; it is the whole point. Our safeguarding lead has the final word
                on placements, stories, and any contact between a child and a non-staff adult &mdash; and they answer
                to the board, not to a programme deadline.
              </p>
              <ul>
                <li>Guardian consent is signed in writing, in the language the guardian reads, before any image or quote is used.</li>
                <li>Children old enough to assent give it in their own words. We keep their assent on file alongside the guardian&rsquo;s consent.</li>
                <li>Consent is renewed every three years. Anything older is removed from the site until refreshed.</li>
                <li>No before-and-after framing. No photographs of children in distress. No imagery the guardian wouldn&rsquo;t show their neighbour.</li>
                <li>No name-and-face combinations on the same page for children under 13, unless a guardian explicitly opts in.</li>
                <li>Withdrawal is honoured within 30 days, end-to-end &mdash; site, social, archives. No reasons required.</li>
                <li>Every staff member, mentor, and in-country volunteer passes a safeguarding clearance and reference check before contact with children.</li>
                <li>Any safeguarding incident is reported to the safeguarding lead within 24 hours and to the board within 7 days.</li>
              </ul>
              <p className="micro">
                For the FY24 reporting period, the count of safeguarding incidents formally reported was zero. Source:
                Safeguarding lead report, December 2024.
              </p>
            </div>

            <aside className="card card--highlight">
              <h3 className="card__title">Guardian Consent Form v1</h3>
              <p className="card__body">
                Plain-language form, tickbox grid for what&rsquo;s permitted (name / photographs / quotes / video),
                three-year duration with renewal language, withdrawal rights via three channels, child assent paragraph.
              </p>
              <a href="mailto:hello@joslyndivine.com?subject=Guardian%20Consent%20Form%20v1" className="btn btn--secondary">Request the form &rarr;</a>
              <p className="micro" style={{ marginTop: "var(--space-3)" }}>
                For reference. Active forms are issued by JDF staff in person and signed in the language the guardian reads.
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* GOVERNANCE */}
      <section className="section section--white" id="governance">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Governance</p>
            <h2>Two registrations. One board. One named founder.</h2>
            <p>
              JDF is a Sierra Leone NGO with a US 501(c)(3) fiscal-sponsor relationship for tax-deductible US giving.
              The board sits in both jurisdictions; the operating team sits in Freetown.
            </p>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <article className="card">
              <h3 className="card__title">Legal &amp; tax status</h3>
              <dl style={{ display: "grid", gap: "var(--space-3)", margin: 0 }}>
                <div><dt className="micro" style={{ fontWeight: 600 }}>Sierra Leone</dt><dd style={{ margin: 0 }}>Registered as an NGO under the Ministry of Planning and Economic Development. Reg. number [pending].</dd></div>
                <div><dt className="micro" style={{ fontWeight: 600 }}>United States</dt><dd style={{ margin: 0 }}>Operates through [fiscal sponsor name pending], a registered 501(c)(3). US donations are tax-deductible to the extent allowed by law.</dd></div>
                <div><dt className="micro" style={{ fontWeight: 600 }}>United Kingdom</dt><dd style={{ margin: 0 }}>No standalone registration. UK donations are routed through the US fiscal sponsor or directly to Sierra Leone.</dd></div>
                <div><dt className="micro" style={{ fontWeight: 600 }}>Audit</dt><dd style={{ margin: 0 }}>Annual external audit by [auditor name pending], an independent firm with no other JDF business.</dd></div>
                <div><dt className="micro" style={{ fontWeight: 600 }}>Banking</dt><dd style={{ margin: 0 }}>Operating accounts in Sierra Leone (SLE) and the United States (USD). No accounts in tax-haven jurisdictions.</dd></div>
              </dl>
            </article>

            <article className="card">
              <h3 className="card__title">Board members</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
                <li><strong>Mrs. Ellaline V. Wright-Hook</strong><br /><span className="micro">Chair · Founder · Freetown · 2019&ndash;</span></li>
                <li><strong>[Name pending]</strong><br /><span className="micro">Treasurer · UK · 2022&ndash;</span></li>
                <li><strong>[Name pending]</strong><br /><span className="micro">Safeguarding lead (board observer) · SL · 2023&ndash;</span></li>
                <li><strong>[Name pending]</strong><br /><span className="micro">Programme oversight · SL · 2024&ndash;</span></li>
                <li><strong>[Name pending]</strong><br /><span className="micro">US legal &amp; compliance · US · 2025&ndash;</span></li>
              </ul>
              <p className="micro" style={{ marginTop: "var(--space-5)" }}>
                Names are filled in with each individual&rsquo;s explicit consent. Board meets quarterly. Minutes are
                published within 30 days.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="section section--wash" id="documents">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Documents</p>
            <h2>Annual reports, audit letters, and policies.</h2>
            <p>
              Every document below is the actual file we file with our regulators or share with our board. Nothing has
              been re-edited for the website.
            </p>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            {[
              { year: "FY2024", title: "Annual accountability report", meta: "PDF · 24 pages · 1.8 MB" },
              { year: "FY2024", title: "External audit letter", meta: "PDF · 4 pages · 320 KB" },
              { year: "v2 · 2025", title: "Safeguarding policy", meta: "PDF · 18 pages · 1.1 MB" },
              { year: "FY2023", title: "Annual accountability report", meta: "PDF · 18 pages · 1.4 MB" },
              { year: "v1 · 2024", title: "Guardian consent form", meta: "PDF · 6 pages · 280 KB" },
              { year: "v1 · 2023", title: "Board charter", meta: "PDF · 12 pages · 540 KB" },
            ].map((d) => (
              <article key={d.title + d.year} className="card">
                <p className="card__eyebrow">{d.year}</p>
                <h3 className="h3">{d.title}</h3>
                <p className="micro">{d.meta}</p>
                <p className="micro" style={{ color: "var(--color-amber-dk)", marginTop: "var(--space-3)" }}>
                  PDF coming soon
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CADENCE */}
      <section className="section section--white" id="cadence">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Reporting cadence</p>
            <h2>When to expect what.</h2>
            <p>
              This calendar is what we publish, in what month, every year. If something is overdue here, hold us to it.
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }} aria-label="Annual reporting cadence">
              <thead>
                <tr style={{ background: "var(--color-slate-100)", textAlign: "left" }}>
                  <th style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "2px solid var(--color-slate-200)" }}>When</th>
                  <th style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "2px solid var(--color-slate-200)" }}>What</th>
                  <th style={{ padding: "var(--space-3) var(--space-4)", borderBottom: "2px solid var(--color-slate-200)" }}>Owner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { when: "Q1 (March)", what: "Annual accountability report + external audit letter", owner: "Treasurer" },
                  { when: "Q1 (March)", what: "Salary band disclosure", owner: "Operations lead" },
                  { when: "Quarterly", what: "Good news donor email", owner: "Diaspora lead" },
                  { when: "Quarterly", what: "Board meeting minutes published within 30 days", owner: "Board secretary" },
                  { when: "Annually", what: "Programme outcomes refresh on programme pages", owner: "Programme director" },
                  { when: "Annually", what: "Safeguarding incident log summary", owner: "Safeguarding lead" },
                  { when: "Ongoing", what: "7-day reply on volunteer/partner/donor enquiries", owner: "All teams" },
                ].map((r) => (
                  <tr key={r.what} style={{ borderBottom: "1px solid var(--color-slate-200)" }}>
                    <td style={{ padding: "var(--space-3) var(--space-4)", fontWeight: 600 }}>{r.when}</td>
                    <td style={{ padding: "var(--space-3) var(--space-4)" }}>{r.what}</td>
                    <td style={{ padding: "var(--space-3) var(--space-4)", color: "var(--color-slate-500)" }}>{r.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="micro" style={{ marginTop: "var(--space-7)" }}>
            Questions? <a href="mailto:hello@joslyndivine.com">hello@joslyndivine.com</a> &mdash; real reply within seven days.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Read more</p>
          <h2>Three ways to be part of this.</h2>
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
