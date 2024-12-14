import { differenceInDays } from "date-fns";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { sectionList as newSectionList } from "@/new-section-list";
import type {
  NewCategoryType,
  SingleComponentCategoryType,
} from "@cuicui/ui/lib/types/component";
import { cn } from "#/src/utils/cn";

export default function NavigationMenu({
  isMobile,
  className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
  function getCategoryTagMultipleComponentCategory(category: NewCategoryType) {
    const isNew =
      differenceInDays(new Date(), category.meta.releaseDateCategory ?? 0) < 21;
    if (category.meta.comingSoonCategory) {
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
      {newSectionList.map((section) => {
        return (
          <SectionWrapper
            key={section.slug}
            name={section.meta.name}
            sectionSlug={section.slug}
          >
            <NavigationAnimatedBackground>
              {section.categories.map((category, _index) => {
                return (
                  <li
                    className="block"
                    data-id={category.slug}
                    key={category.slug}
                  >
                    <GlobalNavItem
                      Icon={<category.meta.icon className="size-4" />}
                      href={`/${section.slug}/${category.slug}`}
                      isMobile={isMobile}
                      name={category.meta.name}
                      tag={getCategoryTagMultipleComponentCategory(category)}
                      target="sameWindow"
                    />
                  </li>
                );
              })}
            </NavigationAnimatedBackground>
          </SectionWrapper>
        );
      })}
    </nav>
  );
}
