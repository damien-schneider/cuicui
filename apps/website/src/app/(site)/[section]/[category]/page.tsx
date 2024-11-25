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
  params: {
    section: string;
    category: string;
  };
};

export async function generateStaticParams() {
  const params = sectionList.flatMap((section) => {
    if (
      section.type === "multiple-component" ||
      section.type === "single-component"
    ) {
      return section.categoriesList.map((category) => ({
        section: section.slug,
        category: category.slug,
      }));
    }
    if (section.type === "page") {
      return section.pageList.map((page) => ({
        section: section.slug,
        category: page.slug,
      }));
    }
  });

  // Return the generated params array
  return params;
}

export default async function Page({ params }: Readonly<Props>) {
  const section = sectionList.find(
    (section) => section.slug === params.section,
  );
  if (!section) {
    return notFound();
  }
  if (section?.type === "page") {
    const page = section.pageList.find((page) => page.slug === params.category);
    if (!page) {
      return notFound();
    }
    return page.component;
  }

  if (section?.type === "single-component") {
    const category = findCategoryBySlug(
      section,
      params.category,
    ) as SingleComponentCategoryType | null;
    if (!category) {
      return notFound();
    }
    return (
      <SingleComponentCategory sectionSlug={section.slug} category={category} />
    );
  }

  if (section?.type === "multiple-component") {
    const category = findCategoryBySlug(
      section,
      params.category,
    ) as CategoryType | null;
    if (!category) {
      return notFound();
    }
    return (
      <MultipleComponentCategory
        sectionSlug={section.slug}
        category={category}
      />
    );
  }
}
