import Link from "next/link";

export function ThreeRolesStrip() {
  return (
    <div className="three">
      <article className="role">
        <p className="eyebrow role__eyebrow">Funders</p>
        <h3 className="role__title">Invest in a generation, not a transaction.</h3>
        <p className="role__body">Predictable monthly support keeps a child in school, a roof over their head, and a mentor in their corner. We tell you where every gift goes.</p>
        <Link href="/get-involved/funders" className="role__cta">Become a monthly partner &rarr;</Link>
      </article>
      <article className="role">
        <p className="eyebrow role__eyebrow">Volunteers</p>
        <h3 className="role__title">Build with us.</h3>
        <p className="role__body">In Freetown or remotely. Bring time, skill, or both. We respond to every application within seven days, and we never waste a volunteer&rsquo;s time.</p>
        <Link href="/get-involved/volunteers" className="role__cta">Apply to volunteer &rarr;</Link>
      </article>
      <article className="role">
        <p className="eyebrow role__eyebrow">Partners</p>
        <h3 className="role__title">Amplify what we already do.</h3>
        <p className="role__body">Schools, corporates, faith communities, and other NGOs &mdash; we run programs better when we run them with you.</p>
        <Link href="/get-involved/partners" className="role__cta">Start a partnership conversation &rarr;</Link>
      </article>
    </div>
  );
}
