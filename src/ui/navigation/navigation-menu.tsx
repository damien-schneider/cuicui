"use client";
import { differenceInDays } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { type ReactNode, useState } from "react";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { cn } from "#/src/utils/cn";

import GradientContainer from "../gradient-container";
import GradientText from "../gradient-text";

export default function NavigationMenu({
  isMobile,
  className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
  const [elementFocused, setElementFocused] = useState<number | string | null>(
    null,
  );
  const handleHoverButton = (index: number | string | null) => {
    setElementFocused(index);
  };

  function getAlphabeticallySortedSectionList() {
    return SectionsList.map((section) => {
      return {
        ...section,
        items: section.categoriesList.toSorted((a, b) =>
          a.name.localeCompare(b.name),
        ),
      };
    });
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

  const alphabeticallySortedSectionList = getAlphabeticallySortedSectionList();

  return (
    <nav
      className={cn("mt-5 mb-12 space-y-6 px-2", className)}
      onMouseLeave={() => handleHoverButton(null)}
    >
      <SectionWrapper name={firstMenuSection.name}>
        {firstMenuSection.categoryList.map((category, _index) => (
          <li
            className="relative list-none"
            key={category.slug}
            onMouseEnter={() => handleHoverButton(category.slug)}
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
            <AnimatePresence>
              {elementFocused === category.slug && (
                <motion.div
                  animate={{ opacity: 1 }}
                  className="-z-10 absolute top-0 left-0 h-full w-full rounded-md border border-neutral-500/10 bg-neutral-200 dark:bg-neutral-800"
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  layout={true}
                  layoutId="navigation-element"
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </SectionWrapper>
      {alphabeticallySortedSectionList.map((section) => {
        return (
          <SectionWrapper key={section.slug} name={section.name}>
            {section.categoriesList.map((category, _index) => {
              const listOfUpdatedDates = category.componentList?.map(
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
                  className="relative list-none"
                  key={category.slug}
                  onMouseEnter={() => handleHoverButton(category.slug)}
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
                  <AnimatePresence>
                    {elementFocused === category.slug && (
                      <motion.div
                        animate={{ opacity: 1 }}
                        className="-z-10 absolute top-0 left-0 h-full w-full rounded-md border border-neutral-500/10 bg-neutral-200 dark:bg-neutral-800"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        layout={true}
                        layoutId="navigation-element"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </SectionWrapper>
        );
      })}
    </nav>
  );
}

function GlobalNavItem({
  isMobile,
  href,
  name,
  Icon,
  isComingSoon,
  releaseDate,
  updatedDate,
  target,
}: Readonly<{
  isMobile?: boolean;
  href: string;
  name: string;
  // biome-ignore lint/style/useNamingConvention: <As it is JSX, we have to call it with caps>
  Icon: LucideIcon | null;
  isComingSoon: boolean;
  releaseDate: Date | null;
  updatedDate: Date | null;
  target: "newWindow" | "sameWindow";
}>) {
  const segments = useSelectedLayoutSegments();
  const splittedHref = href.split("/");
  const lastSegment = splittedHref[splittedHref.length - 1];

  let isActive = false;
  if (segments) {
    isActive = segments.some((segment) => segment === lastSegment);
  }

  const isNew = differenceInDays(new Date(), releaseDate ?? 0) < 21;
  const isUpdated = differenceInDays(new Date(), updatedDate ?? 0) < 14;

  return (
    <Link
      className={cn(
        "group flex items-center justify-between rounded-md border border-transparent px-3 font-medium text-sm",
        isMobile ? "py-2" : "py-0.5",
        isActive
          ? "bg-black/5 text-black/70 dark:bg-white/10 dark:text-white/80"
          : "text-black/40 dark:text-white/40",
      )}
      data-testid={`navigation-link-${name}`}
      href={href}
      target={target === "newWindow" ? "_blank" : undefined}
    >
      <div className="flex items-center gap-2 ">
        {Icon && (
          <Icon className="size-4 transform-gpu text-neutral-400 transition-transform group-hover:scale-125 dark:text-neutral-500" />
        )}
        <p className=" transform-gpu tracking-tighter transition-transform group-hover:translate-x-0.5">
          {name}
        </p>
      </div>
      {}
      {isComingSoon ? (
        <GradientContainer
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
          rounded="xs"
        >
          <GradientText className="text-xs">Coming soon</GradientText>
        </GradientContainer>
      ) : isNew ? (
        <GradientContainer
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
          rounded="xs"
        >
          <GradientText className="text-xs">New</GradientText>
        </GradientContainer>
      ) : isUpdated ? (
        <GradientContainer
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
          rounded="xs"
        >
          <GradientText className="text-xs">Updated</GradientText>
        </GradientContainer>
      ) : null}
      {target === "newWindow" && (
        <ArrowUpRightIcon className="group-hover:-translate-y-0.5 size-4 text-black/40 transition-transform group-hover:translate-x-0.5 dark:text-white/40" />
      )}
    </Link>
  );
}

const SectionWrapper = ({
  children,
  name,
}: {
  children: ReactNode;
  name: string;
}) => {
  return (
    <div>
      <div className="mb-2 px-3 font-semibold text-neutral-500 text-xs uppercase tracking-wider dark:text-neutral-400">
        <div>{name}</div>
      </div>
      {children}
    </div>
  );
};
