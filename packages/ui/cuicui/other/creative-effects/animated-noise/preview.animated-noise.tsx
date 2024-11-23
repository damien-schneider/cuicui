import { AnimatedNoise } from "@/cuicui/other/creative-effects/animated-noise/animated-noise";

export default function PreviewAnimatedNoise() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatedNoise opacity={0.1} />
    </div>
  );
}
