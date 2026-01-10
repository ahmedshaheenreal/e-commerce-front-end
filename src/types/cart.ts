import type { Product } from "./product";

export interface CartItemsResponse {
  cartItems: CartItem[];
  totalPriceBeforeDiscount: number;
  totalPriceAfterDiscount: number;
}
export interface CartItem {
  cartItem_id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  product: Partial<Product>;
}
