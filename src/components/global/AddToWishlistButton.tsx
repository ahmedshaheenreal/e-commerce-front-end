"use client";
/* @disableReactCompiler */

import { Heart, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { pleaseLoginToast } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Product } from "@/types";
import { useWishList } from "@/stores/wishlist.sstore";
import { useAuthStore } from "@/stores/auth.store";
import { useRouter } from "next/navigation";
function AddToWishlistButton({ product }: { product: Product }) {
  const router = useRouter();
  const wishListItemIds: number[] = useWishList((s) => s.wishListItemIds);

  const isLiked = !!(
    Array.isArray(wishListItemIds) &&
    wishListItemIds.find((id) => id === product.product_id)
  );
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const addToWishList = useWishList((s) => s.addToWishList);
  const deleteFromWishList = useWishList((s) => s.deleteItem);
  console.log("WISHLIST IDS IN BUTTON:", wishListItemIds);
  const pathname = usePathname();

  // console.log("CURRENT PATH FROM BUTTON:", pathname);

  const Icon = pathname.includes("wishlist") ? (
    <Trash2 className="w-4 h-4 text-red-500" />
  ) : isLiked ? (
    <Heart
      key={product.product_id}
      className="w-4 h-4 text-red-500 fill-red-500"
    />
  ) : (
    <Heart
      key={product.product_id + "Unliked"}
      className="w-4 h-4 text-red-500"
    />
  );
  return (
    <div>
      <Button
        size={"icon-sm"}
        onClick={() => {
          if (!isAuthenticated) {
            pleaseLoginToast(router);
            return;
          }
          isLiked
            ? deleteFromWishList(product.product_id)
            : addToWishList(product);
        }}
        variant={"ghost"}
        className="hover:cursor-pointer rounded-full"
      >
        {Icon}
      </Button>
    </div>
  );
}

export default AddToWishlistButton;
