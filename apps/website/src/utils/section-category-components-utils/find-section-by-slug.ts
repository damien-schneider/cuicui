import { sectionList } from "@cuicui/ui/lib/section-list";
import type { SectionType } from "@cuicui/ui/lib/types/component";

export function findSectionBySlug(slug: string): SectionType | null {
  return sectionList.find((section) => section.slug === slug) ?? null;
}
