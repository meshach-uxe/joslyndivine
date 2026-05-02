import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ThreeRolesStrip } from "@/components/ThreeRolesStrip";
import { StoryDrawer } from "./StoryDrawer";

export const metadata = buildMetadata(ROUTES.storyAminata);

export default function AminataPage() {
  return (
    <>
      <nav aria-label="Breadcrumb" className="container" style={{ padding: "var(--space-5)", fontSize: 14, color: "var(--color-slate-500)" }}>
        <Link href="/">Home</Link> &middot; <Link href="/stories">Stories</Link> &middot;{" "}
        <span aria-current="page" style={{ color: "var(--color-slate-900)" }}>Aminata</span>
      </nav>

      <section className="page-hero">
        <div className="container pg-split pg-split--11 pg-split--center">
          <div>
            <p className="eyebrow page-hero__eyebrow">Education</p>
            <h1>Aminata.</h1>
            <p className="page-hero__lede">
              Two grades ahead, 47 books read in two years, and the most patient mentor in Kroo Bay.
            </p>
            <p className="micro" style={{ marginTop: "var(--space-5)" }}>
              <strong>Class 6</strong> · age 12 &nbsp;·&nbsp;
              <strong>6 minute read</strong> &nbsp;·&nbsp;
              <strong>April 2026</strong> · by JDF storytellers
            </p>
          </div>
          <div className="hero__portrait" aria-hidden="true" style={{ height: 360 }} />
        </div>
      </section>

      <article className="section section--white">
        <div className="container" style={{ maxWidth: 720 }}>
          <div className="prose">
            <p style={{ fontSize: 22, lineHeight: 1.5, fontWeight: 500, marginBottom: "var(--space-7)" }}>
              The first time Aminata read a book on her own, she read it twice. Just to make sure it was really her.
            </p>

            <p>
              She was eight years old. The book was a slim paperback about a girl who builds a kite. Aminata remembers
              the kite better than she remembers the title. She remembers the colour of the kite. She remembers the
              wind. She remembers the moment the girl in the book got the kite to fly, and how it felt to read those
              lines without anyone helping her.
            </p>

            <p>
              That was three years ago. Aminata is twelve now. She has read forty-seven books from the JDF community
              library in Kroo Bay. She is in Class 6 &mdash; two grades ahead of where her age cohort sits &mdash; and
              she is studying for the secondary school entrance exam she will sit in October.
            </p>

            <blockquote>
              &ldquo;The first time I read a book on my own, I read it twice. Just to make sure it was really me.&rdquo;
            </blockquote>

            <p>
              Aminata joined the Joslyn Divine Foundation&rsquo;s education program in 2023. Her grandmother &mdash; Ya
              Hawa, who has raised Aminata since she was four &mdash; heard about the program from a neighbour, walked
              the half-mile to the JDF office, and asked whether her grand-daughter could be enrolled.
            </p>

            <p>
              The conversation that followed took an hour. Ya Hawa sat with a JDF staff member who read every line of
              the Guardian Consent Form aloud. They talked about photographs. They talked about whether
              Aminata&rsquo;s name would appear in donor letters, and which name. They talked about what would happen
              if Ya Hawa changed her mind in two years and wanted everything taken down. By the end of the
              conversation, Ya Hawa had ticked the boxes she was comfortable with, signed the form, and gone home with
              a duplicate copy.
            </p>

            <figure>
              <div className="hero__portrait" role="img" aria-label="Aminata at her desk in Class 6, with a stack of three library books beside her notebook." style={{ height: 320 }} />
              <figcaption className="micro" style={{ marginTop: "var(--space-3)" }}>
                Aminata in Class 6, March 2026. Photograph by JDF storytellers, with consent on file.
              </figcaption>
            </figure>

            <p>
              The first thing JDF paid for was Aminata&rsquo;s school fees for the next term. The second thing was a
              uniform. The third was a pair of sandals &mdash; sandals being, according to Ya Hawa, the single most
              expensive line item in any school year, because children outgrow them or lose them or break them or have
              them taken from them. The fourth thing was a library card.
            </p>

            <p>That was the thing that changed everything.</p>

            <p>
              The JDF community library opens five afternoons a week. It is a single room, painted off-white, with
              three rows of shelves and a long table that seats twelve children if they sit close. There is a mat in
              one corner where children can lie down to read if they want to. The librarian is a former primary-school
              teacher named Aunty Mariama, who has been doing the job for two years and who knows what every child in
              the program is reading at any given moment.
            </p>

            <p>
              Aminata read everything in the children&rsquo;s section in seven months. Then she read everything in the
              children&rsquo;s section a second time. Then Aunty Mariama gave her the first novel &mdash; a
              youth-edition adaptation of <em>Things Fall Apart</em> &mdash; and Aminata read that one twice as well,
              the second time more slowly.
            </p>

            <blockquote>
              &ldquo;She does not read the way the other children read. She reads the way someone reads who has been
              waiting their whole life to find out what reading is.&rdquo; &mdash; Aunty Mariama, JDF librarian
            </blockquote>

            <p>
              Reading made Aminata better at school. Better at school made her teachers notice her. Her teachers
              noticing her made her grandmother prouder, which made Ya Hawa walk back to the JDF office twice more
              that year &mdash; once to ask about a maths tutor, and once to ask whether the program would still be
              there in two years, when Aminata sat the entrance exam. The answer was yes.
            </p>

            <p>
              This is the part of the story that does not photograph well. There is no single moment to capture. There
              is no before-and-after. There is only a slow, deliberate accumulation of weeks in which a child was in
              school, reading, and supported &mdash; week after week, term after term, for almost three years.
            </p>

            <p>Predictability is not photogenic. But it is what works.</p>

            <p>
              In October, Aminata will sit the secondary school entrance exam. If she passes &mdash; and her teachers
              are confident that she will &mdash; JDF will pay for her secondary school fees, and the program will
              continue exactly as it has been: a quarterly check-in with Ya Hawa, a weekly visit from her mentor, and
              the library card that started everything.
            </p>

            <p>
              Ya Hawa was asked, recently, what she would say to someone who was thinking about supporting the program
              with a monthly gift. She thought for a moment, and then she said this:
            </p>

            <blockquote>
              &ldquo;Tell them they are not paying for one thing. They are paying for a whole long line of small
              things. The shoes, the books, the bus fare. Each one is small. But if you forget one, the child is not
              in school on Wednesday. So tell them: they are paying for Wednesday.&rdquo;
            </blockquote>
          </div>

          <p className="micro" style={{ borderTop: "1px solid var(--color-slate-200)", paddingTop: "var(--space-5)", marginTop: "var(--space-7)" }}>
            Story published with full consent of Aminata&rsquo;s guardian, Ya Hawa, and Aminata herself, signed under the
            JDF Guardian Consent Form on 14 February 2026. Photographs taken with the same consent. Aminata&rsquo;s real
            first name is used; her surname is not, by guardian request.
          </p>
        </div>
      </article>

      <section className="section section--wash">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Three ways to be part of this</p>
            <h2>Funders invest. Volunteers build. Partners amplify.</h2>
          </div>
          <ThreeRolesStrip />
        </div>
      </section>

      <StoryDrawer />
    </>
  );
}
