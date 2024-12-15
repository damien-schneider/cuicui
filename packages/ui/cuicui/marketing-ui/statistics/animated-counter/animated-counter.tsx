"use client";
import {
  type MotionValue,
  motion,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";
import { cn } from "@/cuicui/utils/cn";

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
    <div className={cn("flex w-fit overflow-hidden leading-none", className)}>
      {Array.from(
        { length: convertToPositiveInteger(numberOfDigits) },
        (_, index) => (
          <Digit
            height={convertToPositiveInteger(paddingBetweenNumbers)}
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={`digit-${index}`}
            place={10 ** (convertToPositiveInteger(numberOfDigits) - index - 1)}
            value={value}
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
    <div className="relative w-[1ch]" style={{ height }}>
      {Array.from(new Array(10).keys()).map((i) => (
        <MemoizedNumber height={height} key={i} mv={animatedValue} number={i} />
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
      className="absolute inset-0 flex items-center justify-center"
      style={{ y }}
    >
      {number}
    </motion.span>
  );
}
