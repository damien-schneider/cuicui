import { Boundary } from "#/ui/boundary";

export default function Page() {
	return (
		<Boundary labels={["@audience/subscribers/page.tsx"]} size="small">
			<div className="prose prose-sm prose-invert max-w-none">
				<h2 className="font-bold text-lg">Subscribers</h2>
			</div>
		</Boundary>
	);
}
