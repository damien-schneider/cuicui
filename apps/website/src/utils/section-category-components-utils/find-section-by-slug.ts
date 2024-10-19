import { SectionsList } from "@/src/lib/cuicui-components/sections-list";
import type { SectionType } from "@/src/lib/types/component";

export function findSectionBySlug(slug: string): SectionType | null {
	return SectionsList.find((section) => section.slug === slug) ?? null;
}
