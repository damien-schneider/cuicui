"use client";

import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/use-copy-to-clipboard";

export default function PreviewCopyToClipboard() {
  const [copiedText, copy] = useCopyToClipboard();
  return (
    <div className="relative">
      <div className="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => copy("Hello world!")}
          className="bg-neutral-500/20 hover:bg-neutral-500/30 dark:text-white text-neutral-700 font-medium tracking-tighter py-2 px-4 rounded-xl"
        >
          Copy "Hello world!"
        </button>
        <button
          type="button"
          onClick={() => copy("")}
          className="bg-neutral-500/20 hover:bg-neutral-500/30 dark:text-white text-neutral-700 font-medium tracking-tighter py-2 px-4 rounded-xl"
        >
          Reset by copying nothing
        </button>
      </div>
      {copiedText && (
        <p className="absolute -top-6 left-1/2 text-neutral-500 text-sm tracking-tighter -translate-x-1/2 inline-flex whitespace-nowrap">
          Copied: {copiedText}
        </p>
      )}
    </div>
  );
}
