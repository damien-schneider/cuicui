"use client";
import { useInputValue } from "@/src/hooks/use-input-value/use-input-value";

export function PreviewUseInputValue() {
	const name = useInputValue("Cuicui");

	return <input {...name} />;
}
