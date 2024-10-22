import { SectionsList } from "@cuicui/ui";
import type { SectionType } from "#/src/lib/types/component";

export function findSectionBySlug(slug: string): SectionType | null {
	return SectionsList.find((section) => section.slug === slug) ?? null;
}
