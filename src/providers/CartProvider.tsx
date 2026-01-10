"use client";

import { useEffect } from "react";
import { useCartState } from "@/stores/cart.store";
import { CartItemsResponse } from "@/types";

type Props = {
  children: React.ReactNode;
  initialCart: CartItemsResponse | null;
};

export default function CartHydrator({ children, initialCart }: Props) {
  const setCart = useCartState((s) => s.setCart);

  useEffect(() => {
    // Hydrate store with server data on mount
    if (initialCart) {
      setCart(initialCart);
    }
  }, []); // Empty deps - only run once on mount

  return <>{children}</>;
}
