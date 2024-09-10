"use client";
import { SendHorizontalIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { cn } from "#/src/utils/cn";

export default function FloatingGrowingBannerVariant1() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmitEmail = () => {
    toast.success(`Subscribed with email: ${inputValue}`);
    setInputValue("");
  };
  return (
    <div className="fixed inset-x-0 top-0 p-4 flex justify-center">
      <div
        className={cn(
          " transition-all duration-700",
          "rounded-2xl  bg-indigo-600 h-8 hover:h-12 text-white shadow-lg w-full",
          "overflow-hidden text-nowrap max-w-[280px] hover:max-w-[380px]",
          "group flex items-center justify-center relative border border-white/20 hover:border-white/30",
          "shadow-[2px_4px_16px_0px_rgba(248,248,248,0.2)_inset]",
        )}
      >
        <p
          className={cn(
            "text-center text-sm font-medium absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 group-hover:blur-md group-hover:opacity-0 opacity-100 blur-0 transition-all duration-700 group-hover:-translate-y-12",
            "font-medium tracking-tight",
          )}
        >
          Subscribe to the newsletter
        </p>
        <label
          htmlFor="email"
          className={cn(
            "absolute top-1/2 -translate-y-1/2 left-4",
            "transition-all duration-1000",
            "opacity-0 blur-md group-hover:opacity-100 group-hover:blur-0",
            "font-medium tracking-tighter text-sm",
          )}
        >
          Enter your email
        </label>
        <input
          id="email"
          type="email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setInputValue("");
            }
            if (e.key === "Enter") {
              handleSubmitEmail();
            }
          }}
          className={cn(
            "px-2 py-1 rounded-lg w-56",
            "group-hover:opacity-100 opacity-0 group-hover:blur-0 blur-md  transition-all duration-1000",
            " bg-indigo-200/30 outline-none ring-0 z-20",
            // Position
            "absolute top-1/2 -translate-y-1/2 right-2",
            // Text
            "placeholder:text-white/60 text-white tracking-tighter text-sm",
            inputValue && " mr-6",
          )}
          placeholder="email@example.com"
        />
        <button
          type="button"
          onClick={handleSubmitEmail}
          className={cn(
            "absolute right-1.5 top-1/2 -translate-y-1/2",
            "transition-all duration-1000 delay-500",
            inputValue ? "opacity-100 blur-0" : "opacity-0 blur-md",
          )}
        >
          <SendHorizontalIcon
            className={cn(
              "size-5 text-white transition-all duration-300 hover:scale-110 z-10",
            )}
          />
        </button>
      </div>
    </div>
  );
}
