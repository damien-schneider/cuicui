"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, type ReactNode } from "react";
import { cloneElement, isValidElement, useId, useState } from "react";
import { cn } from "../utils/cn";

interface NavigationMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  transitionTime?: number; // Add the transitionTime prop
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
  children,
  transitionTime = 0.2, // Default transition time
  ...props
}) => {
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
      {React.Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(
            child as React.ReactElement<NavigationButtonProps>,
            {
              isFocused: elementFocused === index,
              onMouseEnter: () => handleHoverButton(index),
              transitionTime, // Pass transitionTime to each button
              layoutId,
              handleActiveElement,
              index,
            },
          );
        }
        return child;
      })}
    </nav>
  );
};

interface NavigationButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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
      type="button"
      className={cn(
        "text-neutral-500 text-sm font-medium py-1 px-2 rounded relative whitespace-nowrap inline-flex w-fit group",
        className,
      )}
      {...props}
    >
      {children}
      <AnimatePresence>
        {isFocused && (
          <motion.div
            className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-200 dark:bg-neutral-900 rounded-md -z-10 group-active:bg-neutral-300 transition-colors group-hover:bg-neutral-200/80 dark:group-hover:bg-neutral-900/80 dark:group-active:bg-neutral-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: transitionTime }} // Use the transitionTime prop here
            layout
            layoutId={layoutId}
          />
        )}
      </AnimatePresence>
    </button>
  );
};
