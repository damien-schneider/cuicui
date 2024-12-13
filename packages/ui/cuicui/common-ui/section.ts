import { ComponentIcon } from "lucide-react";
import type { SectionType } from "@/lib/types/component";
import { avatarsCategory } from "@/cuicui/common-ui/avatars/category";
import { badgesCategory } from "@/cuicui/common-ui/badges/category";
import { blockquotesCategory } from "@/cuicui/common-ui/blockquotes/category";
import { buttonsCategory } from "@/cuicui/common-ui/buttons/category";
import { cardsCategory } from "@/cuicui/common-ui/cards/category";
import { checkboxesCategory } from "@/cuicui/common-ui/checkboxes/category";
import { inputsCategory } from "@/cuicui/common-ui/inputs/category";
import { loadersCategory } from "@/cuicui/common-ui/loaders/category";
import { navigationCategory } from "@/cuicui/common-ui/navigation/category";
import { skeletonsCategory } from "@/cuicui/common-ui/skeletons/category";
import { toggleCategory } from "@/cuicui/common-ui/toggle/category";

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

export default commonUiSection;
