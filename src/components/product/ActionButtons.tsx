import React from "react";
import { Button } from "../ui/button";
import { ShoppingBag, Heart } from "lucide-react";
function ActionButtons() {
  return (
    <div className="flex gap-4 lg:pr-10">
      <Button className="add-to-cart-button grow cursor-pointer">
        <ShoppingBag className="mr-2" /> Add to Cart
      </Button>
      <Button className="add-to-wish grow cursor-pointer" variant={"outline"}>
        <Heart className="mr-2" /> Add to Wishlist
      </Button>
    </div>
  );
}

export default ActionButtons;
