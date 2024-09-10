"use client";
import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import { cn } from "#/src/utils/cn";

export function Counter({
  value,
  className,
  paddingBetweenNumbers = 30,
  numberOfDigits = 3,
}: Readonly<{
  value: number;
  className?: string;
  paddingBetweenNumbers?: number;
  numberOfDigits?: number;
}>) {
  function convertToPositiveInteger(value: number): number {
    return Math.abs(Math.floor(value));
  }

  return (
    <div className={cn("flex overflow-hidden leading-none w-fit", className)}>
      {Array.from(
        { length: convertToPositiveInteger(numberOfDigits) },
        (_, index) => (
          <Digit
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`digit-${index}`}
            place={10 ** (convertToPositiveInteger(numberOfDigits) - index - 1)}
            value={value}
            height={convertToPositiveInteger(paddingBetweenNumbers)}
          />
        ),
      )}
    </div>
  );
}

function Digit({
  place,
  value,
  height,
}: Readonly<{ place: number; value: number; height: number }>) {
  const valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch]">
      {Array.from(Array(10).keys()).map((i) => (
        <MemoizedNumber key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

function MemoizedNumber({
  mv,
  number,
  height,
}: Readonly<{ mv: MotionValue; number: number; height: number }>) {
  const y = useTransform(mv, (latest) => {
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
