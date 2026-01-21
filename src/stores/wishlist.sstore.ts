import type { Product } from "@/types";
import { create } from "zustand";

interface WishListItemsState {
  wishListItems: Product[];
  deleteItem: (id: number) => void;
  setItems: (items: Product[]) => void;
}

const useWishList = create<WishListItemsState>()((set, get) => ({
  wishListItems: [] as Product[],
  deleteItem: (id: number) => {
    set((state) => ({
      ...state,
      wishListItems: state.wishListItems.filter(
        (item) => item.product_id !== id,
      ),
    }));
  },
  setItems: () => {},
}));
