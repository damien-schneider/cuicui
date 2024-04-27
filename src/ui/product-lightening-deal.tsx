import { add, formatDistanceToNow } from "date-fns";
import type { Dinero } from "dinero.js";
import { ProductDeal } from "#/src/ui/product-deal";

export const ProductLighteningDeal = ({
  price,
  discount,
}: {
  price: Dinero<number>;
  discount: {
    amount: Dinero<number>;
    expires?: number;
  };
}) => {
  const date = add(new Date(), { days: discount.expires });

  return (
    <>
      <div className="flex">
        <div className="rounded bg-gray-600 px-1.5 font-medium text-white text-xs leading-5">
          Expires in {formatDistanceToNow(date)}
        </div>
      </div>

      <ProductDeal price={price} discount={discount} />
    </>
  );
};
