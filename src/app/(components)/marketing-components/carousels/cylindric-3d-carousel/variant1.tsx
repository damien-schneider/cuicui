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
import { cn } from "#/src/utils/cn";

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
          drag="x"
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {IconList.map((Item, index) => {
            return (
              <div
                key={`face-${id}`}
                className="absolute flex h-full origin-center items-center justify-center bg-mauve-dark-2 p-2"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${
                    index * (360 / faceCount)
                  }deg) translateZ(${radius}px)`,
                }}
              >
                <div
                  className={cn(
                    "group h-20 w-full rounded-xl flex items-center justify-center",
                    "rounded-2xl border text-card-foreground p-6 max-w-sm mx-auto dark:border-white/10 border-neutral-500/10  ",
                    "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
                    "hover:scale-110 transition-transform neutral group",
                    "bg-neutral-100/90 dark:bg-neutral-800/90",
                  )}
                >
                  <Item className="size-8 text-neutral-700 dark:text-neutral-300 group-hover:scale-150 transition-transform neutral" />
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
