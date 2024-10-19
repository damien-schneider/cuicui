"use client";

import { CardMouseHighlightingBorder } from "@/src/other/cursors/dynamic-cards/card-mouse-highlighting-border";

export default function DynamicCardsVariant1() {
	return (
		<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
			<CardMouseHighlightingBorder
				content="This is the best library for creating dynamic cards"
				title="CuiCui"
			/>
			<CardMouseHighlightingBorder
				content="How fast is it now to create cards"
				title="Just crazy"
			/>
			<CardMouseHighlightingBorder
				content="I just have to copy paste the code and it instantly works"
				title="Amazing"
			/>
			<CardMouseHighlightingBorder
				content="I can't believe how easy it is to use"
				title="Unbelievable"
			/>
		</div>
	);
}
