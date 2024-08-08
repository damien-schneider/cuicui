import FullComponent from "#/src/components/full-component";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";
import { ClassicPulseVariant1 } from "./classic-pulse/variant1";
import { ShinyGradientSkeletonVariant1 } from "./shiny-gradient/variant1";
import { ShinyGradientVariant2 } from "./shiny-gradient/variant2";

export default async function Page() {
  return (
    <>
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Classic Pulse",
            component: <ClassicPulseVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "skeletons",
              variantName: "/classic-pulse/variant1",
            }),
          },
        ]}
        title="Classic Pulse Skeleton"
        description="A simple skeleton with a classic pulse effect for loading states"
        inspiration="Shadcn/ui"
        inspirationLink="https://ui.shadcn.com/docs/components/skeleton"
      />
      <FullComponent
        size="sm"
        componentList={[
          {
            variantName: "Horizontal",
            component: <ShinyGradientSkeletonVariant1 />,
            code: await getFileContentAsString({
              componentSlug: "skeletons",
              variantName: "/shiny-gradient/variant1",
            }),
          },
          {
            variantName: "Vertical",
            component: <ShinyGradientVariant2 />,
            code: await getFileContentAsString({
              componentSlug: "skeletons",
              variantName: "/shiny-gradient/variant2",
            }),
          },
        ]}
        title="Shiny Gradient Skeleton"
        description="An advanced skeleton with a shiny gradient effect for loading states"
        inspiration="Delba"
        inspirationLink="https://delba.dev/blog/animated-loading-skeletons-with-tailwind"
      />
    </>
  );
}
