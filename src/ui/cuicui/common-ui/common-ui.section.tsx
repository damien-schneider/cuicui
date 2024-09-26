import type { SectionType } from "#/src/lib/types/component";
import { avatarsCategory } from "#/src/ui/cuicui/common-ui/avatars/avatars.category";
import { badgesCategory } from "#/src/ui/cuicui/common-ui/badges/badges.category";
import { blockquotesCategory } from "#/src/ui/cuicui/common-ui/blockquotes/blockquotes.category";
import { buttonsCategory } from "#/src/ui/cuicui/common-ui/buttons/buttons.category";
import { cardsCategory } from "#/src/ui/cuicui/common-ui/cards/cards.category";
import { checkboxesCategory } from "#/src/ui/cuicui/common-ui/checkboxes/checkboxes.category";
import { inputsCategory } from "#/src/ui/cuicui/common-ui/inputs/inputs.category";
import { loadersCategory } from "#/src/ui/cuicui/common-ui/loaders/loaders.category";
import { navigationCategory } from "#/src/ui/cuicui/common-ui/navigation/navigation.category";
import { skeletonsCategory } from "#/src/ui/cuicui/common-ui/skeletons/skeletons.category";
import { toggleCategory } from "#/src/ui/cuicui/common-ui/toggle/toggle.category";

export const commonUiSection: SectionType = {
  name: "Common UI",
  slug: "common-ui",
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
