import { sectionList as newSectionList } from "@cuicui/ui/new-section-list";
// Function Overloads

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

export function newFindSectionBySlug(slug: string) {
  return newSectionList.find((section) => section.slug === slug) ?? null;
}
