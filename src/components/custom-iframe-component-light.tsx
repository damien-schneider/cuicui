"use client";
import type React from "react";
import Frame from "react-frame-component";

import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import {
  type IframeSizeType,
  getIframeContainerClassBasedOnSize,
} from "./full-component";

const CustomIframeComponentLight = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: IframeSizeType;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <Frame
      className={className}
      initialContent={`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <script src="https://cdn.tailwindcss.com"></script>
            <script>
            tailwind.config = {
              darkMode: 'selector'
              }
            </script>
            <style>
            body::-webkit-scrollbar {
              width: 12px;               /* width of the entire scrollbar */
            }
            body::-webkit-scrollbar-track {
              background: #fafafa;        /* color of the tracking area */
            }
            body::-webkit-scrollbar-thumb {
              background-color: #a3a3a3;    /* color of the scroll thumb */
              border-radius: 20px;       /* roundness of the scroll thumb */
              border: 3px solid #fafafa;  /* creates padding around scroll thumb */
            }
            </style>
          </head>
          <body class="bg-neutral-50">
            <div id="mountHere" class="p-4 *:flex *:items-center *:justify-center ${getIframeContainerClassBasedOnSize(
              size,
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
export default CustomIframeComponentLight;
