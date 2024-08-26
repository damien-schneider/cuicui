import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import HomePage from "#/src/app/page";

test("Page", () => {
  render(<HomePage />);
  const heading = screen.getByRole("heading", {
    level: 1,
    name: "CuiCui - Copy Paste quality React component",
  });
  expect(heading).toBeDefined();
});
