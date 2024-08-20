import ComingSoonCard from "#/src/components/coming-soon";
import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import ManyOffersVariant1 from "./many-offers/variant1";

export default async function Page() {
  return (
    <FullComponent
      size="lg"
      componentList={[
        {
          variantName: "Many offers",
          component: <ManyOffersVariant1 />,
          previewCode: await getFileContentAsString({
            componentSlug: "pricing-tables",
            variantName: "/many-offers/variant1",
          }),
        },
      ]}
      title="Pricing with many offers"
      description="A pricing table with a lot of offers"
      inspiration="Artlist"
      inspirationLink="https://artlist.io/pricing"
      librariesBadges={["lucide-react"]}
    />
  );
}
