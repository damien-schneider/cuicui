"use client";

import Link from "next/link";

import Image from "next/image";

import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "../../utils/cn";

import Byline from "../../ui/byline";

import { ScrollArea } from "../../ui/shadcn/scrollarea";
import StarGithubProjectButton from "../../ui/star-github-project-button";
import ThemeSwitcher from "../../ui/theme-switcher";
import { SearchMenu } from "../search-menu/search-menu";
import NavigationMenu from "./navigation-menu";

export function DesktopSideMenu({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <div
      className={cn(
        "-translate-y-1/2 fixed top-1/2 z-50 hidden h-full max-h-dvh w-80 flex-col items-center justify-between p-3 lg:flex",
        className,
      )}
    >
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
