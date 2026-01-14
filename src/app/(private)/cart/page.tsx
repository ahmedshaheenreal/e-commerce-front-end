import ProductListTable from "@/components/cart/ProductListTable";
import BreadCumber from "@/components/global/BreadCumber";
import OrderSummery from "@/components/global/OrderSummery";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";
async function page() {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  if (!currentUser) {
    redirect("/login");
  }
  try {
    return (
      <div className="global-container">
        <div>
          <h3 className="text-[34px] font-semibold text-primary py-2 ">
            My Cart
          </h3>
        </div>
        <div>
          <BreadCumber name={"Cart"} />
        </div>
        <div className="flex gap-8 justify-between flex-col lg:flex-row  items-center">
          <section className="itemslist basis-1/2 ">
            <ProductListTable />
          </section>
          <section className="oredersummery">
            <OrderSummery />
          </section>
        </div>
      </div>
    );
  } catch (error) {
    console.error("ERROR", error);
    return (
      <>
        <p>ERROR UNKONWN</p>
      </>
    );
  }
}

export default page;
