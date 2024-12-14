import { notFound } from "next/navigation";
import MultipleComponentCategory from "#/src/app/(site)/[section]/[category]/multiple-component-section";
import { sectionList as newSectionList } from "@cuicui/ui/new-section-list";
import type {} from "@cuicui/ui/lib/types/component";
import { newFindCategoryBySlug } from "#/src/utils/section-category-components-utils/find-category-by-slug";
import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/find-section-by-slug";
type Props = {
  params: Promise<{
    section: string;
    category: string;
  }>;
};

export function generateStaticParams() {
  const paramsArray = [];
  for (const section of newSectionList) {
    // if (
    //   section.type === "multiple-component" ||
    //   section.type === "single-component"
    // ) {
    //   for (const category of section.categoriesList) {
    //     paramsArray.push({
    //       section: section.slug,
    //       category: category.slug,
    //     });
    //   }
    // }
    // if (section.type === "page") {
    //   for (const page of section.pageList) {
    //     paramsArray.push({
    //       section: section.slug,
    //       category: page.slug,
    //     });
    //   }
    // }
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
  // if (sectionInList?.type === "page") {
  //   const page = sectionInList.pageList.find(
  //     (page) => page.slug === categoryParam,
  //   );
  //   if (!page) {
  //     return notFound();
  //   }
  //   return page.component;
  // }

  // if (sectionInList?.type === "single-component") {
  //   const category = findCategoryBySlug(
  //     sectionInList,
  //     categoryParam,
  //   ) as SingleComponentCategoryType | null;
  //   if (!category) {
  //     return notFound();
  //   }
  //   return (
  //     <SingleComponentCategory
  //       sectionSlug={sectionInList.slug}
  //       category={category}
  //     />
  //   );
  // }

  // const category = findCategoryBySlug(
  //   sectionInList,
  //   categoryParam,
  // ) as CategoryType | null;

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
