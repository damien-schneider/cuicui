"use client";

import { MenuIcon } from "lucide-react";
import Byline from "../byline";
import GradientContainer from "../gradient-container";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "#/src/utils/cn";
import { ScrollArea } from "../shadcn-scrollarea";
import StarGithubProjectButton from "../star-github-project-button";
import ThemeSwitcher from "../theme-switcher";
import NavigationMenu from "./navigation-menu";
export function MobileMenu({ className }: Readonly<{ className?: string }>) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    setIsDrawerOpen(false);
  }, [pathname]);

  return (
    <Drawer.Root
      open={isDrawerOpen}
      onOpenChange={(isOpen) => setIsDrawerOpen(isOpen)}
    >
      <div
        className={cn(
          "flex lg:hidden",
          "w-full fixed bottom-0 left-0 justify-between p-2",
        )}
      >
        <GradientContainer classNameChild="p-2.5 h-full flex items-center gap-4">
          <Link
            href="/"
            className="group flex items-center gap-x-2.5 w-fit hover:scale-105 transition-transform"
          >
            <Image src={LogoLarge} alt="Cuicui logo" width={100} />
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
          className="fixed inset-0  backdrop-blur-sm z-50"
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
        <Drawer.Content className="z-50 bg-white rounded-t-2xl p-4 fixed bottom-0 left-0 right-0 max-h-[80dvh] flex flex-col">
          <Drawer.Handle className="bg-neutral-400 mb-4  min-h-1" />
          <StarGithubProjectButton />
          <div className="overflow-y-scroll">
            <NavigationMenu isMobile />
          </div>
          <Byline />
        </Drawer.Content>
      </Drawer.Portal>
      {/* </div> */}
    </Drawer.Root>
  );
}
