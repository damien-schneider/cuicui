import { TextCursorInputIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import FileDropzone from "@/cuicui/common-ui/inputs/droppable-file/variant1";
import { PreviewModernSimpleInput } from "@/cuicui/common-ui/inputs/modern-simple-input/preview-simple-modern-input";

export const inputsCategory: CategoryType = {
	slug: "inputs",
	name: "Inputs",
	description: "Inputs with various styles and interactions",
	releaseDateCategory: new Date("2024-08-20"),
	icon: TextCursorInputIcon,
	previewCategory: {
		component: <FileDropzone />,
		previewScale: 1,
	},
	componentList: [
		{
			sizePreview: "sm",
			slug: "droppable-file",

			variantList: [
				{
					name: "Droppable Zone",
					component: <FileDropzone />,
					slugPreviewFile: "variant1",
				},
			],
			name: "Droppable File",
			description:
				"A file dropzone that shows a preview of the file when hovered.",
		},
		{
			sizePreview: "sm",
			slug: "modern-simple-input",

			variantList: [
				{
					name: "Variant 1",
					component: <PreviewModernSimpleInput />,
					slugPreviewFile: "preview-simple-modern-input",
					slugComponentFile: "modern-simple-input",
				},
			],
			name: "Modern Simple Input",
			description:
				"A simple input that can be used in any project with any artistic style.",
		},
	],
};
