"use client";
import { useCallback, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

type UseStepActions = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: Dispatch<SetStateAction<number>>;
};

type SetStepCallbackType = (step: number | ((step: number) => number)) => void;

export function useStep(maxStep: number): [number, UseStepActions] {
  const [currentStep, setCurrentStep] = useState(1);

  const canGoToNextStep = currentStep + 1 <= maxStep;
  const canGoToPrevStep = currentStep - 1 > 0;

  const setStep = useCallback<SetStepCallbackType>(
    (step) => {
      // Allow value to be a function so we have the same API as useState
      const newStep = step instanceof Function ? step(currentStep) : step;

      if (newStep >= 1 && newStep <= maxStep) {
        setCurrentStep(newStep);
        return;
      }

      throw new Error("Step not valid");
    },
    [maxStep, currentStep],
  );

  const goToNextStep = useCallback(() => {
    if (canGoToNextStep) {
      setCurrentStep((step) => step + 1);
    }
  }, [canGoToNextStep]);

  const goToPrevStep = useCallback(() => {
    if (canGoToPrevStep) {
      setCurrentStep((step) => step - 1);
    }
  }, [canGoToPrevStep]);

  const reset = useCallback(() => {
    setCurrentStep(1);
  }, []);

  return [
    currentStep,
    {
      goToNextStep,
      goToPrevStep,
      canGoToNextStep,
      canGoToPrevStep,
      setStep,
      reset,
    },
  ];
}
