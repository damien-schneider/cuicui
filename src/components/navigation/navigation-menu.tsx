"use client";
import { differenceInDays } from "date-fns";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import type {
  CategoryType,
  SingleComponentCategoryType,
} from "#/src/lib/types/component";
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
    <nav className={cn("mt-5 mb-12 px-1 space-y-2 ", className)}>
      <SectionWrapper
        sectionSlug=""
        disclosure={false}
        name={firstMenuSection.name}
        className="mb-16"
      >
        <NavigationAnimatedBackground>
          {firstMenuSection.categoryList.map((category, _index) => (
            <li className="block" data-id={category.slug} key={category.slug}>
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
            <SectionWrapper
              sectionSlug={section.slug}
              Icon={section.icon}
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
            <SectionWrapper
              Icon={section.icon}
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
            <SectionWrapper
              Icon={section.icon}
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
                        Icon={category.icon ?? null}
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
