import { VercelLogo } from "#/src/ui/vercel-logo";
import Link from "next/link";

export default function Byline({ className }: Readonly<{ className: string }>) {
  return (
    <div
      className={`${className}inset-x-0 bottom-3 mx-3 rounded-lg bg-vc-border-gradient p-px shadow-black/20 shadow-lg`}
    >
      <div className="flex flex-col justify-between space-y-2 rounded-lg bg-black p-3.5 lg:px-5 lg:py-3">
        <div className="flex items-center gap-x-1.5">
          <div className="text-gray-400 text-sm">By</div>
          {/* <a href="https://vercel.com" title="Vercel">
            <div className="w-16 text-gray-100 hover:text-gray-50">
              <VercelLogo />
            </div>
          </a> */}
          <Link
            href="https://www.linkedin.com/in/schneider-damien/"
            title="Damien Schneider LinkedIn"
            className="text-gray-400 text-sm hover:text-gray-100"
            target="_blank"
            rel="noreferrer"
            aria-label="Damien Schneider LinkedIn"
          >
            Damien Schneider
          </Link>
        </div>

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
    </div>
  );
}
