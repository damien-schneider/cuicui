import { notFound } from "next/navigation";
import { fetchMultipleComponentData } from "#/src/app/(components)/[section]/[category]/process-variant-data";
import ComingSoonCard from "#/src/components/coming-soon";
import HeaderComponent from "#/src/components/component-wrapper/header-component";
import InspirationComponentFooter from "#/src/components/component-wrapper/inspiration-component-footer";
import VariantTabs from "#/src/components/component-wrapper/variant-tabs";
import type { CategoryType, SectionType } from "#/src/lib/types/component";
import GithubEditButton from "#/src/components/component-wrapper/github-edit-button";

export default async function MultipleComponentCategory({
	category,
	sectionSlug,
}: Readonly<{ category: CategoryType; sectionSlug: SectionType["slug"] }>) {
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
		<div className="space-y-32">
			{componentList.map((component) => (
				<div className="" key={component.name}>
					<div className="flex">
						<GithubEditButton
							sectionSlug={sectionSlug}
							categorySlug={category.slug}
							componentSlug={component.slug}
						/>
					</div>
					<HeaderComponent
						componentBadges={component.componentBadges}
						description={component.description}
						title={component.name}
					/>
					<InspirationComponentFooter
						inspiration={component.inspiration}
						inspirationLink={component.inspirationLink}
					/>
					<VariantTabs
						isChildUsingHeightFull={component.isChildUsingHeightFull}
						isIframed={component.isIframed}
						isResizable={component.isResizable}
						key={component.name}
						rerenderButton={component.rerenderButton}
						size={component.sizePreview}
						variantList={component.componentList}
					/>
				</div>
			))}
		</div>
	);
}
