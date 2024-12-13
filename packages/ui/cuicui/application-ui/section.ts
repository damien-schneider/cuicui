import { AppWindowMacIcon } from "lucide-react";
import type { MultiComponentSectionType } from "@/lib/types/component";
import { actionMenuCategory } from "@/cuicui/application-ui/action-menu/category";
import { alertCategory } from "@/cuicui/application-ui/alert/category";
import { authenticationCategory } from "@/cuicui/application-ui/authentication/category";
import { batteryCategory } from "@/cuicui/application-ui/battery/category";
import { codeCategory } from "@/cuicui/application-ui/code/category";
import { cookieBannerCategory } from "@/cuicui/application-ui/cookie-banner/category";
import { kbdCategory } from "@/cuicui/application-ui/kbd/category";
import { searchBarsCategory } from "@/cuicui/application-ui/search-bars/category";
import { settingsCategory } from "@/cuicui/application-ui/settings/category";
import { signatureCategory } from "@/cuicui/application-ui/signature/category";
import { slidersCategory } from "@/cuicui/application-ui/sliders/category";
import { staticSteppersCategory } from "@/cuicui/application-ui/static-steppers/category";
import { themeCategory } from "@/cuicui/application-ui/theme/category";
import { treeCategory } from "@/cuicui/application-ui/tree/category";
import { notificationCategory } from "@/cuicui/application-ui/notification/category";
import { dropdownMenuCategory } from "@/cuicui/application-ui/dropdown-menu/category";
import { tableOfContentCategory } from "@/cuicui/application-ui/table-of-contents/category";
import { contextMenuCategory } from "@/cuicui/application-ui/context-menu/category";
import { colorPickerCategory } from "@/cuicui/application-ui/color-picker/category";

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
    colorPickerCategory,
    contextMenuCategory,
    cookieBannerCategory,
    dropdownMenuCategory,
    kbdCategory,
    notificationCategory,
    searchBarsCategory,
    settingsCategory,
    signatureCategory,
    slidersCategory,
    staticSteppersCategory,
    tableOfContentCategory,
    themeCategory,
    treeCategory,
  ],
};

export default applicationUiSection;
