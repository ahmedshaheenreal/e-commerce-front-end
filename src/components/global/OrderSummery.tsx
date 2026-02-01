"use client";
import { BASE_API_URL } from "@/CONSTANTS";
import { Button } from "../ui/button";
import { useCartState } from "@/stores/cart.store";
import Link from "next/link";
function OrderSummery() {
  const { totalPriceAfterDiscount, totalPriceBeforeDiscount } = useCartState(
    (s) => s.cart,
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
            2,
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
        <Button
          size={"lg"}
          className="grow  cursor-pointer"
          onClick={async () => {
            // Add your place order logic here
            try {
              console.log("Placing order...");
              const res = await fetch(`${BASE_API_URL}/checkout-payment`, {
                method: "POST",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              console.log("Response received from server");
              const data = await res.json();
              if (data.url) {
                window.location.href = data.url; // Redirect to the payment URL
              }

              console.log("Order placed successfully");
            } catch (error) {
              console.error("Error placing order:", error);
            }
          }}
        >
          Place Order
        </Button>
        <Link href="/" className="grow  cursor-pointer">
          <Button size={"lg"} variant={"outline"} className="w-full">
            Continue shopping
          </Button>
        </Link>
      </footer>
    </div>
  );
}

export default OrderSummery;
