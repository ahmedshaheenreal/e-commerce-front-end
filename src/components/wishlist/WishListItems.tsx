import { WishListItemsResponse } from "@/types";
import React from "react";
import ProductCard from "../global/ProductCard";
import { Product } from "@/types";

function WishListItems({
  wishlistItems,
}: {
  wishlistItems: WishListItemsResponse;
}) {
  return (
    <>
      {wishlistItems.products?.map((product: Product) => (
        <ProductCard
          key={product.product_id}
          product={product}
          isHomePage={false}
        />
      ))}
    </>
  );
}

export default WishListItems;
