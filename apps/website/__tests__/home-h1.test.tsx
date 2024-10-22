import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "#/src/app/page";

const gettingStartedRegex = /getting-started$/;

describe("Page", () => {
	render(<HomePage />);
	it("should have a heading", () => {
		const heading = screen.getByRole("heading", {
			level: 1,
			name: "CuiCui - Copy Paste quality React component",
		});
		expect(heading).toBeDefined();
	});
	it("should have href attribute of the 'Contribute' element set to https://cuicui.featurebase.app/", () => {
		const contributeElement = screen.getByTestId(
			"home-navigation-link-Contribute",
		);

		// Check if the href attribute of the 'Contribute' element is https://cuicui.featurebase.app/
		const hrefValue = contributeElement.getAttribute("href");
		expect(hrefValue).toBe("https://cuicui.featurebase.app/");
	});

	it("should have href attribute of the 'Getting started' element to finish by getting-started", () => {
		const contributeElement = screen.getByTestId(
			"home-navigation-link-Getting Started",
		);

		// Check if the href attribute of the 'Getting started' element finishes by getting-started
		const hrefValue = contributeElement.getAttribute("href");
		expect(hrefValue).toMatch(gettingStartedRegex);
	});
});
