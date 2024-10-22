import TableOfContent from "@/cuicui/application-ui/table-of-contents/modul-inspired/following-headers";

export default function TableOfContentPreview() {
	return (
		<div className="relative flex w-full flex-col gap-8 md:flex-row">
			<TableOfContent
				className="w-full rounded-lg p-2 md:w-72"
				idOfParentContainer="parent-content"
			/>
			<div className="w-full">
				<p className="mb-2 text-neutral-500 text-xs">
					Scroll the section below
				</p>
				<div
					className="h-96 w-full space-y-20 overflow-scroll rounded-xl bg-neutral-500/10 p-8"
					id="parent-content"
				>
					<h1>Table of content preview</h1>
					<LoremIpsum />
					<h2>Here is the first h2</h2>
					<LoremIpsum />
					<h3>Here is the first h3</h3>
					<LoremIpsum />
					<h3>Here is the second h3</h3>
					<LoremIpsum />
					<h2>Here is the second h2</h2>
					<LoremIpsum />
					<h3>Here is the third h3</h3>
					<LoremIpsum />
					<h3>Here is the fourth h3</h3>
					<LoremIpsum />
					<h2>Here is the third h2</h2>
					<LoremIpsum />
					<h3>Here is the fifth h3</h3>
					<LoremIpsum />
					<h3>Here is the sixth h3</h3>
					<LoremIpsum />
				</div>
			</div>
		</div>
	);
}

const LoremIpsum = () => {
	return (
		<p>
			Commodo labore ullamco excepteur. Labore sunt dolore velit et consectetur
			proident minim minim occaecat. Id sit adipisicing aliqua proident nisi
			mollit aute. Duis in dolore incididunt ea. Quis quis in do quis laboris
			veniam ex irure consectetur incididunt in. Est ipsum in nostrud anim ut
			exercitation. Deserunt in consequat Lorem. Id magna culpa anim anim quis
			tempor reprehenderit enim ex fugiat veniam aliqua. Commodo proident
			laboris aute qui. Fugiat non ullamco nulla sunt officia eu cupidatat sit
			id qui id. Aliquip anim elit eu occaecat id pariatur irure labore
			cupidatat aliqua aliquip sunt commodo incididunt officia. Id ea elit
			labore sunt Lorem culpa exercitation. Deserunt pariatur enim in. Aliquip
			fugiat irure labore in consequat ex consequat et esse cupidatat aute in
			esse.
		</p>
	);
};
