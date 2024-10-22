import { describe, expect, it } from "vitest";
import { SectionsList } from "@cuicui/ui";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

describe("SectionsList", () => {
	it("should have the correct number of sections", () => {
		expect(SectionsList).toHaveLength(7);
	});

	it("should have the correct section slugs in the good order", () => {
		const sectionSlugs = SectionsList.map((section) => section.slug);
		expect(sectionSlugs).toEqual([
			"common-ui",
			"application-ui",
			"marketing-ui",
			"other",
			"hooks",
			"utils",
			"tools",
		]);
	});

	it("category should have componentList === null if comingSoonCategory === true", () => {
		for (const section of SectionsList) {
			if (section.type !== "multiple-component") {
				continue;
			}
			//TODO: Handle the single-component test
			for (const category of section.categoriesList) {
				if (category.comingSoonCategory) {
					expect(category.componentList).toBeNull();
					expect(category.componentList).not.toBeUndefined();
				}
			}
		}
	});

	it("should not return error when reading the file code", async () => {
		const testComponentCode = async (
			slug: string,
			variantName: string,
			shouldError: boolean,
		) => {
			const code = await getFileContentAsString({
				componentSlug: slug,
				variantName,
			});
			const errorMessage = `Failed for component slug: ${slug}, variant: ${variantName}`;
			// Get first 2 words of the code
			const firstTwoWords = code.split(" ").slice(0, 2).join(" ");
			if (shouldError) {
				expect(firstTwoWords, errorMessage).toEqual("An error");
			} else {
				expect(firstTwoWords, errorMessage).not.toEqual("An error");
			}
		};

		for (const section of SectionsList) {
			if (section.type !== "multiple-component") {
				continue;
			}
			for (const category of section.categoriesList) {
				if (category.componentList) {
					for (const component of category.componentList) {
						for (const variant of component.variantList) {
							// Test without error
							await testComponentCode(
								category.slug,
								`${component.slug}/${variant.slugPreviewFile}`,
								false,
							);

							if (variant.slugComponentFile) {
								await testComponentCode(
									category.slug,
									`${component.slug}/${variant.slugComponentFile}`,
									false,
								);
							}

							// Test with forced error
							await testComponentCode(
								category.slug,
								`${component.slug}/${variant.slugPreviewFile}error`,
								true,
							);

							if (variant.slugComponentFile) {
								await testComponentCode(
									category.slug,
									`${component.slug}/${variant.slugComponentFile}error`,
									true,
								);
							}
						}
					}
				}
			}
		}
	});
});
