"use client";
import { BASE_API_URL } from "@/CONSTANTS";
import { useAuthStore } from "@/stores/auth.store";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { addToWhislist } from "@/lib/actions";
function AddToWishlistButton({
  productId,
  userId,
}: {
  productId: number;
  userId: number;
}) {
  const { isAuthenticated, user } = useAuthStore((s) => s);

  const handleClick = async () => {
    console.log(
      "This is current user: ",
      JSON.stringify({
        userId: userId,
        productId: productId,
      })
    );
    if (!isAuthenticated) {
      toast.error("Please Login");
      return;
    }
    try {
      await addToWhislist({
        userId: userId,
        productId: productId,
      });
      toast.success("Add to wishlist");
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
  };

  return (
    <div>
      <Button
        size={"icon-sm"}
        onClick={handleClick}
        className="hover:cursor-pointer"
      >
        <Heart className="w-4 h-4" fill="red" />
      </Button>
    </div>
  );
}

export default AddToWishlistButton;
