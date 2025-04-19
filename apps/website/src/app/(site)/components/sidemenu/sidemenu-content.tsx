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
import { LogoArmony } from "#/src/app/(site)/components/sidemenu/logo-armony";

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

      <ArmonyCard />
      <SearchMenu className="mb-2" />
      <Byline />
    </div>
  );
}

const ArmonyCard = () => {
  return (
    <div className="">
      <p className="flex items-center justify-end text-sm text-neutral-500 dark:text-neutral-400 mb-2 gap-2">
        Sponsored by{" "}
        <Link href={"https://armony.ai"}>
          <LogoArmony
            size="lg"
            className="w-28 h-fit hover:translate-x-1 transition"
          />
        </Link>
      </p>

      <Link
        href={"https://armony.ai"}
        className="w-full h-20 group bg-neutral-100 dark:bg-neutral-800 rounded-lg flex items-center justify-center relative overflow-hidden border border-neutral-400/20 hover:border-neutral-400/50 hover:bg-white dark:hover:bg-neutral-900 transition"
      >
        <div className="absolute -left-8 -bottom-8 blur-3xl group-hover:opacity-50 size-32 rounded-full bg-conic-180 group-hover:scale-200 from-neutral-600 via-neutral-50 to-neutral-600 dark:via-neutral-500 group-hover:translate-x-68 duration-500 transition-all" />

        <div className="w-52">
          <LogoArmony
            size="sm"
            className="w-32 h-fit absolute -left-4 -bottom-4 group-hover:scale-105 transition"
          />
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 group-hover:translate-2 transition">
          A Single Subscription. Unlimited AI Power.
        </p>
      </Link>
    </div>
  );
};
