import { CreativeCommonsIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { bottomBlurOutComponent } from "@/cuicui/other/creative-effects/bottom-blur-out/component";
import { animatedNoiseComponent } from "@/cuicui/other/creative-effects/animated-noise/component";
import { borderTrailComponent } from "@/cuicui/other/creative-effects/border-trail/component";
import { WavyLineComponent } from "@/cuicui/other/creative-effects/wavy-line/component";

export const creativeEffectCategory: CategoryType = {
  slug: "creative-effects",
  name: "Creative Effects",
  description:
    "An all bunch of creative effects that can be used in any project with any artisitic style",
  releaseDateCategory: new Date("2024-07-21"),
  icon: CreativeCommonsIcon,
  componentList: [
    animatedNoiseComponent,
    borderTrailComponent,
    bottomBlurOutComponent,
    WavyLineComponent,
  ],
};

export default creativeEffectCategory;
