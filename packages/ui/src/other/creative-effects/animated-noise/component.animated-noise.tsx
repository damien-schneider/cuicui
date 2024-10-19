import type { ComponentType } from "@/lib/types/component";
import PreviewAnimatedNoise from "@/src/other/creative-effects/animated-noise/preview.animated-noise";
import PreviewStaticNoise from "@/src/other/creative-effects/animated-noise/preview.static-noise";

export const animatedNoiseComponent: ComponentType = {
	slug: "animated-noise",
	name: "Animated Noise",
	description:
		"A noise effect that can be used in any project with any artisitic style",
	sizePreview: "lg",
	variantList: [
		{
			name: "Animated Noise",
			slugPreviewFile: "preview.animated-noise",
			slugComponentFile: "animated-noise",
			component: <PreviewAnimatedNoise />,
		},
		{
			name: "Static Noise",
			slugPreviewFile: "preview.static-noise",
			slugComponentFile: "static-noise",
			component: <PreviewStaticNoise />,
		},
	],
	lastUpdatedDateComponent: new Date("2024-10-14"),
};
