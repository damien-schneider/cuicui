import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { ModernInnerShadowCardVariant1 } from "./modern-inner-shadow/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Variant 1",
            component: <ModernInnerShadowCardVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "cards",
              variantName: "modern-inner-shadow/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Modern inner shadow card"
        description="A card that showcases a set of tools that you use to create your product."
        componentBadges={["better-in-dark-mode"]}
      />
    </>
  );
}
