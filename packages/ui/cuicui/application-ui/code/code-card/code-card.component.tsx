import type { ComponentType } from "@/lib/types/component";
import { CodeCardPreview } from "@/cuicui/application-ui/code/code-card/code-card-preview";

export const codeCardComponent: ComponentType = {
	isIframed: false,
	sizePreview: "md",
	slug: "code-card",
	lastUpdatedDateComponent: new Date("2024-08-29"),
	variantList: [
		{
			name: "Default",
			component: <CodeCardPreview />,
			slugPreviewFile: "code-card-preview",
			slugComponentFile: "code-card",
		},
	],
	name: "Code Card",
	description: "A code card component with a copy to clipboard button.",
};
