"use client";
import React from "react";
import { BeforeEffectButton } from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/before-effect-button";

export default function PreviewBeforeEffectButtonAdvancedButton() {
  return (
    <BeforeEffectButton className="py-2 px-3 before:rounded-xl">
      <span className="flex items-center gap-2">
        <span className="size-6 rounded-full bg-neutral-300 border dark:bg-neutral-600 border-neutral-500/30" />
        <span className="font-medium">Damien Schneider</span>
      </span>

      <span className="text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>

      <span className=" font-medium text-xs mt-1 text-start hover:opacity-70 transition-opacity block">
        See more
      </span>
    </BeforeEffectButton>
  );
}
