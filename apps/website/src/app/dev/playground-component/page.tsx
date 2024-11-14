import Playground from "#/src/app/dev/playground-component/playground";
import type { Metadata } from "next";

export const metadata: Metadata = {
	referrer: "no-referrer",
	robots: "noindex, nofollow",
};

export default function PageGeneratePreviewImages() {
	if (process.env.NODE_ENV === "production") {
		return null;
	}

	return <Playground />;
}
