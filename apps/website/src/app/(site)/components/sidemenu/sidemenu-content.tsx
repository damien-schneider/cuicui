import Link from "next/link";

import Image from "next/image";

import LogoLarge from "#/src/assets/logo/logo-large.png";

import Byline from "../../../../ui/byline";

import {
  ScrollArea,
  ScrollAreaViewport,
} from "../../../../ui/shadcn/scrollarea";
import StarCuicuiGithubButton from "../../../../ui/star-github-project-button";
import { SearchMenu } from "../../../../components/search-menu/search-menu";
import { cn } from "@/cuicui/utils/cn";
import { NavigationSidemenuAnimatedBackground } from "#/src/app/(site)/components/sidemenu/navigation-animated-background";
import { firstMenuSection } from "#/src/lib/first-menu-section";
import { GlobalNavItem } from "#/src/app/(site)/components/sidemenu/navigation-item";
import { lastChangelogDate } from "#/src/changelogs/last-changelog-date";
import NewSectionSelector from "#/src/app/(site)/components/sidemenu/new-section-selector";
import { NewThemeSwitch } from "#/src/app/(site)/components/sidemenu/new-theme-selector";

export function SidemenuContent({
  className,
}: Readonly<{ className?: string }>) {
  const today = new Date();
  const isNew = lastChangelogDate
    ? lastChangelogDate > new Date(today.setDate(today.getDate() - 7))
    : false;
  return (
    <div className={cn("", className)}>
      <div className="w-full">
        <div className="flex items-center justify-between px-4 py-4">
          <Link
            className="group flex w-fit items-center gap-x-2.5 transition-transform hover:scale-105"
            href="/"
            title="Cuicui - The all in one React component library"
          >
            <Image alt="Cuicui logo" src={LogoLarge} width={100} />
            <span aria-hidden="true" className="sr-only">
              Cuicui - Best all in one React component library
            </span>
          </Link>
          <NewThemeSwitch />
        </div>
        <StarCuicuiGithubButton />
      </div>
      <NewSectionSelector />
      <div className="w-full mt-8">
        <NavigationSidemenuAnimatedBackground>
          {firstMenuSection.categoryList.map((category, _index) => (
            <li className="block" data-id={category.slug} key={category.slug}>
              <GlobalNavItem
                Icon={null}
                href={category.href ?? `/${category.slug}`}
                isMobile={false}
                name={category.name}
                tag={category.slug === "changelog" && isNew ? "New" : undefined}
                target={category.href ? "newWindow" : "sameWindow"}
              />
            </li>
          ))}
        </NavigationSidemenuAnimatedBackground>
      </div>
      <ScrollArea className="w-full h-full mt-4">
        <ScrollAreaViewport className="h-full" id="sidemenu-container">
          {/* <NavigationMenu /> */}
        </ScrollAreaViewport>
      </ScrollArea>
      <SearchMenu className="mb-2" />
      <Byline />
    </div>
  );
}
