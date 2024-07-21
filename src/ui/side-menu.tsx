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
import { ArrowUpRight, ArrowUpRightIcon, GithubIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "../utils/cn";
import Badge from "./badge";
import Byline from "./byline";
import GradientContainer from "./gradient-container";
import GradientText from "./gradient-text";
import { ScrollArea } from "./shadcn-scrollarea";
import StarGithubProjectButton from "./star-github-project-button";
import ThemeSwitcher from "./theme-switcher";

export function DesktopSideMenu({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div
      className={cn(
        "p-3 top-1/2 z-50 hidden fixed lg:flex items-center w-80 max-h-dvh h-full -translate-y-1/2 flex-col justify-between",
      )}
    >
      <div className="w-full">
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="group flex items-center gap-x-2.5 w-fit hover:scale-105 transition-transform"
          >
            <Image src={LogoLarge} alt="Cuicui logo" width={100} />
          </Link>
          <ThemeSwitcher />
        </div>
        <StarGithubProjectButton />
      </div>
      <ScrollArea className="w-full ">
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
      <Byline className="w-full" />

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
        "group flex items-center justify-between rounded-md px-3 py-0.5 font-medium text-sm border border-transparent",
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
