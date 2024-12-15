import { notFound } from "next/navigation";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import type { CategoryType, SectionType } from "@cuicui/ui/lib/types/component";
import GithubEditButton from "#/src/components/component-wrapper/github-edit-button";

export default async function MultipleComponentCategory({
  category,
  sectionSlug,
}: Readonly<{
  category: CategoryType;
  sectionSlug: SectionType["slug"];
}>) {
  if (category.meta?.isComingSoon) {
    return <ComingSoonCard />;
  }

  if (!category.components || category.components.length === 0) {
    console.error("No components found in category", category);
    return notFound();
  }

  return (
    <div className="space-y-32">
      {category.components.map((component) => (
        <div className="" key={component.meta.name}>
          <div className="flex">
            <GithubEditButton
              sectionSlug={sectionSlug}
              categorySlug={category.slug}
              componentSlug={component.slug}
            />
          </div>
          <HeaderComponent
            componentBadges={component.meta.componentBadges}
            description={component.meta.description}
            title={component.meta.name}
          />
          <InspirationComponentFooter
            inspiration={component.meta.inspiration}
            inspirationLink={component.meta.inspirationLink}
          />
          <VariantTabs component={component} />
        </div>
      ))}
    </div>
  );
}
