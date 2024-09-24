import type { ReactNode } from "react";
import { CustomIframe } from "#/src/components/custom-iframe-component";
import type { ComponentHeightType } from "#/src/lib/types/component";
import { cn } from "#/src/utils/cn";

export const ComponentWrapper = ({
  isIframed = true,
  size,
  renderButton,
  children,
  isChildUsingHeightFull,
}: {
  renderButton: boolean;
  isIframed?: boolean;
  size: ComponentHeightType;
  children: ReactNode;
  isChildUsingHeightFull?: boolean;
}) => {
  if (renderButton) {
    //DO SOMETHING LATER
  }
  if (!isIframed) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center overflow-hidden",
          isChildUsingHeightFull && "flex-col *:flex-1",
          getContainerHeightClass({ size }),
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <CustomIframe
      className={cn("w-full", getContainerHeightClass({ size }))}
      size={size}
    >
      {children}
    </CustomIframe>
  );
};

export function getContainerHeightClass({
  size,
  isIframe = false,
}: {
  size: ComponentHeightType;
  isIframe?: boolean;
}) {
  switch (size) {
    case "xs": {
      if (isIframe) {
        return "min-h-[180px] max-h-[180px] h-1";
      }
      return "min-h-[200px] max-h-[200px] h-1";
    }
    case "sm": {
      if (isIframe) {
        return " min-h-[380px] max-h-[380px] h-1";
      }
      return "min-h-[400px] max-h-[400px] h-1";
    }
    case "md": {
      if (isIframe) {
        return " min-h-[680px] max-h-[680px] h-1";
      }
      return " min-h-[700px] max-h-[700px] h-1";
    }
    case "lg":
      return "min-h-[894px] max-h-[894px] h-1";
    case "xl":
      return "min-h-[1094px] max-h-[1094px] h-1";
    default:
      return "min-h-[200px] max-h-[200px] h-1";
  }
}
