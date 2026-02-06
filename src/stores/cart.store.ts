import { create } from "zustand";
import { CartItemsResponse } from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";
import { produce } from "immer";
import { toast } from "sonner";
import { syncCartDebounced } from "@/lib/cart-sync";
import type { CartItem } from "@/types";
import { addToCartToast } from "@/lib/utils";
interface CartState {
  cart: CartItemsResponse;
  deleteFromCart: (cartItemId: number) => Promise<void>;
  incrementItem: (cartItemId: number) => void;
  deccrementItem: (cartItemId: number) => void;
  isLoading: boolean;
  error: Error | null;
  setCart: (cart: CartItemsResponse) => void;
  addToCart: (productId: number, quantity: number) => void;
}

export const useCartState = create<CartState>()((set, get) => ({
  cart: {
    cartItems: [],
    totalPriceBeforeDiscount: 0,
    totalPriceAfterDiscount: 0,
  } as CartItemsResponse,
  isLoading: false,
  error: null,
  incrementItem: (cartItemId: number) => {
    try {
      let newQuantity = 0;

      set(
        produce((state: CartState) => {
          const item = (state.cart.cartItems || []).find(
            (i) => i.cartItem_id === cartItemId,
          );

          if (item) {
            item.quantity += 1;
            newQuantity = item.quantity;
            state.cart.totalPriceAfterDiscount += item.product
              .price_after_discount as number;
            state.cart.totalPriceBeforeDiscount += item.product.price as number;
          }
        }),
      );
      syncCartDebounced({ newQuantity }, cartItemId);
    } catch (err) {
      console.error("Failed to Increment item:", err);
    }
  },
  deccrementItem: (cartItemId: number) => {
    try {
      let newQuantity = 0;
      set(
        produce((state: CartState) => {
          const item = (state.cart.cartItems || []).find(
            (i) => i.cartItem_id === cartItemId,
          );

          if (item && item.quantity > 0) {
            item.quantity -= 1;
            newQuantity = item.quantity;
            state.cart.totalPriceAfterDiscount -= item.product
              .price_after_discount as number;

            state.cart.totalPriceBeforeDiscount -= item.product.price as number;
          }
        }),
      );

      if (newQuantity >= 0) syncCartDebounced({ newQuantity }, cartItemId);
      return;
    } catch (err) {
      console.error("Failed to decrement item:", err);
    }
  },
  deleteFromCart: async (cartItemId: number) => {
    try {
      set({
        isLoading: true,
        error: null,
      });
      const response = await fetch(`${BASE_API_URL}/cart/${cartItemId}`, {
        method: "DELETE",
        credentials: "include",
      });
      const { deleted, cart }: { deleted: number; cart: CartItemsResponse } =
        await response.json();
      if (response.ok) {
        set((state) => ({ ...state, cart }));
        toast.success(deleted + " Item Deleted Successsfully! ");
      }
      if (!response.ok) {
        set(await response.json());
        throw new Error("Please Try again later.");
      }

      set(
        produce((state: CartState) => ({
          state: state.cart.cartItems.filter(
            (item) => item.cartItem_id !== cartItemId,
          ),
        })),
      );
    } catch (error) {
      console.log(error);
    }
  },
  addToCart: async (productId: number, quantity: number) => {
    try {
      console.log("CART: ", JSON.stringify(get().cart));
      const existingItem = get().cart.cartItems?.find(
        (item) => item.product_id === productId,
      );

      // cart.cartItems?.find(
      //   (item) => item.product.product_id === productId,
      // );
      console.log("EXISTING CART ITEM:", existingItem);
      if (existingItem) {
        const incremnt = get().incrementItem;
        incremnt(existingItem.cartItem_id);
        console.log(
          "INCREMENTED CART ITEM QUANTITY FOR PRODUCT ID:",
          productId,
        );
        addToCartToast("Item quantity updated in cart!");
        return;
      }
      const response = await fetch(`${BASE_API_URL}/cart`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ productId, quantity }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data: CartItem | { message: string } = await response.json();
      if (response.ok) {
        set((state) => ({
          ...state,
          cart: {
            ...state.cart,
            cartItems: [...(state.cart.cartItems || []), data as CartItem],
          },
        }));
        addToCartToast("Item added to cart!");
      }
      if (!response.ok) {
        throw new Error((data as any).message || "Failed to add item to cart");
      }
    } catch (error: any) {
      toast.error(error.message || "Error adding item to cart");
    }
  },
  setCart: (cart) => set({ cart }),
}));
