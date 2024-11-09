import { DesktopSideMenu } from "#/src/components/navigation/desktop-menu";

import { AddressBar } from "#/src/ui/address-bar";
import StarCuicuiGithubButton from "#/src/ui/star-github-project-button";
import type React from "react";

export default function ComponentsLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="mx-auto max-w-screen-2xl">
			<DesktopSideMenu />

			<div className="lg:ml-80">
				{/* Add overflow-auto if layout width problems */}

				<AddressBar />

				<main className=" p-4 pt-12 md:p-6">
					<div className="space-y-10 pb-20">{children}</div>
				</main>

				<div className="flex sm:hidden fixed bottom-6 left-2">
					<StarCuicuiGithubButton />
				</div>
			</div>
		</div>
	);
}
