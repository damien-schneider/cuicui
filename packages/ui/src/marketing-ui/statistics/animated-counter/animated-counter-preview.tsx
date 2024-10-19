"use client";
import { useEffect, useState } from "react";
import { Counter } from "@/src/marketing-ui/statistics/animated-counter/animated-counter";

export default function AnimatedCounterPreview() {
	const [count, setCount] = useState(0);

	// Update the count every second by increasing random value (between 1 and 10)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevCount) => prevCount + Math.floor(Math.random() * 10) + 1);
		}, 1500);
		return () => clearInterval(interval);
	}, []);

	return (
		<Counter
			className="space-x-3 rounded-lg border border-neutral-500/20 bg-neutral-400/15 px-2 text-2xl text-neutral-800 dark:text-neutral-200"
			numberOfDigits={3}
			paddingBetweenNumbers={30}
			value={count % 1000}
		/>
	);
}
