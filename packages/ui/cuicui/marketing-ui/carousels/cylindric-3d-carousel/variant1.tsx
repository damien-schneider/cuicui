"use client";

import {
  type PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  AlarmClockIcon,
  ArchiveIcon,
  EyeIcon,
  MailIcon,
  NetworkIcon,
  PhoneIcon,
  SettingsIcon,
  SpeakerIcon,
  UserIcon,
} from "lucide-react";
import { useId } from "react";
import { cn } from "@/cuicui/utils/cn/cn";

export function CarouselCylindricalVariant1() {
  const cylinderWidth = 1500;
  const faceCount = IconList.length;
  const faceWidth = cylinderWidth / faceCount;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const handleDrag = (_: unknown, info: PanInfo) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });
  const id = useId();
  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg)",
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          animate={controls}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          drag="x"
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
        >
          {IconList.map((Item, index) => {
            return (
              <div
                className="absolute flex h-full origin-center items-center justify-center bg-mauve-dark-2 p-2"
                key={`face-${id}`}
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    index * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className={cn(
                    "group flex h-20 w-full items-center justify-center rounded-xl",
                    "mx-auto max-w-sm rounded-2xl border border-neutral-500/10 p-6 text-card-foreground dark:border-white/10 ",
                    "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
                    "neutral group transition-transform hover:scale-110",
                    "bg-neutral-100/90 dark:bg-neutral-800/90",
                  )}
                >
                  <Item className="neutral size-8 text-neutral-700 transition-transform group-hover:scale-150 dark:text-neutral-300" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
const IconList = [
  UserIcon,
  NetworkIcon,
  EyeIcon,
  SpeakerIcon,
  SettingsIcon,
  PhoneIcon,
  MailIcon,
  AlarmClockIcon,
  ArchiveIcon,
];
