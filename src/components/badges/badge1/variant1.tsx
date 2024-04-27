"use client";

import { VariantComponent } from "#/src/lib/types/component";

export function Variant1Component() {
  return (
    <div className="inline rounded-md bg-amber-500/15 px-2 py-0.5 text-amber-500 text-sm">
      badge variant 1
    </div>
  );
}

const Variant1Code = `
export function Variant1Component() {
  return (
    <div className="inline rounded-md bg-amber-500/15 px-2 py-0.5 text-amber-500 text-sm">
    badge variant 1
    </div>
  );
}
`;

export const Variant1: VariantComponent = {
  slug: "variant1",
  name: "Amber",
  component: Variant1Component,
  code: Variant1Code,
};

export default Variant1;
