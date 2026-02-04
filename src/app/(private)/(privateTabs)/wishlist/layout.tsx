"use client";
import { BASE_API_URL } from "@/CONSTANTS";

import { WishListItemsResponse } from "@/types";
import WishlistHydrator from "@/providers/WishlistHydrator";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    const response = await fetch(`${BASE_API_URL}/wishlist`, {
      credentials: "include",
    });

    const wishlist: WishListItemsResponse = await response.json();
    return (
      <>
        <WishlistHydrator initialWishlist={wishlist || null} />
        {children}
      </>
    );
  } catch (error) {}
}

export default layout;
