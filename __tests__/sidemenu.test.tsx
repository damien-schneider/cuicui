import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import HomePage from "#/src/app/page";
import NavigationMenu from "#/src/ui/navigation/navigation-menu";

describe("Sidemenu component", () => {
  render(<NavigationMenu />);
  it("should have href attribute of the 'Contribute' element set to https://cuicui.featurebase.app/", () => {
    const contributeElement = screen.getByTestId("navigation-link-Contribute");

    // Check if the href attribute of the 'Contribute' element is https://cuicui.featurebase.app/
    const hrefValue = contributeElement.getAttribute("href");
    expect(hrefValue).toBe("https://cuicui.featurebase.app/");
  });
  it("should have href attribute of the 'Getting started' element to finish by getting-started", () => {
    const contributeElement = screen.getByTestId(
      "navigation-link-Getting Started",
    );

    // Check if the href attribute of the 'Getting started' element finishes by getting-started
    const hrefValue = contributeElement.getAttribute("href");
    expect(hrefValue).toMatch(/getting-started$/);
  });
});
