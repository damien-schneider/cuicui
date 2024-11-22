import { findCorrespondingComponent } from "#/src/app/preview/[section]/[category]/[component]/[variant]/page";
import { SectionsList } from "@cuicui/ui/lib/sections-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export async function generateStaticParams() {
  return SectionsList.map((section) => {
    if (section.type === "single-component") {
      return section.categoriesList.map((category) => {
        if (!category.component) {
          return null;
        }
        return category.component.variantList.map((variant) => {
          if (!category.component) {
            return null;
          }

          return {
            params: {
              section: section.slug,
              category: category.slug,
              component: variant.slugPreviewFile,
            },
          };
        });
      });
    }
  });
}

export default function PagePreview({
  params: { section, category, component },
}: {
  params: {
    section: string;
    category: string;
    component: string;
  };
}) {
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
        ? variantFound.component()
        : variantFound.component}
    </div>
  );
}
