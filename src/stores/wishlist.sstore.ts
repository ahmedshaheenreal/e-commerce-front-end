import type { Product } from "@/types";
import { create } from "zustand";
import { toast } from "sonner";
import { BASE_API_URL } from "@/CONSTANTS";
import { useAuthStore } from "./auth.store";
import { WishListItemsResponse } from "@/types";
import { use } from "react";
interface WishListItemsState {
  wishListItemsResponse: WishListItemsResponse;
  wishListItemIds: number[];
  deleteItem: (id: number) => void;
  addToWishList: (product: Product) => void;
  setItems: (items: WishListItemsResponse) => void;
  fetchPage: (page: number) => void;
  setItemIds: (ids: number[]) => void;
}

export const useWishList = create<WishListItemsState>()((set, get) => ({
  wishListItemsResponse: {
    products: [] as Product[],
    numberOfPages: 1,
    count: 0,
  } as WishListItemsResponse,
  wishListItemIds: [],
  deleteItem: async (id: number) => {
    try {
      const res = await fetch(`${BASE_API_URL}/wishlist/${id}`, {
        credentials: "include",
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        throw data;
      }
      set((state) => ({
        wishListItemIds: [
          ...state.wishListItemIds.filter((itemId) => itemId !== id),
        ],
        wishListItemsResponse: {
          ...state.wishListItemsResponse,
          products: (state.wishListItemsResponse.products || []).filter(
            (item) => item.product_id !== id,
          ),
        },
      }));
      toast.success(data.message);
    } catch (error: any) {
      toast.error(error.message || "Error deleting item from wishlist");
    }
  },
  fetchPage: async (page: number) => {
    try {
      const res = await fetch(`${BASE_API_URL}/wishlist?page=${page}`, {
        credentials: "include",
      });

      const data = await res.json();
      if (!res.ok) throw data;

      set({ wishListItemsResponse: data });
    } catch (err: any) {
      toast.error(err?.message || "Failed to load wishlist");
    }
  },
  addToWishList: async (product: Product) => {
    const currentAuthState = useAuthStore.getState();
    if (!currentAuthState.isAuthenticated) {
      console.log("NOT AUTHENTICATED:", currentAuthState);
      toast.error("Please Login");
      return;
    }
    try {
      const res = await fetch(`${BASE_API_URL}/wishlist`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ productId: Number(product.product_id) }),
        headers: {
          "content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) throw data;

      set((state) => ({
        wishListItemIds: [...state.wishListItemIds, product.product_id],
        wishListItemsResponse: {
          ...state.wishListItemsResponse,
          products: [...(state.wishListItemsResponse.products || []), product],
        },
      }));
      toast.success("Added to wishlist");
    } catch (err: any) {
      console.log(err);
      toast.error(
        err?.message || "Unable to complete request, try again later.",
      );
    }
  },
  setItemIds: (ids: number[]) => set((state) => ({ wishListItemIds: ids })),
  setItems: (wishListItemsResponse: WishListItemsResponse) =>
    set((state) => ({ wishListItemsResponse })),
}));
