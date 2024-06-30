import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import GrowingButtonVariant1 from "./growing-button/variant1";

const BASE_COMPONENT_PATH =
  "./src/app/(components)/marketing-components/features/";
export default async function Page() {
  return (
    <FullComponent
      size="xs"
      componentList={[
        {
          variantName: "Amber",
          component: <GrowingButtonVariant1 />,
          code: await getFileContentAsString({
            componentSlug: "buttons",
            variantName: "growing-button/variant1",
          }),
        },
      ]}
      title="Button"
      description="Simple modern button that can be used in any project with any artisitic style."
    />
  );
}
