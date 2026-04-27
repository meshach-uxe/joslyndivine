import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ProgramDetail, StoriesEmpty } from "@/components/ProgramDetail";

export const metadata = buildMetadata(ROUTES.mentorship);

export default function MentorshipPage() {
  return (
    <ProgramDetail
      eyebrow="Mentorship"
      title="Mentor."
      lede="A trusted adult, every week, for years. Mentors are local, trained, and stay long enough to matter."
      what={{
        heading: "The cadence is what works. The relationship is what works.",
        body: (
          <>
            <p>
              A child does not need an inspiring guest speaker. A child needs an adult who will be there next Wednesday,
              and the Wednesday after that, and who will still be there a year from now when the child is having a bad
              week and does not know why.
            </p>
            <p>
              Our mentors are local: they live in the same community, speak the same Krio, and know the streets the
              children walk. They are trained in safeguarding and in listening &mdash; not in fixing. A mentor&rsquo;s
              job is not to advise. A mentor&rsquo;s job is to show up, and to remember.
            </p>
            <p>
              Pairings are one year minimum. Most last longer; the average pairing in our program is 3.2 years.
            </p>
          </>
        ),
      }}
      stepsHeading="Three steps. Recruit local, train carefully, stay."
      steps={[
        { title: "Recruit", body: "Mentors are recruited locally — through schools, faith communities, and word of mouth. References are checked. We do not accept short-term volunteers for this program." },
        { title: "Train", body: "Every mentor completes JDF safeguarding training and a listening-skills course before being paired. Refresher training runs twice a year." },
        { title: "Pair", body: "Each pairing is one year minimum, with weekly contact. Pairings are reviewed quarterly. If a pairing is not working, we change it — and we tell you we changed it." },
      ]}
      outcomes={[
        { num: "34", label: "active mentors", source: "Source: JDF Program Records, March 2026." },
        { num: "3.2 yrs", label: "average pairing length", source: "Source: JDF Program Records, 2024." },
        { num: "92%", label: "mentor retention rate", source: "Source: JDF Program Records, 2024." },
      ]}
      story={<StoriesEmpty />}
    />
  );
}
