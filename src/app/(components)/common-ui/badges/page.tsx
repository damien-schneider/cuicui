import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import AdvancedBadgesVariant1 from "./advanced-badges/variant1";
import ClerkBadgeVariant1 from "./clerk-badge/variant1";

import { BadgeSimpleVariantAmber } from "./modern-simple-badges/variant1";
import { BadgeSimpleVariantRed } from "./modern-simple-badges/variant2";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Amber",
            component: <BadgeSimpleVariantAmber />,
            previewCode: await getFileContentAsString({
              componentSlug: "badges",
              variantName: "modern-simple-badges/variant1",
            }),
          },
          {
            variantName: "Red",
            component: <BadgeSimpleVariantRed />,
            previewCode: await getFileContentAsString({
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
            variantName: "default",
            component: <ClerkBadgeVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "badges",
              variantName: "clerk-badge/variant1",
            }),
          },
        ]}
        title="Clerk Badge"
        description="Simple modern badge that can be used in any project with any artisitic style."
        inspiration="Clerk"
        inspirationLink="https://clerk.com/docs"
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <AdvancedBadgesVariant1 />,
            previewCode: await getFileContentAsString({
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
