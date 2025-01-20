import { cn } from "@/cuicui/utils/cn";
import type { ComponentProps, CSSProperties, ReactNode } from "react";

export const GlowText = ({
  children,
  className,
  style,
  ...props
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & ComponentProps<"span">) => {
  const dropShadows = [
    {
      offsetX: 0,
      offsetY: 0,
      blurRadius: "calc((var(--active, 100) / 100) * 5px)",
      color: "hsl(0 0% 100% / 0.6)",
    },
    {
      offsetX: 0,
      offsetY: 0,
      blurRadius: "calc((var(--active, 100) / 100) * 10px)",
      color: "hsl(0 0% 100% / 0.4)",
    },
    {
      offsetX: 0,
      offsetY: "calc((var(--active, 100) / 100) * 6px)",
      blurRadius: "calc((var(--active, 100) / 100) * 15px)",
      color: "hsl(0 0% 100% / 0.3)",
    },
    {
      offsetX: 0,
      offsetY: "calc((var(--active, 100) / 100) * 8px)",
      blurRadius: "calc((var(--active, 100) / 100) * 20px)",
      color: "hsl(0 0% 100% / 0.2)",
    },
    {
      offsetX: 0,
      offsetY: "calc((var(--active, 100) / 100) * 10px)",
      blurRadius: "calc((var(--active, 100) / 100) * 30px)",
      color: "hsl(0 0% 100% / 0.1)",
    },
  ];

  // Construct the filter string by joining individual drop-shadows
  const filterValue = dropShadows
    .map(
      ({ offsetX, offsetY, blurRadius, color }) =>
        `drop-shadow(${offsetX} ${offsetY} ${blurRadius} ${color})`,
    )
    .join(" ");

  return (
    <span
      className={cn("select-none font-medium", className)}
      style={{
        ...style,
        filter: filterValue,
      }}
      {...props}
    >
      {children}
    </span>
  );
};

export default GlowText;
