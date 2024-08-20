import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import BeforeEffectButtonVariant1 from "./before-effect-button/variant1";
import BeforeEffectButtonVariant2 from "./before-effect-button/variant2";
import GrowingButtonVariant1 from "./growing-button/variant1";
import ModernAnimatedButtonVariant1 from "./modern-animated-button/variant1";
import ShinyRotatingBorderButtonVariant1 from "./shiny-rotating-border-button/variant1";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Amber",
            component: <GrowingButtonVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "growing-button/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Button"
        description="Simple button with icon which grows on hover. Perfect for having small rarelly used buttons replacing an old tooltip."
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Default",
            component: <BeforeEffectButtonVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "before-effect-button/variant1",
            }),
          },
          {
            variantName: "Advanced button",
            component: <BeforeEffectButtonVariant2 />,
            previewCode: await getFileContentAsString({
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
            previewCode: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "shiny-rotating-border-button/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Shiny rotating border button"
        description="Button with a shiny rotating border effect."
      />
      <FullComponent
        size="xs"
        componentList={[
          {
            variantName: "Shiny rotating border button",
            component: <ModernAnimatedButtonVariant1 />,
            previewCode: await getFileContentAsString({
              componentSlug: "buttons",
              variantName: "shiny-rotating-border-button/variant1",
            }),
          },
        ]}
        isIframed={false}
        title="Shiny rotating border button"
        description="Button with a shiny rotating border effect."
      />
    </>
  );
}
