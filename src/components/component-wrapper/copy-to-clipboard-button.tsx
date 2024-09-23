"use client";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/hook/use-copy-to-clipboard";
import { Button } from "#/src/ui/shadcn/button";

export default function CopyToClipboardButton({
  code,
}: Readonly<{ code: string }>) {
  const [copiedText, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success("Code copied to clipboard!");
        setIsCopied(true);
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
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
      type="button"
      onClick={handleCopy(code)}
      variant="icon"
      size="icon"
      aria-label="Copy the code"
      className="absolute top-2 right-2 p-1 z-10 bg-neutral-200 dark:bg-neutral-800"
    >
      {isCopied ? (
        <CheckIcon className="size-5" />
      ) : (
        <ClipboardIcon className="size-5" />
      )}
    </Button>
  );
}
