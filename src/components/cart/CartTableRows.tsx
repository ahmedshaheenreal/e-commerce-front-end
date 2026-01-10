"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { TableRow, TableCell } from "@/components/ui/table";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { useCartState } from "@/stores/cart.store";
import QuantityCounter from "../product/QuantityCounter";
function CartTableRows() {
  const cart = useCartState((s) => s.cart);
  return (
    <>
      {cart?.cartItems?.map((item, i) => (
        <TableRow className="py-2" key={i}>
          <TableCell className="lg:max-w-50 truncate">
            <Link
              className=" font-medium flex flex-col lg:flex-row gap-4 items-center justify-center min-w-fit max-w-full "
              href={`/product/${item.product_id}`}
            >
              <Image
                alt={`Product Name: ${item.product.name}`}
                src={item.product.product_image_url || ""}
                height={40}
                width={40}
                className="object-cover rounded-sm h-12 w-12"
              />
              {item.product.name + "456654654654654"}
            </Link>
          </TableCell>
          <TableCell>
            <s>{item.product.price}</s>{" "}
            <strong>{item.product.price_after_discount}</strong>
          </TableCell>
          <TableCell className="text-center p-0">
            <QuantityCounter
              cartItemId={item.cartItem_id}
              quantity={item.quantity}
              isProductPage={false}
            />

            <Button
              variant={"link"}
              className="text-primary underline cursor-pointer px-0"
            >
              Move to wishlist
            </Button>
          </TableCell>
          <TableCell className="text-right">
            {((item.product.price_after_discount || 1) * item.quantity).toFixed(
              2
            )}
            <RemoveFromCartButton id={item.cartItem_id} />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default CartTableRows;
