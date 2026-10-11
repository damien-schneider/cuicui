import {
  ModernGradientContainerContent,
  ModernGradientContainerRoot,
} from "@/cuicui/common-ui/buttons/github-stars/simple-container";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

export function ControlUiCard() {
  return (
    <Link
      className="group block w-full"
      href="https://control-ui.dev"
      rel="noreferrer"
      target="_blank"
      title="Control UI - shadcn-compatible React components with switchable skins"
    >
      <ModernGradientContainerRoot
        animationDurationInSeconds={8}
        className="w-full transition-transform duration-300 group-hover:scale-[1.02] group-active:scale-[0.99]"
      >
        <ModernGradientContainerContent className="flex-col items-start gap-1 bg-neutral-50 px-4 py-3 dark:bg-neutral-950">
          <span className="flex w-full items-center justify-between font-semibold text-base text-neutral-900 tracking-tight dark:text-neutral-50">
            Control UI
            <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
          <span className="text-neutral-500 text-xs leading-snug dark:text-neutral-400">
            Cuicui was the experiment. What it taught me now lives in the
            library I maintain today.
          </span>
        </ModernGradientContainerContent>
      </ModernGradientContainerRoot>
    </Link>
  );
}
