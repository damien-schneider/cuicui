import Link from "next/link";
import React from "react";

export default function DynamicSquareBackground({
  title,
  tag,
  description,
  buttonText,
  buttonHref,
}: Readonly<{
  title: string;
  tag: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}>) {
  return (
    <>
      <style>
        {`
        @keyframes tiles {
          0%, 40%, 80% {
            opacity: 0;
          }
          20%, 60% {
            opacity: 1;
          }
        }
      `}
      </style>
      <div className="py-4 px-8 w-80 rounded-xl border border-neutral-400/20 relative overflow-hidden flex flex-col shadow-sm gap-8 dark:shadow-black">
        <DecorativeTilesBackground />
        <div className="z-20">
          <div className="">
            <h3 className="inline text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              {title}
            </h3>
            <p className="inline align-top  border border-neutral-900 dark:border-neutral-400 font-medium tracking-tight text-xs uppercase px-0.5 rounded-sm ml-2">
              {tag}
            </p>
          </div>
          <p className="text-neutral-500 dark:text-neutral-400 mt-1">
            {description}
          </p>
        </div>
        <Link
          className="z-20 h-12 inline-flex w-full justify-center items-center rounded-lg bg-neutral-200/20 dark:bg-neutral-500/20 dark:hover:bg-neutral-500/40 hover:bg-neutral-200/50 transition-colors backdrop-blur-md border border-neutral-500/15 hover:border-neutral-500/30 dark:text-neutral-300 text-neutral-600 font-medium"
          href={buttonHref}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
}

const DecorativeTilesBackground = () => {
  const rows = 20;
  const columns = 22;
  const animationDuration = 14; // seconds

  return (
    <div
      aria-hidden="true"
      className="flex flex-wrap absolute inset-0 select-none pointer-events-none z-10"
    >
      {Array.from({ length: rows }).map((_, rowIndex) => {
        return (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`line-${rowIndex}`}
            className="w-full h-[16px] flex border-b border-neutral-500/20 border-dashed"
          >
            {Array.from({ length: columns }).map((_, colIndex) => {
              const delay = Math.random() * animationDuration;

              return (
                <div
                  className="relative w-[15px] h-[16px] border-r border-dashed border-neutral-500/20"
                  // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                  key={`tile-${colIndex}`}
                >
                  <div
                    className=" w-[15px] h-[16px] inset-0 dark:bg-sky-400/15 bg-sky-600/10"
                    style={{
                      opacity: 0, // Start with opacity 0
                      animationName: "tiles",
                      animationIterationCount: "infinite",
                      animationTimingFunction: "ease",
                      animationDelay: `${delay}s`,
                      animationDuration: `${animationDuration}s`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
