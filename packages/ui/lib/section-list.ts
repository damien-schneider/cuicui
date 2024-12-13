import { applicationUiSection } from "@/cuicui/application-ui/section";
import { commonUiSection } from "@/cuicui/common-ui/section";
import { hooksSection } from "@/cuicui/hooks/hooks.section";
import { otherSection } from "@/cuicui/other/section";
import { toolsSection } from "@/cuicui/tools/tools.section";
import { utilsSection } from "@/cuicui/utils/section";

import type { SectionType } from "./types/component";
import { marketingUiSection } from "@/cuicui/marketing-ui/section";

export const sectionList: SectionType[] = [
  commonUiSection,
  applicationUiSection,
  marketingUiSection,
  otherSection,
  hooksSection,
  utilsSection,
  toolsSection,
];
