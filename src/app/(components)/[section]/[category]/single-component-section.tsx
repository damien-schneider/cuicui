import { notFound } from "next/navigation";
import { Fragment } from "react";
import { fetchSingleComponentData } from "#/src/app/(components)/[section]/[category]/process-variant-data";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import type { SingleComponentCategoryType } from "#/src/lib/types/component";

export default async function SingleComponentCategory({
  category,
}: Readonly<{ category: SingleComponentCategoryType }>) {
  if (category.comingSoonCategory) {
    return <ComingSoonCard />;
  }

  if (!category.component) {
    return notFound();
  }

  const component = await fetchSingleComponentData({
    categorySlug: category.slug,
    component: category.component,
  });

  return (
    <div className="space-y-6">
      <Fragment key={category.name}>
        <HeaderComponent
          componentBadges={component.componentBadges}
          description={category.description}
          title={category.name}
        />
        <VariantTabs
          isChildUsingHeightFull={component.isChildUsingHeightFull}
          isIframed={component.isIframed}
          isResizable={component.isResizable}
          rerenderButton={component.rerenderButton}
          size={component.sizePreview}
          variantList={component.componentList}
        />
        <InspirationComponentFooter
          inspiration={component.inspiration}
          inspirationLink={component.inspirationLink}
        />
      </Fragment>
    </div>
  );
}
