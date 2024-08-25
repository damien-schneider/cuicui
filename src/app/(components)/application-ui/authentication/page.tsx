import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import HalfSidedGlassMorphismAuthentication from "./half-sided-glassmorphism/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="lg"
        componentList={[
          {
            variantName: "variant1",
            component: <HalfSidedGlassMorphismAuthentication />,
            previewCode: await getFileContentAsString({
              componentSlug: "authentication",
              variantName: "half-sided-glassmorphism/variant1",
            }),
            // componentCode: await getFileContentAsString({
            //   componentSlug: "code",
            //   variantName: "command/variant1",
            // }),
          },
        ]}
        isIframed={true}
        title="Half Sided Glassmorphism Authentication"
        description="A half-sided glassmorphism authentication component."
      />
    </>
  );
}
