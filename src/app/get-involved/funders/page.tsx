import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";

export const metadata = buildMetadata(ROUTES.funders);

export default function FundersPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ padding: "var(--space-5)", fontSize: 14, color: "var(--color-slate-500)" }}>
        <Link href="/get-involved">Get involved</Link> &middot;{" "}
        <span aria-current="page" style={{ color: "var(--color-slate-900)" }}>Funders</span>
      </nav>

      <PageHero
        eyebrow="Funders"
        title="Invest in a generation, not a transaction."
        lede="A monthly partner is the most useful kind of donor we have. It is what lets us promise a child a full school year — not just a term — and tell them the promise will hold."
      />

      <section className="section section--white">
        <div className="container pg-split pg-split--15">
          <div>
            <p className="eyebrow">Why monthly</p>
            <h2>A school year is twelve months long. So is your gift.</h2>
            <p style={{ fontSize: 18, color: "var(--color-slate-700)" }}>
              One-time gifts move work forward. Monthly gifts make work possible to plan.
            </p>
            <p>
              School fees come quarterly. Rent comes monthly. A mentor&rsquo;s stipend comes weekly. None of it stops
              because a fundraising cycle ended. We need income that behaves the way our costs behave &mdash; which is,
              every month, on time.
            </p>
            <p>
              When we know the money is coming in, we can keep promises to children. We can sign a year&rsquo;s lease.
              We can hire a full-time tutor. We can tell a parent, in May, that their daughter will be back at school
              in September. That promise is what monthly support buys.
            </p>
            <p>
              You can pause, change, or stop your gift any time, from the receipt email or by writing to us. No phone
              calls, no retention scripts.
            </p>
            <p className="pull">
              A monthly $20 gift is more useful to us than a one-time $240 gift, even though the total is the same.
            </p>
          </div>

          <aside className="card card--highlight" aria-label="Monthly vs one-time">
            <h3 className="card__title">What $20 a month buys</h3>
            <dl className="micro" style={{ display: "grid", gap: "var(--space-2)", margin: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dt>School fees, term 1</dt><dd>·</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dt>School fees, term 2</dt><dd>·</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dt>Uniform &amp; books</dt><dd>·</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dt>Transport, half a year</dt><dd>·</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <dt>One mentor session/week</dt><dd>·</dd>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-4)", borderTop: "2px solid var(--color-amber-dk)", fontFamily: "var(--font-display)", fontSize: 16 }}>
                <dt><strong>One child, one school year</strong></dt><dd><strong>$240</strong></dd>
              </div>
            </dl>
            <Link href="/donate?freq=monthly&amt=20" className="btn btn--secondary" style={{ marginTop: "var(--space-5)" }}>
              Start a $20 monthly gift &rarr;
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Four ways to give</p>
            <h2>Pay the way that works for you, wherever you are.</h2>
            <p>
              Sierra Leone, the diaspora, the United States, Europe &mdash; we accept gifts through four channels, no
              matter the currency or the platform.
            </p>
          </div>

          <div className="story-grid story-grid--4">
            <article className="card">
              <h3 className="card__title">Card &amp; PayPal</h3>
              <p className="card__body">
                Visa, Mastercard, Amex, and PayPal. Most-used channel for international donors. Receipts within minutes.
              </p>
              <p className="micro">Currencies: USD · GBP · EUR<br />Fees: ~2.9% + $0.30</p>
              <Link href="/donate" className="btn btn--primary btn--sm" style={{ marginTop: "var(--space-3)" }}>Give by card &rarr;</Link>
            </article>
            <article className="card">
              <h3 className="card__title">Bank transfer</h3>
              <p className="card__body">
                ACH, SWIFT, or domestic transfer. Lowest fees on large gifts. Best route for most match-funded employer gifts.
              </p>
              <p className="micro">Currencies: USD · GBP · EUR · SLE<br />Fees: 0&ndash;1%</p>
              <Link href="/donate#how-to-give-now" className="btn btn--secondary btn--sm" style={{ marginTop: "var(--space-3)" }}>See bank details &rarr;</Link>
            </article>
            <article className="card">
              <h3 className="card__title">Mobile money</h3>
              <p className="card__body">
                Orange Money and Africell Money. The first choice for donors inside Sierra Leone and across West Africa. Instant.
              </p>
              <p className="micro">Currencies: SLE<br />Fees: provider-set, ~1&ndash;3%</p>
              <Link href="/donate#how-to-give-now" className="btn btn--secondary btn--sm" style={{ marginTop: "var(--space-3)" }}>Give by mobile &rarr;</Link>
            </article>
            <article className="card">
              <h3 className="card__title">Crypto</h3>
              <p className="card__body">
                BTC, ETH, USDC, and select stablecoins. Useful for very large gifts and for donors holding crypto wealth.
              </p>
              <p className="micro">Currencies: BTC · ETH · USDC<br />Fees: network gas only</p>
              <Link href="/donate#how-to-give-now" className="btn btn--secondary btn--sm" style={{ marginTop: "var(--space-3)" }}>Give in crypto &rarr;</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow" style={{ color: "var(--color-amber)" }}>Where your money goes</p>
            <h2>Every category, accounted for, on a single page.</h2>
            <p>
              We publish a yearly accountability report &mdash; what came in, what went out, by category &mdash;
              refreshed every Q1. No glossy photographs of yachts. Just a single, plain page.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-7)" }}>
            <div className="stat">
              <div className="stat__num">100%</div>
              <div className="stat__label">of donor gifts directed to programs after processor fees</div>
              <div className="stat__source">Source: Accountability page, Q1 2026.</div>
            </div>
            <div className="stat">
              <div className="stat__num">3 yrs</div>
              <div className="stat__label">we have published a public accountability report every year since 2023</div>
              <div className="stat__source">Source: JDF Annual Report archive.</div>
            </div>
            <div className="stat">
              <div className="stat__num">$0</div>
              <div className="stat__label">spent on paid acquisition or fundraising commissions in 2024</div>
              <div className="stat__source">Source: JDF Annual Report 2024.</div>
            </div>
          </div>
          <div style={{ marginTop: "var(--space-7)" }}>
            <Link href="/accountability" className="btn btn--inverse btn--lg">Read the full accountability page &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
