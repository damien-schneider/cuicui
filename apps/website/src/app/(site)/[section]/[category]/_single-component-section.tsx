//@ts-nocheck
import { notFound } from "next/navigation";
import { fetchSingleComponentData } from "#/src/app/(site)/[section]/[category]/process-variant-data";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import type {
  SectionType,
  SingleComponentCategoryType,
} from "@cuicui/ui/lib/types/component";
import GithubEditButton from "#/src/components/component-wrapper/github-edit-button";

export default async function SingleComponentCategory({
  category,
  sectionSlug,
}: Readonly<{
  category: SingleComponentCategoryType;
  sectionSlug: SectionType["slug"];
}>) {
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
    <div className="space-y-32">
      <div className="" key={category.name}>
        <div className="flex">
          <GithubEditButton
            sectionSlug={sectionSlug}
            categorySlug={category.slug}
          />
        </div>
        <HeaderComponent
          componentBadges={component.componentBadges}
          description={category.description}
          title={category.name}
        />
        <VariantTabs
          isIframed={component.isIframed}
          isResizable={component.isResizable}
          rerenderButton={component.rerenderButton}
          size={component.sizePreview}
          variantList={component.componentList}
          componentParams={{
            sectionSlug,
            categorySlug: category.slug,
          }}
        />
        <InspirationComponentFooter
          inspiration={component.inspiration}
          inspirationLink={component.inspirationLink}
        />
      </div>
    </div>
  );
}
