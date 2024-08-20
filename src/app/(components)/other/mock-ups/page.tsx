import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import MacbookVariant1 from "./laptops/variant1";
import { GooglePixelVariant1 } from "./smartphone/variant1";
import { IPhone14ProVariant2 } from "./smartphone/variant2";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="lg"
        componentList={[
          {
            variantName: "Iphone 14",
            component: <IPhone14ProVariant2 />,
            previewCode: await getFileContentAsString({
              componentSlug: "mock-ups",
              variantName: "smartphone/variant2",
            }),
          },
          {
            variantName: "Google Pixel",
            component: <GooglePixelVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "mock-ups",
              variantName: "smartphone/variant1",
            }),
          },
        ]}
        isIframed
        isChildUsingHeightFull
        title="Smartphone mock-up"
        description="Create a smartphone mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions"
        inspiration="Devices CSS"
        inspirationLink="https://devicescss.xyz/phones.html#google-pixel-6-pro"
      />
      <FullComponent
        size="lg"
        componentList={[
          {
            variantName: "Macbook Pro",
            component: <MacbookVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "mock-ups",
              variantName: "laptops/variant1",
            }),
          },
        ]}
        isIframed
        isChildUsingHeightFull
        title="Laptop mock-up"
        description="Create a laptop mock-up with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions"
        inspiration="Devices CSS"
        inspirationLink="https://devicescss.xyz/phones.html#google-pixel-6-pro"
      />
    </>
  );
}
