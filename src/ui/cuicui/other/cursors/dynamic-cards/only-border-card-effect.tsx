"use client";

import { CardMouseHighlightingBorder } from "#/src/ui/cuicui/other/cursors/dynamic-cards/card-mouse-highlighting-border";

export default function DynamicCardsVariant1() {
  return (
    <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
      <CardMouseHighlightingBorder
        title="CuiCui"
        content="This is the best library for creating dynamic cards"
      />
      <CardMouseHighlightingBorder
        title="Just crazy"
        content="How fast is it now to create cards"
      />
      <CardMouseHighlightingBorder
        title="Amazing"
        content="I just have to copy paste the code and it instantly works"
      />
      <CardMouseHighlightingBorder
        title="Unbelievable"
        content="I can't believe how easy it is to use"
      />
    </div>
  );
}
