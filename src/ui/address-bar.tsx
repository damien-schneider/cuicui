"use client";

import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import GradientContainer from "./gradient-container";
import { ScrollArea } from "./shadcn/scrollarea";

function Params() {
  const searchParams = useSearchParams();

  return searchParams.toString().length !== 0 ? (
    <div className="px-2 text-neutral-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <React.Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span key={key} className="text-neutral-100">
                {key}
              </span>
              <span>=</span>
              <span key={value} className="text-neutral-100">
                {value}
              </span>
            </span>
          </React.Fragment>
        );
      })}
    </div>
  ) : null;
}

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="p-2 sticky top-0 z-10">
      <GradientContainer
        rounded="sm"
        classNameParent=""
        classNameChild="px-4 py-1"
        background="glassy"
      >
        <ScrollArea>
          <ScrollAreaScrollbar orientation="horizontal" />
          <div className="flex items-center px-2 py-1">
            <Link2Icon className="size-4 text-neutral-500/80 inline-flex" />

            <div className="text-sm font-medium tracking-tight">
              <Link
                className="px-2 text-neutral-400 hover:opacity-70 transition-opacity"
                href="/"
              >
                cuicui.day
              </Link>
              {pathname ? (
                <>
                  <span className="text-neutral-400 dark:text-neutral-600">
                    /
                  </span>
                  {pathname
                    .split("/")
                    .slice(1)
                    .map((segment, index, array) => {
                      return (
                        <React.Fragment key={segment}>
                          <Link
                            key={segment}
                            className="px-1 dark:text-neutral-300 text-neutral-500 hover:opacity-80 transition-opacity text-nowrap"
                            href={`/${array.slice(0, index + 1).join("/")}`}
                          >
                            {segment}
                          </Link>
                          {index !== array.length - 1 ? (
                            <span className="text-neutral-400 dark:text-neutral-600 ">
                              /
                            </span>
                          ) : null}
                        </React.Fragment>
                      );
                    })}
                </>
              ) : null}

              <Suspense>
                <Params />
              </Suspense>
            </div>
          </div>
        </ScrollArea>
      </GradientContainer>
    </div>
  );
}
