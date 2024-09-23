"use client";
import type React from "react";
import { useEffect, useState } from "react";
import Frame from "react-frame-component";
import type { ComponentHeightType } from "#/src/lib/types/component";
import { getContainerHeightClass } from "./component-wrapper/full-component";

const CustomIframeComponentDark = ({
  children,
  className,
  size,
}: {
  children: React.ReactNode;
  className?: string;
  size: ComponentHeightType;
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
            <div id="mountHere" class="p-4 *:flex *:items-center *:justify-center flex items-center justify-center *:w-full ${getContainerHeightClass(
              { size, isIframe: true },
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
export default CustomIframeComponentDark;
