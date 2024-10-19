import { AppWindowMacIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { actionMenuCategory } from "@/src/application-ui/action-menu/action-menu.category";
import { alertCategory } from "@/src/application-ui/alert/alert.category";
import { authenticationCategory } from "@/src/application-ui/authentication/authentication.category";
import { batteryCategory } from "@/src/application-ui/battery/battery.category";
import { codeCategory } from "@/src/application-ui/code/code.category";
import { cookieBannerCategory } from "@/src/application-ui/cookie-banner/category.cookie-banner";
import { kbdCategory } from "@/src/application-ui/kbd/kbd.category";
import { searchBarsCategory } from "@/src/application-ui/search-bars/search-bars.category";
import { settingsCategory } from "@/src/application-ui/settings/settings.category";
import { signatureCategory } from "@/src/application-ui/signature/signature.category";
import { slidersCategory } from "@/src/application-ui/sliders/sliders.category";
import { staticSteppersCategory } from "@/src/application-ui/static-steppers/static-steppers.category";
import { themeCategory } from "@/src/application-ui/theme/theme.category";
import { treeCategory } from "@/src/application-ui/tree/tree.category";
import { notificationCategory } from "@/src/application-ui/notification/category.notification";

export const applicationUiCategoryList: SectionType = {
	type: "multiple-component",
	name: "Application UI",
	slug: "application-ui",
	description: "A collection of UI components for advanced applications.",
	icon: AppWindowMacIcon,
	categoriesList: [
		actionMenuCategory,
		alertCategory,
		authenticationCategory,
		batteryCategory,
		codeCategory,
		cookieBannerCategory,
		kbdCategory,
		notificationCategory,
		searchBarsCategory,
		settingsCategory,
		signatureCategory,
		slidersCategory,
		staticSteppersCategory,
		themeCategory,
		treeCategory,
	],
};
