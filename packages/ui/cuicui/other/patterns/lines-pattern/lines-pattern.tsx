import { useId } from "react";
import { cn } from "@/cuicui/utils/cn";

type LinesPatternProps = {
  spacing?: number; // Distance between the lines
  angle?: number; // Angle of the lines in degrees
  lineWidth?: number; // Thickness of the lines
  color?: string; // Color of the lines
  className?: string; // Additional CSS classes
};

export function LinesPattern({
  spacing = 6, // Default spacing between lines
  angle = 315, // Default angle set to 45 degrees
  lineWidth = 1, // Default line width
  color = "currentColor", // Default line color
  className,
  ...props
}: Readonly<LinesPatternProps>) {
  const id = useId(); // Generate a unique ID for the pattern

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none inset-0 absolute h-full w-full text-neutral-400/40",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          patternUnits="userSpaceOnUse"
          width={spacing}
          height={spacing}
          patternTransform={`rotate(${angle})`}
        >
          <line
            x1={0}
            y1={0}
            x2={0}
            y2={spacing}
            stroke={color}
            strokeWidth={lineWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} width="100%" height="100%" />
    </svg>
  );
}

export default LinesPattern;
