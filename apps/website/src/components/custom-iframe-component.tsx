"use client";
import type React from "react";
import Frame from "react-frame-component";

import type { ComponentHeightType } from "@cuicui/ui/lib/types/component";

import { getContainerHeightClass } from "#/src/components/component-wrapper/get-container-height-class";
import { cn } from "@/cuicui/utils/cn";

export const CustomIframe = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: ComponentHeightType;
}) => {
  return (
    <>
      <CustomIframeComponentDark
        className={cn(
          "hidden items-center justify-center dark:flex",
          className,
        )}
        size={size}
      >
        {children}
      </CustomIframeComponentDark>

      <CustomIframeComponentLight
        className={cn(
          "flex items-center justify-center dark:hidden",
          className,
        )}
        size={size}
      >
        {children}
      </CustomIframeComponentLight>
    </>
  );
};

const tailwindImport = `
<script src="https://cdn.tailwindcss.com"></script>
<script>
  tailwind.config = {
    darkMode: 'selector'
    important: true,
  }
</script>
`;

export const CustomIframeComponentLight = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: ComponentHeightType;
}) => {
  return (
    <Frame
      className={cn("", className)}
      initialContent={`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            ${tailwindImport}
            <style>
            body::-webkit-scrollbar {
              width: 12px;               /* width of the entire scrollbar */
            }
            body::-webkit-scrollbar-track {
              background: "#fafafa"};        /* color of the tracking area */
            }
            body::-webkit-scrollbar-thumb {
              background-color: #a3a3a3;    /* color of the scroll thumb */
              border-radius: 20px;       /* roundness of the scroll thumb */
              border: 3px solid #fafafa;  /* creates padding around scroll thumb */
            }
            </style>
          </head>
          <body class=${cn("bg-neutral-50")}>
            <div id="mountHere" class="${cn(
              "p-4 *:flex *:items-center *:justify-center grid *:w-full",
              getContainerHeightClass({ size, isIframe: true }),
            )}">
            </div>
          </body>
        </html>
        `}
      mountTarget="#mountHere"
    >
      {children}
    </Frame>
  );
};

export const CustomIframeComponentDark = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: ComponentHeightType;
}) => {
  return (
    <Frame
      className={className}
      initialContent={`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            ${tailwindImport}
            <style>
            body::-webkit-scrollbar {
              width: 12px;               /* width of the entire scrollbar */
            }
            body::-webkit-scrollbar-track {
              background: #171717;        /* color of the tracking area */
            }
            body::-webkit-scrollbar-thumb {
              background-color: #a3a3a3;    /* color of the scroll thumb */
              border-radius: 20px;       /* roundness of the scroll thumb */
              border: 3px solid #171717;  /* creates padding around scroll thumb */
            }
            </style>
          </head>
          <body class="dark bg-[#101010]">
            <div id="mountHere" class="${cn(
              "p-4 *:flex *:items-center *:justify-center grid *:w-full",
              getContainerHeightClass({ size, isIframe: true }),
            )}">
            </div>
          </body>
        </html>
        `}
      mountTarget="#mountHere"
    >
      {children}
    </Frame>
  );
};
