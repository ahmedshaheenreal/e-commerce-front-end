"use client";
import { useEffect } from "react";
import { useWishList } from "@/stores/wishlist.sstore";
import { BASE_API_URL } from "@/CONSTANTS";
function WishListItemIdsHydrator({
  initialWishlistIds,
}: {
  initialWishlistIds: number[] | null;
}) {
  const setItemIds = useWishList((s) => s.setItemIds);
  useEffect(() => {
    if (initialWishlistIds) {
      setItemIds(initialWishlistIds);
      return;
    }
    const getWishlistIds = async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/wishlist/ids`, {
          credentials: "include",
          method: "GET",
        });
        const data: number[] = await res.json();
        if (res.ok) {
          setItemIds(data);
        }
      } catch (error: any) {
        console.log("ERROR FETCHING WIshlist Ids: ", JSON.stringify(error));
      }
    };
    getWishlistIds();
  }, []);
  return null;
}

export default WishListItemIdsHydrator;
