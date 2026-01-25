import { BASE_API_URL } from "@/CONSTANTS";
import { cookies } from "next/headers";
import React from "react";

import { WishListItemsResponse } from "@/types";
import WishlistHydrator from "@/providers/WishlistHydrator";
async function layout({ children }: { children: React.ReactNode }) {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/wishlist`, {
      headers: {
        cookie: cookieStore.toString(),
      },
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
