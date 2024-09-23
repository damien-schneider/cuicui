import { type VariantProps, cva } from "class-variance-authority";
import { CheckIcon } from "lucide-react";
import type React from "react";
import type { ReactNode } from "react";

import { cn } from "#/src/utils/cn";

export default function AdvancedBadgesVariant1() {
  const colors = Object.keys(badgeColorVariants) as ColorType[];
  return (
    <div className="w-full h-full space-y-4">
      <p className="text-neutral-400">With icon & without border</p>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <AdvancedColorfulBadges key={color} color={color} rounded="lg">
            <CheckIcon className="size-4" />
            {color}
          </AdvancedColorfulBadges>
        ))}
      </div>
      <p className="text-neutral-400">With border & rounded full</p>
      <div className="flex flex-wrap gap-4">
        {colors.map((color) => (
          <AdvancedColorfulBadges
            key={color}
            color={color}
            border
            rounded="full"
          >
            {color}
          </AdvancedColorfulBadges>
        ))}
      </div>
    </div>
  );
}

type ColorType = keyof typeof badgeColorVariants;
const badgeColorVariants = {
  neutral:
    "text-neutral-600 bg-neutral-400/10 dark:text-neutral-200 border-neutral-500/20",
  green:
    "text-green-600 bg-green-400/10 dark:text-green-400 border-green-200/80",
  blue: "text-blue-600 bg-blue-400/10 dark:text-blue-400 border-blue-200/80",
  red: "text-red-600 bg-red-400/10 dark:text-red-400 border-red-200/80",
  orange:
    "text-orange-600  bg-orange-400/10 dark:text-orange-400 border-orange-200/80",
  yellow:
    "text-yellow-600 bg-yellow-400/10 dark:text-yellow-400 border-yellow-400/60",
  violet:
    "text-violet-600 bg-violet-400/10 dark:text-violet-400 border-violet-200/80",
  // Add other colors here
};

const badgeSizeVariants = {
  sm: "h-6 px-2",
  md: "h-7 px-3",
  lg: "h-8 px-4",
  icon: "size-10",
};

const badgeRoundedVariants = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const badgesVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors dark:bg-neutral-800 dark:border-neutral-700 gap-1",
  {
    variants: {
      color: badgeColorVariants,
      size: badgeSizeVariants,
      rounded: badgeRoundedVariants,
      border: {
        true: "border",
        false: "",
      },
    },
    defaultVariants: {
      color: "neutral",
      size: "md",
      rounded: "md",
      border: false,
    },
  },
);

function AdvancedColorfulBadges({
  color,
  size,
  rounded,
  border,
  children,
  className,
  ...props
}: Readonly<
  {
    className?: string;
    children: ReactNode;
  } & VariantProps<typeof badgesVariants>
>) {
  return (
    <div
      className={cn(
        badgesVariants({ color, rounded, size, border }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
