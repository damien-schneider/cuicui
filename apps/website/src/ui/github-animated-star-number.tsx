"use client";
import { AnimatedNumber } from "@cuicui/ui/src/other/transition-wrappers/animated-number/animated-number";
import { useEffect, useState } from "react";

export function GithubAnimatedStarNumber({
	value,
}: Readonly<{ value: number }>) {
	const [valueState, setValueState] = useState(0);

	useEffect(() => {
		setValueState(value);
	}, [value]);

	return (
		<AnimatedNumber
			className="tabular-nums min-w-8"
			springOptions={{
				bounce: 0,
				duration: 4000,
			}}
			value={valueState}
		/>
	);
}
