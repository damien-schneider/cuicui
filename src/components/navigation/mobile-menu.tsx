"use client";

import { MenuIcon } from "lucide-react";
import Byline from "../../ui/byline";
import GradientContainer from "../../ui/gradient-container";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "#/src/utils/cn";

import StarGithubProjectButton from "../../ui/star-github-project-button";
import ThemeSwitcher from "../../ui/theme-switcher";
import NavigationMenu from "./navigation-menu";
export function MobileMenu({ className }: Readonly<{ className?: string }>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <Drawer.Root
      onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}
      open={isDrawerOpen}
    >
      <div
        className={cn(
          "flex lg:hidden",
          "fixed bottom-0 left-0 w-full justify-between p-2",
          className,
        )}
      >
        <GradientContainer classNameChild="p-2.5 h-full flex items-center gap-4">
          <Link
            className="group flex w-fit items-center gap-x-2.5 transition-transform hover:scale-105"
            href="/"
          >
            <Image alt="Cuicui logo" src={LogoLarge} width={100} />
          </Link>
          <ThemeSwitcher />
        </GradientContainer>
        <Drawer.Trigger className="">
          <GradientContainer classNameChild="w-20 h-14 grid place-content-center">
            <MenuIcon className="size-8" />
          </GradientContainer>
        </Drawer.Trigger>
      </div>

      <Drawer.Portal>
        <Drawer.Overlay
          className="fixed inset-0 z-50 backdrop-blur-sm"
          // style={{
          //   background:
          //     "linear-gradient(135deg, #3BC4F2, #7A69F9,#F26378,#F5833F)",
          // }}
          style={{
            // Gradient background
            background:
              "linear-gradient(90deg, rgba(59, 196, 242, 0.2), rgba(122, 105, 249, 0.2), rgba(242, 99, 120, 0.2), rgba(245, 131, 63, 0.2))",
          }}
        />
        <Drawer.Content className="fixed right-0 bottom-0 left-0 z-50 flex max-h-[80dvh] flex-col rounded-t-2xl bg-neutral-50 p-4 dark:bg-neutral-900">
          <Drawer.Handle className="mb-4 min-h-1 bg-neutral-400" />
          <StarGithubProjectButton />
          <div className="overflow-y-scroll">
            <NavigationMenu isMobile={true} />
          </div>
          <Byline />
        </Drawer.Content>
      </Drawer.Portal>
      {/* </div> */}
    </Drawer.Root>
  );
}
