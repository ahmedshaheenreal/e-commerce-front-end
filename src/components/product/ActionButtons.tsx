"use client";

import { Button } from "../ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { useWishList } from "@/stores/wishlist.sstore";
import { Product } from "@/types";
import { useCartState } from "@/stores/cart.store";
import { useAuthStore } from "@/stores/auth.store";

function ActionButtons({
  product,
  quantity = 1,
}: {
  product: Product;
  quantity?: number;
}) {
  const addToWishList = useWishList((s) => s.addToWishList);
  const addToCart = useCartState((s) => s.addToCart);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

  return (
    <div className="flex gap-4 lg:pr-10">
      <Button
        className="add-to-cart-button grow cursor-pointer"
        onClick={() => addToCart(product.product_id, quantity)}
      >
        <ShoppingBag className="mr-2" /> Add to Cart
      </Button>
      <Button
        className="add-to-wish grow cursor-pointer"
        onClick={() => addToWishList(product)}
        variant={"outline"}
      >
        <Heart className="mr-2" /> Add to Wishlist
      </Button>
    </div>
  );
}

export default ActionButtons;
