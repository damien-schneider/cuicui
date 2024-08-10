import React from "react";

import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { ElasticSliderVariant1 } from "./elastic-slider/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "variant1",
            component: <ElasticSliderVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "sliders",
              variantName: "elastic-slider/variant1",
            }),
          },
        ]}
        title="Elastic Slider"
        description="Smooth slider with scale effect"
        inspiration="Build UI"
        inspirationLink="https://buildui.com/recipes/elastic-slider"
      />
    </>
  );
}
