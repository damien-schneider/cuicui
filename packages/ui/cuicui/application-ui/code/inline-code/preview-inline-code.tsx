import { InlineCode } from "@/cuicui/application-ui/code/inline-code/inline-code";

export const PreviewInlineCode = () => {
	return (
		<p className="max-w-48 text-neutral-500 tracking-tight dark:text-neutral-400">
			This is an example of a code found on <InlineCode>cuicui.day</InlineCode>{" "}
			which you can simply copy component and paste it in your project.
		</p>
	);
};
