"use client";

import { cn } from "@/cuicui/utils/cn/cn";
import NumberFlow from "@number-flow/react";
import { useState, useRef, useEffect } from "react";
import { useInView } from "motion/react";

type NumberProps = number | `${number}`;

export function TriggerOnScroll({
  className,
  children,
  delayInMs = 100,
}: { className?: string; children: NumberProps; delayInMs?: number }) {
  const [number, setNumber] = useState<NumberProps>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setNumber(children), delayInMs);
    } else {
      setNumber(0);
    }
  }, [isInView, children, delayInMs]);

  return (
    <NumberFlow
      ref={ref}
      value={Number(number)}
      isolate={true}
      spinTiming={{ duration: 1200, easing: "ease-in-out" }}
      className={cn(
        "z-20 dark:text-neutral-300 text-neutral-700 text-4xl font-medium tracking-tighter",
        className,
      )}
    />
  );
}
