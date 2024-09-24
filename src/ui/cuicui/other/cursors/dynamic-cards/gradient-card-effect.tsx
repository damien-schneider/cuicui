import { GradientCard } from "#/src/ui/cuicui/other/cursors/dynamic-cards/gradient-card";

export default function DynamicCardsVariant2() {
  return (
    <div className="relative w-5/6 p-12">
      <div className="grid gap-2 md:grid-cols-2 grid-cols-1">
        <GradientCard
          title="CuiCui"
          description="This is the best library for creating dynamic cards"
          className="p-4"
        >
          You can also add content inside the card
        </GradientCard>
        <GradientCard
          title="Just crazy"
          description="How fast is it now to create cards"
          className="p-4"
        >
          If leave the card empty, it will still look good
        </GradientCard>
        <GradientCard
          title="Amazing"
          description="I just have to copy paste the code and it instantly works"
        />
        <GradientCard
          title="Unbelievable"
          description="I can't believe how easy it is to use"
        />
      </div>
    </div>
  );
}
