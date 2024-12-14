import { notFound } from "next/navigation";
import MultipleComponentCategory from "#/src/app/(site)/[section]/[category]/multiple-component-section";
import { sectionList as newSectionList } from "@cuicui/ui/new-section-list";
import type {} from "@cuicui/ui/lib/types/component";
import {
  newFindCategoryBySlug,
  newFindSectionBySlug,
} from "#/src/utils/section-category-components-utils/section-list-utils";

type Props = {
  params: Promise<{
    section: string;
    category: string;
  }>;
};

export function generateStaticParams() {
  const paramsArray: { section: string; category: string }[] = [];
  for (const section of newSectionList) {
    for (const category of section.categories) {
      paramsArray.push({
        section: section.slug,
        category: category.slug,
      });
    }
  }

  // Return the generated params array
  return paramsArray;
}

export default async function Page({ params }: Props) {
  const { section: sectionParam, category: categoryParam } = await params;
  const section = newFindSectionBySlug(sectionParam);
  if (!section) {
    return notFound();
  }

  const category = newFindCategoryBySlug({
    sectionSlug: sectionParam,
    categorySlug: categoryParam,
  });

  if (!category) {
    return notFound();
  }
  return (
    <MultipleComponentCategory sectionSlug={section.slug} category={category} />
  );
}
