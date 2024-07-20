"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { type Item, componentCategories } from "#/src/lib/component-categories";

import { ArrowUpRightIcon, GithubIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import LogoLarge from "#/src/assets/logo/logo-large.png";
import { cn } from "../utils/cn";
import Button from "./button";
import Byline from "./byline";
import GradientContainer from "./gradient-container";
import GradientText from "./gradient-text";
import { ScrollArea } from "./shadcn-scrollarea";
import ThemeSwitcher from "./theme-switcher";

export function MobileNavbar({ className }: Readonly<{ className?: string }>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className={cn(
        "transition-all h-full duration-700 flex flex-col lg:hidden w-full items-end justify-end fixed z-50 bottom-0 ",
        isOpen ? "max-h-dvh" : "max-h-20",
        className,
      )}
    >
      <GradientContainer
        classNameParent="flex flex-col w-full max-h-full backdrop-blur-lg rounded-b-none"
        classNameChild="rounded-b-none h-full flex flex-col justify-between p-2"
        background="solid"
      >
        <div>
          <div className="flex items-center justify-between px-4 py-4">
            <Link href="/" className="group flex w-full items-center gap-x-2.5">
              <Image src={LogoLarge} alt="Cuicui" width={120} />
            </Link>
            <ThemeSwitcher />
            <Button onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className="size-8" />
            </Button>
          </div>
          <GradientContainer
            rounded="sm"
            classNameChild="hover:opacity-80 transition-opacity duration-150 ease-in-out p-4"
            classNameParent=""
          >
            <Link
              href="https://github.com/damien-schneider/cuicui"
              className="flex gap-2 items-center  text-sm text-neutral-500 font-medium"
            >
              <GithubIcon className="size-5 fill-neutral-300 stroke-neutral-400 dark:stroke-neutral-500 dark:fill-neutral-600" />
              Star this project on GitHub
            </Link>
          </GradientContainer>
        </div>
        <ScrollArea>
          <nav className="space-y-6 px-2 pt-5 mb-24">
            {componentCategories.map((section) => {
              return (
                <div key={section.name}>
                  <div className="mb-2 px-3 font-semibold text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-wider">
                    <div>{section.name}</div>
                  </div>

                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <GlobalNavItem key={item.slug} item={item} />
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
    </motion.div>
  );
}

function GlobalNavItem({
  item,
}: Readonly<{
  item: Item;
}>) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      href={item.href ? item.href : `/${item.slug}`}
      target={item.href ? "_blank" : undefined}
      className={cn(
        "flex rounded-md px-3 py-2 font-medium text-sm  border border-transparent  justify-between",
        isActive
          ? "bg-black/5 dark:bg-white/10 dark:text-white/80 text-black/70"
          : "dark:text-white/40 text-black/40 hover:bg-black/5 dark:hover:bg-white/20 hover:border-black/10 dark:hover:border-white/10",
      )}
    >
      {item.name}
      {item.href && (
        <ArrowUpRightIcon className="size-4  text-black/40 dark:text-white/40" />
      )}
    </Link>
  );
}
