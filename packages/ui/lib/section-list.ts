import { applicationUiSection } from "@/cuicui/application-ui/application-ui.section";
import { commonUiSection } from "@/cuicui/common-ui/common-ui.section";
import { hooksSection } from "@/cuicui/hooks/hooks.section";
import { otherSection } from "@/cuicui/other/other.section";
import { toolsSection } from "@/cuicui/tools/section.tools";
import { utilsSection } from "@/cuicui/utils/utils.section";

import type { SectionType } from "./types/component";
import { marketingUiSection } from "@/cuicui/marketing-ui/section.marketing-ui";

export const sectionList: SectionType[] = [
  commonUiSection,
  applicationUiSection,
  marketingUiSection,
  otherSection,
  hooksSection,
  utilsSection,
  toolsSection,
];
