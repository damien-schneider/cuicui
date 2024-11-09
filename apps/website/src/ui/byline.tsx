import Link from "next/link";
import { cn } from "../utils/cn";
import GradientContainer from "./gradient-container";
import {
	ModernGradientContainerContent,
	ModernGradientContainerRoot,
} from "@/cuicui/common-ui/buttons/github-stars/simple-container";

export default function Byline() {
	return (
		<ModernGradientContainerRoot
			className="w-full"
			animationDurationInSeconds={20}
		>
			<ModernGradientContainerContent className="px-4 py-2 flex-col items-start">
				<p className="inline text-neutral-400 text-sm">
					By{" "}
					<Link
						aria-label="Damien Schneider LinkedIn"
						className="inline text-neutral-400 text-sm hover:text-neutral-500 dark:hover:text-neutral-100"
						href="https://www.linkedin.com/in/schneider-damien/"
						rel="noreferrer"
						target="_blank"
						title="Damien Schneider LinkedIn"
					>
						Damien Schneider
					</Link>
				</p>

				<div className="text-neutral-400 text-sm">
					<Link
						aria-label="View my GitHub"
						className="underline decoration-dotted underline-offset-4 transition-colors hover:text-neutral-500 dark:hover:text-neutral-300"
						href={"https://github.com/damien-schneider"}
						rel="noreferrer"
						target="_blank"
						title="View Damien Schneider GitHub profile"
					>
						View my GitHub
					</Link>
				</div>
			</ModernGradientContainerContent>
		</ModernGradientContainerRoot>
	);
}
