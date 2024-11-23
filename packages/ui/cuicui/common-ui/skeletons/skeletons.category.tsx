import { BoxSelectIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { ClassicPulseVariant1 } from "@/cuicui/common-ui/skeletons/classic-pulse/variant1";
import { ShinyGradientSkeletonHorizontal } from "@/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient-horizontal";
import { ShinyGradientSkeletonVertical } from "@/cuicui/common-ui/skeletons/shiny-gradient/skeleton-shiny-gradient-vertical";

export const skeletonsCategory: CategoryType = {
  slug: "skeletons",
  name: "Skeletons",
  description: "Skeletons with various effects for loading states",
  releaseDateCategory: new Date("2024-08-01"),
  icon: BoxSelectIcon,
  previewCategory: {
    component: <ShinyGradientSkeletonHorizontal />,
    previewScale: 0.75,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "classic-pulse",

      variantList: [
        {
          name: "Classic Pulse",
          component: <ClassicPulseVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      name: "Classic Pulse Skeleton",
      description:
        "A simple skeleton with a classic pulse effect for loading states.",
      inspiration: "Shadcn/ui",
      inspirationLink: "https://ui.shadcn.com/docs/components/skeleton",
    },
    {
      sizePreview: "sm",
      slug: "shiny-gradient",

      variantList: [
        {
          name: "Horizontal",
          component: <ShinyGradientSkeletonHorizontal />,
          slugPreviewFile: "skeleton-shiny-gradient-horizontal",
          slugComponentFile: "skeleton-shiny-gradient",
        },
        {
          name: "Vertical",
          component: <ShinyGradientSkeletonVertical />,
          slugPreviewFile: "skeleton-shiny-gradient-vertical",
          slugComponentFile: "skeleton-shiny-gradient",
        },
      ],
      name: "Shiny Gradient Skeleton",
      description:
        "An advanced skeleton with a shiny gradient effect for loading states.",
      inspiration: "Delba",
      inspirationLink:
        "https://delba.dev/blog/animated-loading-skeletons-with-tailwind",
    },
  ],
};
