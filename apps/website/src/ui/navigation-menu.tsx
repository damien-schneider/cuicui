"use client";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import {
  type ButtonHTMLAttributes,
  Children,
  type ReactElement,
  type ReactNode,
  useEffect,
} from "react";
import { cloneElement, isValidElement, useId, useState } from "react";
import { cn } from "@/cuicui/utils/cn";

interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  transitionTime?: number; // Add the transitionTime prop
}

export const NavigationMenu = ({
  children,
  transitionTime = 0.2, // Default transition time
  ...props
}: NavigationMenuProps) => {
  const [activeElement, setActiveElement] = useState<number | null>(null);
  const [elementFocused, setElementFocused] = useState<number | null>(
    activeElement ?? null,
  );
  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };
  const handleActiveElement = (index: number | null) => {
    setActiveElement(index);
  };
  useEffect(() => {
    setElementFocused(activeElement);
  }, [activeElement]);
  const layoutId = useId();

  return (
    <nav
      className="flex flex-col sm:flex-row"
      onMouseLeave={() => {
        handleHoverButton(activeElement);
      }}
      {...props}
    >
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as ReactElement<NavigationButtonProps>, {
            isFocused: elementFocused === index,
            onMouseEnter: () => handleHoverButton(index),
            transitionTime, // Pass transitionTime to each button
            layoutId,
            handleActiveElement,
            index,
          });
        }
        return child;
      })}
    </nav>
  );
};

interface NavigationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isFocused?: boolean;
  transitionTime?: number; // Add the transitionTime prop
  layoutId?: string;
  handleActiveElement?: (index: number | null) => void;
  isActive?: boolean;
  index?: number;
}

export const NavigationMenuButton: React.FC<NavigationButtonProps> = ({
  children,
  isFocused,
  transitionTime = 0.2, // Default transition time
  layoutId,
  className,
  handleActiveElement,
  isActive,
  index,
  ...props
}) => {
  useEffect(() => {
    if (isActive && handleActiveElement) {
      handleActiveElement(index ?? null);
    }
  }, [isActive, handleActiveElement, index]);
  return (
    <button
      className={cn(
        "group relative inline-flex w-fit whitespace-nowrap rounded-xs px-2 py-1 font-medium text-neutral-500 text-sm",
        className,
      )}
      type="button"
      {...props}
    >
      {children}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            animate={{ opacity: 1 }}
            className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-md border border-neutral-400/5 bg-neutral-200 transition-colors group-hover:bg-neutral-200/80 group-active:border-neutral-400/30 group-active:bg-neutral-300 dark:bg-neutral-900 dark:group-active:bg-neutral-800 dark:group-hover:bg-neutral-900/80"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            layout={true} // Use the transitionTime prop here
            layoutId={layoutId}
            transition={{ duration: transitionTime }}
          />
        )}
      </AnimatePresence>
    </button>
  );
};
