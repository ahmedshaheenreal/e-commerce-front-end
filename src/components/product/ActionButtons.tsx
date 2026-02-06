"use client";

import { Button } from "../ui/button";
import { ShoppingBag, Heart } from "lucide-react";
import { useWishList } from "@/stores/wishlist.sstore";
import { Product } from "@/types";
import { useCartState } from "@/stores/cart.store";
import { useAuthStore } from "@/stores/auth.store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { pleaseLoginToast } from "@/lib/utils";
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
  const router = useRouter();

  return (
    <div className="flex gap-4 lg:pr-10">
      <Button
        className="add-to-cart-button grow cursor-pointer"
        onClick={() => {
          if (!isAuthenticated) {
            pleaseLoginToast(router);
            return;
          } else addToCart(product.product_id, quantity);
        }}
      >
        <ShoppingBag className="mr-2" /> Add to Cart
      </Button>
      <Button
        className="add-to-wish grow cursor-pointer"
        onClick={() => {
          if (!isAuthenticated) {
            pleaseLoginToast(router);
            return;
          } else addToWishList(product);
        }}
        variant={"outline"}
      >
        <Heart className="mr-2" /> Add to Wishlist
      </Button>
    </div>
  );
}

export default ActionButtons;
