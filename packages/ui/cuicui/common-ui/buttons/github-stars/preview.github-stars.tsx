"use client";
import { GithubStarsButton } from "@/cuicui/common-ui/buttons/github-stars/component.github-stars";
import { sleep } from "@/cuicui/utils/sleep/sleep";
import { CUICUI_GITHUB_URL } from "@/lib/site.const";

import { useEffect, useState } from "react";

export default function PreviewGithubStars() {
	const [stars, setStars] = useState(0);

	useEffect(() => {
		sleep(1000).then(() => {
			setStars(1024);
		});
	}, []);

	return (
		<GithubStarsButton href={CUICUI_GITHUB_URL} starNumber={stars}>
			Star Cuicui on GitHub
		</GithubStarsButton>
	);
}
