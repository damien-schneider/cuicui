import { SunMoonIcon } from "lucide-react";
import type { CategoryType } from "@/lib/types/component";
import { ThemeSwitcherButton } from "@/src/application-ui/theme/theme-switcher/theme-switcher-button";

export const themeCategory: CategoryType = {
	slug: "theme",
	name: "Theme",
	description: "Theme components",
	releaseDateCategory: new Date("2024-08-29"),
	icon: SunMoonIcon,
	previewCategory: {
		component: <ThemeSwitcherButton />,
		previewScale: 1,
	},
	componentList: [
		{
			slug: "theme-switcher",
			name: "Theme Switcher",
			description: "A theme switcher button.",
			isIframed: false,
			sizePreview: "xs",
			variantList: [
				{
					name: "Default",
					component: <ThemeSwitcherButton />,
					slugPreviewFile: "theme-switcher-button",
				},
			],
			lastUpdatedDateComponent: new Date("2024-08-10"),
		},
	],
};
