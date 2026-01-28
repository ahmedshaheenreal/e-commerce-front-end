"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useCartState } from "@/stores/cart.store";
function QuantityCounter({
  quantity,
  cartItemId,
  isProductPage,
}: {
  quantity: number;
  cartItemId: number;
  isProductPage: boolean | undefined;
}) {
  const increment = useCartState((s) => s.incrementItem);
  const decrement = useCartState((s) => s.deccrementItem);

  return (
    <div className={`${!isProductPage && "scale-90"} `}>
      <div
        className={`flex gap-4 quantity-counter items-center ${!isProductPage && "justify-center "}  ${
          isProductPage && "my-6 "
        }`}
      >
        {isProductPage && (
          <h3 className="text-2xl font-semibold text-dark">Quantity: </h3>
        )}
        <div
          className={`counter-buttons flex items-center gap-2  w-fit border ${
            isProductPage ? "border-neutral-300/50" : "border-primary"
          }  rounded-md `}
        >
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="decrease-button  cursor-pointer"
            onClick={() => decrement(cartItemId)}
          >
            <Minus />
          </Button>
          <span
            className={`${
              isProductPage && "text-xl text-dark"
            } font-semibold min-w-5 text-center text-primary`}
          >
            {quantity}
          </span>
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="increase-button cursor-pointer"
            onClick={() => increment(cartItemId)}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuantityCounter;
