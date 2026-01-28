import { Separator } from "../ui/separator";
import ProductActionsSection from "./ProductActionsSection";
import DeliveryDetails from "./DeliveryDetails";
import ProductBasicDetails from "./ProductBasicDetails";
import { Product } from "@/types/product";

function ProductInfo({
  name,
  price_after_discount,
  averageRating,
  NumberOfRatings,
  price,
  discount_percentage,
  product,
}: {
  product: Product;
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
      {/* Quantity Counter, Offers, and Action Buttons */}
      <ProductActionsSection product={product} />
    </div>
  );
}

export default ProductInfo;
