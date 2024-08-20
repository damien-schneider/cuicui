import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import PreviewCommandVariant1 from "./command/preview-variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <PreviewCommandVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "code",
              variantName: "command/preview-variant1",
            }),
            componentCode: await getFileContentAsString({
              componentSlug: "code",
              variantName: "command/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Command"
        description="A command component with a copy to clipboard button."
      />
    </>
  );
}
