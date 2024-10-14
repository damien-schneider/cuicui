import { CreativeCommonsIcon } from "lucide-react";
import type { CategoryType } from "#/src/lib/types/component";
import PreviewBottomBlurOut from "#/src/ui/cuicui/other/creative-effects/bottom-blur-out/preview.bottom-blur-out";
import { bottomBlurOutComponent } from "#/src/ui/cuicui/other/creative-effects/bottom-blur-out/component.bottom-blur-out";

export const creativeEffectCategory: CategoryType = {
  slug: "creative-effects",
  name: "Creative Effects",
  description:
    "An all bunch of creative effects that can be used in any project with any artisitic style",
  releaseDateCategory: new Date("2024-07-21"),
  icon: CreativeCommonsIcon,
  previewCategory: {
    component: <PreviewBottomBlurOut />,
    previewScale: 1,
  },
  componentList: [bottomBlurOutComponent],
};
