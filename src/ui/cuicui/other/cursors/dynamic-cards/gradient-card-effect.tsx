import { GradientCard } from "#/src/ui/cuicui/other/cursors/dynamic-cards/gradient-card";

export default function DynamicCardsVariant2() {
  return (
    <div className="relative w-5/6 p-12">
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
        <GradientCard
          className="p-4"
          description="This is the best library for creating dynamic cards"
          title="CuiCui"
        >
          You can also add content inside the card
        </GradientCard>
        <GradientCard
          className="p-4"
          description="How fast is it now to create cards"
          title="Just crazy"
        >
          If leave the card empty, it will still look good
        </GradientCard>
        <GradientCard
          description="I just have to copy paste the code and it instantly works"
          title="Amazing"
        />
        <GradientCard
          description="I can't believe how easy it is to use"
          title="Unbelievable"
        />
      </div>
    </div>
  );
}
