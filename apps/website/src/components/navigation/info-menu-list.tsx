import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
	GlobalNavItem,
	SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import React from "react";

export default function InfoMenuList() {
	return (
		<SectionWrapper
			sectionSlug=""
			name={firstMenuSection.name}
			className="w-full mt-4"
		>
			<NavigationAnimatedBackground>
				{firstMenuSection.categoryList.map((category, _index) => (
					<li className="block" data-id={category.slug} key={category.slug}>
						<GlobalNavItem
							Icon={null}
							href={category.href ?? `/${category.slug}`}
							isMobile={false}
							name={category.name}
							target={category.href ? "newWindow" : "sameWindow"}
						/>
					</li>
				))}
			</NavigationAnimatedBackground>
		</SectionWrapper>
	);
}
