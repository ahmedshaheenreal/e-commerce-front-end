import React from "react";
import StarRatingReadOnly from "../global/StarRatingReadOnly";
import { Separator } from "../ui/separator";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Minus, Plus, ShoppingBag, Heart } from "lucide-react";
import { Card } from "../ui/card";
import Link from "next/link";
import Offers from "./Offers";
import ActionButtons from "./ActionButtons";
import QuantityCounter from "./QuantityCounter";
import DeliveryDetails from "./DeliveryDetails";
import ProductBasicDetails from "./ProductBasicDetails";
function ProductInfo({
  name,
  price_after_discount,
  averageRating,
  NumberOfRatings,
  price,
  discount_percentage,
}: {
  name: string;
  price_after_discount: number;
  averageRating: number;
  NumberOfRatings: number;
  price: number;
  discount_percentage: number;
}) {
  return (
    <div>
      {/* Product details  */}
      <ProductBasicDetails
        name={name}
        averageRating={averageRating}
        NumberOfRatings={NumberOfRatings}
        price_after_discount={price_after_discount}
        price={price}
        discount_percentage={discount_percentage}
      />
      <Separator className="my-4" />
      {/* delivery details */}
      <DeliveryDetails />
      {/* QuantityCOunter  */}
      <QuantityCounter />
      {/* offers section */}
      <Offers />
      {/* action buttons */}
      <ActionButtons />
    </div>
  );
}

export default ProductInfo;
