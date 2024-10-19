import { CreativeCommonsIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import PreviewBottomBlurOut from "@/src/other/creative-effects/bottom-blur-out/preview.bottom-blur-out";
import { bottomBlurOutComponent } from "@/src/other/creative-effects/bottom-blur-out/component.bottom-blur-out";
import { animatedNoiseComponent } from "@/src/other/creative-effects/animated-noise/component.animated-noise";
import { borderTrailComponent } from "@/src/other/creative-effects/border-trail/component.animated-noise";

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
	componentList: [
		animatedNoiseComponent,
		borderTrailComponent,
		bottomBlurOutComponent,
	],
};
