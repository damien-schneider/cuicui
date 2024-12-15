import { findCorrespondingComponent } from "#/src/app/preview/[section]/[category]/[component]/[variant]/page";
import { sectionList } from "@/section-list";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createElement } from "react";

export const metadata: Metadata = {
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export function generateStaticParams() {
  const paramsList: { section: string; category: string; component: string }[] =
    [];

  for (const section of sectionList) {
    for (const category of section.categories) {
      if (category.components) {
        for (const variant of category.components) {
          paramsList.push({
            section: section.slug,
            category: category.slug,
            component: variant.slug,
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
      {createElement(variantFound.variantComponent)}
    </div>
  );
}
