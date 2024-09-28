import { notFound } from "next/navigation";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import SingleComponentCategory from "#/src/app/(components)/[section]/[category]/single-component-section";
import MultipleComponentCategory from "#/src/app/(components)/[section]/[category]/multiple-component-section";
import type {
  CategoryType,
  MultiComponentSectionType,
  PageSectionType,
  SectionType,
  SingleComponentCategoryType,
  SingleComponentSectionType,
} from "#/src/lib/types/component";

export async function generateStaticParams() {
  // Iterate over the SectionsList to create all possible combinations of section and category

  const params = SectionsList.flatMap((section) => {
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
      //TODO : Handle pages
    }
  });

  // Return the generated params array
  return params;
}

export default async function Page({
  params,
}: Readonly<{
  params: {
    section: string;
    category: string;
  };
}>) {
  const section = SectionsList.find(
    (section) => section.slug === params.section,
  );
  if (!section) {
    return notFound();
  }
  if (section?.type === "page") {
    return;
  }

  if (section?.type === "single-component") {
    const category = findCategoryBySlug(section, params.category);
    if (!category) {
      return notFound();
    }
    return <SingleComponentCategory category={category} />;
  }

  if (section?.type === "multiple-component") {
    const category = findCategoryBySlug(section, params.category);
    if (!category) {
      return notFound();
    }
    return <MultipleComponentCategory category={category} />;
  }
}

// Function Overloads
function findCategoryBySlug(
  section: SingleComponentSectionType,
  categoryParamSlug: string,
): SingleComponentCategoryType | null;

function findCategoryBySlug(
  section: MultiComponentSectionType,
  categoryParamSlug: string,
): CategoryType | null;

function findCategoryBySlug(
  section: PageSectionType,
  categoryParamSlug: string,
): null;

// General Implementation
function findCategoryBySlug(
  section: SectionType,
  categoryParamSlug: string,
): SingleComponentCategoryType | CategoryType | null {
  if (section.type === "page") {
    return null;
  }
  return (
    section?.categoriesList.find(
      (category) => category.slug === categoryParamSlug,
    ) ?? null
  );
}
