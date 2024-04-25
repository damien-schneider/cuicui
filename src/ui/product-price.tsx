import { type Dinero, multiply, toUnit } from "dinero.js";
import type { Product } from "#/src/app/api/products/product";
import { ProductCurrencySymbol } from "#/src/ui/product-currency-symbol";
import { ProductDeal } from "#/src/ui/product-deal";
import { ProductLighteningDeal } from "#/src/ui/product-lightening-deal";

function isDiscount(obj: any): obj is { percent: number; expires?: number } {
	return typeof obj?.percent === "number";
}

function formatDiscount(
	price: Dinero<number>,
	discountRaw: Product["discount"],
) {
	return isDiscount(discountRaw)
		? {
				amount: multiply(price, {
					amount: discountRaw.percent,
					scale: 2,
				}),
				expires: discountRaw.expires,
			}
		: undefined;
}

export const ProductPrice = ({
	price,
	discount: discountRaw,
}: {
	price: Dinero<number>;
	discount: Product["discount"];
}) => {
	const discount = formatDiscount(price, discountRaw);

	if (discount) {
		if (discount?.expires && typeof discount.expires === "number") {
			return <ProductLighteningDeal price={price} discount={discount} />;
		}
		return <ProductDeal price={price} discount={discount} />;
	}

	return (
		<div className="flex">
			<div className="text-sm text-white leading-snug">
				<ProductCurrencySymbol dinero={price} />
			</div>
			<div className="font-bold text-lg text-white leading-snug">
				{toUnit(price)}
			</div>
		</div>
	);
};
