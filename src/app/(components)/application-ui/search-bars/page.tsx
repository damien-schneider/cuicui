import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import GrowingSearchVariant1 from "./growing-search/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "With press effect",
            component: <GrowingSearchVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "search-bars",
              variantName: "growing-search/variant1",
            }),
          },
        ]}
        title="Growing Search"
        description="Search bar that grows when focused"
      />
    </>
  );
}
