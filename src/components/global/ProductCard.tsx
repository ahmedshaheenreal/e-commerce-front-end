import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

function ProductCard({
  product = {
    product_id: 281,
    name: "Luxurious Plastic Chicken",
    price: 375.59,
    brand_name: "Romaguera LLC",
    discount_percentage: 21.2419,
    product_image_url: "https://placehold.co/600x400/png",
    price_after_discount: 295.81,
  },
}: {
  product: any;
}) {
  return (
    <Card className="border-none pt-0 hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div>
        <Link href={`/product/${product.product_id}`}>
          <img
            src={
              product.product_image_url || "https://placehold.co/600x400/png"
            }
            alt="Product Photo"
            className="object-cover h-50 mx-auto w-full"
          />
        </Link>
      </div>
      <CardContent>
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold">
            {product.name || "No name"}
          </h2>
          <div className="lik">
            <Heart className="w-4 h-4" fill="red" />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          {product.brand_name || "No brand"}
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-sm font-medium">
            ${product.price_after_discount.toFixed(2) || "0.00"}
          </p>
          <p className="text-xs text-gray-500 line-through">
            ${product.price.toFixed(2) || "0.00"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
