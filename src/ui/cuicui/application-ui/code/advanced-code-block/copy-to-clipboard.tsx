"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export default function CopyToClipboard({ code }: Readonly<{ code: string }>) {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
    } catch (error) {
      console.error("Error copying to clipboard", error);
    } finally {
      setTimeout(() => {
        // do something
        setIsCopied(false);
      }, 2000);
    }
  };

  return (
    <button
      type="button"
      aria-label="Copy code to clipboard"
      className="text-base font-normal leading-6 dark:text-zinc-400 text-zinc-500 bg-transparent cursor-pointer relative flex size-4 transition-colors duration-150 ease-in-out"
      onClick={copyToClipboard}
    >
      {isCopied ? (
        <CheckIcon className="block align-middle size-4" />
      ) : (
        <CopyIcon className="block align-middle size-4" />
      )}
    </button>
  );
}
