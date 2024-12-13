import { findCorrespondingComponent } from "#/src/app/preview/[section]/[category]/[component]/[variant]/page";
import { sectionList } from "@/lib/section-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createElement } from "react";

export const metadata: Metadata = {
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export function generateStaticParams() {
  const paramsList = [];

  for (const section of sectionList) {
    if (section.type === "single-component") {
      for (const category of section.categoriesList) {
        if (category.component) {
          for (const variant of category.component.variantList) {
            if (category.component) {
              paramsList.push({
                section: section.slug,
                category: category.slug,
                component: variant.slugPreviewFile,
              });
            }
          }
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
  }>;
}) {
  const { section, category, component } = await params;

  const variantFound = findCorrespondingComponent({
    section,
    category,
    component,
  });

  if (!variantFound) {
    return notFound();
  }

  return (
    <div className="grid place-content-center w-full h-screen overflow-auto">
      {typeof variantFound.component === "function"
        ? createElement(variantFound.component)
        : variantFound.component}
    </div>
  );
}
