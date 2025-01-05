"use client";
import { type ComponentProps, type RefObject, useMemo, useRef } from "react";
import { motion, useAnimationFrame } from "motion/react";
import { useMouse } from "@/cuicui/hooks/use-mouse";

interface TextProps {
  children: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef: RefObject<HTMLDivElement | null>;
  radiusZoomingZone?: number;
  falloff?: "linear" | "exponential" | "gaussian";
}

export const VariableFontCursorProximity = ({
  children,
  fromFontVariationSettings = "'wght' 400, 'slnt' 0",
  toFontVariationSettings = "'wght' 900, 'slnt' -10",
  containerRef,
  radiusZoomingZone = 50,
  falloff = "linear",
  className,
  onClick,
  ref,
  ...props
}: TextProps & ComponentProps<"span">) => {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);

  const [mousePosition, _] = useMouse(containerRef);

  // Parse the font variation settings strings. see the docs or the demo on how one should look like
  const parsedSettings = useMemo(() => {
    const fromSettings = new Map(
      fromFontVariationSettings
        .split(",")
        .map((s) => s.trim())
        .map((s) => {
          const [name, value] = s.split(" ");
          return [name.replace(/['"]/g, ""), Number.parseFloat(value)];
        }),
    );

    const toSettings = new Map(
      toFontVariationSettings
        .split(",")
        .map((s) => s.trim())
        .map((s) => {
          const [name, value] = s.split(" ");
          return [name.replace(/['"]/g, ""), Number.parseFloat(value)];
        }),
    );

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
  ): number => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  };

  const calculateFalloff = (distance: number): number => {
    const normalizedDistance = Math.min(
      Math.max(1 - distance / radiusZoomingZone, 0),
      1,
    );

    switch (falloff) {
      case "exponential":
        return normalizedDistance ** 2;
      case "gaussian":
        return Math.exp(-((distance / (radiusZoomingZone / 2)) ** 2) / 2);
      // case "linear":
      default:
        return normalizedDistance;
    }
  };

  useAnimationFrame(() => {
    if (!containerRef.current) {
      return;
    }
    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!(mousePosition.elementX && mousePosition.elementY)) {
        return;
      }
      if (!letterRef) {
        return;
      }

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePosition.elementX,
        mousePosition.elementY,
        letterCenterX,
        letterCenterY,
      );

      if (distance >= radiusZoomingZone) {
        if (
          letterRef.style.fontVariationSettings !== fromFontVariationSettings
        ) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
        }
        return;
      }

      const falloffValue = calculateFalloff(distance);

      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue =
            fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const words = children.split(" ");
  let letterIndex = 0;

  return (
    <span
      ref={ref}
      className={`${className} inline`}
      onClick={onClick}
      {...props}
    >
      {words.map((word, wordIndex) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`${wordIndex}-letter-effect`}
          className="inline-block whitespace-nowrap"
        >
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++;
            return (
              <motion.span
                key={currentLetterIndex}
                ref={(el: HTMLSpanElement | null) => {
                  letterRefs.current[currentLetterIndex] = el;
                }}
                className="inline-block"
                aria-hidden="true"
                style={{
                  fontVariationSettings:
                    interpolatedSettingsRef.current[currentLetterIndex],
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </span>
  );
};

VariableFontCursorProximity.displayName = "VariableFontCursorProximity";
export default VariableFontCursorProximity;
