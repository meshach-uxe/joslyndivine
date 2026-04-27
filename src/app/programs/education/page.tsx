import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ProgramDetail } from "@/components/ProgramDetail";

export const metadata = buildMetadata(ROUTES.education);

export default function EducationPage() {
  return (
    <>
      <ProgramDetail
        eyebrow="Education"
        title="Educate."
        lede="Term-by-term support that keeps a child in school — fees, books, uniforms, transport, and a real library to read in. We follow each child for years, not for a campaign cycle."
        what={{
          heading: "Education the way it actually has to work.",
          body: (
            <>
              <p>
                The most expensive part of a Sierra Leonean child&rsquo;s education is not the school fees. It is the
                small line items that turn a school year into a sequence of impossible weeks: the lost uniform, the
                broken sandals, the bus fare that was needed for medicine instead.
              </p>
              <p>
                We pay for the small line items, because they decide whether a child goes to school on Wednesday. We
                pay for the school fees, because they decide whether a child goes to school in September. We pay for
                the books and the library, because they decide whether reading becomes a habit. And we pay for it all
                on a calendar the child can rely on, because predictability is the difference between a one-year
                intervention and a generation&rsquo;s worth of compound returns.
              </p>
              <blockquote>
                &ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really
                me.&rdquo; &mdash; Aminata, Class 6
              </blockquote>
              <p>
                Our education program is delivered in partnership with three primary schools in Kroo Bay and
                Susan&rsquo;s Bay, with a JDF-run after-school library that opens five days a week. Mentors check in
                weekly. Guardians get a quarterly conversation, not a quarterly form.
              </p>
              <p>
                We do not run a school. We run the wraparound that lets the schools that already exist actually do
                their job for these children.
              </p>
            </>
          ),
        }}
        stepsHeading="Six steps. Each one repeats every term."
        stepsLede="Predictability is the design choice. The cycle below runs three times a year, every year, for as long as a child is in our program."
        steps={[
          { title: "Identify", body: "A child is referred by a teacher, a community elder, a JDF mentor, or a guardian. Every referral is logged in our consent register before any conversation continues." },
          { title: "Enrol", body: "Guardian sits with a JDF staff member, signs the Guardian Consent Form, and confirms which boxes they have ticked. The form is the door — nothing happens before it." },
          { title: "Resource", body: "School fees paid directly to the school. Books, uniforms, transport disbursed for the term. Receipts retained, summary shared with the guardian." },
          { title: "Mentor", body: "Child is paired with a trained local mentor, weekly contact, year-long minimum commitment." },
          { title: "Read", body: "Library access five afternoons a week. Children check out books, log their reading, and meet other children in the program." },
          { title: "Review", body: "Quarterly check-in with the guardian and mentor. Outcomes are recorded — promotion, attendance, reading progress — and used to update next term's plan." },
        ]}
        outcomes={[
          { num: "23", label: "children promoted to the next grade in 2024", source: "Source: JDF Program Records, 2024." },
          { num: "94%", label: "attendance rate among program children, 2024", source: "Source: JDF Program Records, 2024." },
          { num: "47", label: "books in the JDF community library", source: "Source: Library log, March 2026." },
          { num: "3.2 yrs", label: "average length of program participation", source: "Source: JDF Program Records, 2024." },
        ]}
        story={(
          <section className="section section--wash">
            <div className="container">
              <div className="section__head">
                <p className="eyebrow">From this program</p>
                <h2>Meet Aminata.</h2>
                <p>Real name, with consent. Real photograph, taken with consent. Two grades ahead by the end of her second year in the program.</p>
              </div>
              <article className="story">
                <div className="story__image" role="img" aria-label="Aminata, age 12, reading at the JDF community library in Kroo Bay." />
                <div className="story__copy">
                  <h3 className="story__name">Aminata</h3>
                  <p className="story__meta">Class 6 · 6 minute read · April 2026</p>
                  <p className="story__quote">&ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really me.&rdquo;</p>
                  <p className="story__body">
                    Aminata joined the JDF education program in 2023. By the end of her second year she had read 47
                    books from the community library and was promoted two grades ahead of her age cohort.
                  </p>
                  <Link href="/stories/aminata" className="btn btn--secondary">Read Aminata&rsquo;s story</Link>
                </div>
              </article>
            </div>
          </section>
        )}
      />
    </>
  );
}
