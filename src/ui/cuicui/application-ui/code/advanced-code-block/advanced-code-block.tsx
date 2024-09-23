import type { HTMLAttributes } from "react";
import type { BundledLanguage, BundledTheme } from "shiki";
import ShikiCode from "#/src/ui/cuicui/application-ui/code/advanced-code-block/code-highlighter";
import CopyToClipboard from "#/src/ui/cuicui/application-ui/code/advanced-code-block/copy-to-clipboard";
import { cn } from "#/src/utils/cn";

type AdvancedBlockProps = {
  code: string;
  fileName?: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  className?: string;
};

export const AdvancedCodeBlock = ({
  code,
  fileName,
  lang = "typescript",
  theme = "github-light",
  className,
  ...props
}: AdvancedBlockProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <figure
      className={cn(
        "relative flex leading-6 flex-wrap bg-neutral-200/70 dark:bg-[rgb(33,33,38)] rounded-2xl flex-col -mt-1 w-full text-white",
        className,
      )}
      {...props}
    >
      <div className="flex items-center justify-between px-5 py-3">
        <figcaption className="mr-[-48px] max-w-full text-xs font-medium text-neutral-600 dark:text-neutral-200 whitespace-nowrap">
          <span>{fileName ?? <br />}</span>
        </figcaption>
        <CopyToClipboard code={code} />
      </div>
      <div className="w-full px-1 pb-1">
        <div className="relative isolate overflow-hidden rounded-xl border-t dark:border-white/15 border-white/80 shadow-sm shadow-black/5 dark:shadow-black/10">
          <pre
            className="text-sm overflow-x-auto overflow-y-auto bg-white/50 dark:bg-zinc-700/50 py-4 leading-6 text-white"
            style={{ paddingRight: "10px" }}
          >
            <ShikiCode code={code} lang={lang} theme={theme} />
          </pre>
        </div>
      </div>
    </figure>
  );
};
