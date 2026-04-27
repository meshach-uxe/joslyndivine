import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { ProgramDetail, StoriesEmpty } from "@/components/ProgramDetail";

export const metadata = buildMetadata(ROUTES.shelter);

export default function ShelterPage() {
  return (
    <ProgramDetail
      eyebrow="Shelter"
      title="Shelter."
      lede="Safe housing for children at risk, with families wherever possible. Kinship care first, group housing only when no kinship option is safe."
      what={{
        heading: "Family stability, not orphanages.",
        body: (
          <>
            <p>
              The best place for a child is with people who already love them. When a child needs shelter, our first
              question is never &ldquo;where will we put them?&rdquo; &mdash; it is &ldquo;who in their family can keep
              them safe, and what would it take to make that work?&rdquo;
            </p>
            <p>
              Kinship care &mdash; placement with an aunt, an uncle, a grandparent, an older sibling &mdash; preserves
              the threads of a child&rsquo;s life: the language at home, the neighbours, the school they were already
              attending. We support those families with a monthly stipend, a case-worker check-in, and the school
              continuity that keeps a hard year from becoming a lost decade.
            </p>
            <p>
              We do not run an orphanage. We do not aspire to. The research on institutional care is unambiguous, and
              the children of Kroo Bay and Susan&rsquo;s Bay deserve the option that actually works.
            </p>
          </>
        ),
      }}
      stepsHeading="Three steps. Family-first, every time."
      steps={[
        { title: "Assess", body: "A case-worker visits the child and maps their family — who is alive, who is reachable, who is willing, who is safe. The map is the foundation of every placement decision." },
        { title: "Place", body: "Where a kinship match exists, we support the placement with a monthly stipend, equipment for the home, and a written agreement that names the child's needs. Group housing is used only when no kinship option is safe." },
        { title: "Support", body: "Monthly check-in by the case-worker. School continuity arranged so the placement does not interrupt education. The placement is reviewed quarterly with the family and the child." },
      ]}
      outcomes={[
        { num: "11", label: "children placed in 2024", source: "Source: JDF Program Records, 2024." },
        { num: "9 of 11", label: "placed in kinship care", source: "Source: JDF Program Records, 2024." },
        { num: "0", label: "institutional placements", source: "Source: JDF Program Records, 2024." },
      ]}
      story={<StoriesEmpty />}
    />
  );
}
