import type { ComponentType } from "@/lib/types/component";
import GridPattern from "@/cuicui/other/patterns/grid-pattern/grid-pattern";

export const gridPatternComponent: ComponentType = {
	sizePreview: "sm",
	slug: "grid-pattern",
	name: "Simple grid pattern",
	description:
		"Create a simple grid pattern without images, just with CSS and HTML for better performance, SEO and accessibility & also more micro-interactions",
	variantList: [
		{
			name: "Default",
			component: <GridPattern />,

			slugPreviewFile: "grid-pattern",
		},
	],
	lastUpdatedDateComponent: new Date("2024-10-15"),
};
