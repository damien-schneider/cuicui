import GradientText from "../ui/gradient-text";
import { cn } from "../utils/cn";

export default function ComingSoonCard() {
  return (
    <div
      className={cn(
        "group w-full rounded-2xl border border-neutral-500/10 px-6 py-8 dark:border-white/10 ",
        "dark:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]",
        "group transform-gpu transition-transform hover:scale-[1.01]",
        "bg-gray-50 dark:bg-neutral-800/80",
      )}
    >
      <GradientText className="inline-flex font-medium text-5xl leading-[70px]">
        Coming Soon
      </GradientText>
      <p className="text-lg text-neutral-500">
        This component is currently in development and will be available soon.
      </p>
    </div>
  );
}
