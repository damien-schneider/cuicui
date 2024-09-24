import { notFound } from "next/navigation";
import { Fragment } from "react";
import { fetchComponentData } from "#/src/app/(components)/[section]/[category]/process-variant-data";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";

export async function generateStaticParams() {
  // Iterate over the SectionsList to create all possible combinations of section and category
  const params = SectionsList.flatMap((section) =>
    section.categoriesList.map((category) => ({
      section: section.slug,
      category: category.slug,
    })),
  );

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

  const category = section?.categoriesList.find(
    (category) => category.slug === params.category,
  );

  if (!category) {
    return notFound();
  }

  if (category.comingSoonCategory) {
    return <ComingSoonCard />;
  }
  if (!category.componentList) {
    return notFound();
  }

  const componentList = await fetchComponentData({
    categorySlug: category.slug,
    componentList: category.componentList,
  });

  return (
    <div className="space-y-6">
      {componentList.map((component) => (
        <Fragment key={component.title}>
          <HeaderComponent
            componentBadges={component.componentBadges}
            description={component.description}
            title={component.title}
          />
          <VariantTabs
            componentList={component.componentList}
            isChildUsingHeightFull={component.isChildUsingHeightFull}
            isIframed={component.isIframed}
            isResizable={component.isResizable}
            key={component.title}
            rerenderButton={component.rerenderButton}
            size={component.sizePreview}
          />
          <InspirationComponentFooter
            inspiration={component.inspiration}
            inspirationLink={component.inspirationLink}
          />
        </Fragment>
      ))}
    </div>
  );
}
