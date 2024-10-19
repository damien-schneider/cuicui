import { marketingUiComponentList } from "@/lib/cuicui-components/marketing-ui-components";

import { BadgePercentIcon } from "lucide-react";
import { applicationUiCategoryList } from "@/src/application-ui/application-ui.section";
import { commonUiSection } from "@/src/common-ui/common-ui.section";
import { hooksSection } from "@/src/hooks/hooks.section";
import { otherSection } from "@/src/other/other.section";
import { toolsSection } from "@/src/tools/section.tools";
import { utilsSection } from "@/src/utils/utils.section";

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
