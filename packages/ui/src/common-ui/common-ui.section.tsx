import { ComponentIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { avatarsCategory } from "@/src/common-ui/avatars/avatars.category";
import { badgesCategory } from "@/src/common-ui/badges/badges.category";
import { blockquotesCategory } from "@/src/common-ui/blockquotes/blockquotes.category";
import { buttonsCategory } from "@/src/common-ui/buttons/buttons.category";
import { cardsCategory } from "@/src/common-ui/cards/cards.category";
import { checkboxesCategory } from "@/src/common-ui/checkboxes/checkboxes.category";
import { inputsCategory } from "@/src/common-ui/inputs/inputs.category";
import { loadersCategory } from "@/src/common-ui/loaders/loaders.category";
import { navigationCategory } from "@/src/common-ui/navigation/navigation.category";
import { skeletonsCategory } from "@/src/common-ui/skeletons/skeletons.category";
import { toggleCategory } from "@/src/common-ui/toggle/toggle.category";

export const commonUiSection: SectionType = {
	name: "Common UI",
	slug: "common-ui",
	type: "multiple-component",
	description: "A collection of common UI components for your projects.",
	icon: ComponentIcon,
	categoriesList: [
		avatarsCategory,
		badgesCategory,
		blockquotesCategory,
		buttonsCategory,
		cardsCategory,
		checkboxesCategory,
		inputsCategory,
		loadersCategory,
		navigationCategory,
		skeletonsCategory,
		toggleCategory,
	],
};
