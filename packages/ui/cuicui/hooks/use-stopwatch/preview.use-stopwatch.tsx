"use client";
import { useStopwatch } from "@/cuicui/hooks/use-stopwatch/use-stopwatch";

export function PreviewUseStopwatch() {
	const {
		current,
		isPaused,
		isOver,
		currentDays,
		currentHours,
		currentMinutes,
		currentSeconds,
		elapsedSeconds,
		pause,
		play,
		reset,
		togglePause,
	} = useStopwatch();

	return (
		<div className="cuicui-default-style">
			<p>Counter value: {current}</p>
			<p>Is the counter paused? {isPaused ? "Yes" : "No"}</p>
			<p>Has the counter over? {isOver ? "Yes" : "No"}</p>
			<p>Current days: {currentDays}</p>
			<p>Current hours: {currentHours}</p>
			<p>Current minutes: {currentMinutes}</p>
			<p>Current seconds: {currentSeconds}</p>
			<p>Elapsed seconds: {elapsedSeconds}</p>
			<button type="button" onClick={pause}>
				Pause
			</button>
			<button type="button" onClick={play}>
				Play
			</button>
			<button type="button" onClick={reset}>
				Reset
			</button>
			<button type="button" onClick={togglePause}>
				Toggle Pause
			</button>
		</div>
	);
}
