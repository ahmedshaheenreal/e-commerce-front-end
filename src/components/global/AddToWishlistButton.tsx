"use client";
import { BASE_API_URL } from "@/CONSTANTS";
import { useAuthStore } from "@/stores/auth.store";
import { Heart, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useState } from "react";
import { addToWhislist } from "@/lib/actions";
import { usePrivateRouteState } from "@/stores/privatelayout.store";
import { error } from "console";
import { usePathname } from "next/navigation";
function AddToWishlistButton({ productId }: { productId: number }) {
  const { isAuthenticated, user } = useAuthStore((s) => s);
  const isWishlist = usePrivateRouteState((s) =>
    s.privateRoutes.find(
      (e) => e.path.includes("wishlist") && e.isActive === true,
    ),
  );
  const path = usePathname();

  console.log("CURRENT PATH FROM BUTTON:", path);
  const [isLiked, setIsLiked] = useState(!!isWishlist);
  const handleLike = async () => {
    if (!isAuthenticated) {
      toast.error("Please Login");
      return;
    }
    try {
      // await addToWhislist({
      //   userId: userId,
      //   productId: productId,
      // });

      const res = await fetch(`${BASE_API_URL}/wishlist`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ productId: Number(productId) }),
        headers: {
          "content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw data;

      setIsLiked(true);
      toast.success("Added to wishlist");
    } catch (err: any) {
      console.log(err);
      toast.error(
        err?.message || "Unable to complete request, try again later.",
      );
    }
  };
  const handleDelete = async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/wishlist/${productId}`, {
        credentials: "include",
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        throw data;
      }
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message || "Error deleting item from wishlist");
    }
  };
  const handleClick = path.includes("wishlist") ? handleDelete : handleLike;
  const Icon = path.includes("wishlist") ? (
    <Trash2 className="w-4 h-4 text-red-500" />
  ) : (
    <Heart
      className="w-4 h-4 text-red-500"
      fill={isLiked ? "red" : "transparent"}
    />
  );
  return (
    <div>
      <Button
        size={"icon-sm"}
        onClick={handleClick}
        variant={"ghost"}
        className="hover:cursor-pointer rounded-full"
      >
        {Icon}
      </Button>
    </div>
  );
}

export default AddToWishlistButton;
