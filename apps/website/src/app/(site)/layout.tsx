import { AddressBar } from "#/src/ui/address-bar";
import StarCuicuiGithubButton from "#/src/ui/star-github-project-button";
import { StaticNoise } from "@/cuicui/other/creative-effects/animated-noise/static-noise";
import type { ReactNode } from "react";
import Sidemenu from "#/src/app/(site)/components/sidemenu/sidemenu";

export default async function ComponentsLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<>
			<div className="mx-auto max-w-(--breakpoint-2xl)">
				{/* Note: The noise effect is experimental and may affect the design. Consider its impact before using it officialy. */}
				<StaticNoise
					opacity={0.05}
					className="z-9999 fixed inset-0 pointer-events-none"
				/>
				<Sidemenu />
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
			{/* <CuicuiFloatingDock /> */}
		</>
	);
}
