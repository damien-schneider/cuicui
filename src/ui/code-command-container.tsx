"use client";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";
import { cn } from "../utils/cn";
import CodeHighlighter from "./code-highlighter";
import { Button } from "./shadcn/button";
import { ScrollArea, ScrollBar } from "./shadcn/scrollarea";

import {
  PackageManagerList,
  type PackageManagerType,
  getCodeByPackageManager,
  usePackageManager,
} from "../app/(components)/hooks/store/usePackageManager";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./shadcn/dropdown-menu";

export const CodeContainer = ({
  children,
  className,
  isCommand = true,
}: { children: string; className?: string; isCommand?: boolean }) => {
  const { packageManager, setPackageManager } = usePackageManager();

  function handleCopyToClipboard(
    packageManager: PackageManagerType,
    code: string,
  ) {
    navigator.clipboard.writeText(
      `${getCodeByPackageManager(packageManager)} ${code}`,
    );
    toast.success(`Copied the code for ${packageManager}`);
  }

  if (isCommand) {
    return (
      <div className="block w-full relative card">
        <ScrollArea classNameViewport={cn("w-full ")}>
          <ScrollBar orientation="horizontal" />
          <code className="text-nowrap pr-10 text-sm">
            <span className="text-neutral-400 dark:text-neutral-500">
              {getCodeByPackageManager(packageManager)}{" "}
            </span>
            <span className="text-neutral-600 dark:text-neutral-300">
              {children}
            </span>
          </code>
        </ScrollArea>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="icon"
              size="icon"
              aria-label="Copy the code"
              className="absolute top-2 right-2 p-1 bg-neutral-200 dark:bg-neutral-800"
            >
              <ClipboardIcon className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {PackageManagerList.map((item) => (
              <DropdownMenuItem
                key={item}
                onSelect={() => {
                  setPackageManager(item);
                  handleCopyToClipboard(item, children);
                }}
              >
                {item}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <Select
          onValueChange={(value) => {
            setPackageManager(value as PackageManagerType);
            handleCopyToClipboard(value as PackageManagerType, children);
          }}
        >
          <SelectTrigger
            withIcon={false}
            className={cn(
              "flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 size-8 p-1.5 bg-neutral-200 dark:bg-neutral-800",
            )}
            asChild
          >
            <button
              type="button"
              aria-label="Copy the code"
              onClick={() => {
                handleCopyToClipboard(packageManager, children);
              }}
            >
              <ClipboardIcon className="size-5" />
            </button>
          </SelectTrigger>
          <SelectContent align="end">
            {PackageManagerList.map((item) => (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select> */}
      </div>
    );
  }
  return (
    <ScrollArea className="w-full">
      <ScrollBar orientation="horizontal" />
      <ScrollBar orientation="vertical" />
      <CodeHighlighter
        code={children}
        classNameContainer={cn("card text-sm", className)}
      />
    </ScrollArea>
  );
};
