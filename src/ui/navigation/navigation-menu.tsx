import { LayoutListIcon, PaletteIcon, TangentIcon } from "lucide-react";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { cn } from "#/src/utils/cn";
import AnimatedBackground from "#/src/ui/navigation/animated-background";
import {
  GlobalNavItem,
  SectionWrapper,
} from "#/src/ui/navigation/navigation-item";

export default function NavigationMenu({
  isMobile,
  className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
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
        <AnimatedBackground
          // defaultValue={TABS[0]}
          defaultValue="test"
          className="rounded-lg bg-zinc-400/10  flex z-0 pointer-events-none"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover={true}
        >
          {firstMenuSection.categoryList.map((category, _index) => (
            <li
              key={category.slug}
              data-id={category.slug}
              className="block z-10"
            >
              <GlobalNavItem
                Icon={null}
                href={category.href ?? `/${category.slug}`}
                isComingSoon={false}
                isMobile={isMobile}
                name={category.name}
                releaseDate={null}
                target={category.href ? "newWindow" : "sameWindow"}
                updatedDate={null}
              />
            </li>
          ))}
        </AnimatedBackground>
      </SectionWrapper>

      {SectionsList.map((section) => {
        if (section.type === "page") {
          return null;
        }
        if (section.type === "single-component") {
          return (
            <SectionWrapper key={section.slug} name={section.name}>
              {section.categoriesList.map((category, _index) => {
                return (
                  <GlobalNavItem
                    key={category.slug}
                    Icon={category.icon ?? null}
                    href={`/${section.slug}/${category.slug}`}
                    isComingSoon={category.comingSoonCategory ?? false}
                    isMobile={isMobile}
                    name={category.name}
                    releaseDate={category.releaseDateCategory ?? null}
                    target="sameWindow"
                    updatedDate={
                      category.component?.lastUpdatedDateComponent ?? null
                    }
                  />
                );
              })}
            </SectionWrapper>
          );
        }
        return (
          <SectionWrapper key={section.slug} name={section.name}>
            {section.categoriesList.map((category, _index) => {
              if (!category.componentList) {
                return;
              }
              const listOfUpdatedDates = category.componentList.map(
                (component) => component.lastUpdatedDateComponent ?? null,
              );
              // remove undefined values
              let closestUpdatedDate: null | Date = null;
              if (listOfUpdatedDates) {
                closestUpdatedDate =
                  getClosestUpdatedComponentDate(listOfUpdatedDates);
              }

              return (
                <li
                  data-id={category.slug}
                  className="relative list-none"
                  key={category.slug}
                >
                  <GlobalNavItem
                    Icon={category.icon ?? null}
                    href={`/${section.slug}/${category.slug}`}
                    isComingSoon={category.comingSoonCategory ?? false}
                    isMobile={isMobile}
                    name={category.name}
                    releaseDate={category.releaseDateCategory ?? null}
                    target="sameWindow"
                    updatedDate={closestUpdatedDate}
                  />
                </li>
              );
            })}
          </SectionWrapper>
        );
      })}
      <SectionWrapper name="Tools">
        <AnimatedBackground
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800 flex"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover={true}
        >
          <li data-id="color-converter" className="block">
            <GlobalNavItem
              Icon={PaletteIcon}
              href="/tools/color-converter"
              isMobile={isMobile}
              name="Color Converter"
            />
          </li>
          <li data-id="form-builder" className="block">
            <GlobalNavItem
              data-id="form-builder"
              Icon={LayoutListIcon}
              href="/tools/form-builder"
              isMobile={isMobile}
              name="Form Builder"
            />
          </li>
          <li data-id="bezier-curve-editor" className="block">
            <GlobalNavItem
              data-id="bezier-curve-editor"
              Icon={TangentIcon}
              href="/tools/bezier-curve-editor"
              isMobile={isMobile}
              name="Bezier Curve Editor"
            />
          </li>
        </AnimatedBackground>
      </SectionWrapper>
    </nav>
  );
}
