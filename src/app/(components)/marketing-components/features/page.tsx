import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { Variant1FeatureFourImages } from "./feature-four-images/variant1";

export default async function Page() {
  return (
    <FullComponent
      componentList={[
        {
          variantName: "test",
          component: <Variant1FeatureFourImages />,
          code: await getFileContentAsString({
            componentSlug: "features",
            variantName: "feature-four-images/variant1",
          }),
        },
      ]}
      title="Feature Four Images"
      description="Feature with four images"
    />
  );
}
