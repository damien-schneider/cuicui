"use client";
import { BeforeEffectButton } from "#/src/ui/cuicui/common-ui/buttons/before-effect-button/before-effect-button";
import { useCounter } from "#/src/ui/cuicui/hooks/use-counter/hook/use-counter";

export default function PreviewUseCounter() {
  const [count, { increment, decrement, set, reset }] = useCounter(6, {
    min: 5,
    max: 10,
  });

  return (
    <section>
      <h4 className="text-lg font-medium text-neutral-500">UseCounter</h4>
      <p className="text-sm tracking-tighter font-medium text-neutral-500">
        with optional min / max
      </p>
      <div className="mt-4 mb-4 border border-neutral-500/20 rounded-lg p-px">
        <BeforeEffectButton
          type="button"
          disabled={count >= 10}
          className="link"
          onClick={increment}
        >
          Increment
        </BeforeEffectButton>
        <BeforeEffectButton
          type="button"
          disabled={count <= 5}
          className="link"
          onClick={decrement}
        >
          Decrement
        </BeforeEffectButton>
        <BeforeEffectButton
          type="button"
          className="link"
          onClick={() => set(7)}
        >
          Set to 7
        </BeforeEffectButton>
        <BeforeEffectButton type="button" className="link" onClick={reset}>
          Reset
        </BeforeEffectButton>
      </div>
      <p className="font-bold text-neutral-500 text-7xl mx-auto w-fit">
        {count}
      </p>
    </section>
  );
}
