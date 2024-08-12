import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import Modern3dKbdVariant1 from "./modern-3d-kbd/variant1";
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
        title="Simple keyboard Kbd"
        description="A simple keyboard Kbd with an effcect on hover and on pressed."
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <Modern3dKbdVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "kbd",
              variantName: "modern-3d-kbd/variant1",
            }),
          },
        ]}
        title="3D keyboard Kbd"
        description="A 3D keyboard Kbd with an effcect on hover and on pressed."
      />
    </>
  );
}
