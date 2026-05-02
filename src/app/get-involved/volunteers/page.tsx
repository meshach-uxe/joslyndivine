import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { VolunteerForm } from "@/components/VolunteerForm";

export const metadata = buildMetadata(ROUTES.volunteers);

export default function VolunteersPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ padding: "var(--space-5)", fontSize: 14, color: "var(--color-slate-500)" }}>
        <Link href="/get-involved">Get involved</Link> &middot;{" "}
        <span aria-current="page" style={{ color: "var(--color-slate-900)" }}>Volunteers</span>
      </nav>

      <PageHero
        eyebrow="Volunteers"
        title="Build alongside our team."
        lede="In Freetown or remotely. Bring time, skill, or both. We respond to every application within seven days, and we never waste a volunteer&rsquo;s time."
      />

      <section className="section section--white">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Three tracks</p>
            <h2>Pick the track that fits your life.</h2>
          </div>
          <div className="three">
            <article className="card">
              <p className="card__eyebrow">In-country</p>
              <h3 className="card__title">Freetown / Sierra Leone</h3>
              <p className="card__body">
                Tutor, mentor, or run a Saturday programme in Kroo Bay or Susan&rsquo;s Bay. Safeguarding clearance and
                a one-year minimum commitment.
              </p>
            </article>
            <article className="card">
              <p className="card__eyebrow">Remote</p>
              <h3 className="card__title">Skills-based, anywhere</h3>
              <p className="card__body">
                Design, writing, data, fundraising operations, web. We match the role to the skill you actually have.
              </p>
            </article>
            <article className="card">
              <p className="card__eyebrow">Through a partner</p>
              <h3 className="card__title">Your team, our brief</h3>
              <p className="card__body">
                Already part of a corporate volunteer programme or a partner NGO? We can route a JDF brief through
                your team&rsquo;s existing skills.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--wash">
        <div className="container pg-split pg-split--14r">
          <div>
            <p className="eyebrow">Apply</p>
            <h2>Tell us about you.</h2>
            <p>
              We respond to every application within seven days. If we don&rsquo;t have a brief that matches your
              skills today, we&rsquo;ll tell you, and hold the application until one comes up &mdash; we won&rsquo;t
              ghost you.
            </p>
            <p className="micro">
              Field marked Required must be filled. We never share your details with anyone outside JDF.
            </p>
          </div>

          <div className="card">
            <VolunteerForm />
          </div>
        </div>
      </section>
    </>
  );
}
