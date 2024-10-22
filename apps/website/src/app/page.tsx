import Link from "next/link";
// import GradientContainer from "../ui/gradient-container";

import MenuSectionWrapper from "#/src/components/main-menus/menu-category-wrapper";
import { SectionsList } from "@cuicui/ui";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { MainMenusGradientCard } from "@cuicui/ui/cuicui/other/cursors/dynamic-cards/gradient-card";
import { MainMenuCardContent } from "./card";

export default function HomePage() {
	return (
		<div className="my-8 space-y-8 px-4">
			<h1 className="header-1">CuiCui - Copy Paste quality React component</h1>
			<p className="caption-md ">
				CuiCui is a modern UI copy paste library that helps you build beautiful
				websites and applications. Its name "CuiCui" is for Quick UI.
			</p>
			<div className="space-y-10 text-white">
				<h2 className="header-2">Explore the component categories</h2>
				<MenuSectionWrapper name={firstMenuSection.name}>
					{firstMenuSection.categoryList.map((category) => {
						return (
							<Link
								data-testid={`home-navigation-link-${category.name}`}
								href={category.href ?? `/${category.slug}`}
								key={category.name}
							>
								<MainMenusGradientCard
									description={category.description}
									title={category.name}
									withArrow={Boolean(category.href)}
								/>
							</Link>
						);
					})}
				</MenuSectionWrapper>

				{SectionsList.map((section) => (
					<MenuSectionWrapper key={section.name} name={section.name}>
						{section.type !== "page" &&
							section.categoriesList.map((category) => {
								return (
									<Link
										href={`/${section.slug}/${category.slug}`}
										key={category.name}
									>
										<MainMenusGradientCard
											description={category.description}
											title={category.name}
										>
											<MainMenuCardContent
												sectionSlug={section.slug}
												category={category}
											/>
										</MainMenusGradientCard>
									</Link>
								);
							})}
					</MenuSectionWrapper>
				))}
			</div>
		</div>
	);
}
