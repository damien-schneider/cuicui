"use client";
import { motion, AnimatePresence } from "framer-motion";

import { BellIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "#/src/utils/cn";
import { useMeasure } from "#/src/ui/cuicui/hooks/use-measure/use-measure";

const WIDTH = 500;

export default function DynamicIslandNotification({
  title,
  children,
  showNotification,
  closeNotification,
}: Readonly<{
  title: string;
  children: string;
  showNotification: boolean;
  closeNotification: () => void;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  const [ref, { height: viewHeight }] = useMeasure();

  const handleOpenSettings = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <AnimatePresence>
      {showNotification && (
        <motion.div
          exit={{ y: -190, filter: "blur(8px)", opacity: 0, scale: 0 }}
          animate={{
            height: isOpen ? (viewHeight ?? 0) : 52,
            width: isOpen ? WIDTH : 52,
          }}
          className={cn(
            "absolute z-50 top-6 right-6 overflow-hidden rounded-2xl dark:bg-neutral-900 bg-neutral-50 border border-neutral-400/15 text-neutral-50 shadow-lg transition",
            !isOpen &&
              "after:size-2 after:absolute after:top-3 after:right-4 after:bg-amber-500 after:rounded-full after:pointer-events-none",
            !isOpen &&
              "before:size-3 before:absolute before:top-2.5 before:right-3.5 before:border before:border-amber-500 before:rounded-xl before:animate-ping before:pointer-events-none",
            !isOpen && "dark:hover:bg-neutral-800 hover:bg-neutral-100",
          )}
          transition={{
            type: "spring",
            // ease: "easeInOut",
            duration: 0.6,
          }}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {!isOpen && (
              <motion.button
                key="icon-button"
                className="size-full absolute top-0 right-0 inline-grid place-content-center transform-gpu dark:text-neutral-400 text-neutral-600 transition-colors duration-500 dark:hover:text-neutral-300 hover:text-neutral-700"
                onClick={handleOpenSettings}
                type="button"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BellIcon className="transform-gpu transition duration-300 pointer-events-none" />
                {/* <div className="size-2 absolute top-1 right-1 bg-red-500 rounded-full" /> */}
              </motion.button>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key="content"
                ref={ref}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)" }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col gap-4 p-2"
                style={{ width: WIDTH }}
              >
                <div className="p-2">
                  <h6 className="text tracking-tight font-medium text-sm text-neutral-400">
                    {title}
                  </h6>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-5">
                    {children}
                  </p>
                </div>
                <button
                  className="rounded-lg bg-amber-500 dark:bg-amber-200 px-2 py-1 font-medium dark:text-neutral-800 text-neutral-100"
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    closeNotification();
                  }}
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
