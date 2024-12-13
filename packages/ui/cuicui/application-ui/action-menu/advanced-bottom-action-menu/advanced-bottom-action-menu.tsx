// MenuComponents.tsx

"use client";

import { AnimatePresence, type Variants, motion } from "motion/react";
import type React from "react";
import { createContext, useContext, useState } from "react";

// Define the types for the context
interface MenuContextType {
  openValue: string | null;
  setOpenValue: React.Dispatch<React.SetStateAction<string | null>>;
}

// Create the context
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// MenuRoot component manages the open state and includes the container animations
export const MenuRoot: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [openValue, setOpenValue] = useState<string | null>(null);

  const isExpanded = openValue !== null;

  // Define container variants
  const containerVariants: Variants = {
    collapsed: { height: 60, width: 300 },
    expanded: { height: "100%", width: 600 },
  };

  return (
    <MenuContext.Provider value={{ openValue, setOpenValue }}>
      <motion.div
        animate={isExpanded ? "expanded" : "collapsed"}
        className="rounded-[30px] overflow-hidden border bg-black dark:bg-white relative"
        initial="collapsed"
        transition={{ duration: 0.5, ease: "circInOut" }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </MenuContext.Provider>
  );
};

// MenuTrigger component toggles the menu and includes the trigger animations
interface MenuTriggerProps {
  value: string;

  children?: React.ReactNode;
}

export const MenuTrigger = ({
  value,

  children,
}: MenuTriggerProps) => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuTrigger must be used within a MenuRoot");
  }
  const { openValue, setOpenValue } = context;

  const _isExpanded = openValue !== null;

  const handleClick = () => {
    setOpenValue(openValue === value ? null : value);
  };

  // Define icons container variants
  // const iconsContainerVariants: Variants = {
  //   collapsed: { y: 0 },
  //   expanded: { y: "100%", transition: { delay: 0.2 } },
  // };

  // // Define individual icon variants
  const triggerVariants: Variants = {
    collapsed: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
    expanded: (i: number) => ({
      opacity: 0,
      y: 20,
      transition: { delay: i * 0.05 },
    }),
  };

  // Render the trigger content
  // return icons ? (
  //   <motion.div
  //     onClick={handleClick}
  //     variants={iconsContainerVariants}
  //     className="h-[60px] flex items-center w-fit gap-2 justify-between px-10 cursor-pointer absolute bottom-0 left-0 right-0 mx-auto"
  //   >
  //     {icons.map((item, index) => (
  //       <motion.div
  //         key={item.name}
  //         custom={index}
  //         variants={iconVariants}
  //         className="size-10 center"
  //       >
  //         <item.icon className="size-5 text-primary-foreground" />
  //       </motion.div>
  //     ))}
  //   </motion.div>
  // ) : (
  return (
    <motion.button
      className="h-[60px] flex items-center w-fit gap-2 justify-between px-10 cursor-pointer absolute bottom-0 left-0 right-0 mx-auto bg-red-500"
      onClick={handleClick}
      type="button"
      variants={triggerVariants}
    >
      {children}
    </motion.button>
  );
  // );
};

// MenuContent component displays the content with animations
interface MenuContentProps {
  value: string;
  children: React.ReactNode;
}

export const MenuContent: React.FC<MenuContentProps> = ({
  value,
  children,
}) => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("MenuContent must be used within a MenuRoot");
  }
  const { openValue } = context;

  const isOpen = openValue === value;

  // Define content variants
  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: { opacity: 1, transition: { delay: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate="expanded"
          className="text-white mt-6 px-10 flex flex-col gap-8"
          exit="collapsed"
          initial="collapsed"
          key={value}
          variants={contentVariants}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
