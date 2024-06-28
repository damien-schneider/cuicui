"use client";
import type React from "react";
import Frame from "react-frame-component";

const CustomIframeComponentLight = ({
  children,
  className,
  containerSize,
}: {
  children: React.ReactNode;
  className?: string;
  containerSize: number;
}) => {
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
          </head>
          <body class="bg-neutral-50">
            <div id="mountHere" class="p-4 *:flex *:items-center *:justify-center *:min-h-[${
              containerSize - 40
            }px]">
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
