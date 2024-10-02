import { fetchMultipleComponentData } from "#/src/app/(components)/[section]/[category]/process-variant-data";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import type { CategoryType } from "#/src/lib/types/component";
import { notFound } from "next/navigation";
import { Fragment } from "react";

export default async function MultipleComponentCategory({
  category,
}: Readonly<{ category: CategoryType }>) {
  if (category.comingSoonCategory) {
    return <ComingSoonCard />;
  }

  if (!category.componentList) {
    return notFound();
  }

  // If the componentList is not an array, we convert it to an array
  const componentArray = Array.isArray(category.componentList)
    ? category.componentList
    : [category.componentList];

  const componentList = await fetchMultipleComponentData({
    categorySlug: category.slug,
    componentList: componentArray,
  });

  return (
    <div className="space-y-6">
      {componentList.map((component) => (
        <Fragment key={component.name}>
          <HeaderComponent
            componentBadges={component.componentBadges}
            description={component.description}
            title={component.name}
          />
          <VariantTabs
            variantList={component.componentList}
            isChildUsingHeightFull={component.isChildUsingHeightFull}
            isIframed={component.isIframed}
            isResizable={component.isResizable}
            key={component.name}
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
