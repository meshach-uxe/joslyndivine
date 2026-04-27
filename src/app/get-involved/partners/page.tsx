import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { PartnerForm } from "@/components/PartnerForm";

export const metadata = buildMetadata(ROUTES.partners);

export default function PartnersPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ padding: "var(--space-5)", fontSize: 14, color: "var(--color-slate-500)" }}>
        <Link href="/get-involved">Get involved</Link> &middot;{" "}
        <span aria-current="page" style={{ color: "var(--color-slate-900)" }}>Partners</span>
      </nav>

      <PageHero
        eyebrow="Partners"
        title="Amplify what we already do."
        lede="Schools, corporates, NGOs, and faith communities. Conversation-led, case-by-case partnerships in Sierra Leone and beyond."
      />

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Four kinds of partner</p>
            <h2>What partnership looks like in practice.</h2>
          </div>
          <div className="story-grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
            <article className="card">
              <p className="card__eyebrow">Schools</p>
              <h3 className="card__title">Twin a classroom.</h3>
              <p className="card__body">
                Pen-pal exchanges, class-to-class fundraisers, or a curriculum unit that teaches Sierra Leone alongside
                another country. We support the teacher with materials and a real correspondent on our side.
              </p>
            </article>
            <article className="card">
              <p className="card__eyebrow">Corporates</p>
              <h3 className="card__title">Workplace giving &amp; matches.</h3>
              <p className="card__body">
                Most US employers can match through our 501(c)(3) fiscal sponsor. We also run skills-based volunteering
                briefs for tech, design, and finance teams.
              </p>
            </article>
            <article className="card">
              <p className="card__eyebrow">NGOs</p>
              <h3 className="card__title">Shared programme delivery.</h3>
              <p className="card__body">
                Referrals, joint reporting, co-located services. Wherever an existing organisation already does well
                what we&rsquo;d otherwise have to build, we&rsquo;d rather work with them than against them.
              </p>
            </article>
            <article className="card">
              <p className="card__eyebrow">Faith communities</p>
              <h3 className="card__title">Collections, drives, pastoral support.</h3>
              <p className="card__body">
                A church, mosque, or faith group can run a collection, sponsor a child&rsquo;s school year, or organise
                a book drive. We accept gifts of all sizes, with proper acknowledgement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "var(--space-8)", alignItems: "start" }}>
          <div>
            <p className="eyebrow">Start the conversation</p>
            <h2>No application form. Just a real conversation.</h2>
            <p>
              Partnerships are case-by-case. Tell us who you are and what you&rsquo;re thinking, and we&rsquo;ll book a
              call. Real reply within seven days.
            </p>
            <p className="micro">
              Email us directly at <a href="mailto:partnerships@joslyndivine.com">partnerships@joslyndivine.com</a> if you prefer.
            </p>
          </div>
          <div className="card">
            <PartnerForm />
          </div>
        </div>
      </section>
    </>
  );
}
