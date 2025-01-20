import GlowText from "@/cuicui/other/font-effects/glow-text/glow-text";

export default function GlowTextPreview() {
  return (
    <GlowText className="text-2xl sm:text-3xl lg:text-4xl font-medium">
      <span className="hidden dark:block">Just copy it.</span>
      <span className="block dark:hidden">This a dark mode only component</span>
    </GlowText>
  );
}
