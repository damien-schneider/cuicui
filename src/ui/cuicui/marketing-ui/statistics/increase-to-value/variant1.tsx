"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

export default function IncreaseToValueVariant1() {
  return (
    <div>
      <AnimatedCounter from={0} to={100} duration={2} />
    </div>
  );
}

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
}) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: duration,
      onComplete: () => {
        setIsAnimationComplete(true);
      },
    });

    return controls.stop;
  }, [count, to, duration]);

  return (
    <motion.div
      className="text-7xl font-bold dark:text-neutral-200 text-neutral-800"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};
