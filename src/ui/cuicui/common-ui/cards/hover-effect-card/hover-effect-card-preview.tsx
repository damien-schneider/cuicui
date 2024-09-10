import HoverCard from "#/src/ui/cuicui/common-ui/cards/hover-effect-card/hover-effect-card";

export default function HoverEffectCardPreview() {
  return (
    <div className="App">
      <HoverCard
        columns={10}
        rows={12}
        maxXRotation={15}
        maxYRotation={15}
        containerClassName="h-72 w-56"
        className="border border-stone-500/10 group-hover:border-stone-500/50 rounded-xl bg-stone-400/10 group-hover:bg-stone-400/25"
      >
        <p className="absolute top-4 left-3 z-20 text-xl font-semibold tracking-tight text-neutral-500 leading-4 transition-opacity duration-300 ease-in-out">
          Hover this card
        </p>
        <div className="absolute text-sm  font-medium tracking-tighter -bottom-8 leading-3 text-neutral-500 transition-opacity duration-300 ease-in-out delay-100">
          Stop using JS
          <br />
          when it is not needed
        </div>
      </HoverCard>
    </div>
  );
}
