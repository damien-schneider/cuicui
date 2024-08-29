"use client";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";
import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/use-copy-to-clipboard";

export function CommandCode({ children }: Readonly<{ children: string }>) {
  const [copiedText, copy] = useCopyToClipboard();
  const handleCopyCode = (code: string) => {
    copy(children);
    toast.success(`Command copied: ${copiedText}`);
  };
  return (
    <button
      type="button"
      onClick={() => handleCopyCode(children)}
      className="bg-amber-300/20 hover:bg-amber-300/15 active:bg-amber-300/30 active:scale-90 transition-all transform-gpu flex gap-5 items-center justify-between py-3 px-5 rounded-full text-amber-800 dark:text-amber-400 tracking-tighter"
    >
      <code className=" text-left whitespace-nowrap overflow-hidden overflow-ellipsis">
        {children}
      </code>
      <ClipboardIcon className=" size-5" />
    </button>
  );
}
