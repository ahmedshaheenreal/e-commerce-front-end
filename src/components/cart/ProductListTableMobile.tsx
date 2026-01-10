"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartState } from "@/stores/cart.store";
import QuantityCounter from "../product/QuantityCounter";
import RemoveFromCartButton from "./RemoveFromCartButton";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function ProductListTableMobile() {
  const cart = useCartState((s) => s.cart);

  return (
    <div className="space-y-4 w-full">
      {cart?.cartItems?.map((item, i) => (
        <Card key={i} className="border border-primary/75 rounded-lg shadow-sm">
          <CardContent className="p-4">
            {/* Product Image and Name */}
            <div className="flex gap-4 mb-4 items-center">
              <Image
                alt={`Product Name: ${item.product.name}`}
                src={item.product.product_image_url || ""}
                height={60}
                width={60}
                className="object-cover rounded-md h-20 w-20 shrink-0"
              />
              <div className="flex-1 min-w-0">
                <Link
                  href={`/product/${item.product_id}`}
                  className="font-semibold text-sm md:text-base truncate text-primary transition-colors block"
                >
                  {item.product.name}
                </Link>
              </div>
            </div>

            {/* Price Section */}
            <div className="flex justify-between items-center mb-4 pb-4 border-b">
              <span className="text-sm text-gray-600">Price:</span>
              <div className="text-right">
                <s className="text-xs text-gray-400 mr-2">
                  {item.product.price}
                </s>
                <strong className="text-sm md:text-base">
                  {item.product.price_after_discount}
                </strong>
              </div>
            </div>

            {/* Quantity Section */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">Quantity:</span>
              <QuantityCounter
                cartItemId={item.cartItem_id}
                quantity={item.quantity}
                isProductPage={false}
              />
            </div>

            {/* Subtotal Section */}
            <div className="flex justify-between items-center pt-4 border-t font-semibold">
              <span className="text-sm">Subtotal:</span>
              <span className="text-base md:text-lg">
                {(
                  (item.product.price_after_discount || 1) * item.quantity
                ).toFixed(2)}
              </span>
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0 flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              Move to wishlist
            </Button>
            <RemoveFromCartButton id={item.cartItem_id} />
          </CardFooter>
        </Card>
      ))}

      {!cart?.cartItems ||
        (cart.cartItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ))}
    </div>
  );
}

export default ProductListTableMobile;
