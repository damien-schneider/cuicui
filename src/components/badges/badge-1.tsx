import React from "react";

// export default function Badge1() {
// 	return <div>badge-1</div>;
// }

export const Variant1 = {
	name: "Amber",
	component: Variant1Component,
	code: `<div className="inline rounded-md bg-amber-500/15 px-2 py-0.5 text-amber-500 text-sm">
		badge variant 1
	</div>`,
};

export const Variant2 = {
	name: "Red",
	component: Variant2Component,
	code: `<div className="inline rounded-md bg-red-500/15 px-2 py-0.5 text-red-500 text-sm">
		badge variant 2
	</div>`,
};

export function Variant1Component() {
	return (
		<div className="inline rounded-md bg-amber-500/15 px-2 py-0.5 text-amber-500 text-sm">
			badge variant 1
		</div>
	);
}
export function Variant2Component() {
	return (
		<div className="inline rounded-md bg-red-500/15 px-2 py-0.5 text-red-500 text-sm">
			badge variant 2
		</div>
	);
}
const BadgeNameSpace = {
	Variant1,
	Variant2,
};

export { BadgeNameSpace as Badge1 };
