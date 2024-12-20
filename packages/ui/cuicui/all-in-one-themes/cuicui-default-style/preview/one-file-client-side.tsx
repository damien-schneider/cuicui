"use client";
import { cn } from "@/cuicui/utils/cn";
import { motion } from "motion/react";
import { type ComponentProps, type ReactNode, useState } from "react";

export const CategoryCard = ({
  title,
  description,
  children,
  className,
  ...props
}: {
  title: string;
  description: string;
  children: ReactNode;
} & ComponentProps<"div">) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "w-full sm:max-w-sm p-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex gap-2 cursor-pointer hover:scale-[1.02] transition-transform duration-200 ease-out",
        hovered ? "flex-col-reverse" : "flex-col",
        className,
      )}
      {...props}
    >
      <motion.div layout={true}>
        <div className="flex flex-col">
          <h6 className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
            {title}
          </h6>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
            {description}
          </p>
        </div>
      </motion.div>
      <motion.div
        layout={true}
        className="bg-neutral-50 dark:bg-neutral-700 border border-neutral-400/20 border-dashed rounded-md shadow-sm flex items-center justify-center w-full h-20 overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};
