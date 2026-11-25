import { buildMetadata } from "@/lib/metadata";
import { ROUTES } from "@/lib/routes";
import { PageHero } from "@/components/PageHero";
import { StoriesGrid } from "./StoriesGrid";

export const metadata = buildMetadata(ROUTES.stories);

export default function StoriesPage() {
  return (
    <div className="interior interior--stories">
      <PageHero
        eyebrow="Stories"
        tone="cream"
        title="From the children of Kroo Bay and Susan&rsquo;s Bay."
        lede="Real names, with consent on file. The photographs here are illustrative stock images. We never use a child's image to sell despair, and we never publish a story without the guardian and the child agreeing — section by section."
      />
      <section className="section section--white">
        <div className="container">
          <StoriesGrid />
        </div>
      </section>
    </div>
  );
}
