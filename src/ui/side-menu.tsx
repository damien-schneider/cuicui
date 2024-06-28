"use client";

import clsx from "clsx";

import Link from "next/link";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
} from "next/navigation";
import { useState } from "react";
import { type Item, componentCategories } from "#/src/lib/component-categories";

import { differenceInDays } from "date-fns";
import { toast } from "sonner";
import { cn } from "../utils/cn";
import Badge from "./badge";
import Byline from "./byline";
import GradientContainer from "./gradient-container";
import GradientText from "./gradient-text";
import ScrollArea from "./scroll-area";
import ThemeSwitcher from "./theme-switcher";
export function DesktopSideMenu({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div className={cn(className)}>
      <GradientContainer
        classNameParent="w-full max-h-full h-full"
        classNameChild="overflow-auto h-full max-h-full flex flex-col justify-between"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="group flex w-full items-center gap-x-2.5">
            <GradientText className="text-2xl">CuiCui</GradientText>
          </Link>
          <ThemeSwitcher />
        </div>
        <ScrollArea className="">
          <nav className="space-y-6 px-2 mt-5 mb-12">
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
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </ScrollArea>
        <Byline />
      </GradientContainer>
      {/* </div> */}
    </div>
  );
}

function GlobalNavItem({
  item,
  parentSlug,
}: Readonly<{
  item: Item;
  parentSlug: string | null;
}>) {
  const segments = useSelectedLayoutSegments();

  const isActive = segments.some((segment) => segment === item.slug);

  function getHref() {
    if (parentSlug) {
      return `/${parentSlug}/${item.slug}`;
    }
    return `/${item.slug}`;
  }

  return (
    <Link
      href={getHref()}
      className={cn(
        "flex items-center justify-between rounded-md px-3 py-0.5 font-medium text-sm border border-transparent",
        " hover:bg-black/5 dark:hover:bg-white/20 hover:border-black/10 dark:hover:border-white/10 transition-colors duration-75",
        isActive
          ? "bg-black/5 dark:bg-white/10 dark:text-white/80 text-black/70"
          : "dark:text-white/40 text-black/40",
      )}
    >
      {item.name}
      {differenceInDays(new Date(), item.releaseDate ?? 0) < 24 && (
        <Badge variant="lime" size="sm">
          New
        </Badge>
      )}
    </Link>
  );
}
