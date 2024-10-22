"use client";
import { useGeolocation } from "@/cuicui/hooks/use-geolocation/use-geolocation";

export function PreviewUseGeolocation() {
	const state = useGeolocation();

	return <pre>{JSON.stringify(state, null, 2)}</pre>;
}
