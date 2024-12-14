import { GripIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { DotsPatternPreview } from "@/cuicui/other/patterns/dots-pattern/dots-pattern-preview";
import MovingBandsPreview from "@/cuicui/other/patterns/moving-bands/moving-bands-preview";
import { gridPatternComponent } from "@/cuicui/other/patterns/grid-pattern/component";
export const patternsCategory: CategoryType = {
  slug: "patterns",
  name: "Patterns",
  description:
    "Create patterns without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
  releaseDateCategory: new Date("2024-08-10"),
  icon: GripIcon,
  componentList: [
    {
      sizePreview: "sm",
      slug: "dots-pattern",
      name: "Simple dots pattern",
      description:
        "Create a simple dots pattern without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
      variantList: [
        {
          name: "Variant 1",
          component: DotsPatternPreview,
          slugPreviewFile: "dots-pattern-preview",
          slugComponentFile: "dots-pattern",
        },
      ],
      inspiration: "Magic UI",
      inspirationLink: "https://magicui.design/docs/components/dot-pattern",
    },
    gridPatternComponent,
    {
      sizePreview: "sm",
      slug: "moving-bands",

      name: "Moving bands pattern",
      description:
        "Create a moving bands pattern without images, just with CSS and HTML for better performance.",
      variantList: [
        {
          name: "Variant 1",
          component: MovingBandsPreview,
          slugComponentFile: "moving-bands",
          slugPreviewFile: "moving-bands-preview",
        },
      ],
      // inspiration: "Magic UI",
      // inspirationLink: "https://magicui.design/docs/components/dot-pattern",
    },
  ],
};

export default patternsCategory;
