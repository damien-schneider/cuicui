import { SkeletonCard } from "#/src/ui/skeleton-card";
export default function Loading() {
	return (
		<div className="space-y-4">
			<h1 className="font-medium text-gray-400/80 text-xl">Loading...</h1>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
				<SkeletonCard isLoading={true} />
				<SkeletonCard isLoading={true} />
				<SkeletonCard isLoading={true} />
				<SkeletonCard isLoading={true} />
				<SkeletonCard isLoading={true} />
				<SkeletonCard isLoading={true} />
			</div>
		</div>
	);
}
