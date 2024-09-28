"use client";
import { cn } from "#/src/ui/cuicui/utils/cn/cn";
import { useState } from "react";

export default function PreviewCn() {
  const [isViolet, setIsViolet] = useState(false);
  const [isAmber, setIsAmber] = useState(false);

  return (
    <div className="cuicui-default-style flex flex-col items-center gap-2">
      <div
        className={cn(
          "size-20 rounded-xl bg-sky-400/40",
          isViolet && "bg-violet-400/40",
          isAmber && "bg-amber-400/40",
        )}
      />
      <div className="bg-neutral-500/10 border border-neutral-400/15 rounded-md p-2">
        <pre className="w-52">
          <code className="text-sm">
            {`className={cn(
  "bg-sky-400/40",
  ${isViolet && '"bg-violet-400/40"'},
  ${isAmber && '"bg-amber-400/40"'},
)}`}
          </code>
        </pre>
      </div>
      <button
        type="button"
        className=" w-full"
        onClick={() => {
          setIsViolet(!isViolet);
        }}
      >
        Violet {isViolet ? "✅" : "❌"}
      </button>
      <button
        type="button"
        className=" w-full"
        onClick={() => {
          setIsAmber(!isAmber);
        }}
      >
        Amber {isAmber ? "✅" : "❌"}
      </button>
    </div>
  );
}
