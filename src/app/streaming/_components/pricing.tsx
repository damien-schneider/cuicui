import { type DineroSnapshot, dinero } from "dinero.js";
import { Suspense } from "react";
import type { Product } from "#/src/app/api/products/product";
import { Ping } from "#/src/ui/ping";
import { ProductEstimatedArrival } from "#/src/ui/product-estimated-arrival";
import { ProductLowStockWarning } from "#/src/ui/product-low-stock-warning";
import { ProductPrice } from "#/src/ui/product-price";
import { ProductSplitPayments } from "#/src/ui/product-split-payments";
import { ProductUsedPrice } from "#/src/ui/product-used-price";
import { AddToCart } from "./add-to-cart";

function LoadingDots() {
	return (
		<div className="text-sm">
			<span className="space-x-0.5">
				<span className="inline-flex animate-[loading_1.4s_ease-in-out_infinite] rounded-full">
					&bull;
				</span>
				<span className="inline-flex animate-[loading_1.4s_ease-in-out_0.2s_infinite] rounded-full">
					&bull;
				</span>
				<span className="inline-flex animate-[loading_1.4s_ease-in-out_0.4s_infinite] rounded-full">
					&bull;
				</span>
			</span>
		</div>
	);
}

async function UserSpecificDetails({ productId }: { productId: string }) {
	const data = await fetch(
		`https://app-playground-api.vercel.app/api/products?id=${productId}&delay=500&filter=price,usedPrice,leadTime,stock`,
		{
			// We intentionally disable Next.js Cache to better demo
			// streaming
			cache: "no-store",
		},
	);

	const product = (await data.json()) as Product;

	const price = dinero(product.price as DineroSnapshot<number>);

	return (
		<>
			<ProductSplitPayments price={price} />
			{product.usedPrice ? (
				<ProductUsedPrice usedPrice={product.usedPrice} />
			) : null}
			<ProductEstimatedArrival leadTime={product.leadTime} hasDeliveryTime />
			{product.stock <= 1 ? (
				<ProductLowStockWarning stock={product.stock} />
			) : null}
		</>
	);
}

export function Pricing({
	product,
	cartCount,
}: {
	product: Product;
	cartCount: string;
}) {
	const price = dinero(product.price as DineroSnapshot<number>);

	return (
		<div className="space-y-4 rounded-lg bg-gray-900 p-3">
			<ProductPrice price={price} discount={product.discount} />

			<div className="relative">
				<div className="-left-4 absolute top-1">
					<Ping />
				</div>
			</div>

			<Suspense fallback={<LoadingDots />}>
				<UserSpecificDetails productId={product.id} />
			</Suspense>

			<AddToCart initialCartCount={Number(cartCount)} />
		</div>
	);
}
