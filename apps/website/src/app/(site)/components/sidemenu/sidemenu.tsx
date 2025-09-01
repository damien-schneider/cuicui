import MobileSidemenu from "#/src/app/(site)/components/sidemenu/mobile-sidemenu";
import { SidemenuContent } from "#/src/app/(site)/components/sidemenu/sidemenu-content";

export default function Sidemenu() {
	return (
		<>
			<div className="hidden lg:block">
				<SidemenuContent className="-translate-y-1/2 fixed top-1/2 z-50 h-full max-h-dvh w-80 flex-col items-center justify-between p-3 flex" />
			</div>
			<div className="block lg:hidden">
				<MobileSidemenu />
			</div>
		</>
	);
}
