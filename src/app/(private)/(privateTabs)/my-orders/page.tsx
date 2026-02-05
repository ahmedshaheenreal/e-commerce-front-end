"use client";

import { BASE_API_URL } from "@/CONSTANTS";
import { useAuthStore } from "@/stores/auth.store";
import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
async function page() {
  const [orderData, setOrderData] = useState<any[]>([]);
  const user = useAuthStore((state) => state.user);
  const loading = useAuthStore((state) => state.loading);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_API_URL}/checkout-order-history`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setOrderData(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
    }
  };
  return (
    <div
      className="max-h-100 overflow-y-scroll   p-5 mb-10
      "
    >
      <div className="flex  font-bold pb-2 mb-4  ">
        <span className="basis-1/4 pr-2 md:pr-4 text-sm md:text-base">
          Order ID
        </span>
        <span className="basis-1/4 pr-2 md:pr-4 text-sm md:text-base">
          Date{" "}
        </span>
        <span className="basis-1/4 pr-2 md:pr-4 text-sm md:text-base">
          Price
        </span>
        <span className="basis-1/4 pr-2 md:pr-4 text-sm md:text-base">
          Status
        </span>
      </div>
      <ul className="space-y-2">
        {orderData?.length > 0 ? (
          orderData.map((order: any) => (
            <Link
              href={`/my-orders/${order.order_id}`}
              key={order.order_id + "order"}
              className="block"
            >
              <li className="rounded bg-grey hover:bg-gray-200  py-2 px-4 flex  gap-4 transition-all">
                <span className="basis-1/4  text-sm lg:text-base">
                  #{order.order_id}
                </span>
                <span className="basis-1/4  text-left  text-sm lg:text-base">
                  {new Date(order.createdAt).toLocaleDateString()}
                </span>
                <span className="basis-1/4   text-sm lg:text-base">
                  ${order.total}
                </span>
                <span className="basis-1/4  text-right">{order.status} </span>
              </li>
            </Link>
          ))
        ) : (
          <div>No orders found.</div>
        )}
      </ul>
    </div>
  );
}

export default page;
