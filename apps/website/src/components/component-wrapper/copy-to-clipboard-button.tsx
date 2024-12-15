"use client";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "#/src/ui/shadcn/button";
import { useCopyToClipboard } from "@/cuicui/hooks/use-copy-to-clipboard";

export default function CopyToClipboardButton({
  code,
}: Readonly<{ code: string }>) {
  const [_copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success("Code copied to clipboard!");
        setIsCopied(true);
      })
      .catch((_error) => {
        toast.error("Failed to copy code to clipboard!");
      });
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <Button
      aria-label="Copy the code"
      className="absolute top-2 right-2 z-10 bg-neutral-200 p-1 dark:bg-neutral-800"
      onClick={handleCopy(code)}
      size="icon"
      type="button"
      variant="icon"
    >
      {isCopied ? (
        <CheckIcon className="size-5" />
      ) : (
        <ClipboardIcon className="size-5" />
      )}
    </Button>
  );
}
