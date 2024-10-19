import type { ComponentType } from "@/lib/types/component";
import PreviewCommandVariant1 from "@/src/application-ui/code/code-snippet/preview-variant1";

export const codeSnippetComponent: ComponentType = {
	isIframed: false,
	sizePreview: "xs",
	slug: "code-snippet",
	lastUpdatedDateComponent: new Date("2024-08-21"),
	variantList: [
		{
			name: "Default",
			component: <PreviewCommandVariant1 />,
			slugPreviewFile: "preview-variant1",
			slugComponentFile: "variant1",
		},
	],
	name: "Code Snippet",
	description: "A code snippet component with a copy to clipboard button.",
};
