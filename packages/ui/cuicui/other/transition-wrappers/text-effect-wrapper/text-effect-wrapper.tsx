"use client";

import { cn } from "@/cuicui/utils/cn/cn";
import {
  AnimatePresence,
  motion,
  type TargetAndTransition,
  type Variants,
} from "framer-motion";
import React from "react";

type PresetType = "blur" | "shake" | "scale" | "fade" | "slide";

type TextEffectProps = {
  children: string;
  per?: "word" | "char" | "line";
  as?: keyof React.JSX.IntrinsicElements;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  preset?: PresetType;
  delay?: number;
  trigger?: boolean;
  onAnimationComplete?: () => void;
  segmentWrapperClassName?: string;
};

type PerType = "word" | "char" | "line";

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.01,
  word: 0.05,
  line: 0.3,
};

const wordSplitRegex = /(\s+)/;

const defaultContainerVariants = (per: PerType = "char") => {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: defaultStaggerTimes[per],
      },
    },
    exit: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  return variants;
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
};

const presetVariants: (
  per: PerType,
) => Record<PresetType, { container: Variants; item: Variants }> = (
  per: PerType,
) => {
  return {
    blur: {
      container: defaultContainerVariants(per),
      item: {
        hidden: { opacity: 0, filter: "blur(12px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
        exit: { opacity: 0, filter: "blur(12px)" },
      },
    },
    shake: {
      container: defaultContainerVariants(per),
      item: {
        hidden: { x: 0 },
        visible: { x: [-5, 5, -5, 5, 0], transition: { duration: 0.5 } },
        exit: { x: 0 },
      },
    },
    scale: {
      container: defaultContainerVariants(per),
      item: {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
      },
    },
    fade: {
      container: defaultContainerVariants(per),
      item: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      },
    },
    slide: {
      container: defaultContainerVariants(per),
      item: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
      },
    },
  };
};

const AnimationComponent = React.memo(
  ({
    segment,
    variants,
    per,
    segmentWrapperClassName,
  }: {
    segment: string;
    variants: Variants;
    per: PerType;
    segmentWrapperClassName?: string;
  }) => {
    const getContent = () => {
      switch (per) {
        case "line":
          return (
            <motion.span variants={variants} className="block">
              {segment}
            </motion.span>
          );
        case "word":
          return (
            <motion.span
              aria-hidden="true"
              variants={variants}
              className="inline-block whitespace-pre"
            >
              {segment}
            </motion.span>
          );
        case "char":
          return (
            <motion.span className="inline-block whitespace-pre">
              {segment.split("").map((char, charIndex) => (
                <motion.span
                  key={`char-${charIndex}-${char}`}
                  aria-hidden="true"
                  variants={variants}
                  className="inline-block whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          );
        default:
          return null;
      }
    };

    const content = getContent();

    if (!segmentWrapperClassName) {
      return content;
    }

    const defaultWrapperClassName = per === "line" ? "block" : "inline-block";

    return (
      <span className={cn(defaultWrapperClassName, segmentWrapperClassName)}>
        {content}
      </span>
    );
  },
);

AnimationComponent.displayName = "AnimationComponent";

export function TextEffectWrapper({
  children,
  per = "word",
  as = "p",
  variants,
  className,
  preset,
  delay = 0,
  trigger = true,
  onAnimationComplete,
  segmentWrapperClassName,
}: Readonly<TextEffectProps>) {
  let segments: string[];

  if (per === "line") {
    segments = children.split("\n");
  } else if (per === "word") {
    segments = children.split(wordSplitRegex);
  } else {
    segments = children.split("");
  }

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;
  const selectedVariants = preset
    ? presetVariants(per)[preset]
    : { container: defaultContainerVariants(per), item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;
  const ariaLabel = per === "line" ? undefined : children;

  const stagger = defaultStaggerTimes[per];

  const delayedContainerVariants: Variants = {
    hidden: containerVariants.hidden,
    visible: {
      ...containerVariants.visible,
      transition: {
        ...(containerVariants.visible as TargetAndTransition)?.transition,
        staggerChildren:
          (containerVariants.visible as TargetAndTransition)?.transition
            ?.staggerChildren ?? stagger,
        delayChildren: delay,
      },
    },
    exit: containerVariants.exit,
  };

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-label={ariaLabel}
          variants={delayedContainerVariants}
          className={cn("whitespace-pre-wrap", className)}
          onAnimationComplete={onAnimationComplete}
        >
          {segments.map((segment, index) => (
            <AnimationComponent
              key={`${per}-${index}-${segment}`}
              segment={segment}
              variants={itemVariants}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}
