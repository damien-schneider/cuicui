import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";
import type {
  CategoryType,
  PageCategoryType,
  SectionType,
  SingleComponentCategoryType,
} from "@cuicui/ui/lib/types/component";

// Function Overloads

// General Implementation
export function findCategoryBySlug(
  section: SectionType,
  categoryParamSlug: string,
) {
  if (section.type === "page") {
    return (section.pageList.find((page) => page.slug === categoryParamSlug) ??
      null) as PageCategoryType | null;
  }
  if (section.type === "single-component") {
    return (section.categoriesList.find(
      (category) => category.slug === categoryParamSlug,
    ) ?? null) as SingleComponentCategoryType | null;
  }
  return (section?.categoriesList.find(
    (category) => category.slug === categoryParamSlug,
  ) ?? null) as CategoryType | null;
}

export const newFindCategoryBySlug = ({
  sectionSlug,
  categorySlug,
}: { sectionSlug: string; categorySlug: string }) => {
  const section = newFindSectionBySlug(sectionSlug);
  if (!section) {
    return null;
  }
  for (const category of section.categories) {
    if (category.slug === categorySlug) {
      return category;
    }
  }
  return null;
};
