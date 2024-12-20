import { useId } from "react";
import { cn } from "@/cuicui/utils/cn";

export function DashedPattern({
  x = 0,
  y = 0,
  strokeWidth = 1,
  dashLength = 5,
  gapLength = 10,
  angle = 0,
  className,
  ...props
}: {
  x?: number; // X position of the pattern
  y?: number; // Y position of the pattern
  strokeWidth?: number; // Width of the dashed line
  dashLength?: number; // Length of each dash
  gapLength?: number; // Length of the gap between dashes
  angle?: number; // Rotation angle of the dashed line in degrees
  className?: string; // Additional CSS classes
}) {
  const id = useId();

  // Calculate the pattern size based on dash and gap lengths
  const patternWidth = dashLength + gapLength;
  const patternHeight = patternWidth;

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/40",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          patternUnits="userSpaceOnUse"
          width={patternWidth}
          height={patternHeight}
          x={x}
          y={y}
        >
          <line
            x1={0}
            y1={0}
            x2={patternWidth}
            y2={patternHeight}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={`${dashLength} ${gapLength}`}
            transform={`rotate(${angle} ${patternWidth / 2} ${patternHeight / 2})`}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} width="100%" height="100%" strokeWidth={0} />
    </svg>
  );
}

export default DashedPattern;
