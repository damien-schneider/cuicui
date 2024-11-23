import { lastChangelogDate } from "#/src/changelogs/last-changelog-date";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { firstMenuSection } from "#/src/lib/first-menu-section";

export default async function InfoMenuList() {
  const today = new Date();
  // is New if latest changelog date is within 7 days
  const isNew = lastChangelogDate
    ? lastChangelogDate > new Date(today.setDate(today.getDate() - 7))
    : false;

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
              tag={category.slug === "changelog" && isNew ? "New" : undefined}
              target={category.href ? "newWindow" : "sameWindow"}
            />
          </li>
        ))}
      </NavigationAnimatedBackground>
    </SectionWrapper>
  );
}
