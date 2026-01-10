"use client";
import { Button } from "../ui/button";
import { useCartState } from "@/stores/cart.store";

function OrderSummery() {
  const { totalPriceAfterDiscount, totalPriceBeforeDiscount } = useCartState(
    (s) => s.cart
  );

  return (
    <div className="w-80 text-base mb-4 px-1 lg:px-0 ">
      <header>
        <h3 className="font-bold py-2 border-b border-b-light0text">
          Order Summery
        </h3>
      </header>
      <div className="flex justify-between py-1">
        <p className="text-low-emphasis">Subtotal</p>{" "}
        <span className="font-medium text-dark">
          {"$" + totalPriceBeforeDiscount?.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between py-1">
        <p className="text-low-emphasis">Discount</p>{" "}
        <span className="font-medium text-dark">
          {`$${(totalPriceBeforeDiscount - totalPriceAfterDiscount).toFixed(
            2
          )}`}
        </span>
      </div>
      <div className="flex justify-between py-1">
        <p className="text-low-emphasis">Delivery Fee</p>{" "}
        <span className="font-medium text-dark">$0</span>
      </div>
      <div className="flex justify-between py-1">
        <p className="text-low-emphasis">Grand Total</p>{" "}
        <span className="font-medium text-dark">
          {"$" + totalPriceAfterDiscount?.toFixed(2)}
        </span>
      </div>
      <footer className="flex justify-between gap-4 py-1">
        <Button size={"lg"} className="grow  cursor-pointer">
          Place Order
        </Button>
        <Button className="grow cursor-pointer" size={"lg"} variant={"outline"}>
          Continue shopping
        </Button>
      </footer>
    </div>
  );
}

export default OrderSummery;
