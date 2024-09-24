"use client";
import { BeforeEffectButton } from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/before-effect-button";

export default function PreviewBeforeEffectButtonAdvancedButton() {
  return (
    <BeforeEffectButton className="px-3 py-2 before:rounded-xl">
      <span className="flex items-center gap-2">
        <span className="size-6 rounded-full border border-neutral-500/30 bg-neutral-300 dark:bg-neutral-600" />
        <span className="font-medium">Damien Schneider</span>
      </span>

      <span className="mt-2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>

      <span className=" mt-1 block text-start font-medium text-xs transition-opacity hover:opacity-70">
        See more
      </span>
    </BeforeEffectButton>
  );
}
