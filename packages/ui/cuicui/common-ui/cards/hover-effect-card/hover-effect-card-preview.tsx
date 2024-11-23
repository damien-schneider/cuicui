import HoverCard from "@/cuicui/common-ui/cards/hover-effect-card/hover-effect-card";

export default function HoverEffectCardPreview() {
  return (
    <div className="App">
      <HoverCard
        className="rounded-xl border border-stone-500/10 bg-stone-400/10 group-hover:border-stone-500/50 group-hover:bg-stone-400/25"
        columns={10}
        containerClassName="h-72 w-56"
        maxXrotation={15}
        maxYrotation={15}
        rows={12}
      >
        <p className="absolute top-4 left-3 z-20 font-semibold text-neutral-500 text-xl leading-4 tracking-tight transition-opacity duration-300 ease-in-out">
          Hover this card
        </p>
        <div className="-bottom-8 absolute font-medium text-neutral-500 text-sm leading-3 tracking-tighter transition-opacity delay-100 duration-300 ease-in-out">
          Stop using JS
          <br />
          when it is not needed
        </div>
      </HoverCard>
    </div>
  );
}
