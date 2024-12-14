import { TextEffectWrapper } from "@/cuicui/other/transition-wrappers/text-effect-wrapper/text-effect-wrapper";

export const PreviewTextEffectPerLine = () => {
  return (
    <div className="flex flex-col gap-8">
      <TextEffectWrapper
        per="line"
        segmentWrapperClassName="overflow-hidden block"
        variants={{
          container: {
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              y: 40,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.4,
              },
            },
          },
        }}
        className="text-neutral-500 dark:text-neutral-400"
      >
        {`Animate your ideas with text wrapper (inspired by motion primitives)
Animate your ideas with text wrapper (inspired by motion primitives)
Animate your ideas with text wrapper (inspired by motion primitives)`}
      </TextEffectWrapper>
      <TextEffectWrapper
        per="line"
        segmentWrapperClassName="overflow-hidden block"
        preset="blur"
        className="text-neutral-500 dark:text-neutral-400"
      >
        {`Animate your ideas with text wrapper (inspired by motion primitives)
Animate your ideas with text wrapper (inspired by motion primitives)
Animate your ideas with text wrapper (inspired by motion primitives)`}
      </TextEffectWrapper>
    </div>
  );
};

export default PreviewTextEffectPerLine;
