"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import GradientContainer from "./gradient-container";

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
    <GradientContainer rounded="sm">
      <div className="flex items-center gap-x-2 px-2 py-1">
        <div className="text-neutral-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <title>Address bar icon</title>
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex gap-x-1 text-sm  font-medium tracking-tight">
          <Link
            className="px-2 text-neutral-400 hover:opacity-70 transition-opacity"
            href="/"
          >
            cuicui.com
          </Link>
          {pathname ? (
            <>
              <span className="text-neutral-400 dark:text-neutral-600">/</span>
              {pathname
                .split("/")
                .slice(1)
                .map((segment, index, array) => {
                  return (
                    <React.Fragment key={segment}>
                      <Link
                        key={segment}
                        className="px-1 dark:text-neutral-300 text-neutral-500 hover:opacity-80 transition-opacity"
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
    </GradientContainer>
  );
}
