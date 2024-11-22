import { SectionsList } from "@cuicui/ui/lib/sections-list";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  referrer: "no-referrer",
  robots: "noindex, nofollow",
};

export async function generateStaticParams() {
  return SectionsList.map((section) => {
    if (section.type === "multiple-component") {
      return section.categoriesList.map((category) => {
        return category.componentList?.map((component) => {
          return component.variantList.map((variant) => {
            return {
              params: {
                section: section.slug,
                category: category.slug,
                component: component.slug,
                variant: variant.slugPreviewFile,
              },
            };
          });
        });
      });
    }
  });
}

export default function PagePreview({
  params: { section, category, component, variant },
}: {
  params: {
    section: string;
    category: string;
    component: string;
    variant: string;
  };
}) {
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
      {typeof variantFound.component === "function"
        ? variantFound.component()
        : variantFound.component}
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
  const sectionFound = SectionsList.find((s) => s.slug === section);
  if (!sectionFound) {
    return null;
  }
  console.log(sectionFound.slug);
  if (sectionFound.type === "multiple-component") {
    const categoryFound = sectionFound.categoriesList.find(
      (c) => c.slug === category,
    );
    if (!categoryFound) {
      return null;
    }
    console.log(categoryFound.slug);

    const componentFound = categoryFound.componentList?.find(
      (c) => c.slug === component,
    );
    if (!componentFound) {
      return null;
    }

    console.log(componentFound.slug);

    const variantFound = componentFound.variantList.find(
      (v) => v.slugPreviewFile === variant,
    );

    console.log(variantFound?.slugPreviewFile);

    return variantFound;
  }

  if (sectionFound.type === "single-component") {
    const categoryFound = sectionFound.categoriesList.find(
      (c) => c.slug === category,
    );
    if (!categoryFound) {
      return null;
    }

    const variantFound = categoryFound.component?.variantList.find(
      // We use component instead of variant as it is a single-component
      (v) => v.slugPreviewFile === component,
    );

    return variantFound;
  }
};
