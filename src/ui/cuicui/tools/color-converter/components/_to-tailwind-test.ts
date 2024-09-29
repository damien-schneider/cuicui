// describe("colorToTailwindClass", () => {
//   test("color text input - Tailwind colors", () => {
//     expect(colorToTailwindClass("amber")).toEqual("amber-500");
//     expect(colorToTailwindClass("blue")).toEqual("blue-500");
//     expect(colorToTailwindClass("gray")).toEqual("gray-500");
//     expect(colorToTailwindClass("emerald")).toEqual("emerald-500");
//     expect(colorToTailwindClass("purple")).toEqual("purple-500");
//   });

//   test("color text input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("brown")).toEqual("red-800");
//     expect(colorToTailwindClass("beige")).toEqual("lime-50");
//     expect(colorToTailwindClass("silver")).toEqual("gray-400");
//     expect(colorToTailwindClass("maroon")).toEqual("red-900");
//     expect(colorToTailwindClass("lavender")).toEqual("indigo-50");
//   });

//   test("HSL color input - Tailwind colors", () => {
//     expect(colorToTailwindClass("hsl(34, 100%, 46%)")).toEqual("amber-600");
//     expect(colorToTailwindClass("hsl(167, 87%, 30%)")).toEqual("emerald-600");
//     expect(colorToTailwindClass("hsl(213, 82%, 60%)")).toEqual("blue-500");
//     expect(colorToTailwindClass("hsl(251, 88%, 63%)")).toEqual("indigo-500");
//     expect(colorToTailwindClass("hsl(120, 66%, 45%)")).toEqual("green-600");
//   });

//   test("HSL color input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("hsl(0, 59%, 41%)")).toEqual("red-800");
//     expect(colorToTailwindClass("hsl(45, 100%, 91%)")).toEqual("orange-100");
//     expect(colorToTailwindClass("hsl(39, 100%, 85%)")).toEqual("orange-200");
//     expect(colorToTailwindClass("hsl(0, 100%, 25%)")).toEqual("red-900");
//     expect(colorToTailwindClass("hsl(240, 100%, 98%)")).toEqual("violet-50");
//   });

//   test("HSLA color input - Tailwind colors", () => {
//     expect(colorToTailwindClass("hsla(34, 100%, 46%, 1)")).toEqual("amber-600");
//     expect(colorToTailwindClass("hsla(167, 87%, 30%, 1)")).toEqual(
//       "emerald-600",
//     );
//     expect(colorToTailwindClass("hsla(213, 82%, 60%, 1)")).toEqual("blue-500");
//     expect(colorToTailwindClass("hsla(251, 88%, 63%, 1)")).toEqual(
//       "indigo-500",
//     );
//     expect(colorToTailwindClass("hsla(120, 66%, 45%, 1)")).toEqual("green-600");
//   });

//   test("HSLA color input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("hsla(0, 59%, 41%, 1)")).toEqual("red-800");
//     expect(colorToTailwindClass("hsla(45, 100%, 91%, 1)")).toEqual(
//       "orange-100",
//     );
//     expect(colorToTailwindClass("hsla(39, 100%, 85%, 1)")).toEqual(
//       "orange-200",
//     );
//     expect(colorToTailwindClass("hsla(0, 100%, 25%, 1)")).toEqual("red-900");
//     expect(colorToTailwindClass("hsla(240, 100%, 98%, 1)")).toEqual(
//       "violet-50",
//     );
//   });

//   test("RGB color input - Tailwind colors", () => {
//     expect(colorToTailwindClass("rgb(251, 146, 60)")).toEqual("orange-400");
//     expect(colorToTailwindClass("rgb(20, 184, 166)")).toEqual("teal-500");
//     expect(colorToTailwindClass("rgb(96, 165, 250)")).toEqual("blue-400");
//     expect(colorToTailwindClass("rgb(167, 85, 247)")).toEqual("purple-500");
//     expect(colorToTailwindClass("rgb(34, 197, 94)")).toEqual("green-500");
//   });

//   test("RGB color input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("rgb(128, 0, 0)")).toEqual("red-900");
//     expect(colorToTailwindClass("rgb(255, 245, 240)")).toEqual("orange-50");
//     expect(colorToTailwindClass("rgb(255, 218, 185)")).toEqual("orange-200");
//     expect(colorToTailwindClass("rgb(128, 0, 0)")).toEqual("red-900");
//     expect(colorToTailwindClass("rgb(230, 230, 250)")).toEqual("indigo-100");
//   });

//   test("RGBA color input - Tailwind colors", () => {
//     expect(colorToTailwindClass("rgba(251, 146, 60, 1)")).toEqual("orange-400");
//     expect(colorToTailwindClass("rgba(20, 184, 166, 1)")).toEqual("teal-500");
//     expect(colorToTailwindClass("rgba(96, 165, 250, 1)")).toEqual("blue-400");
//     expect(colorToTailwindClass("rgba(167, 85, 247, 1)")).toEqual("purple-500");
//     expect(colorToTailwindClass("rgba(34, 197, 94, 1)")).toEqual("green-500");
//   });

//   test("RGBA color input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("rgba(128, 0, 0, 1)")).toEqual("red-900");
//     expect(colorToTailwindClass("rgba(255, 245, 240, 1)")).toEqual("orange-50");
//     expect(colorToTailwindClass("rgba(255, 218, 185, 1)")).toEqual(
//       "orange-200",
//     );
//     expect(colorToTailwindClass("rgba(128, 0, 0, 1)")).toEqual("red-900");
//     expect(colorToTailwindClass("rgba(230, 230, 250, 1)")).toEqual(
//       "indigo-100",
//     );
//   });

//   test("HEX color input - Tailwind colors", () => {
//     expect(colorToTailwindClass("#fffbeb")).toEqual("amber-50");
//     expect(colorToTailwindClass("#14b8a6")).toEqual("teal-500");
//     expect(colorToTailwindClass("#60a5fa")).toEqual("blue-400");
//     expect(colorToTailwindClass("#a755f7")).toEqual("purple-500");
//     expect(colorToTailwindClass("#22c55e")).toEqual("green-500");
//     expect(colorToTailwindClass("#ef4444")).toEqual("red-500");
//     expect(colorToTailwindClass("#fff")).toEqual("white");
//   });

//   test("HEX color input - Common non-Tailwind colors", () => {
//     expect(colorToTailwindClass("#800000")).toEqual("red-900");
//     expect(colorToTailwindClass("#FFF5F0")).toEqual("orange-50");
//     expect(colorToTailwindClass("#FFDAB9")).toEqual("orange-200");
//     expect(colorToTailwindClass("#800000")).toEqual("red-900");
//     expect(colorToTailwindClass("#E6E6FA")).toEqual("indigo-100");
//   });
// });
