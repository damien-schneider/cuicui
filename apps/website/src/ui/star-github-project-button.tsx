export const dynamic = "force-static";
import { GithubIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import { CUICUI_GITHUB_URL } from "../lib/site.const";
import GradientContainer from "./gradient-container";
import { GithubAnimatedStarNumber } from "#/src/ui/github-animated-star-number";
import { GithubStarsButton } from "@/cuicui/common-ui/buttons/github-stars/component.github-stars";

export default async function StarGithubProjectButton({
	className,
}: Readonly<{ className?: string }>) {
	const apiGithub = "https://api.github.com/repos/damien-schneider/cuicui";

	const githubRepoData = await fetch(apiGithub).then((res) => res.json());
	const numberOfStars = githubRepoData.stargazers_count;

	return (
		<GithubStarsButton
			className="inline-flex w-full h-fit"
			href={CUICUI_GITHUB_URL}
			starNumber={numberOfStars ?? 0}
		>
			Star Cuicui on GitHub
		</GithubStarsButton>
		// <Link href={CUICUI_GITHUB_URL} title="Star Cuicui on GitHub">
		// 	<GradientContainer
		// 		classNameChild="group-hover:opacity-80 transition-opacity duration-150 ease-in-out pl-4 py-2 flex gap-2 items-center text-sm text-neutral-500 font-medium relative"
		// 		classNameParent="group"
		// 		rounded="sm"
		// 	>
		// 		<GithubIcon className="size-5 fill-neutral-300 stroke-neutral-400 dark:fill-neutral-600 dark:stroke-neutral-500" />
		// 		<span className="md:inline hidden">Star this project on GitHub</span>
		// 		{await getGithubStarCountComponent()}
		// 	</GradientContainer>
		// </Link>
	);
}

const getGithubStarCountComponent = async () => {
	const apiGithub = "https://api.github.com/repos/damien-schneider/cuicui";

	try {
		const githubRepoData = await fetch(apiGithub).then((res) => res.json());
		const numberOfStars = githubRepoData.stargazers_count;
		return (
			<div className="flex items-center gap-0.5 w-16">
				<StarIcon className="size-4 fill-neutral-300 stroke-neutral-400 dark:fill-neutral-600 dark:stroke-neutral-500" />
				<GithubAnimatedStarNumber value={numberOfStars} />
			</div>
		);
	} catch (error) {
		console.error(error);
		return null;
	}
};
