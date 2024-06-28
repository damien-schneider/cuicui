import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React, { type ReactNode } from "react";
import { cn } from "../utils/cn";

export default function ScrollArea({
  children,
  className,
  orientation = "vertical",
}: Readonly<{
  children: ReactNode;
  className?: string;
  orientation?: "vertical" | "horizontal";
}>) {
  return (
    <ScrollAreaPrimitive.Root
      className={cn("overflow-hidden relative", className)}
    >
      <ScrollAreaPrimitive.ScrollAreaViewport
        className="h-full w-full rounded-[inherit]"
        asChild
      >
        {children}
      </ScrollAreaPrimitive.ScrollAreaViewport>
      <ScrollAreaPrimitive.Scrollbar
        className="flex touch-none select-none bg-neutral-500/20 border border-neutral-500/50 h-full w-2 py-5 px-0.5 transition-colors"
        orientation={orientation}
      >
        <ScrollAreaPrimitive.Thumb className="relative flex-1 rounded-full bg-blue-500 " />
      </ScrollAreaPrimitive.Scrollbar>
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
}
