import { commonUICategoriesList } from "#/src/lib/cuicui-components/common-ui-components";
import { hooksCategoriesList } from "#/src/lib/cuicui-components/hooks-components";
import { marketingUIComponentList } from "#/src/lib/cuicui-components/marketing-ui-components";
import { otherCategoriesList } from "#/src/lib/cuicui-components/other-components";
import { applicationUiCategoryList } from "#/src/ui/cuicui/application-ui/application-ui.section";
import type { SectionType } from "../types/component";

export const SectionsList: SectionType[] = [
  {
    name: "Common UI",
    slug: "common-ui",
    categoriesList: commonUICategoriesList,
  },
  {
    name: "Marketing UI",
    slug: "marketing-ui",
    categoriesList: marketingUIComponentList,
  },
  {
    name: "Application UI",
    slug: "application-ui",
    categoriesList: applicationUiCategoryList,
  },
  {
    name: "Other",
    slug: "other",
    categoriesList: otherCategoriesList,
  },
  {
    name: "Hooks",
    slug: "hooks",
    categoriesList: hooksCategoriesList,
  },
];
