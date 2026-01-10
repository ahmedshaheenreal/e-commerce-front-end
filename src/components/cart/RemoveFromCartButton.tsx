"use client";
import { Button } from "../ui/button";
import { useCartState } from "@/stores/cart.store";
function RemoveFromCartButton({ id }: { id: number }) {
  const deleteItem = useCartState((state) => state.deleteFromCart);
  const handleDelete = (id: number) => {
    deleteItem(id);
  };
  return (
    <div>
      <Button
        onClick={() => handleDelete(id)}
        variant={"link"}
        className="text-error underline p-0 cursor-pointer"
      >
        Remove
      </Button>
    </div>
  );
}

export default RemoveFromCartButton;
