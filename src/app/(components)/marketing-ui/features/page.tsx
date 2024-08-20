import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { AnimatedCardVariant1 } from "./animated-cards/variant1";
import { Variant1FeatureFourImages } from "./feature-four-images/variant1";
import { Variant2FeatureFourImages } from "./feature-four-images/variant2";

export default async function Page() {
  return (
    <>
      <FullComponent
        componentList={[
          {
            variantName: "Sober colors",
            component: <Variant1FeatureFourImages />,
            previewCode: await getFileContentAsString({
              componentSlug: "features",
              variantName: "feature-four-images/variant1",
            }),
          },
          {
            variantName: "Less animations with colors",
            component: <Variant2FeatureFourImages />,
            previewCode: await getFileContentAsString({
              componentSlug: "features",
              variantName: "feature-four-images/variant2",
            }),
          },
        ]}
        title="Feature Four Images"
        description="An auto-scrolling feature section with four images and text. It could be also used with videos or other content. Perfect to shocase in details multiple features of a product or service."
      />
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "test",
            component: <AnimatedCardVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "features",
              variantName: "animated-cards/variant1",
            }),
          },
        ]}
        title="Simple feature cards"
        description="Simple feature cards with icons, text, and buttons. Perfect for micro-interactions and lists of features."
        inspiration="Inspiration from UI Labs"
        inspirationLink="https://www.uilabs.dev/"
      />
    </>
  );
}
