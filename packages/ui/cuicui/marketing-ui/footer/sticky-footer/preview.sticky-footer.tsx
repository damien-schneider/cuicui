import { StickyFooter } from "./sticky-footer";

export function PreviewStickyFooter() {
	return (
		<div className="w-full">
			<div className="h-[150dvh] w-full">
				<div className="bg-neutral-200 dark:bg-neutral-800  rounded-3xl h-full flex flex-col items-center justify-center">
					<p className="text-xl uppercase text-neutral-950 dark:text-neutral-200 font-medium">
						Some content
					</p>
				</div>
			</div>
			<StickyFooter
				heightValue="100dvh"
				className="text-neutral-900 dark:text-neutral-100"
			>
				<Content />
			</StickyFooter>
		</div>
	);
}

export function Content() {
	return (
		<div className="py-8 px-12 h-full w-full flex flex-col justify-between">
			<div className="grid sm:grid-cols-2 grid-cols-1 shrink-0 gap-20">
				<div className="flex flex-col gap-2">
					<h3 className="mb-2 uppercase text-neutral-500">About</h3>
					<p>Home</p>
					<p>Projects</p>
					<p>Our Mission</p>
					<p>Contact Us</p>
				</div>

				<div className="flex flex-col gap-2">
					<h3 className="mb-2 uppercase text-neutral-500">Education</h3>
					<p>News</p>
					<p>Learn</p>
					<p>Certification</p>
					<p>Publications</p>
				</div>
			</div>

			<div className="flex justify-between flex-col gap-4 sm:flex-row items-end">
				<h1 className="text-[14vw] leading-[0.8] mt-10">Sticky Footer</h1>
				<p>©copyright</p>
			</div>
		</div>
	);
}
