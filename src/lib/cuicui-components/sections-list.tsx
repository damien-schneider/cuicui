import { marketingUiComponentList } from "#/src/lib/cuicui-components/marketing-ui-components";

import { applicationUiCategoryList } from "#/src/ui/cuicui/application-ui/application-ui.section";
import { commonUiSection } from "#/src/ui/cuicui/common-ui/common-ui.section";
import { hooksSection } from "#/src/ui/cuicui/hooks/hooks.section";
import { otherSection } from "#/src/ui/cuicui/other/other.section";
import { utilsSection } from "#/src/ui/cuicui/utils/utils.section";
import type { SectionType } from "../types/component";

export const SectionsList: SectionType[] = [
  commonUiSection,
  applicationUiCategoryList,
  {
    name: "Marketing UI",
    slug: "marketing-ui",
    categoriesList: marketingUiComponentList,
  },
  otherSection,
  hooksSection,
  utilsSection,
];
