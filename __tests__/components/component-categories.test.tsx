import { describe, expect, it } from "vitest";
import { SectionsList } from "#/src/lib/cuicui-components/sections-list";
import { getFileContentAsString } from "#/src/utils/get-file-content-as-string";

describe("SectionsList", () => {
  it("should have the correct number of sections", () => {
    expect(SectionsList).toHaveLength(5);
  });

  it("should have the correct section slugs", () => {
    const sectionSlugs = SectionsList.map((section) => section.slug);
    expect(sectionSlugs).toEqual([
      "common-ui",
      "marketing-ui",
      "application-ui",
      "other",
      "hooks",
    ]);
  });

  it("category should have componentList === null if comingSoonCategory === true", () => {
    for (const section of SectionsList) {
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

      if (shouldError) {
        expect(code, errorMessage).toMatch(/^An error occurred/);
      } else {
        expect(code, errorMessage).not.toMatch(/^An error occurred/);
      }
    };

    for (const section of SectionsList) {
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
