import { BatteryChargingIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { PreviewBatteryIndicator } from "@/cuicui/application-ui/battery/battery-indicator/preview-battery-indicator";

export const batteryCategory: CategoryType = {
	slug: "battery",
	name: "Battery",
	description: "Battery components",
	releaseDateCategory: new Date("2024-08-21"),
	icon: BatteryChargingIcon,
	previewCategory: {
		component: <PreviewBatteryIndicator />,
		previewScale: 1,
	},
	componentList: [
		{
			lastUpdatedDateComponent: new Date("2024-08-21"),

			sizePreview: "sm",
			slug: "battery-indicator",
			variantList: [
				{
					name: "Battery Indicator",
					component: <PreviewBatteryIndicator />,
					slugPreviewFile: "preview-battery-indicator",
					slugComponentFile: "battery-indicator",
				},
			],
			name: "Battery Indicator",
			description: "A battery indicator component.",
		},
	],
};
