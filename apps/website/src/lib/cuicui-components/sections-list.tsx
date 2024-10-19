import { marketingUiComponentList } from "@/src/lib/cuicui-components/marketing-ui-components";

import { BadgePercentIcon } from "lucide-react";
import { applicationUiCategoryList } from "@cuicui/ui/src/application-ui/application-ui.section";
import { commonUiSection } from "@cuicui/ui/src/common-ui/common-ui.section";
import { hooksSection } from "@cuicui/ui/src/hooks/hooks.section";
import { otherSection } from "@cuicui/ui/src/other/other.section";
import { toolsSection } from "@cuicui/ui/src/tools/section.tools";
import { utilsSection } from "@cuicui/ui/src/utils/utils.section";

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
