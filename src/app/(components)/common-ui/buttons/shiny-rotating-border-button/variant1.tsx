"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ShinyRotatingBorderButtonVariant1() {
  return (
    <button
      type="button"
      className="bg-neutral-200 dark:bg-neutral-600 p-px relative rounded-full overflow-hidden group active:scale-95 transition-transform"
    >
      <motion.div
        initial={{ top: 0, left: 0 }}
        animate={{
          top: ["50%", "0%", "50%", "100%", "50%"],
          left: ["0%", "50%", "100%", "50%", "0%"],
          // top: ["10%", "0%", "15%", "85%", "90%", "80%", "10%"],
          // left: ["10%", "50%", "85%", "85%", "50%", "0%", "10%"],
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        }}
        className="absolute size-8 z-10 -translate-x-1/2 -translate-y-1/2 blur-sm group-hover:scale-[3] duration-300 transition-transform"
      >
        <motion.div
          animate={{
            rotate: ["0deg", "360deg"],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="rounded-full size-full"
          style={{
            background:
              "linear-gradient(135deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
          }}
        />
      </motion.div>
      <div className="relative  z-10 rounded-full px-3 py-1 bg-white dark:bg-neutral-800">
        <motion.p
          animate={{
            backgroundImage: [
              "linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
              "linear-gradient(90deg, #F5833F,#3BC4F2, #7A69F9, #F26378)",
              "linear-gradient(90deg, #F26378, #F5833F,#3BC4F2, #7A69F9)",
              "linear-gradient(90deg, #7A69F9, #F26378, #F5833F,#3BC4F2)",
              "linear-gradient(90deg, #3BC4F2, #7A69F9, #F26378, #F5833F)",
            ],
          }}
          transition={{
            duration: 1,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="bg-clip-text group-hover:text-transparent text-neutral-600 dark:text-neutral-200 text-sm tracking-tighter transition-colors duration-300"
        >
          variant1
        </motion.p>
      </div>
    </button>
  );
}
