import type { ComponentType } from "@/lib/types/component";

import PreviewBarCodeGenerator from "@/cuicui/other/qr-code/bar-code-generator/preview-bar-code-generator";

export const BarCodeGeneratorComponent: ComponentType = {
	name: "Bar Code Generator",
	slug: "bar-code-generator",
	description: "Generate bar codes",
	sizePreview: "sm",
	variantList: [
		{
			component: <PreviewBarCodeGenerator />,
			slugComponentFile: "bar-code-generator",
			slugPreviewFile: "preview-bar-code-generator",
			name: "Bar Code Generator",
		},
	],

	lastUpdatedDateComponent: new Date("2024-09-14"),
};
