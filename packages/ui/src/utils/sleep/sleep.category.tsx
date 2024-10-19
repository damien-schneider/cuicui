import { HourglassIcon } from "lucide-react";
import type { SingleComponentCategoryType } from "@/lib/types/component";
import PreviewSleep from "@/src/utils/sleep/preview-sleep";

export const sleepCategory: SingleComponentCategoryType = {
	name: "Sleep",
	slug: "sleep",
	previewCategory: {
		previewScale: 0.5,
		component: <PreviewSleep />,
	},
	component: {
		sizePreview: "sm",
		lastUpdatedDateComponent: new Date("2024-09-26"),
		variantList: [
			{
				name: "Default",
				slugPreviewFile: "preview-sleep",
				slugComponentFile: "sleep",
				component: <PreviewSleep />,
			},
		],
	},
	description: "A utility function to manage sleep",
	icon: HourglassIcon,
	releaseDateCategory: new Date("2024-09-26"),
};
