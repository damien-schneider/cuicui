import { describe, expect, it } from "vitest";

const passingTest = () => {
  describe("passing test", () => {
    it("should pass", () => {
      expect(true).toBe(true);
    });
  });
};
