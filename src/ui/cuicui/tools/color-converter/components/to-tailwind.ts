import getSimilarColor from "get-similar-color";
import { tailwindColors } from "#/src/ui/cuicui/tools/color-converter/components/tailwind-colors";

export function extractHexValuesFromTailwindObject(
  colors: typeof tailwindColors,
): string[] {
  return Object.values(colors).flatMap((value) => {
    if (typeof value === "string") {
      return [value];
    }
    if (typeof value === "object") {
      return Object.values(value);
    }
    return [];
  });
}

const tailwindArrayOfHexaValues =
  extractHexValuesFromTailwindObject(tailwindColors);

export const findClosestTailwindColor = (color: string) => {
  return getSimilarColor({
    targetColor: color,
    colorArray: tailwindArrayOfHexaValues.map((hex) => ({
      name: hex,
      hex,
    })),
  });
};

export function getExactColorTailwindNameFromHexaValue(hexValue: string) {
  for (const [colorName, colorValue] of Object.entries(tailwindColors)) {
    if (typeof colorValue === "string") {
      if (colorValue === hexValue) {
        return colorName;
      }
    } else if (typeof colorValue === "object") {
      for (const [shade, shadeValue] of Object.entries(colorValue)) {
        if (shadeValue === hexValue) {
          return `${colorName}-${shade}`;
        }
      }
    }
  }
  return null;
}
