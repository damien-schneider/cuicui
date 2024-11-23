import { TextEffectWrapper } from "@/cuicui/other/transition-wrappers/text-effect-wrapper/text-effect-wrapper";

export const PreviewTextEffectPerWord = () => {
  return (
    <div className="flex flex-col gap-8">
      <TextEffectWrapper
        per="word"
        preset="fade"
        className="text-neutral-500 dark:text-neutral-400"
      >
        Animate your ideas with text wrapper (inspired by motion primitives)
      </TextEffectWrapper>
      <TextEffectWrapper
        per="word"
        preset="blur"
        className="text-neutral-500 dark:text-neutral-400"
      >
        Animate your ideas with text wrapper (inspired by motion primitives)
      </TextEffectWrapper>
      <TextEffectWrapper
        per="word"
        preset="slide"
        className="text-neutral-500 dark:text-neutral-400"
      >
        Animate your ideas with text wrapper (inspired by motion primitives)
      </TextEffectWrapper>
    </div>
  );
};
