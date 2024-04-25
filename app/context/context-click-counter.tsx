"use client";

import React from "react";
import { Boundary } from "#/ui/boundary";
import { useCounter } from "./counter-context";

const ContextClickCounter = () => {
	const [count, setCount] = useCounter();

	return (
		<Boundary
			labels={["Counter Context [Client Component]"]}
			color="blue"
			size="small"
			animateRerendering={false}
		>
			<button
				onClick={() => setCount(count + 1)}
				className="rounded-lg bg-gray-700 px-3 py-1 font-medium text-gray-100 text-sm tabular-nums hover:bg-gray-500 hover:text-white"
			>
				{count} Clicks
			</button>
		</Boundary>
	);
};

export const Counter = () => {
	const [count] = useCounter();

	return (
		<Boundary
			labels={["Counter Context [Client Component]"]}
			color="blue"
			size="small"
			animateRerendering={false}
		>
			<div className="span font-bold text-white text-xl">
				<span className="tabular-nums">{count}</span> Clicks
			</div>
		</Boundary>
	);
};

export default ContextClickCounter;
