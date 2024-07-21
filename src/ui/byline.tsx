import Link from "next/link";
import { cn } from "../utils/cn";
import GradientContainer from "./gradient-container";

export default function Byline({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <GradientContainer
      rounded="sm"
      classNameParent="w-full"
      classNameChild="px-4 py-2"
    >
      <div className={cn("block ", className)}>
        <p className="text-neutral-400 text-sm inline">By </p>
        <Link
          href="https://www.linkedin.com/in/schneider-damien/"
          title="Damien Schneider LinkedIn"
          className="text-neutral-400 text-sm hover:text-neutral-500 dark:hover:text-neutral-100 inline"
          target="_blank"
          rel="noreferrer"
          aria-label="Damien Schneider LinkedIn"
        >
          Damien Schneider
        </Link>

        <div className="text-neutral-400 text-sm">
          <Link
            className="underline decoration-dotted underline-offset-4 transition-colors dark:hover:text-neutral-300 hover:text-neutral-500"
            href="https://github.com/damien-schneider"
            target="_blank"
            rel="noreferrer"
            title="View my GitHub"
            aria-label="View my GitHub"
          >
            View my GitHub
          </Link>
        </div>
      </div>
    </GradientContainer>
  );
}
