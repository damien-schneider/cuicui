import Link from "next/link";
import { cn } from "../utils/cn";
import GradientContainer from "./gradient-container";

export default function Byline({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <GradientContainer
      classNameChild="px-4 py-2"
      classNameParent="w-full"
      rounded="sm"
    >
      <div className={cn("block ", className)}>
        <p className="inline text-neutral-400 text-sm">By </p>
        <Link
          aria-label="Damien Schneider LinkedIn"
          className="inline text-neutral-400 text-sm hover:text-neutral-500 dark:hover:text-neutral-100"
          href="https://www.linkedin.com/in/schneider-damien/"
          rel="noreferrer"
          target="_blank"
          title="Damien Schneider LinkedIn"
        >
          Damien Schneider
        </Link>

        <div className="text-neutral-400 text-sm">
          <Link
            aria-label="View my GitHub"
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-neutral-500 dark:hover:text-neutral-300"
            href="https://github.com/damien-schneider"
            rel="noreferrer"
            target="_blank"
            title="View my GitHub"
          >
            View my GitHub
          </Link>
        </div>
      </div>
    </GradientContainer>
  );
}
