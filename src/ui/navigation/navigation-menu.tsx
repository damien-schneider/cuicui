"use client";
import { differenceInDays } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React, { type ReactNode, useState } from "react";
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

  const alphabeticallySortedSectionList = getAlphabeticallySortedSectionList();

  return (
    <nav
      className={cn("space-y-6 px-2 mt-5 mb-12", className)}
      onMouseLeave={() => handleHoverButton(null)}
    >
      <SectionWrapper name={firstMenuSection.name}>
        {firstMenuSection.categoryList.map((category, index) => (
          <li
            key={category.slug}
            className="relative"
            onMouseEnter={() => handleHoverButton(category.slug)}
          >
            <GlobalNavItem
              href={`/${category.slug}`}
              isMobile={isMobile}
              releaseDate={null}
              name={category.name}
              Icon={null}
              target={category.href ? "newWindow" : "sameWindow"}
              isComingSoon={false}
            />
            <AnimatePresence>
              {elementFocused === category.slug && (
                <motion.div
                  className="absolute top-0 left-0 w-full h-full bg-neutral-200 dark:bg-neutral-800 rounded-md border border-neutral-500/10 -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  layout
                  layoutId="navigation-element"
                />
              )}
            </AnimatePresence>
          </li>
        ))}
      </SectionWrapper>
      {alphabeticallySortedSectionList.map((section) => {
        return (
          <SectionWrapper key={section.slug} name={section.name}>
            {section.categoriesList.map((category, index) => (
              <li
                key={category.slug}
                className="relative"
                onMouseEnter={() => handleHoverButton(category.slug)}
              >
                <GlobalNavItem
                  href={`/${section.slug}/${category.slug}`}
                  isMobile={isMobile}
                  releaseDate={category.releaseDateCategory ?? null}
                  name={category.name}
                  Icon={category.icon ?? null}
                  target="sameWindow"
                  isComingSoon={category.comingSoonCategory ?? false}
                />
                <AnimatePresence>
                  {elementFocused === category.slug && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-neutral-200 dark:bg-neutral-800 rounded-md border border-neutral-500/10 -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      layout
                      layoutId="navigation-element"
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
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
  target,
}: Readonly<{
  isMobile?: boolean;
  href: string;
  name: string;
  Icon: LucideIcon | null;
  isComingSoon: boolean;
  releaseDate: Date | null;
  target: "newWindow" | "sameWindow";
}>) {
  const segments = useSelectedLayoutSegments();
  const splittedHref = href.split("/");
  const lastSegment = splittedHref[splittedHref.length - 1];
  const isActive = segments.some((segment) => segment === lastSegment);

  return (
    <Link
      href={href}
      target={target === "newWindow" ? "_blank" : undefined}
      className={cn(
        "group flex items-center justify-between rounded-md px-3 font-medium text-sm border border-transparent",
        isMobile ? "py-2" : "py-0.5",
        isActive
          ? "bg-black/5 dark:bg-white/10 dark:text-white/80 text-black/70"
          : "dark:text-white/40 text-black/40",
      )}
    >
      <div className="flex items-center gap-2 ">
        {Icon && (
          <Icon className="size-4 text-neutral-400 dark:text-neutral-500 transition-transform transform-gpu group-hover:scale-125" />
        )}
        <p className=" transition-transform group-hover:translate-x-0.5 transform-gpu tracking-tighter">
          {name}
        </p>
      </div>
      {differenceInDays(new Date(), releaseDate ?? 0) < 24 && (
        <GradientContainer
          rounded="xs"
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
        >
          <GradientText className="text-xs">New</GradientText>
        </GradientContainer>
      )}
      {isComingSoon && (
        <GradientContainer
          rounded="xs"
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
        >
          <GradientText className="text-xs">Coming soon</GradientText>
        </GradientContainer>
      )}
      {target === "newWindow" && (
        <ArrowUpRightIcon className="size-4  text-black/40 dark:text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
      <div className="mb-2 px-3 font-semibold text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wider">
        <div>{name}</div>
      </div>
      {children}
    </div>
  );
};
