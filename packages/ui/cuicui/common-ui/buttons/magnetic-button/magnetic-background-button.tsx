"use client";

import { cn } from "@/cuicui/utils/cn";
import {
  useState,
  useRef,
  type ReactNode,
  type MouseEvent,
  type ComponentProps,
} from "react";

type PositionType = {
  x: number;
  y: number;
};

export function MagneticBackgroundButton({
  children = "Magnetic Button",
  magneticStrength = 0.5,
  className,
  exitForce = 20,
  ...props
}: {
  children?: ReactNode;
  magneticStrength?: number;
  className?: string;
  exitForce?: number;
} & ComponentProps<"button">) {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) {
      return;
    }
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    const maxDistance = Math.max(rect.width, rect.height);

    // Normalize the direction vector
    const unitX = distanceX / distance;
    const unitY = distanceY / distance;

    // Clamp the distance to maxDistance
    const clampedDistance = Math.min(distance, maxDistance);

    // Calculate the magnetic effect
    const magneticMagnitude =
      (clampedDistance / maxDistance) * magneticStrength * (rect.width / 4);

    const magneticX = unitX * magneticMagnitude;
    const magneticY = unitY * magneticMagnitude;

    setPosition({ x: magneticX, y: magneticY });
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  function getFarAwayLastPosition() {
    if (!(buttonRef.current && lastMousePosition)) {
      return { x: 0, y: 0 };
    }
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate direction from the cursor to the button center
    const distanceX = centerX - lastMousePosition.x;
    const distanceY = centerY - lastMousePosition.y;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance === 0) {
      return { x: 0, y: 0 };
    }

    // Normalize the direction vector
    const unitX = distanceX / distance;
    const unitY = distanceY / distance;

    // Calculate the new position
    const farAwayX = unitX * exitForce;
    const farAwayY = unitY * exitForce;

    return { x: -farAwayX, y: -farAwayY };
  }

  function getTransformedValue() {
    return `translate3D(${position.x}px, ${position.y}px, 0)`;
  }

  return (
    <button
      type="button"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        setIsHovered(true);
        const farAwayPosition = getFarAwayLastPosition();
        setPosition(farAwayPosition);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        const farAwayPosition = getFarAwayLastPosition();
        setPosition(farAwayPosition);
      }}
      ref={buttonRef}
      className={cn(
        "relative inline-flex items-center justify-center rounded-lg z-10 tracking-tight dark:text-neutral-200 text-neutral-600 font-medium px-3 py-2",
        className,
      )}
      {...props}
    >
      <span
        className={cn(
          "absolute inset-0 -z-10 rounded-lg pointer-events-none",
          "before:inset-0 before:absolute before:transition-all before:rounded-lg",
          "dark:before:bg-neutral-800 before:bg-neutral-200",
          isHovered ? "duration-150 ease-out" : "duration-100 ease-in",
          isHovered
            ? "before:opacity-100 before:scale-100 before:duration-100 before:ease-in"
            : "before:opacity-0 before:scale-90 before:duration-300 before:ease-out before:blur-md",
        )}
        style={{ transform: getTransformedValue() }}
      />
      {children}
    </button>
  );
}
