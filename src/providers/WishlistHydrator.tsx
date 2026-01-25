"use client";
import { useWishList } from "@/stores/wishlist.sstore";
import { WishListItemsResponse } from "@/types";
import { useEffect } from "react";
import { BASE_API_URL } from "@/CONSTANTS";
function WishlistHydrator({
  initialWishlist,
}: {
  initialWishlist: WishListItemsResponse | null;
}) {
  const setWishlist = useWishList((s) => s.setItems);
  useEffect(() => {
    if (initialWishlist) {
      setWishlist(initialWishlist);

      return;
    }

    const getWishlist = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/wishlist`, {
          credentials: "include",
          method: "GET",
        });
        const data: WishListItemsResponse = await res.json();
        setWishlist(data);
        if (!res.ok) {
          throw data;
        }
      } catch (error: any) {
        console.log("ERROR FETCHING WIshlist: ", JSON.stringify(error));
      }
    };

    getWishlist();
  }, [initialWishlist, setWishlist]);

  return null;
}

export default WishlistHydrator;
