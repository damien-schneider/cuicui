"use client";

import Link from "next/link";

import Image from "next/image";

import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "../../utils/cn";

import Byline from "../byline";

import { ScrollArea } from "../shadcn-scrollarea";
import StarGithubProjectButton from "../star-github-project-button";
import ThemeSwitcher from "../theme-switcher";
import NavigationMenu from "./navigation-menu";
import { SearchMenu } from "./search-menu";

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
        <SearchMenu />
      </div>
      <ScrollArea className="w-full ">
        <NavigationMenu />
      </ScrollArea>
      <Byline className="w-full" />
    </div>
  );
}
