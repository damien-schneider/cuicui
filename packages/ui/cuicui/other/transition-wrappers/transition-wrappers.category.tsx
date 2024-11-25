import { BringToFrontIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";

import BlurAppearVariant1 from "@/cuicui/other/transition-wrappers/blur-appear/variant1";
import { SlideInOnScrollComponent } from "@/cuicui/other/transition-wrappers/slide-in-on-scroll/slide-in-on-scroll.component";
import { textEffectWrapperComponent } from "@/cuicui/other/transition-wrappers/text-effect-wrapper/component.text-effect-wrapper";

export const transitionWrappersCategory: CategoryType = {
  slug: "transition-wrappers",
  name: "Transition wrappers",
  description:
    "Create transition wrappers to animate any component without changing your code",
  releaseDateCategory: new Date("2024-07-29"),
  icon: BringToFrontIcon,
  componentList: [
    {
      name: "Blur appear",
      description:
        "A transition wrapper that makes a component appear with a blur effect",

      sizePreview: "sm",
      slug: "blur-appear",
      variantList: [
        {
          name: "Blur appear",
          component: <BlurAppearVariant1 />,
          slugPreviewFile: "variant1",
        },
      ],
      rerenderButton: true,
    },
    textEffectWrapperComponent,
    SlideInOnScrollComponent,
  ],
};
