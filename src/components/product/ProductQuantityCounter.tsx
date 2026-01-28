"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

function ProductQuantityCounter({
  onQuantityChange,
}: {
  onQuantityChange?: (quantity: number) => void;
}) {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange?.(newQuantity);
  };

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    }
  };

  return (
    <div className="my-6">
      <div className="flex gap-4 quantity-counter items-center">
        <h3 className="text-2xl font-semibold text-dark">Quantity: </h3>
        <div className="counter-buttons flex items-center gap-2 w-fit border border-neutral-300/50 rounded-md">
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="decrease-button cursor-pointer"
            onClick={decrement}
          >
            <Minus />
          </Button>
          <span className="text-xl text-dark font-semibold min-w-5 text-center text-primary">
            {quantity}
          </span>
          <Button
            variant={"ghost"}
            size={"icon-sm"}
            className="increase-button cursor-pointer"
            onClick={increment}
          >
            <Plus />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductQuantityCounter;
