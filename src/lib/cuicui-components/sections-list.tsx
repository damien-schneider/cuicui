import { marketingUiComponentList } from "#/src/lib/cuicui-components/marketing-ui-components";

import { applicationUiCategoryList } from "#/src/ui/cuicui/application-ui/application-ui.section";
import { commonUiSection } from "#/src/ui/cuicui/common-ui/common-ui.section";
import { hooksSection } from "#/src/ui/cuicui/hooks/hooks.section";
import { otherSection } from "#/src/ui/cuicui/other/other.section";
import { toolsSection } from "#/src/ui/cuicui/tools/section.tools";
import { utilsSection } from "#/src/ui/cuicui/utils/utils.section";
import { BadgePercentIcon } from "lucide-react";

import type { SectionType } from "../types/component";

export const SectionsList: SectionType[] = [
  commonUiSection,
  applicationUiCategoryList,
  {
    type: "multiple-component",
    name: "Marketing UI",
    slug: "marketing-ui",
    description: "A collection of UI components for marketing websites.",
    categoriesList: marketingUiComponentList,
    icon: BadgePercentIcon,
  },
  otherSection,
  hooksSection,
  utilsSection,
  toolsSection,
];
