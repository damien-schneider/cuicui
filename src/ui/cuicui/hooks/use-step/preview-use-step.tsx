"use client";
import { useStep } from "#/src/ui/cuicui/hooks/use-step/use-step";

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
      <button type="button" onClick={goToNextStep}>
        Go to next step
      </button>
      <button type="button" onClick={goToPrevStep}>
        Go to previous step
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          setStep(3);
        }}
      >
        Set to step 3
      </button>
    </>
  );
}
