"use client";

import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { type ElementRef, useRef, useState } from "react";

// biome-ignore lint/style/noNamespaceImport: <explanation>
import * as RadixSlider from "@radix-ui/react-slider";

const MAX_OVERFLOW = 50;

export function ElasticSliderVariant1() {
  return (
    <div className="flex w-48 flex-col items-center justify-center gap-4">
      <Slider />
    </div>
  );
}

function Slider() {
  const [volume, setVolume] = useState(50);
  const ref = useRef<ElementRef<typeof RadixSlider.Root>>(null);
  const [region, setRegion] = useState("middle");
  const clientX = useMotionValue(0);
  const overflow = useMotionValue(0);
  const scale = useMotionValue(1);

  useMotionValueEvent(clientX, "change", (latest) => {
    if (ref.current) {
      const { left, right } = ref.current.getBoundingClientRect();
      let newValue: number;

      if (latest < left) {
        setRegion("left");
        newValue = left - latest;
      } else if (latest > right) {
        setRegion("right");
        newValue = latest - right;
      } else {
        setRegion("middle");
        newValue = 0;
      }

      overflow.jump(decay(newValue, MAX_OVERFLOW));
    }
  });

  return (
    <>
      <motion.div
        className="flex w-full touch-none select-none items-center justify-center gap-3"
        onHoverEnd={() => animate(scale, 1)}
        onHoverStart={() => animate(scale, 1.2)}
        onTouchEnd={() => animate(scale, 1)}
        onTouchStart={() => animate(scale, 1.2)}
        style={{
          scale,
          opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
        }}
      >
        <motion.div
          animate={{
            scale: region === "left" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "left" ? -overflow.get() / scale.get() : 0,
            ),
          }}
        >
          <VolumeXIcon className="size-5 translate-x-0 translate-y-0 text-neutral-800 dark:text-neutral-200" />
        </motion.div>

        <RadixSlider.Root
          className="relative flex w-full max-w-[200px] grow cursor-grab touch-none select-none items-center py-4 active:cursor-grabbing"
          onLostPointerCapture={() => {
            animate(overflow, 0, { type: "spring", bounce: 0.5 });
          }}
          onPointerMove={(e) => {
            if (e.buttons > 0) {
              clientX.jump(e.clientX);
            }
          }}
          onValueChange={([v]) => setVolume(Math.floor(v))}
          ref={ref}
          step={0.01}
          value={[volume]}
        >
          <motion.div
            className="flex grow"
            style={{
              scaleX: useTransform(() => {
                if (ref.current) {
                  const { width } = ref.current.getBoundingClientRect();

                  return 1 + overflow.get() / width;
                }
              }),
              scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
              transformOrigin: useTransform(() => {
                if (ref.current) {
                  const { left, width } = ref.current.getBoundingClientRect();

                  return clientX.get() < left + width / 2 ? "right" : "left";
                }
              }),
              height: useTransform(scale, [1, 1.2], [6, 12]),
              marginTop: useTransform(scale, [1, 1.2], [0, -3]),
              marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
            }}
          >
            <RadixSlider.Track className="relative isolate h-full grow overflow-hidden rounded-full bg-neutral-500/40">
              <RadixSlider.Range className="absolute h-full bg-neutral-700 dark:bg-neutral-200" />
            </RadixSlider.Track>
          </motion.div>
          <RadixSlider.Thumb />
        </RadixSlider.Root>

        <motion.div
          animate={{
            scale: region === "right" ? [1, 1.4, 1] : 1,
            transition: { duration: 0.25 },
          }}
          style={{
            x: useTransform(() =>
              region === "right" ? overflow.get() / scale.get() : 0,
            ),
          }}
        >
          <Volume2Icon className="size-5 translate-x-0 translate-y-0 text-neutral-800 dark:text-neutral-200" />
        </motion.div>
      </motion.div>
      <p className="-translate-y-4 absolute font-medium text-neutral-500 text-xs tracking-tighter">
        {volume}
      </p>
    </>
  );
}

// Sigmoid-based decay function
function decay(value: number, max: number) {
  if (max === 0) {
    return 0;
  }

  const entry = value / max;
  const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

  return sigmoid * max;
}
