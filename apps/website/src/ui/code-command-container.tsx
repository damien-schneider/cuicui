import { cn } from "@/cuicui/utils/cn";
import CodeHighlighter from "./code-highlighter";

// import { ScrollArea, ScrollBar } from "./shadcn/scrollarea";

import SnippetCommandCard from "#/src/ui/copy-to-clipboard-code-snippet-dropdown";
import { ScrollArea, ScrollBar } from "#/src/ui/shadcn/scrollarea";

export const CodeContainer = ({
  children,
  className,
  isCommand = true,
}: { children: string; className?: string; isCommand?: boolean }) => {
  if (isCommand) {
    return <SnippetCommandCard code={children} />;
  }
  return (
    <ScrollArea className="card w-full">
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
      <CodeHighlighter className={cn("text-sm", className)} code={children} />
    </ScrollArea>
  );
};
