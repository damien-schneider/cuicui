import { type VariantProps, cva } from "class-variance-authority";
import { type HTMLMotionProps, motion } from "framer-motion";
import type React from "react";
import { cn } from "../utils/cn";
import GradientContainer from "./gradient-container";
import GradientText from "./gradient-text";

const buttonVariants = cva(
  cn(
    "inline-flex items-center justify-center",
    "whitespace-nowrap ring-offset-neutral-500/50 transition-all",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500/20 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed",
  ),
  {
    variants: {
      variant: {
        neutral:
          "bg-neutral-500/15 hover:bg-neutral-500/10 text-neutral-500 dark:text-neutral-400",
        "hover-only": "hover:bg-neutral-500/10 text-neutral-500",

        gradient: "",
      },
      size: {
        sm: "h-6 rounded-md px-3 text-sm",
        "sm-square": "size-8 rounded-md",
        md: "h-10 px-4 py-2 rounded-md px-4 text-sm font-medium",
        "md-square": "size-10 rounded-md",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  },
);

interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default ({
  children,
  className,
  variant,
  size,
  type = "button",
  ...props
}: Readonly<ButtonProps>) => {
  if (variant === "gradient") {
    return (
      <GradientContainer rounded="full">
        <motion.button type={type} {...props}>
          <GradientText
            className={cn(buttonVariants({ variant, size }), className)}
          >
            {children}
          </GradientText>
        </motion.button>
      </GradientContainer>
    );
  }

  return (
    <motion.button
      className={cn(buttonVariants({ variant, size }), className)}
      transition={{ duration: 0.05 }}
      type={type}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
