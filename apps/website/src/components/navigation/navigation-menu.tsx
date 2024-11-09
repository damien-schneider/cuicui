import { differenceInDays } from "date-fns";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
	GlobalNavItem,
	SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { SectionsList } from "@cuicui/ui";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import type {
	CategoryType,
	SingleComponentCategoryType,
} from "@cuicui/ui/lib/types/component";
import { cn } from "#/src/utils/cn";

export default function NavigationMenu({
	isMobile,
	className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
	function getCategoryTagMultipleComponentCategory(category: CategoryType) {
		const isNew =
			differenceInDays(new Date(), category.releaseDateCategory ?? 0) < 21;
		if (category.comingSoonCategory) {
			return "Coming Soon";
		}
		if (isNew) {
			return "New";
		}
		return null;
	}
	function getCategoryTagSingleComponentCategory(
		category: SingleComponentCategoryType,
	) {
		const isNew =
			differenceInDays(new Date(), category.releaseDateCategory ?? 0) < 21;
		if (category.comingSoonCategory) {
			return "Coming Soon";
		}
		if (isNew) {
			return "New";
		}

		return null;
	}

	function getClosestUpdatedComponentDate(dateList: (Date | null)[]) {
		return dateList.reduce((acc, date) => {
			if (!date) {
				return acc;
			}
			if (!acc) {
				return date;
			}
			return date > acc ? date : acc;
		}, null);
	}

	return (
		<nav className={cn("mt-5 mb-12 px-1 space-y-2 min-h-full", className)}>
			{SectionsList.map((section) => {
				if (section.type === "page") {
					return (
						<SectionWrapper
							sectionSlug={section.slug}
							key={section.slug}
							name="Tools"
						>
							<NavigationAnimatedBackground>
								{section.pageList.map((page) => (
									<li
										className="block z-10"
										data-id={page.slug}
										key={page.slug}
									>
										<GlobalNavItem
											Icon={<page.icon className="size-4" />}
											href={`/${section.slug}/${page.slug}`}
											isMobile={isMobile}
											name={page.name}
										/>
									</li>
								))}
							</NavigationAnimatedBackground>
						</SectionWrapper>
					);
				}
				if (section.type === "single-component") {
					return (
						<SectionWrapper
							key={section.slug}
							name={section.name}
							sectionSlug={section.slug}
						>
							<NavigationAnimatedBackground>
								{section.categoriesList.map((category, _index) => {
									return (
										<li
											className="block"
											data-id={category.slug}
											key={category.slug}
										>
											<GlobalNavItem
												Icon={<category.icon className="size-4" />}
												href={`/${section.slug}/${category.slug}`}
												isMobile={isMobile}
												name={category.name}
												tag={getCategoryTagSingleComponentCategory(category)}
												target="sameWindow"
											/>
										</li>
									);
								})}
							</NavigationAnimatedBackground>
						</SectionWrapper>
					);
				}
				if (section.type === "multiple-component") {
					return (
						<SectionWrapper
							key={section.slug}
							name={section.name}
							sectionSlug={section.slug}
						>
							<NavigationAnimatedBackground>
								{section.categoriesList.map((category, _index) => {
									return (
										<li
											className="block"
											data-id={category.slug}
											key={category.slug}
										>
											<GlobalNavItem
												Icon={<category.icon className="size-4" />}
												href={`/${section.slug}/${category.slug}`}
												isMobile={isMobile}
												name={category.name}
												tag={getCategoryTagMultipleComponentCategory(category)}
												target="sameWindow"
											/>
										</li>
									);
								})}
							</NavigationAnimatedBackground>
						</SectionWrapper>
					);
				}
			})}
		</nav>
	);
}
