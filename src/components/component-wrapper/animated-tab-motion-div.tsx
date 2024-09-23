"use client";
import { type MotionProps, motion } from "framer-motion";
import type React from "react";
import { cn } from "#/src/utils/cn";
export default function AnimatedTabMotionDiv({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement> & MotionProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className={cn("absolute inset-0 z-30 ")}
      {...props}
    />
  );
}
