"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const dataButtons = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Terms & conditions", href: "#" },
  { label: "Cuicui.day", href: "#" },
];
export function VercelNavigationVariant1() {
  const [elementFocused, setElementFocused] = useState<number | null>(null);

  const handleHoverButton = (index: number | null) => {
    setElementFocused(index);
  };
  return (
    <nav
      className="flex flex-col sm:flex-row"
      onMouseLeave={() => {
        handleHoverButton(null);
      }}
    >
      {dataButtons.map((button, index) => (
        <button
          className="relative inline-flex w-fit whitespace-nowrap rounded px-2 py-1 font-medium text-neutral-500 text-sm "
          key={button.label}
          onMouseEnter={() => handleHoverButton(index)}
          type="button"
        >
          {button.label}
          <AnimatePresence>
            {elementFocused === index && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                className="-z-10 absolute top-0 right-0 bottom-0 left-0 rounded-md bg-neutral-200 dark:bg-neutral-800"
                exit={{ opacity: 0, scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.95 }}
                layout={true}
                layoutId="focused-element"
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </nav>
  );
}
