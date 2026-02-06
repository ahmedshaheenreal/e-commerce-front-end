"use client";

import { useEffect } from "react";
import { useCartState } from "@/stores/cart.store";
import { CartItemsResponse } from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";

type Props = {
  children: React.ReactNode;
  initialCart: CartItemsResponse | null; // Accept initial cart data as a prop
};

export default function CartHydrator({ initialCart, children }: Props) {
  const setCart = useCartState((s) => s.setCart);

  useEffect(() => {
    // Hydrate store with server data on mount
    if (initialCart) {
      setCart(initialCart);
      return;
    }

    // Otherwise fetch cart client-side if authenticated
    const fetchCart = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/cart`, {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const cart: CartItemsResponse = await response.json();
          setCart(cart);
        }
      } catch (error) {
        console.log("Failed to fetch cart", error);
      }
    };

    fetchCart();
  }, []); // Empty deps - only run once on mount

  return <>{children}</>;
}
