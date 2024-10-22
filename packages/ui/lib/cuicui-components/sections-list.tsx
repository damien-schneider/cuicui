import { marketingUiComponentList } from "@/lib/cuicui-components/marketing-ui-components";

import { BadgePercentIcon } from "lucide-react";
import { applicationUiCategoryList } from "@/cuicui/application-ui/application-ui.section";
import { commonUiSection } from "@/cuicui/common-ui/common-ui.section";
import { hooksSection } from "@/cuicui/hooks/hooks.section";
import { otherSection } from "@/cuicui/other/other.section";
import { toolsSection } from "@/cuicui/tools/section.tools";
import { utilsSection } from "@/cuicui/utils/utils.section";

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
