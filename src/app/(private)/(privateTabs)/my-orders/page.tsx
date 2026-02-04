"use client";

import { BASE_API_URL } from "@/CONSTANTS";
import Link from "next/link";
async function page() {
  try {
    const response = await fetch(`${BASE_API_URL}/checkout-order-history`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log("Order History Data:", data);
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
            {" "}
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
          {data?.length > 0 ? (
            data.map((order: any) => (
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
  } catch (error) {}
}

export default page;
