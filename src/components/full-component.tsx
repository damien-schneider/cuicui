"use client";

import { useState } from "react";
import Code from "./code";
import { Badge1 } from "./badges/badge-1";

export default function FullComponent() {
	const [tab, setTab] = useState("visual");
	const [selectedVariant, setSelectedVariant] = useState("Variant1");
	return (
		<div>
			<menu className="flex justify-between">
				<div className="inline-flex gap-2 rounded-lg bg-gray-900 px-1 py-1">
					<button
						className="rounded-md bg-gray-800 px-2 py-1 text-gray-300 hover:bg-gray-700"
						type="button"
						onClick={() => setTab("visual")}
					>
						Visual
					</button>
					<button
						className="rounded-md bg-gray-800 px-2 py-1 text-gray-300 hover:bg-gray-700"
						type="button"
						onClick={() => setTab("code")}
					>
						code
					</button>
				</div>
				<select
					className="rounded-md bg-gray-900 px-2 py-1 text-gray-300 hover:bg-gray-800"
					name="variants"
					id="variants"
					onChange={(e) => setSelectedVariant(e.target.value)}
				>
					{Object.keys(Badge1).map((variant) => (
						<option
							value={variant}
							selected={variant === selectedVariant}
							key={variant}
						>
							{Badge1[variant].name}
						</option>
					))}
				</select>
			</menu>
			<p>test</p>
			{tab === "visual" ? (
				<div className="flex min-h-96 w-full items-center justify-center rounded-md bg-gray-900">
					{Badge1[selectedVariant].component()}
				</div>
			) : (
				<Code>{Badge1[selectedVariant].code}</Code>
			)}
		</div>
	);
}
