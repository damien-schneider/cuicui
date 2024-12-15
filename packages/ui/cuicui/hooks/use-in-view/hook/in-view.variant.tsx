"use client";

import { useRef } from "react";
import useInView from "@/cuicui/hooks/use-in-view";

export const PreviewUseInView = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2, { threshold: 0.5 });
  const isInView3 = useInView(ref3, { rootMargin: "100px" });

  return (
    <div className="max-h-96 w-full space-y-8 p-4 text-neutral-500">
      <ScreenDiv />
      <div className="space-y-4">
        {[ref1, ref2, ref3].map((ref, index) => (
          <div
            // biome-ignore lint: <Not a problem as it is a random example>
            key={`element-${index}`}
            ref={ref}
            className={`rounded-2xl border p-4 transition-all duration-1000 ${
              (index === 0 && isInView1) ||
              (index === 1 && isInView2) ||
              (index === 2 && isInView3)
                ? " border-green-500/20 bg-emerald-300/20 text-emerald-600 dark:text-emerald-300"
                : "border-rose-500/20 bg-red-300/20 text-rose-600 dark:text-rose-300"
            }`}
          >
            <h2 className="mb-2 font-semibold text-lg tracking-tight">
              Element {index + 1}{" "}
              {(index === 0 && isInView1) ||
              (index === 1 && isInView2) ||
              (index === 2 && isInView3)
                ? "is"
                : "is not"}{" "}
              in view
            </h2>
            <p>
              {index === 0 && "Default options"}
              {index === 1 && "With threshold: 0.5"}
              {index === 2 && "With rootMargin: 100px"}
            </p>
          </div>
        ))}
      </div>

      <ScreenDiv />
    </div>
  );
};

export default PreviewUseInView;

const ScreenDiv = () => {
  return (
    <div className="flex h-screen items-center justify-center rounded-2xl bg-neutral-500/10 p-20 tracking-tighter">
      <p className="text-xl">Scroll down to see the elements change</p>
    </div>
  );
};
