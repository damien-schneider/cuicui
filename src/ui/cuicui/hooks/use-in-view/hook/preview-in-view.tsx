"use client";

import React, { useRef } from "react";
import useInView from "#/src/ui/cuicui/hooks/use-in-view/hook/use-in-view";

export const PreviewUseInView = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2, { threshold: 0.5 });
  const isInView3 = useInView(ref3, { rootMargin: "100px" });

  return (
    <div className="space-y-8 p-4 max-h-96 w-full text-neutral-500">
      <ScreenDiv />
      <div className="space-y-4">
        {[ref1, ref2, ref3].map((ref, index) => (
          <div
            // biome-ignore lint: <Not a problem as it is a random example>
            key={`element-${index}`}
            ref={ref}
            className={`p-4 border transition-all duration-1000 rounded-2xl ${
              (index === 0 && isInView1) ||
              (index === 1 && isInView2) ||
              (index === 2 && isInView3)
                ? "  border-green-500/20 bg-emerald-300/20 dark:text-emerald-300 text-emerald-600"
                : "border-rose-500/20 bg-red-300/20 dark:text-rose-300 text-rose-600"
            }`}
          >
            <h2 className="text-lg font-semibold tracking-tight mb-2">
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

const ScreenDiv = () => {
  return (
    <div className="h-screen bg-neutral-500/10 rounded-2xl p-20 flex tracking-tighter items-center justify-center">
      <p className="text-xl">Scroll down to see the elements change</p>
    </div>
  );
};
