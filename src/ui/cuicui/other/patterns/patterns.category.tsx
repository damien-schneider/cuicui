import { GripIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import { DotsPatternPreview } from "#/src/ui/cuicui/other/patterns/dots-pattern/dots-pattern-preview";
import MovingBandsPreview from "#/src/ui/cuicui/other/patterns/moving-bands/moving-bands-preview";
export const patternsCategory: CategoryType = {
  slug: "patterns",
  name: "Patterns",
  description:
    "Create patterns without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
  releaseDateCategory: new Date("2024-08-10"),
  icon: GripIcon,
  previewCategory: {
    component: <MovingBandsPreview />,
    previewScale: 1,
  },
  componentList: [
    {
      sizePreview: "sm",
      slug: "dots-pattern",
      isIframed: false,
      isChildUsingHeightFull: true,
      title: "Simple dots pattern",
      description:
        "Create a simple dots pattern without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
      variantList: [
        {
          name: "Variant 1",
          component: <DotsPatternPreview />,
          slugPreviewFile: "dots-pattern-preview",
          slugComponentFile: "dots-pattern",
        },
      ],
      inspiration: "Magic UI",
      inspirationLink: "https://magicui.design/docs/components/dot-pattern",
    },
    {
      sizePreview: "sm",
      slug: "moving-bands",
      isIframed: false,
      isChildUsingHeightFull: true,
      lastUpdatedDateComponent: new Date("2024-09-10"),
      title: "Moving bands pattern",
      description:
        "Create a moving bands pattern without images, just with CSS and HTML for better performance.",
      variantList: [
        {
          name: "Variant 1",
          component: <MovingBandsPreview />,
          slugComponentFile: "moving-bands",
          slugPreviewFile: "moving-bands-preview",
        },
      ],
      // inspiration: "Magic UI",
      // inspirationLink: "https://magicui.design/docs/components/dot-pattern",
    },
  ],
};
