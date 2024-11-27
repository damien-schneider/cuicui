"use client";
import { useState } from "react";
import { Bookmark, CheckCircle, Loader2, ExternalLink } from "lucide-react";
import { cn } from "@/cuicui/utils/cn/cn";

type StateType = "idle" | "saving" | "saved";

export function PreviewDualActionButton() {
  const [saveState, setSaveState] = useState<StateType>("idle"); // 'idle', 'saving', 'saved'

  const handleSave = () => {
    setSaveState("saving");
    // Simulate a save action
    setTimeout(() => {
      setSaveState("saved");
    }, 2000);
  };

  return (
    <div className="flex text-neutral-600 dark:text-neutral-400 rounded-full bg-neutral-100 dark:bg-neutral-900">
      {/* Save Button */}
      <div
        className={cn(
          "transition-all text-neutral-600 dark:text-neutral-300",
          saveState === "idle" && "w-20",
          saveState === "saving" && "w-12",
          saveState === "saved" && "w-24",
        )}
      >
        <button
          type="button"
          onClick={() => {
            if (saveState === "idle") {
              handleSave();
            } else if (saveState === "saved") {
              setSaveState("idle");
            }
          }}
          className={cn(
            "border border-neutral-400/40 bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 hover:bg-neutral-300 transition duration-200 ease-in-out rounded-l-full inline-flex w-full h-full gap-1 items-center justify-center dark:active:bg-neutral-700 active:border-neutral-500 overflow-hidden active:bg-neutral-400 ",
          )}
        >
          {saveState === "idle" && (
            <span className="inline-flex items-center justify-center gap-1">
              <Bookmark className="size-4" />
              Save
            </span>
          )}
          {saveState === "saving" && (
            <Loader2 className="animate-spin size-4" />
          )}
          {saveState === "saved" && (
            <span className="inline-flex items-center justify-center gap-1">
              <CheckCircle className="size-4" />
              Saved
            </span>
          )}
        </button>
      </div>
      {/* Explore Site Link */}
      <a
        // biome-ignore lint/a11y/useValidAnchor: <explanation>
        href="#"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1 border-t border-b border-r border-neutral-400/40 rounded-r-full px-4 py-1.5 transition duration-200 ease-in-out hover:bg-neutral-200 dark:hover:bg-neutral-800"
      >
        Explore site
        <ExternalLink className="size-4" />
      </a>
    </div>
  );
}
