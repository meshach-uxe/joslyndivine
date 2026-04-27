import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { DonatePanel } from "./DonatePanel";

export const metadata = buildMetadata(ROUTES.donate);

export default function DonatePage() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "var(--space-8)", alignItems: "start" }}>
          <div>
            <p className="eyebrow page-hero__eyebrow">Give</p>
            <h1>Every monthly partner keeps a child in school.</h1>
            <p className="page-hero__lede">
              For the price of two coffees a week, you can fund a school term, a roof, and a mentor for one child
              in Kroo Bay or Susan&rsquo;s Bay.
            </p>

            <p className="pull">
              &ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really me.&rdquo; &mdash; Aminata, Class 6
            </p>

            <div style={{ marginTop: "var(--space-6)" }}>
              <div className="stat">
                <div className="stat__num">23</div>
                <div className="stat__label">children promoted to the next grade in 2024</div>
                <div className="stat__source">Source: JDF Program Records, 2024.</div>
              </div>
            </div>

            <div style={{ marginTop: "var(--space-6)" }}>
              <Link href="/stories/aminata" className="btn btn--tertiary">Read Aminata&rsquo;s story &rarr;</Link>
            </div>
          </div>

          <div>
            <div className="alert" role="status">
              <strong>Heads up:</strong> Card and crypto giving is being finalised. Bank transfers, mobile money, and direct contact are working today &mdash; see <a href="#how-to-give-now">How to give right now</a>.
            </div>
            <DonatePanel />
          </div>
        </div>
      </section>

      {/* CHANNELS BAND */}
      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">How money reaches us</p>
            <h2>Four channels. Plain language. No surprises.</h2>
            <p>
              We accept any of these. Mobile money is fastest in-country; bank is fastest from outside; card is
              the most popular; crypto is for those who give in crypto.
            </p>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
            <div className="card">
              <h3 className="card__title">Card / PayPal</h3>
              <p className="card__body">Default for most donors. Receipt arrives in 5 minutes.</p>
              <p className="micro"><strong>Fees:</strong> ~2.9% + 30¢ &middot; <strong>Confirmation:</strong> 5 min</p>
            </div>
            <div className="card">
              <h3 className="card__title">Bank transfer</h3>
              <p className="card__body">Lowest fees. Best for larger gifts and recurring grants.</p>
              <p className="micro"><strong>Fees:</strong> 0&ndash;1% &middot; <strong>Confirmation:</strong> 1&ndash;3 days</p>
            </div>
            <div className="card">
              <h3 className="card__title">Mobile money</h3>
              <p className="card__body">Orange Money and Africell Money. Fastest in Sierra Leone.</p>
              <p className="micro"><strong>Fees:</strong> 2&ndash;4% &middot; <strong>Confirmation:</strong> 10 min</p>
            </div>
            <div className="card">
              <h3 className="card__title">Crypto</h3>
              <p className="card__body">BTC, ETH, USDC. We hold no crypto reserves; converted on receipt.</p>
              <p className="micro"><strong>Fees:</strong> Network only &middot; <strong>Confirmation:</strong> 10&ndash;30 min</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <section className="section section--dark">
        <div className="container">
          <div className="three">
            <div>
              <h3 className="h3" style={{ color: "#fff" }}>Sierra Leone NGO</h3>
              <p>Registered nonprofit in Sierra Leone. Reg number visible on the Accountability page.</p>
            </div>
            <div>
              <h3 className="h3" style={{ color: "#fff" }}>US 501(c)(3) via fiscal sponsor</h3>
              <p>US donors: your gift is <strong style={{ color: "var(--color-amber)" }}>tax-deductible</strong> through our fiscal sponsor.</p>
            </div>
            <div>
              <h3 className="h3" style={{ color: "#fff" }}>Radical accountability</h3>
              <p>Where the money goes, what we do not do, and the financial report &mdash; all on one page.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GIVE RIGHT NOW — frontend-phase holding pattern */}
      <section id="how-to-give-now" className="section section--wash" aria-labelledby="how-now-title">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Working today</p>
            <h2 id="how-now-title">How to give right now</h2>
            <p>
              Our card and crypto processors are being finalised. While we put them in place, here&rsquo;s how you
              can give today &mdash; every method below is fully working.
            </p>
          </div>

          <div className="story-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <div className="card">
              <p className="card__eyebrow">Bank transfer</p>
              <h3 className="card__title">Bank transfer</h3>
              <dl className="micro" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-2) var(--space-4)", margin: 0 }}>
                <dt><strong>Account name</strong></dt><dd>Joslyn Divine Foundation</dd>
                <dt><strong>Bank</strong></dt><dd>[Bank name pending]</dd>
                <dt><strong>Account number</strong></dt><dd>[Account number pending]</dd>
                <dt><strong>SWIFT / BIC</strong></dt><dd>[SWIFT pending]</dd>
                <dt><strong>Reference</strong></dt><dd>Your name + &ldquo;JDF&rdquo;</dd>
              </dl>
            </div>

            <div className="card">
              <p className="card__eyebrow">In Sierra Leone</p>
              <h3 className="card__title">Mobile money</h3>
              <dl className="micro" style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-2) var(--space-4)", margin: 0 }}>
                <dt><strong>Orange Money</strong></dt><dd>[Number pending]</dd>
                <dt><strong>Africell Money</strong></dt><dd>[Number pending]</dd>
                <dt><strong>Recipient</strong></dt><dd>Joslyn Divine Foundation</dd>
                <dt><strong>Reference</strong></dt><dd>Your name</dd>
              </dl>
            </div>

            <div className="card">
              <p className="card__eyebrow">On-chain</p>
              <h3 className="card__title">Crypto</h3>
              <p className="card__body">Send BTC, ETH, or USDC to:</p>
              <code style={{ display: "block", padding: "var(--space-3)", background: "var(--color-slate-100)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontSize: 13, wordBreak: "break-all" }}>
                [Wallet address pending]
              </code>
              <p className="micro" style={{ marginTop: "var(--space-3)" }}>
                Email <a href="mailto:founder@joslyndivine.com">founder@joslyndivine.com</a> with the transaction
                hash so we can issue a US tax-deductible receipt via our 501(c)(3) fiscal sponsor.
              </p>
            </div>

            <div className="card card--highlight">
              <p className="card__eyebrow">Direct line</p>
              <h3 className="card__title">Want to talk first?</h3>
              <p className="card__body">Write directly to the founder. Real reply within seven days.</p>
              <a href="mailto:founder@joslyndivine.com" className="btn btn--primary">Email Mrs. Wright-Hook</a>
            </div>
          </div>

          <p className="micro" style={{ marginTop: "var(--space-7)" }}>
            Card and PayPal will be live within [timeline placeholder]. Subscribe to our updates for the launch announcement.
          </p>
        </div>
      </section>
    </>
  );
}
