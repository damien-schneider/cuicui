import { BatteryCharging } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import { PreviewUseBattery } from "@/cuicui/hooks/use-battery/preview-use-battery";

export const useBatteryCategory: SingleComponentCategoryType = {
	slug: "use-battery",
	name: "Use Battery",
	description: "A hook to get battery informations",
	releaseDateCategory: new Date("2024-09-16"),
	icon: BatteryCharging,
	previewCategory: {
		component: <PreviewUseBattery />,
		previewScale: 1,
	},
	component: {
		rerenderButton: true,

		sizePreview: "lg",

		variantList: [
			{
				name: "variant 1",
				component: <PreviewUseBattery />,
				slugComponentFile: "use-battery",
				slugPreviewFile: "preview-use-battery",
			},
		],
	},
};
