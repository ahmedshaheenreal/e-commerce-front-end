import { BASE_API_URL } from "@/CONSTANTS";
import Link from "next/link";
import { cookies } from "next/headers";
import Image from "next/image";
import AddressInfo from "@/components/global/AddressInfo";
import { Card } from "@/components/ui/card";
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const response = await fetch(`${BASE_API_URL}/checkout-order-details/${id}`, {
    method: "GET",
    headers: {
      cookie: cookieStore.toString(),
      "Content-Type": "application/json",
    },
  });

  console.log("Fetching order details for order ID:", id);
  const data = await response.json();
  let subtotal = 0;
  let grandTotal = 0;
  for (const item of data) {
    console.log("Processing item:", item);
    subtotal += item.OrderItems[0].subtotal;
    grandTotal += item.OrderItems[0].grandtotal;
  }
  console.log("Order Details Data:", data);
  return (
    <div>
      <div className="hidden md:grid grid-cols-12 gap-4 text-low-emphasis border-b border-b-grey pb-2 mb-4">
        <span className="grow md:col-span-6 lg:col-span-9">Product Name</span>
        <span className="md:col-span-2 lg:col-span-1">Price</span>
        <span className="md:col-span-2 lg:col-span-1">Quantity</span>
        <span className="md:col-span-2 lg:col-span-1">Subtotal</span>
      </div>

      <ul className="hidden md:block max-h-100 overflow-y-scroll">
        {/* Render order items here */}
        {data?.length > 0 ? (
          data.map((item: any) => (
            <li
              key={item.product_id + item.brand_name + "orderItem"}
              className="grid grid-cols-12 gap-4 py-2 border-b border-b-grey font-medium"
            >
              <span className="grow md:col-span-6 lg:col-span-9">
                <Image
                  src={item.product_image_url}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="inline-block mr-2 w-12 h-12 object-cover rounded-lg"
                />
                <Link href={`/product/${item.product_id}`}>{item.name}</Link>
              </span>
              <span className="md:col-span-2 lg:col-span-1">{item.price}</span>
              <span className="md:col-span-2 lg:col-span-1">
                {item.OrderItems[0].quantity}
              </span>
              <span className="md:col-span-2 lg:col-span-1">
                {item.OrderItems[0].subtotal?.toFixed(2) || "0.00"}
              </span>
            </li>
          ))
        ) : (
          <p>No items found for this order.</p>
        )}
      </ul>

      <div>
        <ul className="md:hidden space-y-4">
          {data?.length > 0 ? (
            data.map((item: any) => (
              <li
                key={item.product_id + item.brand_name + "orderItemMobile"}
                className="border-b border-b-grey pb-4"
              >
                <Card className="py-0 border-grey px-2 space-y-2">
                  <div className=" mb-2">
                    <Image
                      src={item.product_image_url}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="w-full h-40 object-cover rounded-lg mr-4"
                    />
                    <div className="font-medium">{item.name}</div>
                  </div>
                  <div className=" text-sm">
                    <div>
                      <div>
                        Price: <s>{item.price} </s>{" "}
                        <strong>{item.price_after_discount}</strong>
                      </div>

                      <div>Quantity: {item.OrderItems[0].quantity}</div>
                    </div>
                    <div className="font-medium mb-4">
                      Total: $
                      <s>
                        {" "}
                        {item.OrderItems[0].subtotal?.toFixed(2) || "0.00"}
                      </s>
                      <strong>
                        {" "}
                        {item.OrderItems[0].grandtotal?.toFixed(2) || "0.00"}
                      </strong>
                    </div>
                  </div>
                </Card>
              </li>
            ))
          ) : (
            <p>No items found for this order.</p>
          )}
        </ul>
      </div>
      <div>
        <div className="my-6 p-4 border border-grey rounded-lg max-w-md">
          <h2 className="text-xl font-bold mt-6 mb-4">Order Summary</h2>
          <AddressInfo />
          <div className="space-y-3 mb-4">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal?.toFixed(2) || "0.00"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Discount Amount</span>
              <span>${(grandTotal - subtotal)?.toFixed(2) || "0.00"}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <span>Grand Total:</span>
            <span>${grandTotal?.toFixed(2) || "0.00"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
