"use client";

import { useState } from "react";
import Offers from "./Offers";
import ActionButtons from "./ActionButtons";
import ProductQuantityCounter from "./ProductQuantityCounter";
import { Product } from "@/types/product";

function ProductActionsSection({ product }: { product: Product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (quantity: number) => {
    setSelectedQuantity(quantity);
  };

  return (
    <>
      {/* Quantity Counter */}
      <ProductQuantityCounter onQuantityChange={handleQuantityChange} />
      {/* offers section */}
      <Offers />
      {/* action buttons */}
      <ActionButtons product={product} quantity={selectedQuantity} />
    </>
  );
}

export default ProductActionsSection;
