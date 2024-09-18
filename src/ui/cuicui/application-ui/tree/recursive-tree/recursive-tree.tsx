"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon, FolderIcon, FolderOpenIcon } from "lucide-react";
import React, { useState, type ReactNode, type HTMLAttributes } from "react";
import { cn } from "#/src/utils/cn";

type TreeProps = {
  contentTree: ReactNode;
  children?: ReactNode;
  defaultCollapsed?: boolean;
  depth?: number;
} & HTMLAttributes<HTMLDivElement>;

export const Tree = ({
  contentTree,
  children,
  defaultCollapsed = false,
  depth = 0,
  ...rest
}: TreeProps) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const hasChildren = React.Children.count(children) > 0;

  const toggleCollapse = () => {
    if (hasChildren) {
      setCollapsed(!collapsed);
    }
  };

  return (
    <div {...rest} className={cn("", rest.className)}>
      <div
        className={cn(
          "flex items-center relative group w-full  min-h-8",
          " before:inset-0 before:bg-neutral-400/10 before:rounded-md before:absolute before:transition before:border before:border-neutral-400/10 before:opacity-0 before:scale-75",
          "hover:before:opacity-100 hover:before:scale-100",
        )}
        style={{ paddingLeft: `${depth * 1}rem` }}
      >
        {hasChildren && (
          <button
            type="button"
            onClick={toggleCollapse}
            className={cn(
              "inline-flex items-center justify-center relative focus:outline-none size-6 m-1",
              " before:inset-0 before:bg-neutral-400/10 before:rounded-md before:absolute before:transition before:border before:border-neutral-400/10 before:opacity-0 before:scale-75",
              " hover:before:opacity-100 hover:before:scale-100",
              hasChildren ? "cursor-pointer" : "cursor-default",
            )}
            aria-expanded={!collapsed}
          >
            {collapsed ? (
              <FolderIcon
                className={cn(
                  "transform-gpu duration-300 size-4 text-blue-500",
                )}
              />
            ) : (
              <FolderOpenIcon
                className={cn(
                  "transform-gpu duration-300 size-4 text-blue-500",
                )}
              />
            )}
          </button>
        )}
        <span
          className={cn(
            "font-medium text-sm tracking-tight dark:text-neutral-300 text-neutral-600 group-hover:translate-x-0.5 transition-transform transform-gpu",
          )}
        >
          {contentTree}
        </span>
      </div>
      {hasChildren && (
        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                translateY: -10,
                translateX: -10,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                translateY: 0,
                translateX: 0,
              }}
              exit={{
                height: 0,
                opacity: 0,
                translateY: -10,
                translateX: -10,
              }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              {React.Children.map(children, (child) => {
                return React.isValidElement<TreeProps>(child)
                  ? React.cloneElement<TreeProps>(child, { depth: depth + 1 })
                  : child;
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
