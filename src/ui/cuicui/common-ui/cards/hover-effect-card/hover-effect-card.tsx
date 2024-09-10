import type { ReactNode } from "react";
import { cn } from "#/src/utils/cn";

const HoverCard = ({
  columns = 5,
  rows = 5,
  maxXRotation = 10,
  maxYRotation = 10,
  children,
  className,
  containerClassName,
}: {
  columns?: number;
  rows?: number;
  maxXRotation?: number;
  maxYRotation?: number;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const generateTrackers = () => {
    return Array.from({ length: columns * rows }, (_, i) => {
      return (
        <div
          aria-hidden="true"
          key={`tr-${i + 1}`}
          className={`tr-${
            i + 1
          } absolute inset-0 z-50 cursor-pointer select-none`}
          style={{
            gridArea: `tr-${i + 1}`,
          }}
        />
      );
    });
  };

  const getTransform = (row: number, col: number) => {
    const xRotation = maxXRotation - (row / (rows - 1)) * 2 * maxXRotation;
    const yRotation = -maxYRotation + (col / (columns - 1)) * 2 * maxYRotation;

    return `rotateX(${xRotation.toFixed(2)}deg) rotateY(${yRotation.toFixed(
      2,
    )}deg)`;
  };

  return (
    <div className={cn("relative select-none", containerClassName)}>
      <style>{`
        ${Array.from({ length: rows * columns }, (_, i) => {
          const row = Math.floor(i / columns);
          const col = i % columns;
          return `
            .tr-${i + 1}:hover ~ #cuicui-card {
              transform: ${getTransform(row, col)};
            }
          `;
        }).join("")}
      `}</style>
      <div
        className="absolute inset-0 z-50 grid gap-0 group"
        aria-hidden="true"
        style={{
          perspective: "1000px",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gridTemplateAreas: Array.from(
            { length: rows },
            (_, rowIndex) =>
              `"${Array.from(
                { length: columns },
                (_, colIndex) => `tr-${rowIndex * columns + colIndex + 1}`,
              ).join(" ")}"`,
          ).join(" "),
        }}
      >
        {generateTrackers()}
        <div
          id="cuicui-card"
          className={cn(
            "group absolute inset-0 z-0 transition-all duration-150 ease-in-out",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
