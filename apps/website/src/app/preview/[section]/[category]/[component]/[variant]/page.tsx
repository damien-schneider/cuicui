import { newFindSectionBySlug } from "#/src/utils/section-category-components-utils/section-list-utils";
import { sectionList } from "@/section-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createElement } from "react";

export const metadata: Metadata = {
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export function generateStaticParams() {
  const paramsList: {
    section: string;
    category: string;
    component: string;
    variant: string;
  }[] = [];

  for (const section of sectionList) {
    for (const category of section.categories) {
      if (category.components) {
        for (const variant of category.components) {
          paramsList.push({
            section: section.slug,
            category: category.slug,
            component: variant.slug,
            variant: variant.slug,
          });
        }
      }
    }
  }

  return paramsList;
}

export default async function PagePreview({
  params,
}: {
  params: Promise<{
    section: string;
    category: string;
    component: string;
    variant: string;
  }>;
}) {
  const { section, category, component, variant } = await params;

  const variantFound = findCorrespondingComponent({
    section,
    category,
    component,
    variant,
  });

  if (!variantFound) {
    return notFound();
  }

  return (
    <div className="grid place-content-center w-full min-h-screen">
      {createElement(variantFound.variantComponent)}
    </div>
  );
}

export const findCorrespondingComponent = ({
  section,
  category,
  component,
  variant,
}: {
  section: string;
  category: string;
  component: string;
  variant?: string;
}) => {
  const sectionFound = newFindSectionBySlug(section);
  if (!sectionFound) {
    return null;
  }
  console.log(sectionFound.slug);
  if (sectionFound) {
    const categoryFound = sectionFound.categories.find(
      (c) => c.slug === category,
    );
    if (!categoryFound) {
      return null;
    }
    console.log(categoryFound.slug);

    const componentFound = categoryFound.components?.find(
      (c) => c.slug === component,
    );
    if (!componentFound) {
      return null;
    }

    console.log(componentFound.slug);

    const variantFound = componentFound.variants.find(
      (v) => v.slug === variant,
    );

    console.log(variantFound?.slug);

    return variantFound;
  }
};
