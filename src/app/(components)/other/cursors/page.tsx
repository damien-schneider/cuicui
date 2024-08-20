import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import DynamicCardsVariant1 from "./dynamic-cards/variant1";
import DynamicCardsVariant2 from "./dynamic-cards/variant2";
import FollowCursorVariant1 from "./follow-cursor/variant1";
import FollowCursorVariant2 from "./follow-cursor/variant2";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Replace cursor",
            component: <FollowCursorVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "follow-cursor/variant1",
            }),
          },
          {
            variantName: "Keeping cursor",
            component: <FollowCursorVariant2 />,
            previewCode: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "follow-cursor/variant2",
            }),
          },
        ]}
        isResizable={false}
        isIframed={false}
        isChildUsingHeightFull
        title="Cursor following effect"
        description="A cursor following effect that can be used in any project with any artisitic style"
        componentBadges={["prefer-desktop"]}
      />
      <FullComponent
        size="md"
        componentList={[
          {
            variantName: "Gradient background",
            component: <DynamicCardsVariant2 />,
            previewCode: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "dynamic-cards/variant2",
            }),
          },
          {
            variantName: "Border only",
            component: <DynamicCardsVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "cursors",
              variantName: "dynamic-cards/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Grid with cursor following border"
        description="A grid of cards with a cursor following border effect"
        componentBadges={["prefer-desktop"]}
        isResizable={false}
      />
    </>
  );
}
