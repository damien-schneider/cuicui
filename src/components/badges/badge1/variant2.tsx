"use client";

import { VariantComponent } from "#/src/lib/types/component";

export function Variant2Component() {
  return (
    <div className="inline rounded-md bg-red-500/15 px-2 py-0.5 text-red-500 text-sm">
      badge variant 2
    </div>
  );
}

const Variant2Code = `
export function Variant2Component() {
  return (
    <div className="inline rounded-md bg-red-500/15 px-2 py-0.5 text-red-500 text-sm">
      badge variant 2
    </div>
  );
}
`;

export const Variant2: VariantComponent = {
  slug: "variant2",
  name: "Red",
  component: Variant2Component,
  code: Variant2Code,
};

export default Variant2;
