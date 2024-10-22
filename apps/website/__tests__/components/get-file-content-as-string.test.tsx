import { describe, expect, it } from "vitest";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

describe("getFileContentAsString", () => {
	it("should return the content of the file", async () => {
		const code = await getFileContentAsString({
			componentSlug: "badges",
			variantName: "modern-simple-badges/variant1",
		});

		expect(code).toEqual(`export function BadgeSimpleVariantAmber() {
  return (
    <div className="inline rounded-md bg-amber-500/15 px-2 py-0.5 text-amber-500 text-sm">
      Amber badge
    </div>
  );
}
`);
	});
});
