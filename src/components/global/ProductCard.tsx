import React, { Suspense } from "react";
import { Card, CardContent } from "../ui/card";
import { headers } from "next/headers";
import Link from "next/link";
import { Heart } from "lucide-react";
import StarRatingReadOnly from "./StarRatingReadOnly";
import type { ProductCardProps, Product } from "@/types";
import CardSkelaton from "./Skeletons/CardSkelaton";

interface ProductCardComponentProps {
  product: Product | any;
  isHomePage?: boolean;
}
function ProductCard({ product, isHomePage }: ProductCardComponentProps) {
  return (
    <Suspense fallback={<CardSkelaton />}>
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
          {!isHomePage && (
            <div className="ratings">
              <StarRatingReadOnly
                rating={product.averageRating || 0}
                numberOfReviews={product.NumberOfRatings || 0}
              />
            </div>
          )}
          <div className="mt-2 flex items-baseline gap-2">
            {product.price_after_discount && (
              <p className="text-sm font-medium">
                ${product.price_after_discount?.toFixed(2) || "0.00"}
              </p>
            )}
            <p className="text-xs text-gray-500 line-through">
              ${product.price?.toFixed(2) || "0.00"}
            </p>

            <p className="text-base text-[#E21D1D] font-normal">
              {product.discount_percentage
                ? `${product.discount_percentage.toFixed(2)}% OFF`
                : ""}
            </p>
          </div>
        </CardContent>
      </Card>
    </Suspense>
  );
}

export default ProductCard;
