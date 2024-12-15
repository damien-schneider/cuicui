import { describe, expect, test } from "vitest";
import { sectionList } from "./section-list"; // Adjust the import path as needed

describe("sectionList structure", () => {
  test("All components have non-empty variants arrays", () => {
    for (const section of sectionList) {
      for (const category of section.categories) {
        for (const component of category.components) {
          expect(component.variants.length).toBeGreaterThan(0);
        }
      }
    }
  });
});
