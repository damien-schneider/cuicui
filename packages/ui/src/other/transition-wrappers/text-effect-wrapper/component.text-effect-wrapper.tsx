import type { ComponentType } from "@/lib/types/component";

import { PreviewTextEffectPerChar } from "@/src/other/transition-wrappers/text-effect-wrapper/preview.text-effect-wrapper-per-char";
import { PreviewTextEffectPerLine } from "@/src/other/transition-wrappers/text-effect-wrapper/preview.text-effect-wrapper-per-line";
import { PreviewTextEffectPerWord } from "@/src/other/transition-wrappers/text-effect-wrapper/preview.text-effect-wrapper-per-word";

export const textEffectWrapperComponent: ComponentType = {
	slug: "text-effect-wrapper",
	name: "Text effect wrapper",
	description:
		"A transition wrapper that makes a text appear with a fade effect per character!",
	isIframed: true,
	sizePreview: "sm",
	inspiration: "Motion Primitives",
	inspirationLink: "https://motion.primitives.mattcowley.co.uk/",
	rerenderButton: true,
	variantList: [
		{
			name: "Per character",
			component: <PreviewTextEffectPerChar />,
			slugPreviewFile: "preview.text-effect-wrapper-per-char",
			slugComponentFile: "text-effect-wrapper",
		},
		{
			name: "Per word",
			component: <PreviewTextEffectPerWord />,
			slugPreviewFile: "preview.text-effect-wrapper-per-word",
			slugComponentFile: "text-effect-wrapper",
		},
		{
			name: "Per line",
			component: <PreviewTextEffectPerLine />,
			slugPreviewFile: "preview.text-effect-wrapper-per-line",
			slugComponentFile: "text-effect-wrapper",
		},
	],
	lastUpdatedDateComponent: new Date("2024-10-06"),
};
