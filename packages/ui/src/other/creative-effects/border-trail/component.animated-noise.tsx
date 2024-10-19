import type { ComponentType } from "@/lib/types/component";
import PreviewBorderTrail from "@/src/other/creative-effects/border-trail/preview.border-trail";

export const borderTrailComponent: ComponentType = {
	slug: "border-trail",
	name: "Border Trail",
	description:
		"A border trail effect that can be used in any component with any modern style",
	sizePreview: "lg",
	variantList: [
		{
			name: "Border Trail",
			slugPreviewFile: "preview.border-trail",
			slugComponentFile: "border-trail",
			component: <PreviewBorderTrail />,
		},
	],
	lastUpdatedDateComponent: new Date("2024-10-15"),
};
