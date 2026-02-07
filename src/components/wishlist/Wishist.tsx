"use client";

import { Product } from "@/types";
import ProductCard from "@/components/global/ProductCard";
import PaginationComponent from "@/components/global/PaginationComponent";
import { usePathname } from "next/navigation";
import { useWishList } from "@/stores/wishlist.sstore";
import WishListItems from "./WishListItems";

function WishList() {
  const path = usePathname();

  const wishListItems = useWishList((s) => s.wishListItemsResponse);

  return (
    <>
      {wishListItems?.products?.length ? (
        <main className=" grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6 mt-8 max-w-[1050px]">
          <WishListItems wishlistItems={wishListItems} />
        </main>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold">No products found</h3>
        </div>
      )}

      <PaginationComponent
        number_of_pages={wishListItems.numberOfPages || 1}
        pagenationPath={path}
      />
    </>
  );
}

export default WishList;
