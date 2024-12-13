"use client";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import type React from "react";
import { useEffect, useState } from "react";

export default function IncreaseToValueVariant1() {
  return (
    <div>
      <AnimatedCounter duration={2} from={0} to={100} />
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
  const [_isAnimationComplete, setIsAnimationComplete] = useState(false);

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
      animate={{ scale: 1, opacity: 1 }}
      className="font-bold text-7xl text-neutral-800 dark:text-neutral-200"
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{rounded}</motion.span>
    </motion.div>
  );
};
