import { BellDotIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import GrowingSearchVariant1 from "@/src/application-ui/search-bars/growing-search/variant1";
import { dynamicIslandNotificationComponent } from "@/src/application-ui/notification/dynamic-island-notification/component.dynamic-island-notification";

export const notificationCategory: CategoryType = {
	slug: "notification",
	name: "Notification",
	description: "Notification components",
	releaseDateCategory: new Date("2024-10-14"),
	icon: BellDotIcon,
	previewCategory: {
		component: <GrowingSearchVariant1 />,
		previewScale: 1,
	},
	componentList: [dynamicIslandNotificationComponent],
};
