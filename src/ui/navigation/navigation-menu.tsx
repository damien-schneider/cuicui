import { differenceInDays } from "date-fns";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import React from "react";
import { type Item, componentCategories } from "#/src/lib/component-categories";
import { cn } from "#/src/utils/cn";
import GradientContainer from "../gradient-container";
import GradientText from "../gradient-text";
export default function NavigationMenu({
  isMobile,
  className,
}: Readonly<{ isMobile?: boolean; className?: string }>) {
  return (
    <nav className={cn("space-y-6 px-2 mt-5 mb-12", className)}>
      {componentCategories.map((section) => {
        return (
          <div key={section.name}>
            <div className="mb-2 px-3 font-semibold text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wider">
              <div>{section.name}</div>
            </div>

            <div className=" space-y-0.5">
              {section.items.map((item) => (
                <GlobalNavItem
                  key={item.slug}
                  item={item}
                  parentSlug={section.slug}
                  isMobile={isMobile}
                />
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
  item: Item;
  parentSlug: string | null;
  isMobile?: boolean;
}>) {
  const segments = useSelectedLayoutSegments();

  const isActive = segments.some((segment) => segment === item.slug);

  function getHref() {
    if (item.href) {
      return item.href;
    }
    if (parentSlug) {
      return `/${parentSlug}/${item.slug}`;
    }
    return `/${item.slug}`;
  }

  return (
    <Link
      href={getHref()}
      target={item.href ? "_blank" : undefined}
      className={cn(
        "group flex items-center justify-between rounded-md px-3 font-medium text-sm border border-transparent",
        isMobile ? "py-2" : "py-0.5",
        " hover:bg-black/5 dark:hover:bg-white/20 hover:border-black/10 dark:hover:border-white/10 transition-colors duration-75",
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
      {item.href && (
        <ArrowUpRightIcon className="size-4  text-black/40 dark:text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}
