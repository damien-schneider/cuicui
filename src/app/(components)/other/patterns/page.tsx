import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { DotsPatternVariant1 } from "./dots-pattern/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Variant 1",
            component: <DotsPatternVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "patterns",
              variantName: "dots-pattern/variant1",
            }),
          },
        ]}
        isIframed={false}
        isChildUsingHeightFull
        title="Simple dots pattern"
        description="Create a simple dots pattern without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions"
        inspiration="Magic UI"
        inspirationLink="https://magicui.design/docs/components/dot-pattern"
      />
    </>
  );
}
