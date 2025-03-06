import { getSnippetsCategories } from "#/src/app/(site)/snippets/get-snippets-categories";
import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/section-list-utils";
import type { CategoryType } from "@/lib/types/component";
import { differenceInDays } from "date-fns";
import type { LucideIcon } from "lucide-react";
type SidemenuItems = {
  title: string;
  items: {
    name: string;
    href: string;
    Icon: LucideIcon | null;
    tag: string | null;
  }[];
};

export const activatedSections = [
  "application-ui",
  "common-ui",
  "hooks",
  "marketing-ui",
  "other",
  "utils",
  "snippets",
];

export async function getSidemenuItems(
  section: (typeof activatedSections)[number],
): Promise<SidemenuItems | null> {
  if (!activatedSections.includes(section)) {
    return null;
  }
  switch (section) {
    case "application-ui":
    case "common-ui":
    case "hooks":
    case "marketing-ui":
    case "other":
    case "utils": {
      const sectionObject = newFindSectionBySlug(section);
      if (!sectionObject) {
        return null;
      }
      return {
        title: sectionObject.meta.name,
        items: sectionObject.categories.map((category: CategoryType) => ({
          name: category.meta.name,
          href: `/${section}/${category.slug}`,
          // Icon: null,
          //TODO: Fix this
          Icon: category.meta.icon ?? null,
          tag: getCategoryTag(category),
        })),
      };
    }
    case "snippets": {
      const snippetsCategory = await getSnippetsCategories();
      return {
        title: "Snippets",
        items: snippetsCategory.map((category) => ({
          name: category.slug,
          href: `/${section}/${category.slug}`,
          Icon: null,
          tag: null,
        })),
      };
    }
    default: {
      return {
        title: "An error occurred",
        items: [],
      };
    }
  }
}

function getCategoryTag(category: CategoryType) {
  const isNew =
    differenceInDays(new Date(), category.meta.latestUpdateDate ?? 0) < 21;
  if (category.meta.isComingSoon) {
    return "Coming Soon";
  }
  if (isNew) {
    return "New";
  }
  return null;
}
