import type { ComponentType } from "@/lib/types/component";
import PreviewBottomBlurOut from "@/cuicui/other/creative-effects/bottom-blur-out/preview.bottom-blur-out";

export const bottomBlurOutComponent: ComponentType = {
	sizePreview: "sm",
	slug: "bottom-blur-out",
	isResizable: false,
	isIframed: true,
	isChildUsingHeightFull: true,
	name: "Bottom blur out disapearance effect",
	description:
		"A bottom blur out effect that can be used in any project with any artisitic style",
	variantList: [
		{
			name: "Bottom blur out",
			component: <PreviewBottomBlurOut />,
			slugPreviewFile: "preview.bottom-blur-out",
			slugComponentFile: "bottom-blur-out",
		},
	],
	lastUpdatedDateComponent: new Date("2024-10-14"),
};
