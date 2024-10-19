"use client";
import { useOnlineStatus } from "@/src/hooks/use-online-status/use-online-status";

export function PreviewUseOnlineStatus() {
	const onlineStatus = useOnlineStatus();
	return (
		<div>
			<p>You are {onlineStatus ? "Online" : "Offline"}</p>
		</div>
	);
}
