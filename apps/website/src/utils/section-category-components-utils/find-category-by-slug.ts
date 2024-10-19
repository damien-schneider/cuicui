import type {
	CategoryType,
	PageCategoryType,
	SectionType,
	SingleComponentCategoryType,
} from "@/src/lib/types/component";

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
