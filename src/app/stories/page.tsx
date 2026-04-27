import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { StoriesGrid } from "./StoriesGrid";

export const metadata = buildMetadata(ROUTES.stories);

export default function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="From the children of Kroo Bay and Susan&rsquo;s Bay."
        lede="Real names. Real photographs. With consent on file. We never use a child's image to sell despair, and we never publish a story without the guardian and the child agreeing — section by section."
      />
      <section className="section section--white">
        <div className="container">
          <StoriesGrid />
        </div>
      </section>
    </>
  );
}
