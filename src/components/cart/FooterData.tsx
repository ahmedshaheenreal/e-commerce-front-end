"use client";

import { useCartState } from "@/stores/cart.store";
import { TableHead } from "../ui/table";
function FooterData() {
  const totalPriceAfterDiscount = useCartState(
    (s) => s.cart.totalPriceAfterDiscount
  );
  const totalPriceBeforeDiscount = useCartState(
    (s) => s.cart.totalPriceBeforeDiscount
  );
  return (
    <TableHead className="text-right">
      <s>{totalPriceBeforeDiscount?.toFixed(2)}</s>{" "}
      <span>{totalPriceAfterDiscount?.toFixed(2)}</span>
    </TableHead>
  );
}

export default FooterData;
