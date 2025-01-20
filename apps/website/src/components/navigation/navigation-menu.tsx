import { differenceInDays } from "date-fns";
import { NavigationAnimatedBackground } from "#/src/components/navigation/navigation-animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/components/navigation/navigation-item";
import { sectionList } from "@/section-list";
import type { CategoryType } from "@cuicui/ui/lib/types/component";
import { cn } from "@/cuicui/utils/cn";

export default function NavigationMenu({
  isMobile,
  className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
  function getCategoryTag(category: CategoryType) {
    const isNew =
      differenceInDays(new Date(), category.meta.latestUpdateDate ?? 0) < 21;
    if (category.meta.isComingSoon) {
      return "Coming Soon";
    }
    if (isNew) {
      return "New";
    }
    return null;
  }

  // function getClosestUpdatedComponentDate(dateList: (Date | null)[]) {
  //   return dateList.reduce((acc, date) => {
  //     if (!date) {
  //       return acc;
  //     }
  //     if (!acc) {
  //       return date;
  //     }
  //     return date > acc ? date : acc;
  //   }, null);
  // }

  return (
    <nav className={cn("mt-5 mb-12 px-1 space-y-2 min-h-full", className)}>
      {sectionList.map((section) => {
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
                      tag={getCategoryTag(category)}
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
