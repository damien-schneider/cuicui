"use client";

import { ScrollAreaScrollbar } from "@radix-ui/react-scroll-area";
import { Link2Icon } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Fragment, Suspense } from "react";

import { ScrollArea } from "./shadcn/scrollarea";
import {
  ModernGradientContainerContent,
  ModernGradientContainerRoot,
} from "@/cuicui/common-ui/buttons/github-stars/simple-container";

function Params() {
  const searchParams = useSearchParams();

  return searchParams.toString().length > 0 ? (
    <div className="px-2 text-neutral-500">
      <span>?</span>
      {Array.from(searchParams.entries()).map(([key, value], index) => {
        return (
          <Fragment key={key}>
            {index !== 0 ? <span>&</span> : null}
            <span className="px-1">
              <span className="text-neutral-100" key={key}>
                {key}
              </span>
              <span>=</span>
              <span className="text-neutral-100" key={value}>
                {value}
              </span>
            </span>
          </Fragment>
        );
      })}
    </div>
  ) : null;
}

export function AddressBar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-20 p-2 pb-10 px-4 inset-x-0 overflow-x-hidden pointer-events-none">
      <ModernGradientContainerRoot animationDurationInSeconds={30}>
        <ModernGradientContainerContent>
          <ScrollArea className="px-4 pointer-events-auto">
            <ScrollAreaScrollbar orientation="horizontal" />
            <div className="flex items-center px-2 py-1">
              <Link2Icon className="inline-flex size-4 text-neutral-500/80" />

              <div className="font-medium text-sm tracking-tight">
                <Link
                  className="px-2 text-neutral-400 transition-opacity hover:opacity-70"
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
                          <Fragment key={segment}>
                            <Link
                              key={segment}
                              href={`/${array.slice(0, index + 1).join("/")}`}
                              title={segment}
                              className="text-nowrap px-1 text-neutral-500 transition-opacity hover:opacity-80 dark:text-neutral-300"
                            >
                              {segment}
                            </Link>
                            {index !== array.length - 1 ? (
                              <span className="text-neutral-400 dark:text-neutral-600 ">
                                /
                              </span>
                            ) : null}
                          </Fragment>
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
        </ModernGradientContainerContent>
      </ModernGradientContainerRoot>
    </div>
  );
}
