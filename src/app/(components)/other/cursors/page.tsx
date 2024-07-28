import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import DynamicCardsVariant1 from "./dynamic-cards/variant1";
import DynamicCardsVariant2 from "./dynamic-cards/variant2";
import FollowCursorVariant1 from "./follow-cursor/variant1";

const BASE_COMPONENT_PATH =
  "./src/app/(components)/marketing-components/features/";
export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Variant 1",
            component: <FollowCursorVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "follow-cursor/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Cursor following effect"
        description="A cursor following effect that can be used in any project with any artisitic style"
      />
      <FullComponent
        size="md"
        componentList={[
          {
            variantName: "Gradient background",
            component: <DynamicCardsVariant2 />,
            code: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "dynamic-cards/variant2",
            }),
          },
          {
            variantName: "Border only",
            component: <DynamicCardsVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "dynamic-cards/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Grid with cursor following border"
        description="A grid of cards with a cursor following border effect"
      />
    </>
  );
}
