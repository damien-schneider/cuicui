import { commonUICategoriesList } from "#/src/lib/cuicui-components/common-ui-components";

import { marketingUIComponentList } from "#/src/lib/cuicui-components/marketing-ui-components";

import { applicationUiCategoryList } from "#/src/ui/cuicui/application-ui/application-ui.section";
import { hooksSection } from "#/src/ui/cuicui/hooks/hooks.section";
import { otherSection } from "#/src/ui/cuicui/other/other.section";
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
  applicationUiCategoryList,
  otherSection,
  hooksSection,
];
