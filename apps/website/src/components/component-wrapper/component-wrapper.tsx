"use client";
import { useLayoutEffect, useState, type ReactNode } from "react";
import { CustomIframe } from "#/src/components/custom-iframe-component";
import type { ComponentHeightType } from "@cuicui/ui/lib/types/component";
import { cn } from "#/src/utils/cn";
import { getContainerHeightClass } from "#/src/components/component-wrapper/get-container-height-class";
import { RefreshCwIcon } from "lucide-react";
import { ScrollArea, ScrollAreaViewport } from "#/src/ui/shadcn/scrollarea";

export const ComponentWrapper = ({
  isIframed = true,
  size,
  renderButton = false,
  children,
}: {
  renderButton?: boolean;
  isIframed: boolean;
  size: ComponentHeightType;
  children: ReactNode;
}) => {
  const [reRender, setReRender] = useState(false);

  useLayoutEffect(() => {
    if (reRender) {
      setReRender(false);
    }
  }, [reRender]);

  if (!isIframed) {
    return (
      <ScrollArea className={cn(getContainerHeightClass({ size }))}>
        <ScrollAreaViewport
          className={cn(
            "*:h-full", // Mandatory for children to take full height
            "relative",
            "rounded-md border border-neutral-500/20 bg-neutral-50 dark:bg-[#101010]",
          )}
        >
          {renderButton && <RerenderButton onClick={() => setReRender(true)} />}

          {/* For centering child */}
          {/* Grid doesn't work here as the child isn't center even with place-content-center -> It create weird width behaviour */}
          <div className="flex flex-col items-center justify-center h-full w-full">
            {!reRender && children}
          </div>
        </ScrollAreaViewport>
      </ScrollArea>
    );
  }

  return (
    <CustomIframe
      className={cn(
        "w-full relative",
        "rounded-md border border-neutral-500/20 bg-neutral-50 dark:bg-[#101010]",
        getContainerHeightClass({ size }),
      )}
      size={size}
    >
      {renderButton && <RerenderButton onClick={() => setReRender(true)} />}

      {!reRender && children}
    </CustomIframe>
  );
};

const RerenderButton = ({
  onClick,
}: {
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      className={cn(
        "absolute top-2 right-2 p-1 text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-500/20 border border-neutral-400/0 hover:border-neutral-400/20 active:border-neutral-400/50 active:bg-neutral-500/40 rounded-md flex items-center gap-1 transition-colors hover:bg-neutral-500/30",
      )}
      onClick={onClick}
    >
      <RefreshCwIcon className="size-3" />
      Rerender
    </button>
  );
};
