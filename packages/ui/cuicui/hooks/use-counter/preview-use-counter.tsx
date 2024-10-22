"use client";
import { BeforeEffectButton } from "@/cuicui/common-ui/buttons/before-effect-button/before-effect-button";
import { useCounter } from "@/cuicui/hooks/use-counter/use-counter";

export default function PreviewUseCounter() {
	const [count, { increment, decrement, set, reset }] = useCounter(6, {
		min: 5,
		max: 10,
	});

	return (
		<section>
			<h4 className="font-medium text-lg text-neutral-500">UseCounter</h4>
			<p className="font-medium text-neutral-500 text-sm tracking-tighter">
				with optional min / max
			</p>
			<div className="mt-4 mb-4 rounded-lg border border-neutral-500/20 p-px">
				<BeforeEffectButton
					className="link"
					disabled={count >= 10}
					onClick={increment}
					type="button"
				>
					Increment
				</BeforeEffectButton>
				<BeforeEffectButton
					className="link"
					disabled={count <= 5}
					onClick={decrement}
					type="button"
				>
					Decrement
				</BeforeEffectButton>
				<BeforeEffectButton
					className="link"
					onClick={() => set(7)}
					type="button"
				>
					Set to 7
				</BeforeEffectButton>
				<BeforeEffectButton className="link" onClick={reset} type="button">
					Reset
				</BeforeEffectButton>
			</div>
			<p className="mx-auto w-fit font-bold text-7xl text-neutral-500">
				{count}
			</p>
		</section>
	);
}
