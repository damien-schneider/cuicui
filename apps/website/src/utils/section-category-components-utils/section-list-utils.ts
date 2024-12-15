import { sectionList } from "@/section-list";
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
  return sectionList.find((section) => section.slug === slug) ?? null;
}
