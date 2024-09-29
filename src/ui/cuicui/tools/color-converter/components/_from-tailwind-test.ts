// describe("tailwindColorToClass", () => {
//   test("tailwind class to hex value", () => {
//     expect(findTailwindClassHexEquivalent("red-800", "test")).toEqual(
//       "#991b1b",
//     );

//     expect(findTailwindClassHexEquivalentv2("bg-red-800")).toEqual("#991b1b");
//     expect(findTailwindClassHexEquivalentv2("text-red-800")).toEqual("#991b1b");

//     // Test with different colors and shades
//     expect(findTailwindClassHexEquivalentv2("blue-500")).toEqual("#3b82f6");
//     expect(findTailwindClassHexEquivalentv2("green-300")).toEqual("#86efac");

//     // Test with default shade when no shade is specified
//     expect(findTailwindClassHexEquivalentv2("blue")).toEqual("#3b82f6"); // assuming default shade is '500'

//     // Test with non-existing colors and shades
//     expect(findTailwindClassHexEquivalentv2("nonexistentcolor-800")).toEqual(
//       null,
//     );
//     expect(findTailwindClassHexEquivalentv2("red-9999")).toEqual(null);
//   });
// });

// describe("getColorCodes", () => {
//   test("converts hex to rgb, rgba, hsl, hsla correctly", () => {
//     const colorCodes = getColorCodes("#3b82f6");
//     expect(colorCodes).toEqual({
//       hsl: "hsl(217, 91%, 60%)",
//       hsla: "hsla(217, 91%, 60%, 1)",
//       rgb: "rgb(59, 130, 246)",
//       rgba: "rgba(59, 130, 246, 1)",
//     });
//   });

//   test("handles short hex codes", () => {
//     const colorCodes = getColorCodes("#f00");
//     expect(colorCodes).toEqual({
//       hsl: "hsl(0, 100%, 50%)",
//       hsla: "hsla(0, 100%, 50%, 1)",
//       rgb: "rgb(255, 0, 0)",
//       rgba: "rgba(255, 0, 0, 1)",
//     });
//   });

//   test("handles hex with alpha channel", () => {
//     const colorCodes = getColorCodes("#18c784");
//     expect(colorCodes).toEqual({
//       hsl: "hsl(157, 78%, 44%)",
//       hsla: "hsla(157, 78%, 44%, 1)",
//       rgb: "rgb(24, 199, 132)",
//       rgba: "rgba(24, 199, 132, 1)",
//     });
//   });
// });
