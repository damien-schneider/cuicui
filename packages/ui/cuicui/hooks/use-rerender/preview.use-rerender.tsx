"use client";
import useRerender from "@/cuicui/hooks/use-rerender/use-rerender";

export const PreviewUseRerender = () => {
	const update = useRerender();
	return (
		<div className="cuicui-default-style">
			<p>Time: {Date.now()}</p>
			<button type="button" onClick={update}>
				Update
			</button>
		</div>
	);
};
