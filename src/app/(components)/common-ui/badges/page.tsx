import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import AdvancedBadgesVariant1 from "./advanced-badges/variant1";

import { BadgeSimpleVariantAmber } from "./modern-simple-badges/variant1";
import { BadgeSimpleVariantRed } from "./modern-simple-badges/variant2";

const BASE_COMPONENT_PATH =
  "./src/app/(components)/marketing-components/features/";
export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Amber",
            component: <BadgeSimpleVariantAmber />,
            code: await getFileContentAsString({
              componentSlug: "badges",
              variantName: "modern-simple-badges/variant1",
            }),
          },
          {
            variantName: "Red",
            component: <BadgeSimpleVariantRed />,
            code: await getFileContentAsString({
              componentSlug: "badges",
              variantName: "modern-simple-badges/variant2",
            }),
          },
        ]}
        title="Badge"
        description="Simple modern badge that can be used in any project with any artisitic style."
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <AdvancedBadgesVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "badges",
              variantName: "advanced-badges/variant1",
            }),
          },
        ]}
        title="Advanced Badges"
        description="Advanced badges that can be used in any project with any artisitic style."
      />
    </>
  );
}
