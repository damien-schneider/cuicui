import Link from "next/link";
import GradientText from "../ui/gradient-text";
import { cn } from "../utils/cn";

export default function NotFoundCard() {
  return (
    <div
      className={cn(
        "group w-full rounded-2xl border border-neutral-500/10 px-6 py-8 dark:border-white/10 ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "group transform-gpu transition-transform hover:scale-[1.01]",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      <GradientText className="inline-flex font-medium text-5xl leading-[70px]">
        This page doesn't exist
      </GradientText>
      <p className="text-lg text-neutral-500">
        The page you are looking for does not exist. Please check the URL or go
        back to the home page.
      </p>
      <Link href="/">Go back to the home page</Link>
    </div>
  );
}
