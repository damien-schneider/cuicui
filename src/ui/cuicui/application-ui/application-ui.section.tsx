import type { SectionType } from "#/src/lib/types/component";
import { alertCategory } from "#/src/ui/cuicui/application-ui/alert/alert.category";
import { authenticationCategory } from "#/src/ui/cuicui/application-ui/authentication/authentication.category";
import { batteryCategory } from "#/src/ui/cuicui/application-ui/battery/battery.category";
import { codeCategory } from "#/src/ui/cuicui/application-ui/code/code.category";
import { kbdCategory } from "#/src/ui/cuicui/application-ui/kbd/kbd.category";
import { searchBarsCategory } from "#/src/ui/cuicui/application-ui/search-bars/search-bars.category";
import { settingsCategory } from "#/src/ui/cuicui/application-ui/settings/settings.category";
import { signatureCategory } from "#/src/ui/cuicui/application-ui/signature/signature.category";
import { slidersCategory } from "#/src/ui/cuicui/application-ui/sliders/sliders.category";
import { staticSteppersCategory } from "#/src/ui/cuicui/application-ui/static-steppers/static-steppers.category";
import { themeCategory } from "#/src/ui/cuicui/application-ui/theme/theme.category";
import { treeCategory } from "#/src/ui/cuicui/application-ui/tree/tree.category";

export const applicationUiCategoryList: SectionType = {
  name: "Application UI",
  slug: "application-ui",
  categoriesList: [
    alertCategory,
    authenticationCategory,
    batteryCategory,
    codeCategory,
    kbdCategory,
    searchBarsCategory,
    settingsCategory,
    signatureCategory,
    slidersCategory,
    staticSteppersCategory,
    themeCategory,
    treeCategory,
  ],
};
