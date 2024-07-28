import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import BlurAppearVariant1 from "./blur-appear/variant1";

const BASE_COMPONENT_PATH =
  "./src/app/(components)/marketing-components/features/";
export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Blur appear",
            component: <BlurAppearVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "transition-wrappers",
              variantName: "blur-appear/variant1",
            }),
          },
        ]}
        librariesBadges={["framer-motion"]}
        rerenderButton
        title="Blur appear"
        description="A blur appear effect that can be used on any component with any artisitic style"
      />
    </>
  );
}
