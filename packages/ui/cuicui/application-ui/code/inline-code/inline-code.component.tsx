import type { ComponentType } from "@/lib/types/component";
import { PreviewInlineCode } from "@/cuicui/application-ui/code/inline-code/preview-inline-code";

export const inlineCodeComponent: ComponentType = {
	sizePreview: "xs",
	slug: "inline-code",

	variantList: [
		{
			name: "Default",
			component: <PreviewInlineCode />,
			slugPreviewFile: "preview-inline-code",
			slugComponentFile: "inline-code",
		},
	],
	name: "Inline Code",
	description: "A code snippet component with a copy to clipboard button.",
};
