import { ComponentIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { avatarsCategory } from "@/cuicui/common-ui/avatars/avatars.category";
import { badgesCategory } from "@/cuicui/common-ui/badges/badges.category";
import { blockquotesCategory } from "@/cuicui/common-ui/blockquotes/blockquotes.category";
import { buttonsCategory } from "@/cuicui/common-ui/buttons/category";
import { cardsCategory } from "@/cuicui/common-ui/cards/cards.category";
import { checkboxesCategory } from "@/cuicui/common-ui/checkboxes/checkboxes.category";
import { inputsCategory } from "@/cuicui/common-ui/inputs/inputs.category";
import { loadersCategory } from "@/cuicui/common-ui/loaders/loaders.category";
import { navigationCategory } from "@/cuicui/common-ui/navigation/navigation.category";
import { skeletonsCategory } from "@/cuicui/common-ui/skeletons/skeletons.category";
import { toggleCategory } from "@/cuicui/common-ui/toggle/toggle.category";

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
