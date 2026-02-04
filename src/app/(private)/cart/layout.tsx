import { BASE_API_URL } from "@/CONSTANTS";
import React from "react";
import CartHydrator from "@/providers/CartProvider";
import { CartItemsResponse } from "@/types";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    return (
      <>
        <CartHydrator initialCart={null} />
        {children}
      </>
    );
  } catch (error) {}
}

export default layout;
