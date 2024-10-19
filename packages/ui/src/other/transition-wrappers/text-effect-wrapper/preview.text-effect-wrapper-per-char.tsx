import { TextEffectWrapper } from "@/src/other/transition-wrappers/text-effect-wrapper/text-effect-wrapper";

export const PreviewTextEffectPerChar = () => {
	return (
		<div className="flex flex-col gap-8">
			<TextEffectWrapper
				per="char"
				preset="fade"
				className="text-neutral-500 dark:text-neutral-400"
			>
				Animate your ideas with text wrapper (inspired by motion primitives)
			</TextEffectWrapper>
			<TextEffectWrapper
				per="char"
				preset="blur"
				className="text-neutral-500 dark:text-neutral-400"
			>
				Animate your ideas with text wrapper (inspired by motion primitives)
			</TextEffectWrapper>
			<TextEffectWrapper
				per="char"
				preset="slide"
				className="text-neutral-500 dark:text-neutral-400"
			>
				Animate your ideas with text wrapper (inspired by motion primitives)
			</TextEffectWrapper>
		</div>
	);
};
