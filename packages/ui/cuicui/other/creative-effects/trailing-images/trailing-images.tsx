"use client";
import {
  type ComponentProps,
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import { motion, useAnimation } from "motion/react";
import { useMouse } from "@/cuicui/hooks/use-mouse";
import { cn } from "@/cuicui/utils/cn";

interface AnimatedImageRef {
  show: ({
    x,
    y,
    newX,
    newY,
    zIndex,
  }: {
    x: number;
    y: number;
    zIndex: number;
    newX: number;
    newY: number;
  }) => void;
  isActive: () => boolean;
}

const AnimatedImage = forwardRef<AnimatedImageRef, { src: string }>(
  ({ src }, ref) => {
    const controls = useAnimation();
    const isRunning = useRef(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useImperativeHandle(ref, () => ({
      isActive: () => isRunning.current,
      show: async ({
        x,
        y,
        newX,
        newY,
        zIndex,
      }: {
        x: number;
        y: number;
        zIndex: number;
        newX: number;
        newY: number;
      }) => {
        const rect = imgRef.current?.getBoundingClientRect();
        if (!rect) {
          return;
        }

        const center = (posX: number, posY: number) => {
          const coords = {
            x: posX - rect.width / 2,
            y: posY - rect.height / 2,
          };
          return `translate(${coords.x}px, ${coords.y}px)`;
        };

        controls.stop();

        controls.set({
          opacity: isRunning.current ? 1 : 0.75,
          zIndex,
          transform: `${center(x, y)} scale(1)`,
          transition: { ease: "circOut" },
        });

        isRunning.current = true;

        await controls.start({
          opacity: 1,
          transform: `${center(newX, newY)} scale(1)`,
          transition: { duration: 0.9, ease: "circOut" },
        });

        await Promise.all([
          controls.start({
            transition: { duration: 1, ease: "easeInOut" },
            transform: `${center(newX, newY)} scale(0.1)`,
          }),
          controls.start({
            opacity: 0,
            transition: { duration: 1.1, ease: "easeOut" },
          }),
        ]);

        isRunning.current = false;
      },
    }));

    return (
      <motion.img
        ref={imgRef}
        initial={{ opacity: 0, scale: 1 }}
        animate={controls}
        src={src}
        alt="trail element"
        className="absolute h-56 w-44 object-cover"
      />
    );
  },
);

AnimatedImage.displayName = "AnimatedImage";

const TrailingImage = ({
  images,
  className,
  ...props
}: { images: string[] } & ComponentProps<"div">) => {
  // Create a maximum of 20 trails for a smoother experience
  const trailsRef = useRef(
    Array.from(
      { length: Math.max(20, images.length) },
      createRef<AnimatedImageRef>,
    ),
  );

  const lastPosition = useRef({ x: 0, y: 0 });
  const cachedPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const zIndex = useRef(1);

  const [mouse, parentRef] = useMouse();

  useEffect(() => {
    if (!(mouse.elementX && mouse.elementY)) {
      return;
    }
    const activeRefCount = trailsRef.current.filter((ref) =>
      ref.current?.isActive(),
    ).length;
    if (activeRefCount === 0) {
      // Reset zIndex since there are no active references
      // This prevents zIndex from incrementing indefinitely
      zIndex.current = 1;
    }

    const distance = getDistance(
      mouse.elementX,
      mouse.elementY,
      lastPosition.current.x,
      lastPosition.current.y,
    );
    const threshold = 50;

    const newCachePosition = {
      x: lerp(cachedPosition.current.x || mouse.elementX, mouse.elementX, 0.1),
      y: lerp(cachedPosition.current.y || mouse.elementY, mouse.elementY, 0.1),
    };
    cachedPosition.current = newCachePosition;

    if (distance > threshold) {
      imageIndex.current = (imageIndex.current + 1) % trailsRef.current.length;
      zIndex.current += 1;
      lastPosition.current = { x: mouse.elementX, y: mouse.elementY };
      trailsRef.current[imageIndex.current].current?.show?.({
        x: newCachePosition.x,
        y: newCachePosition.y,
        zIndex: zIndex.current,
        newX: mouse.elementX,
        newY: mouse.elementY,
      });
    }
  }, [mouse.elementX, mouse.elementY]);

  return (
    <div ref={parentRef} className={cn("relative flex", className)} {...props}>
      {trailsRef.current.map((ref, index) => (
        <AnimatedImage
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={`cuicui-trailing-images-${index}`}
          ref={ref}
          src={images[index % images.length]}
        />
      ))}
      <div className="flex w-full flex-1 items-center justify-center p-4 text-center text-sm text-foreground md:text-3xl">
        <div className="max-w-sm">
          Move your mouse over this element to see the effect
        </div>
      </div>
    </div>
  );
};

export default TrailingImage;

// Linear interpolation
function lerp(a: number, b: number, n: number) {
  return (1 - n) * a + n * b;
}

// Get distance between two points
function getDistance(x1: number, y1: number, x2: number, y2: number) {
  return Math.hypot(x2 - x1, y2 - y1);
}
