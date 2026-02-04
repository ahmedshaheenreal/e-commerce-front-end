"use client";

import { BASE_API_URL } from "@/CONSTANTS";
import React from "react";
import CartHydrator from "@/providers/CartProvider";
import { CartItemsResponse } from "@/types";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    const response = await fetch(`${BASE_API_URL}/cart`, {
      credentials: "include",
    });

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
