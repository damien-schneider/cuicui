"use client";
import { type MotionProps, motion } from "motion/react";
import type React from "react";
import { cn } from "@/cuicui/utils/cn";
export default function AnimatedTabMotionDiv({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement> & MotionProps) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      className={cn("absolute inset-0 z-30", className)}
      exit={{ opacity: 0, scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.95 }}
      layout={true}
      transition={{ duration: 0.2 }}
      {...props}
    />
  );
}
