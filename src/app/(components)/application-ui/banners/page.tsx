import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import FloatingGrowingBannerVariant1 from "./floating-growing-banner/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "variant1",
            component: <FloatingGrowingBannerVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "banners",
              variantName: "floating-growing-banner/variant1",
            }),
            // componentCode: await getFileContentAsString({
            //   componentSlug: "code",
            //   variantName: "command/variant1",
            // }),
          },
        ]}
        isIframed={true}
        title="Floating Growing Banner"
        description="A floating growing banner component."
      />
    </>
  );
}
