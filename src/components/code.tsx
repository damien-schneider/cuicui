"use client";
import PrismLoader from "./prism-js-loader";

export default function Code({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	//TODO : Add a global state to rerender PrismLoader
	return (
		<div className="flex min-h-96 w-full items-center justify-center rounded-md bg-gray-900">
			<pre className="bg-none">
				<code className="language-ts">{children}</code>
			</pre>
			<PrismLoader />
		</div>
	);
}
