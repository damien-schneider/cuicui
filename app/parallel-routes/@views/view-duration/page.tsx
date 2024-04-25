import { Boundary } from "#/ui/boundary";

export default function Page() {
	return (
		<Boundary labels={["@views/view-duration/page.tsx"]} size="small">
			<div className="prose prose-sm prose-invert max-w-none">
				<h2 className="font-bold text-lg">View Duration</h2>
			</div>
		</Boundary>
	);
}
