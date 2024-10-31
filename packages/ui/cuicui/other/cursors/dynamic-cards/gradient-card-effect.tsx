import { MainMenusGradientCard } from "@/cuicui/other/cursors/dynamic-cards/gradient-card";

export default function DynamicCardsVariant2() {
	return (
		<div className="grid relative p-2 grid-cols-1 w-5/6 gap-2 md:grid-cols-2">
			<MainMenusGradientCard
				className="p-4"
				description="This is the best library for creating dynamic cards"
				title="CuiCui"
			>
				You can also add content inside the card
			</MainMenusGradientCard>
			<MainMenusGradientCard
				className="p-4"
				description="How fast is it now to create cards"
				title="Just crazy"
			>
				If leave the card empty, it will still look good
			</MainMenusGradientCard>
			<MainMenusGradientCard
				description="I just have to copy paste the code and it instantly works"
				title="Amazing"
			/>
			<MainMenusGradientCard
				description="I can't believe how easy it is to use"
				title="Unbelievable"
			/>
		</div>
	);
}
