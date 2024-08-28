import Link from "next/link";
import React from "react";
import GradientText from "../ui/gradient-text";
import { cn } from "../utils/cn";

export default function NotFoundCard() {
  return (
    <div
      className={cn(
        "rounded-2xl w-full border px-6 py-8 group dark:border-white/10 border-neutral-500/10  ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "hover:scale-[1.01] transition-transform transform-gpu group",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      <GradientText className="inline-flex font-medium text-5xl leading-[70px]">
        This page doesn't exist
      </GradientText>
      <p className="text-neutral-500 text-lg">
        The page you are looking for does not exist. Please check the URL or go
        back to the home page.
      </p>
      <Link href="/">Go back to the home page</Link>
    </div>
  );
}
