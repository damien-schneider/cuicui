import Link from "next/link";

import Image from "next/image";

import LogoLarge from "#/src/assets/logo/logo-large.png";

import Byline from "../../ui/byline";

import { ScrollArea, ScrollAreaViewport } from "../../ui/shadcn/scrollarea";
import StarCuicuiGithubButton from "../../ui/star-github-project-button";
import { SearchMenu } from "../search-menu/search-menu";
import NavigationMenu from "./navigation-menu";
import InfoMenuList from "#/src/components/navigation/info-menu-list";
import { cn } from "@/cuicui/utils/cn";

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
        </div>
        <StarCuicuiGithubButton />
      </div>
      <InfoMenuList />
      <ScrollArea className="w-full h-full mt-4">
        <ScrollAreaViewport className="h-full">
          <NavigationMenu />
        </ScrollAreaViewport>
      </ScrollArea>
      <SearchMenu className="mb-2" />
      <Byline />
    </div>
  );
}
