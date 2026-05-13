import { Hero } from "@/components/hero";
import { LeadershipSection } from "@/components/leadership-section";
import { OfferingsSection } from "@/components/offerings-section";
import { ResearchSection } from "@/components/research-section";
import {
  appStoreDeveloper,
  leadership,
  productHighlights,
  researchHubs,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <OfferingsSection
        developer={appStoreDeveloper}
        highlights={productHighlights}
      />
      <ResearchSection hubs={researchHubs} />
      <LeadershipSection leadership={leadership} />
    </>
  );
}
