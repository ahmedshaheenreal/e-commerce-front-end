"use client";
import { useAuthStore } from "@/stores/auth.store";
function AddressInfo() {
  const user = useAuthStore((s) => s.user);
  return (
    <address className=" mb-4">
      Delivery Address: <span className="font-medium">{user?.address}</span>
    </address>
  );
}

export default AddressInfo;
