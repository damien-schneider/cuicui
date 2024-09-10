"use client";
import React, { useEffect, useState } from "react";
import { Counter } from "#/src/ui/cuicui/marketing-ui/statistics/animated-counter/animated-counter";

export default function AnimatedCounterPreview() {
  const [count, setCount] = useState(0);

  // Update the count every second by increasing random value (between 1 and 10)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Counter
      value={count % 1000}
      numberOfDigits={3}
      paddingBetweenNumbers={30}
      className="rounded-lg bg-neutral-400/15 border border-neutral-500/20 px-2 text-neutral-800 dark:text-neutral-200 text-2xl space-x-3"
    />
  );
}
