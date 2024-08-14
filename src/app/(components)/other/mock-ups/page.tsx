import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import GooglePixelVariant1 from "./smartphone/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Google Pixel",
            component: <GooglePixelVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "mock-ups",
              variantName: "smartphone/variant1",
            }),
          },
        ]}
        isIframed={false}
        isChildUsingHeightFull
        title="Smartphone mock-up"
        description="Create a smartphone mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions"
        inspiration="Devices CSS"
        inspirationLink="https://devicescss.xyz/phones.html#google-pixel-6-pro"
      />
    </>
  );
}
