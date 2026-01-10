import { create } from "zustand";
import { CartItemsResponse } from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";
import { produce } from "immer";
import { toast } from "sonner";
import { syncCartDebounced } from "@/lib/cart-sync";
interface CartState {
  cart: CartItemsResponse;
  deleteFromCart: (cartItemId: number) => Promise<void>;
  incrementItem: (cartItemId: number) => void;
  deccrementItem: (cartItemId: number) => void;
  isLoading: boolean;
  error: Error | null;
  setCart: (cart: CartItemsResponse) => void;
}

export const useCartState = create<CartState>()((set, get) => ({
  cart: {} as CartItemsResponse,
  isLoading: false,
  error: null,
  incrementItem: (cartItemId: number) => {
    try {
      let newQuantity = 0;

      set(
        produce((state: CartState) => {
          const item = state.cart.cartItems.find(
            (i) => i.cartItem_id === cartItemId
          );

          if (item) {
            item.quantity += 1;
            newQuantity = item.quantity;
            state.cart.totalPriceAfterDiscount += item.product
              .price_after_discount as number;
            state.cart.totalPriceBeforeDiscount += item.product.price as number;
          }
        })
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
          const item = state.cart.cartItems.find(
            (i) => i.cartItem_id === cartItemId
          );

          if (item && item.quantity > 0) {
            item.quantity -= 1;
            newQuantity = item.quantity;
            state.cart.totalPriceAfterDiscount -= item.product
              .price_after_discount as number;

            state.cart.totalPriceBeforeDiscount -= item.product.price as number;
          }
        })
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
            (item) => item.cartItem_id !== cartItemId
          ),
        }))
      );
    } catch (error) {
      console.log(error);
    }
  },
  setCart: (cart) => set({ cart }),
}));
