import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import BeforeEffectButtonVariant1 from "./before-effect-button/variant1";
import BeforeEffectButtonVariant2 from "./before-effect-button/variant2";
import GrowingButtonVariant1 from "./growing-button/variant1";
import ShinyRotatingBorderButtonVariant1 from "./shiny-rotating-border-button/variant1";

const BASE_COMPONENT_PATH =
  "./src/app/(components)/marketing-components/features/";
export default async function Page() {
  return (
    <>
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
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Default",
            component: <BeforeEffectButtonVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "before-effect-button/variant1",
            }),
          },
          {
            variantName: "Advanced button",
            component: <BeforeEffectButtonVariant2 />,
            code: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "before-effect-button/variant2",
            }),
          },
        ]}
        title="Dynamic button hover effect"
        description="Button with a hover effect that have a 'before' effect."
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Shiny rotating border button",
            component: <ShinyRotatingBorderButtonVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "shiny-rotating-border-button/variant1",
            }),
          },
        ]}
        title="Shiny rotating border button"
        description="Button with a shiny rotating border effect."
      />
    </>
  );
}
