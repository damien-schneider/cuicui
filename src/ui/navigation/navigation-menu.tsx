import { differenceInDays } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React, { useState } from "react";
import { componentCategories } from "#/src/lib/component-categories";
import type { CategoryItem } from "#/src/lib/types/component";
import { cn } from "#/src/utils/cn";
import { getCategoryHref } from "#/src/utils/get-component-href";
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
  return (
    <nav
      className={cn("space-y-6 px-2 mt-5 mb-12", className)}
      onMouseLeave={() => handleHoverButton(null)}
    >
      {componentCategories.map((section) => {
        return (
          <div key={section.name}>
            <div className="mb-2 px-3 font-semibold text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wider">
              <div>{section.name}</div>
            </div>

            <div className=" space-y-0.5">
              {section.items.map((item, index) => (
                <div
                  key={item.slug}
                  className="relative"
                  onMouseEnter={() => handleHoverButton(item.slug)}
                >
                  <GlobalNavItem
                    item={item}
                    parentSlug={section.slug}
                    isMobile={isMobile}
                  />
                  <AnimatePresence>
                    {elementFocused === item.slug && (
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
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

function GlobalNavItem({
  item,
  parentSlug,
  isMobile,
}: Readonly<{
  item: CategoryItem;
  parentSlug: string | null;
  isMobile?: boolean;
}>) {
  const segments = useSelectedLayoutSegments();

  const isActive = segments.some((segment) => segment === item.slug);

  return (
    <Link
      href={getCategoryHref({ item, parentSlug })}
      target={item.href ? "_blank" : undefined}
      className={cn(
        "group flex items-center justify-between rounded-md px-3 font-medium text-sm border border-transparent",
        isMobile ? "py-2" : "py-0.5",
        isActive
          ? "bg-black/5 dark:bg-white/10 dark:text-white/80 text-black/70"
          : "dark:text-white/40 text-black/40",
      )}
    >
      {item.name}
      {differenceInDays(new Date(), item.releaseDate ?? 0) < 24 && (
        <GradientContainer
          rounded="xs"
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
        >
          <GradientText className="text-xs">New</GradientText>
        </GradientContainer>
      )}
      {item.comingSoon && (
        <GradientContainer
          rounded="xs"
          classNameChild="text-xs px-1 py-0"
          classNameParent=""
        >
          <GradientText className="text-xs">Coming soon</GradientText>
        </GradientContainer>
      )}
      {item.href && (
        <ArrowUpRightIcon className="size-4  text-black/40 dark:text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
