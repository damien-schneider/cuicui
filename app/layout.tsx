import "#/styles/globals.css";
import { AddressBar } from "#/ui/address-bar";
import Byline from "#/ui/byline";
import { GlobalNav } from "#/ui/global-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "CuiCui | Modern UI copy paste library",
		template: "%s | CuiCui",
	},
	description:
		"CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
	openGraph: {
		title: "CuiCui | Modern UI copy paste library",
		description:
			"CuiCui is a modern UI copy paste library that helps you build beautiful websites and applications.",
		images: [`/api/og?title=CuiCui modern UI copy paste library`],
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="[color-scheme:dark]">
			<body className="overflow-y-scroll bg-[url('/grid.svg')] bg-gray-1100 pb-36">
				<GlobalNav />

				<div className="lg:pl-72">
					<div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
						<div className="rounded-lg bg-vc-border-gradient p-px shadow-black/20 shadow-lg">
							<div className="rounded-lg bg-black">
								<AddressBar />
							</div>
						</div>

						<div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
							<div className="rounded-lg bg-black p-3.5 lg:p-6">{children}</div>
						</div>
						<Byline className="fixed sm:hidden" />
					</div>
				</div>
			</body>
		</html>
	);
}
