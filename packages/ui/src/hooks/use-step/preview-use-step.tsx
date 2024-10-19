"use client";
import { useStep } from "@/src/hooks/use-step/use-step";

export function PreviewUseStep() {
	const [currentStep, helpers] = useStep(5);

	const {
		canGoToPrevStep,
		canGoToNextStep,
		goToNextStep,
		goToPrevStep,
		reset,
		setStep,
	} = helpers;

	return (
		<>
			<p>Current step is {currentStep}</p>
			<p>Can go to previous step {canGoToPrevStep ? "yes" : "no"}</p>
			<p>Can go to next step {canGoToNextStep ? "yes" : "no"}</p>
			<button onClick={goToNextStep} type="button">
				Go to next step
			</button>
			<button onClick={goToPrevStep} type="button">
				Go to previous step
			</button>
			<button onClick={reset} type="button">
				Reset
			</button>
			<button
				onClick={() => {
					setStep(3);
				}}
				type="button"
			>
				Set to step 3
			</button>
		</>
	);
}
