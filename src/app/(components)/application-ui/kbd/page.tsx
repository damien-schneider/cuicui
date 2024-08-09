import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import ModernDetailedKbdVariant1 from "./modern-detailed-kbd/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <ModernDetailedKbdVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "kbd",
              variantName: "modern-detailed-kbd/variant1",
            }),
          },
        ]}
        title="Modern Mac Kbd"
        description=""
      />
    </>
  );
}
