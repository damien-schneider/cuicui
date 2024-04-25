import Link from "next/link";
import { CurrentRoute } from "#/app/parallel-routes/_ui/current-route";
import { Boundary } from "#/ui/boundary";

export default function Default() {
	return (
		<Boundary labels={["@audience/default.tsx"]} color="blue" size="small">
			<div className="prose prose-sm prose-invert max-w-none">
				<h2 className="font-bold text-lg">Default UI</h2>

				<p>
					Default UI is rendered because the <code>@audience</code> slot{" "}
					<strong>does not</strong> contain a route segment that matches the
					current{" "}
					<code>
						/<CurrentRoute slice={1} />
					</code>{" "}
					route.
				</p>

				<ul className="text-xs">
					<li>
						<code>
							@audience/
							<CurrentRoute />
							/page.js
						</code>{" "}
						does not exist.
					</li>

					<li>
						<code>@audience/default.js</code> exists.
					</li>
				</ul>

				<div className="not-prose flex">
					<Link
						href="/parallel-routes"
						className="rounded-lg bg-gray-700 px-3 py-1 font-medium text-gray-100 text-sm hover:bg-gray-500 hover:text-white"
					>
						Home
					</Link>
				</div>
			</div>
		</Boundary>
	);
}
