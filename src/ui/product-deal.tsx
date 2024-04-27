import { type Dinero, toUnit } from "dinero.js";
import { ProductCurrencySymbol } from "#/src/ui/product-currency-symbol";

export const ProductDeal = ({
  price: priceRaw,
  discount: discountRaw,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
  };
}) => {
  const discount = toUnit(discountRaw.amount);
  const price = toUnit(priceRaw);
  const percent = Math.round(100 - (discount / price) * 100);

  return (
    <div className="flex gap-x-1.5">
      <div className="font-bold text-lg text-vercel-cyan leading-snug">
        -{percent}%
      </div>
      <div className="flex">
        <div className="text-sm text-white leading-snug">
          <ProductCurrencySymbol dinero={discountRaw.amount} />
        </div>
        <div className="font-bold text-lg text-white leading-snug">
          {discount}
        </div>
      </div>
      <div className="text-gray-400 text-sm leading-snug line-through">
        <ProductCurrencySymbol dinero={priceRaw} />
        {price}
      </div>
    </div>
  );
};
