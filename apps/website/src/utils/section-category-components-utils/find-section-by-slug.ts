import { sectionList } from "@cuicui/ui/lib/section-list";
import { sectionList as newSectionList } from "@cuicui/ui/new-section-list";
import type { SectionType } from "@cuicui/ui/lib/types/component";

export function findSectionBySlug(slug: string): SectionType | null {
  return sectionList.find((section) => section.slug === slug) ?? null;
}
export function newFindSectionBySlug(slug: string) {
  return newSectionList.find((section) => section.meta.slug === slug) ?? null;
}
