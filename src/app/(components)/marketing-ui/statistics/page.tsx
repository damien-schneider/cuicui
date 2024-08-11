import ComingSoonCard from "#/src/components/coming-soon";
import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { AnimatedNumberVariant1 } from "./animated-on-scroll/variant1";

export default async function Page() {
  return (
    <FullComponent
      size="sm"
      componentList={[
        {
          variantName: "Variant 1",
          component: <AnimatedNumberVariant1 />,
          code: await getFileContentAsString({
            componentSlug: "statistics",
            variantName: "/animated-on-scroll/variant1",
          }),
        },
      ]}
      isIframed={true}
      // isChildUsingHeightFull={true}
      rerenderButton
      title="Animated numbers"
      description="Show numbers that animate when they appear on the screen."
      librariesBadges={[]}
    />
  );
}
