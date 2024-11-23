import { CuicuiBezierCurveEditor } from "@/cuicui/tools/bezier-curve-generator/bezier-curve-editor";

// export const metadata: Metadata = {
//   title: "Bezier Curve Builder",
//   description:
//     "Create and customize your own Bezier curves for animations and transitions.",
//   openGraph: {
//     title: "Bezier Curve Builder",
//     description:
//       "Create and customize your own Bezier curves for animations and transitions.",
//   },
// };

export function PageBezierCurveGenerator() {
  return (
    <div className="cuicui-default-style ">
      <h1>Bézier curve builder</h1>
      <p className="mb-12">
        Create and customize your own Bézier curves for animations and
        transitions.
      </p>
      <CuicuiBezierCurveEditor />

      <section className="mt-40">
        <h3>What are Bézier curves used for?</h3>
        <p>
          Bézier curves are used to create smooth animations and transitions in
          web development. They are defined by four points: two anchor points
          and two control points. The anchor points define the start and end
          points of the curve, while the control points determine the shape of
          the curve. Bézier curves are commonly used in CSS animations and
          transitions to create effects such as easing in and out, linear
          transitions, and custom timing functions.
        </p>
      </section>
    </div>
  );
}
