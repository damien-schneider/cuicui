"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";
import { type Item, componentCategories } from "#/src/lib/component-categories";

import { MenuIcon } from "lucide-react";
import { cn } from "../utils/cn";
import Button from "./button";
import Byline from "./byline";
import GradientContainer from "./gradient-container";
import GradientText from "./gradient-text";
import ScrollArea from "./scroll-area";
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
        classNameChild="opacity-80 rounded-b-none h-full flex flex-col justify-between"
      >
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="group flex w-full items-center gap-x-2.5">
            <GradientText className="text-2xl">CuiCui</GradientText>
          </Link>
          <ThemeSwitcher />
          <Button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="size-8" />
          </Button>
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
      href={`/${item.slug}`}
      className={cn(
        "block rounded-md px-3 py-2 font-medium text-sm  border border-transparent",
        isActive
          ? "bg-black/5 dark:bg-white/10 dark:text-white/80 text-black/70"
          : "dark:text-white/40 text-black/40 hover:bg-black/5 dark:hover:bg-white/20 hover:border-black/10 dark:hover:border-white/10",
      )}
    >
      {item.name}
    </Link>
  );
}
