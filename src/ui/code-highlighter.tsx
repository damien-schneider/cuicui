import type { HTMLAttributes } from "react";
import CopyToClipboardButton from "#/src/components/component-wrapper/copy-to-clipboard-button";
import ShikiCode from "#/src/ui/cuicui/application-ui/code/advanced-code-block/code-highlighter";

import { cn } from "../utils/cn";
export default function CodeHighlighter({
  code,
  className,
  ...props
}: Readonly<
  { code: string; className?: string } & HTMLAttributes<HTMLDivElement>
>) {
  return (
    <>
      <CopyToClipboardButton code={code} />
      <ShikiCode
        code={code}
        lang="typescript"
        theme="github-light"
        className={cn("text-xs", className)}
      />
    </>
  );
}
