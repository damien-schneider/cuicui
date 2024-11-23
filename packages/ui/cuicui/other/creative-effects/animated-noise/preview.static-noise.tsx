import { StaticNoise } from "@/cuicui/other/creative-effects/animated-noise/static-noise";
import GridPattern from "@/cuicui/other/patterns/grid-pattern/grid-pattern";

export default function PreviewStaticNoise() {
  return (
    <div className="relative h-full w-full">
      <StaticNoise opacity={0.1} />
      <section className="font-semibold h-full w-full  bg-gradient-to-t dark:to-gray-800 dark:from-gray-950 to-gray-50 from-white flex flex-col items-center justify-center dark:text-white text-black">
        <GridPattern />
        <p className="text-4xl px-8 font-semibold text-center tracking-tight">
          Animated noise effect with svg only
        </p>
      </section>
    </div>
  );
}
