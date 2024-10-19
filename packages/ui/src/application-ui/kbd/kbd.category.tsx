import { CommandIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import Modern3dKbdVariant1 from "@/src/application-ui/kbd/modern-3d-kbd/variant1";
import ModernDetailedKbdVariant1 from "@/src/application-ui/kbd/modern-detailed-kbd/variant1";

export const kbdCategory: CategoryType = {
	slug: "kbd",
	name: "Keyboard",
	description: "Keyboard components with various styles",
	releaseDateCategory: new Date("2024-08-13"),
	icon: CommandIcon,
	previewCategory: {
		component: <Modern3dKbdVariant1 />,
		previewScale: 1,
	},
	componentList: [
		{
			lastUpdatedDateComponent: new Date("2024-08-13"),

			sizePreview: "xs",
			slug: "modern-detailed-kbd",
			variantList: [
				{
					name: "Default",
					component: <ModernDetailedKbdVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
			name: "Simple keyboard Kbd",
			description:
				"A simple keyboard Kbd with an effect on hover and on press.",
		},
		{
			lastUpdatedDateComponent: new Date("2024-08-13"),
			sizePreview: "xs",
			slug: "modern-3d-kbd",
			variantList: [
				{
					name: "Default",
					component: <Modern3dKbdVariant1 />,
					slugPreviewFile: "variant1",
				},
			],
			name: "3D keyboard Kbd",
			description: "A 3D keyboard Kbd with an effect on hover and on press.",
		},
	],
};
