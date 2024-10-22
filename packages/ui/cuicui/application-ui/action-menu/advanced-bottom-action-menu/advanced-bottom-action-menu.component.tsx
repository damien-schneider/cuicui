import type { ComponentType } from "@/lib/types/component";
import { PreviewAdvancedBottomActionMenu } from "@/cuicui/application-ui/action-menu/advanced-bottom-action-menu/preview-advanced-bottom-action-menu";

export const advancedBottomActionMenuComponent: ComponentType = {
	name: "Advanced bottom action menu",
	description: "An advanced bottom action menu",
	isIframed: false,
	sizePreview: "md",
	slug: "advanced-bottom-action-menu",
	lastUpdatedDateComponent: new Date("2024-09-28"),

	variantList: [
		{
			name: "Advanced bottom action menu",
			component: <PreviewAdvancedBottomActionMenu />,
			// component: <PreviewAdvancedBottomActionMenu />,
			slugPreviewFile: "variant1",
		},
	],
	rerenderButton: true,
};
