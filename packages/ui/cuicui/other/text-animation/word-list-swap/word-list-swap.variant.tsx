"use client";
import WordListSwap from "@/cuicui/other/text-animation/word-list-swap/word-list-swap";
import { LayoutGroup, motion } from "motion/react";

export const Preview = () => {
  return (
    <LayoutGroup>
      <motion.p className="flex whitespace-pre text-4xl" layout={true}>
        <motion.span
          className="pt-0.5 sm:pt-1 md:pt-2"
          layout={true}
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
        >
          Cuicui is{" "}
        </motion.span>
        <WordListSwap
          texts={[
            "Amazing!",
            "fancy ✽",
            "optimized",
            "fast",
            "fun",
            "creative",
            "🕶️🕶️🕶️",
          ]}
          mainClassName="text-white px-2 sm:px-2 md:px-3 bg-violet-600 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </motion.p>
    </LayoutGroup>
  );
};

export default Preview;
