"use client";
import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion";

import { PlusIcon, SquareIcon } from "lucide-react";
import { type HTMLAttributes, useState } from "react";
import { toast } from "sonner";
import { cn } from "#/src/utils/cn";

//TODO : Improve by refactoring the different sections into their own components
//TODO : Improve by adding a dark version
//TODO : Add dimensions section with sliders

const menuCategories = [
  { label: "Dimensions", slug: "dimensions", menuWidth: 320, menuHeight: 240 },
  {
    label: "Aspect Ratio",
    slug: "aspect-ratio",
    menuWidth: 320,
    menuHeight: 188,
  },
  { label: "Prompt", slug: "prompt", menuWidth: 320, menuHeight: 240 },
] as const;

export default function DynamicSettingsVariant1() {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuSelected, setSubMenuSelected] = useState("dimensions");
  const handleOpenSettings = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      animate={{
        height: isOpen
          ? menuCategories.find((item) => item.slug === subMenuSelected)
              ?.menuHeight
          : 52,
        width: isOpen
          ? menuCategories.find((item) => item.slug === subMenuSelected)
              ?.menuWidth
          : 132,
      }}
      transition={{
        type: "spring",
        duration: 0.6,
        // damping: 8,
        // stiffness: 120,
      }}
      className={cn(
        "overflow-hidden justify-between bg-neutral-900 rounded-2xl items-center text-neutral-50 p-2 shadow-lg",
        !isOpen && "hover:bg-neutral-800",
      )}
    >
      <div className="h-full">
        <div
          className={cn(
            "transition-all duration-300 flex flex-col justify-between gap-2 h-full transform-gpu",
          )}
        >
          <div
            className={cn(
              "transition-all duration-300 flex items-center justify-between gap-2 group transform-gpu",
            )}
          >
            {isOpen ? (
              <NavigationMenu
                setSubMenuSelected={setSubMenuSelected}
                subMenuSelected={subMenuSelected}
              />
            ) : (
              <button
                type="button"
                className={cn(
                  "flex gap-2 p-2 transition-all text-nowrap font-medium text-neutral-500 group-hover:text-neutral-50 text-sm transform-gpu",
                )}
                onClick={() => setIsOpen(true)}
              >
                Add Style
              </button>
            )}
            <button
              onClick={() => handleOpenSettings()}
              type="button"
              className="size-8 text-neutral-400 hover:text-neutral-300 transition-colors duration-500 transform-gpu"
            >
              <PlusIcon
                className={cn(
                  " transition-transform duration-300 transform-gpu",
                  isOpen ? "rotate-45" : "rotate-0",
                )}
              />
            </button>
          </div>
          {isOpen && subMenuSelected === "aspect-ratio" && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, type: "spring" }}
              className="flex flex-col gap-4 justify-between"
            >
              <AspectRatioSection />
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ml-2">
                  <div className="rounded-full size-2 bg-yellow-200" />
                  <p className="text-sm text-neutral-500">Changes</p>
                </div>
                <button
                  type="submit"
                  className="text-neutral-800 bg-yellow-200 py-1 font-medium px-2 rounded-lg"
                  onClick={() => {
                    handleOpenSettings();
                    toast.message("Changes done", {
                      description: "Changes validated and applied successfully",
                    });
                  }}
                >
                  Apply Changes
                </button>
              </div>
            </motion.div>
          )}
          {isOpen && subMenuSelected === "prompt" && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, type: "spring" }}
              className="flex flex-col gap-4 justify-between h-full"
            >
              <textarea
                placeholder="Add a new prompt"
                className="h-[120px] w-full resize-none rounded-[6px] bg-transparent px-2 py-[6px] text-sm text-white placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200"
              />
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ml-2">
                  <div className="rounded-full size-2 bg-yellow-200" />
                  <p className="text-sm text-neutral-500">Changes</p>
                </div>
                <button
                  type="submit"
                  className="text-neutral-800 bg-yellow-200 py-1 font-medium px-2 rounded-lg"
                  onClick={() => {
                    handleOpenSettings();
                    toast.message("Changes done", {
                      description: "Changes validated and applied successfully",
                    });
                  }}
                >
                  Apply Changes
                </button>
              </div>
            </motion.div>
          )}
          {isOpen && subMenuSelected === "dimensions" && (
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, type: "spring" }}
              className="flex flex-col gap-4 justify-between"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2 ml-2">
                  <div className="rounded-full size-2 bg-yellow-200" />
                  <p className="text-sm text-neutral-500">Changes</p>
                </div>
                <button
                  type="submit"
                  className="text-neutral-800 bg-yellow-200 py-1 font-medium px-2 rounded-lg"
                  onClick={() => {
                    handleOpenSettings();
                    toast.message("Changes done", {
                      description: "Changes validated and applied successfully",
                    });
                  }}
                >
                  Apply Changes
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const aspectRatioList = [
  { label: "1:1", icon: SquareIcon },
  { label: "16:9", icon: SquareIcon },
  { label: "21:9", icon: SquareIcon },
  { label: "3:4", icon: SquareIcon },
  { label: "4:3", icon: SquareIcon },
  { label: "Custom", icon: SquareIcon },
];

function AspectRatioSection() {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="flex gap-2 flex-wrap">
      {aspectRatioList.map((item, index) => (
        <button
          key={item.label}
          className={cn(
            "rounded-md inline-flex w-fit gap-2 items-center py-2 px-3  transition-colors duration-300 transform-gpu",
            index === selected
              ? "bg-yellow-200/10  text-yellow-200"
              : "text-neutral-500  hover:text-yellow-200",
          )}
          onClick={() => setSelected(index)}
          type="button"
        >
          <item.icon className="size-5 stroke-yellow-200" />
          {item.label}
        </button>
      ))}
    </div>
  );
}
// function SliderRow() {
//   return (
//     <div className="flex items-center gap-2">
//       <div className="rounded-full size-2 bg-yellow-200" />
//       <p className="text-sm text-neutral-500">Changes</p>
//     </div>
//   );
// }

function NavigationMenu({
  setSubMenuSelected,
  subMenuSelected,
}: Readonly<{
  setSubMenuSelected: (slug: string) => void;
  subMenuSelected: string;
}>) {
  return (
    <nav className="flex flex-row">
      {menuCategories.map((button, index) => (
        <button
          type="button"
          key={button.label}
          onClick={() => setSubMenuSelected(button.slug)}
          className={cn(
            "text-neutral-500 text-sm font-medium py-1 px-2 rounded-md relative whitespace-nowrap inline-flex w-fit hover:text-neutral-50 transition-colors duration-300 transform-gpu",
            subMenuSelected === button.slug && "text-neutral-200",
          )}
        >
          <p className="z-20">{button.label}</p>
          <AnimatePresence>
            {subMenuSelected === button.slug && (
              <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-700 dark:bg-neutral-800 rounded-md z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                layout
                layoutId="focused-element"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  );
}
