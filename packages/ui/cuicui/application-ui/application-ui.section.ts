import { AppWindowMacIcon } from "lucide-react";
import type {
  MultiComponentSectionType,
  SectionType,
} from "@/lib/types/component";
import { actionMenuCategory } from "@/cuicui/application-ui/action-menu/action-menu.category";
import { alertCategory } from "@/cuicui/application-ui/alert/alert.category";
import { authenticationCategory } from "@/cuicui/application-ui/authentication/authentication.category";
import { batteryCategory } from "@/cuicui/application-ui/battery/battery.category";
import { codeCategory } from "@/cuicui/application-ui/code/code.category";
import { cookieBannerCategory } from "@/cuicui/application-ui/cookie-banner/category.cookie-banner";
import { kbdCategory } from "@/cuicui/application-ui/kbd/kbd.category";
import { searchBarsCategory } from "@/cuicui/application-ui/search-bars/search-bars.category";
import { settingsCategory } from "@/cuicui/application-ui/settings/settings.category";
import { signatureCategory } from "@/cuicui/application-ui/signature/signature.category";
import { slidersCategory } from "@/cuicui/application-ui/sliders/sliders.category";
import { staticSteppersCategory } from "@/cuicui/application-ui/static-steppers/static-steppers.category";
import { themeCategory } from "@/cuicui/application-ui/theme/theme.category";
import { treeCategory } from "@/cuicui/application-ui/tree/tree.category";
import { notificationCategory } from "@/cuicui/application-ui/notification/category.notification";

export const applicationUiSection: MultiComponentSectionType = {
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
