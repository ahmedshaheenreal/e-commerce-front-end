"use client";

import { useCartState } from "@/stores/cart.store";

function MobileFooterData() {
  const totalPriceAfterDiscount = useCartState(
    (s) => s.cart.totalPriceAfterDiscount
  );
  const totalPriceBeforeDiscount = useCartState(
    (s) => s.cart.totalPriceBeforeDiscount
  );

  return (
    <div className="mt-6 p-4  sticky bottom-0 bg-white rounded-lg ">
      <div className="flex justify-between items-center">
        <span className="text-sm md:text-base font-medium text-gray-700">
          Total:
        </span>
        <div className="text-right">
          <s className="text-xs text-gray-400 mr-2">
            {totalPriceBeforeDiscount?.toFixed(2)}
          </s>
          <span className="text-lg md:text-xl font-semibold text-primary">
            {totalPriceAfterDiscount?.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MobileFooterData;
