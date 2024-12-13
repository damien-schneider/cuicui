import { notFound } from "next/navigation";
import MultipleComponentCategory from "#/src/app/(site)/[section]/[category]/multiple-component-section";
import SingleComponentCategory from "#/src/app/(site)/[section]/[category]/single-component-section";
import { sectionList } from "@cuicui/ui/lib/section-list";
import type {
  CategoryType,
  SingleComponentCategoryType,
} from "@cuicui/ui/lib/types/component";
import { findCategoryBySlug } from "#/src/utils/section-category-components-utils/find-category-by-slug";
type Props = {
  params: Promise<{
    section: string;
    category: string;
  }>;
};

export function generateStaticParams() {
  const paramsArray = [];
  for (const section of sectionList) {
    if (
      section.type === "multiple-component" ||
      section.type === "single-component"
    ) {
      for (const category of section.categoriesList) {
        paramsArray.push({
          section: section.slug,
          category: category.slug,
        });
      }
    }
    if (section.type === "page") {
      for (const page of section.pageList) {
        paramsArray.push({
          section: section.slug,
          category: page.slug,
        });
      }
    }
  }

  // Return the generated params array
  return paramsArray;
}

export default async function Page({ params }: Props) {
  const { section: sectionParam, category: categoryParam } = await params;
  const sectionInList = sectionList.find(
    (section) => section.slug === sectionParam,
  );
  if (!sectionInList) {
    return notFound();
  }
  if (sectionInList?.type === "page") {
    const page = sectionInList.pageList.find(
      (page) => page.slug === categoryParam,
    );
    if (!page) {
      return notFound();
    }
    return page.component;
  }

  if (sectionInList?.type === "single-component") {
    const category = findCategoryBySlug(
      sectionInList,
      categoryParam,
    ) as SingleComponentCategoryType | null;
    if (!category) {
      return notFound();
    }
    return (
      <SingleComponentCategory
        sectionSlug={sectionInList.slug}
        category={category}
      />
    );
  }

  if (sectionInList?.type === "multiple-component") {
    const category = findCategoryBySlug(
      sectionInList,
      categoryParam,
    ) as CategoryType | null;
    if (!category) {
      return notFound();
    }
    return (
      <MultipleComponentCategory
        sectionSlug={sectionInList.slug}
        category={category}
      />
    );
  }
}
