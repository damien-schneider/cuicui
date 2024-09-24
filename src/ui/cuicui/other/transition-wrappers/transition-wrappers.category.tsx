import { BringToFrontIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";

import BlurAppearVariant1 from "#/src/ui/cuicui/other/transition-wrappers/blur-appear/variant1";

export const transitionWrappersCategory: CategoryType = {
  slug: "transition-wrappers",
  name: "Transition wrappers",
  description:
    "Create transition wrappers to animate any component without changing your code",
  releaseDateCategory: new Date("2024-07-29"),
  icon: BringToFrontIcon,
  previewCategory: {
    component: <BlurAppearVariant1 />,
    previewScale: 0.75,
  },
  componentList: [
    {
      title: "Blur appear",
      description:
        "A transition wrapper that makes a component appear with a blur effect",
      isIframed: false,
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
  ],
};
