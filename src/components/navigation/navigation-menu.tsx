import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { cn } from "#/src/utils/cn";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import type {
  SingleComponentCategoryType,
  CategoryType,
} from "#/src/lib/types/component";
import { differenceInDays } from "date-fns";

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
    if (category.componentList) {
      const updatedDate = getClosestUpdatedComponentDate(
        category.componentList.map(
          (component) => component.lastUpdatedDateComponent,
        ),
      );
      const isUpdated = differenceInDays(new Date(), updatedDate ?? 0) < 14;
      if (isUpdated) {
        return "Updated";
      }
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

    const isUpdated =
      differenceInDays(
        new Date(),
        category.component?.lastUpdatedDateComponent ?? 0,
      ) < 14;

    if (isUpdated) {
      return "Updated";
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
    <nav className={cn("mt-5 mb-12 space-y-6 px-2", className)}>
      <SectionWrapper name={firstMenuSection.name}>
        <NavigationAnimatedBackground>
          {firstMenuSection.categoryList.map((category, _index) => (
            <li key={category.slug} data-id={category.slug} className="block">
              <GlobalNavItem
                Icon={null}
                href={category.href ?? `/${category.slug}`}
                isMobile={isMobile}
                name={category.name}
                target={category.href ? "newWindow" : "sameWindow"}
              />
            </li>
          ))}
        </NavigationAnimatedBackground>
      </SectionWrapper>

      {SectionsList.map((section) => {
        if (section.type === "page") {
          return (
            <SectionWrapper name="Tools">
              <NavigationAnimatedBackground>
                {section.pageList.map((page) => (
                  <li
                    key={page.slug}
                    data-id={page.slug}
                    className="block z-10"
                  >
                    <GlobalNavItem
                      Icon={page.icon}
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
            <SectionWrapper key={section.slug} name={section.name}>
              <NavigationAnimatedBackground>
                {section.categoriesList.map((category, _index) => {
                  return (
                    <li
                      data-id={category.slug}
                      key={category.slug}
                      className="block"
                    >
                      <GlobalNavItem
                        Icon={category.icon ?? null}
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
            <SectionWrapper key={section.slug} name={section.name}>
              <NavigationAnimatedBackground>
                {section.categoriesList.map((category, _index) => {
                  return (
                    <li
                      data-id={category.slug}
                      key={category.slug}
                      className="block"
                    >
                      <GlobalNavItem
                        Icon={category.icon ?? null}
                        href={`/${section.slug}/${category.slug}`}
                        isMobile={isMobile}
                        name={category.name}
                        target="sameWindow"
                        tag={getCategoryTagMultipleComponentCategory(category)}
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
