"use client";
import { cn } from "@/cuicui/utils/cn/cn";
import { motion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";

export const ShinyRotatingBorderButton = ({
  children,
  className,
  ...props
}: Readonly<{ children: ReactNode; className?: string }> &
  HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "group relative overflow-hidden rounded-full bg-neutral-200 p-px transition-transform active:scale-95 dark:bg-neutral-600",
        className,
      )}
      type="button"
      {...props}
    >
      <motion.span
        animate={{
          top: ["50%", "0%", "50%", "100%", "50%"],
          left: ["0%", "50%", "100%", "50%", "0%"],
        }}
        className="-translate-x-1/2 -translate-y-1/2 absolute z-10 size-8 transform-gpu blur-sm transition-transform duration-300 group-hover:scale-[3]"
        initial={{ top: 0, left: 0 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <motion.span
          animate={{
            rotate: ["0deg", "360deg"],
          }}
          className="block size-full transform-gpu rounded-full"
          style={{
            background:
              "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.span>
      <span className="relative z-10 block rounded-full bg-white px-3 py-1 dark:bg-neutral-800">
        <motion.span
          animate={{
            backgroundImage: [
              "linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
              "linear-gradient(90deg, #F5833F,#3BC4F2, #7A69F9, #F26378)",
              "linear-gradient(90deg, #F26378, #F5833F,#3BC4F2, #7A69F9)",
              "linear-gradient(90deg, #7A69F9, #F26378, #F5833F,#3BC4F2)",
              "linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
            ],
          }}
          className="transform-gpu bg-clip-text text-neutral-600 text-sm tracking-tighter transition-colors duration-500 group-hover:text-transparent dark:text-neutral-200"
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {children}
        </motion.span>
      </span>
    </button>
  );
};
