import Link from "next/link";
import { cn } from "../utils/cn";
import GradientContainer from "./gradient-container";

export default function Byline({
  className,
}: Readonly<{ className?: string }>) {
  return (
    <GradientContainer rounded="sm">
      <div className={cn("block ", className)}>
        <p className="text-gray-400 text-sm inline">By </p>
        <Link
          href="https://www.linkedin.com/in/schneider-damien/"
          title="Damien Schneider LinkedIn"
          className="text-gray-400 text-sm hover:text-gray-100 inline"
          target="_blank"
          rel="noreferrer"
          aria-label="Damien Schneider LinkedIn"
        >
          Damien Schneider
        </Link>

        <div className="text-gray-400 text-sm">
          <Link
            className="underline decoration-dotted underline-offset-4 transition-colors hover:text-gray-300"
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
