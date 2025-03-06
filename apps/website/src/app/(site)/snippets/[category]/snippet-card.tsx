import type { Snippet } from "#/src/app/(site)/snippets/lib/snippets.type";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from "#/src/ui/shadcn/dialog";

import {
  ScrollArea,
  ScrollAreaViewport,
  ScrollBar,
} from "#/src/ui/shadcn/scrollarea";

export function SnippetCard(snippet: Snippet) {
  if (!snippet?.compiledContent) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild={true}>
        <div className="p-5 hover:scale-105 transition-transform duration-200 ease-in-out cursor-pointer">
          <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100 truncate mb-2">
            {snippet.frontmatter.title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-3">
            {snippet.frontmatter.tags.split(",").map((tag, index) => (
              <span
                key={`tag-${snippet.slug}-${index}`}
                className="text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full px-3 py-1"
              >
                {tag.trim()}
              </span>
            ))}
          </div>

          <div className="mt-4 h-24 relative">
            <div className="text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-3 rounded-md opacity-70 h-full overflow-hidden">
              <code className="font-mono">
                {snippet.compiledContent.content}...
              </code>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white dark:to-neutral-950 opacity-70" />
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            {snippet.frontmatter.title}
          </DialogTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Category:{" "}
              <span className="font-medium">{snippet.subcategory}</span>
            </p>
            <div className="flex gap-2 ml-auto">
              {snippet.frontmatter.tags.split(",").map((tag, index) => (
                <span
                  key={`tag-${snippet.slug}-${index}`}
                  className="text-xs font-medium text-neutral-600 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800 rounded-full px-3 py-1"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        </DialogHeader>

        <ScrollArea className="rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 w-full h-[500px] my-4">
          <ScrollAreaViewport className="p-6 w-full font-mono text-sm">
            <pre className="language-typescript">
              {snippet.compiledContent.content}
            </pre>
            <ScrollBar orientation="vertical" />
            <ScrollBar orientation="horizontal" />
          </ScrollAreaViewport>
        </ScrollArea>
        {/* TODO */}
        {/* <div className="flex justify-end mt-2">
              <button
                type="button"
                className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors"
              >
                Copy to clipboard
              </button>
            </div> */}
      </DialogContent>
    </Dialog>
  );
}
