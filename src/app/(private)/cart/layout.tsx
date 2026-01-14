import { BASE_API_URL } from "@/CONSTANTS";
import { cookies } from "next/headers";
import React from "react";
import CartHydrator from "@/providers/CartProvider";
import { CartItemsResponse } from "@/types";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/cart`, {
      headers: {
        cookie: cookieStore.toString(),
      },
    });

    console.log(cookieStore.toString());
    const cart: CartItemsResponse = await response.json();
    return (
      <>
        <CartHydrator initialCart={cart || null} />
        {children}
      </>
    );
  } catch (error) {}
}

export default layout;
