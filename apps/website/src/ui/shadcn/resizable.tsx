"use client";

import { GripVertical } from "lucide-react";
import type { ComponentProps } from "react";

import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { cn } from "@/cuicui/utils/cn";

const ResizablePanelGroup = ({
  className,
  ...props
}: ComponentProps<typeof PanelGroup>) => (
  <PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className,
    )}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean;
}) => (
  <PanelResizeHandle
    className={cn(
      "after:-translate-x-1/2 data-[panel-group-direction=vertical]:after:-translate-y-1/2 relative flex w-0 items-center justify-center border-none after:absolute after:inset-y-0 after:left-1/2 after:w-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-16 items-center justify-center rounded-full bg-neutral-200 transition-colors hover:bg-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700">
        <GripVertical className="h-4 w-2.5" />
      </div>
    )}
  </PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
