import { cookies } from "next/headers";
import { BASE_API_URL } from "@/CONSTANTS";
import Productlist from "@/components/global/Productlist";
import { getCurrentUser } from "@/lib/auth";
export const dynamic = "force-dynamic";
async function page() {
  try {
    return (
      <div className="grow">
        <Productlist path="/wishlist" apiPath={`/wishlist`} />
      </div>
    );
  } catch (error: any) {
    console.error("ERROR", JSON.stringify(error));
    return (
      <>
        <p>{JSON.stringify(error)}</p>
      </>
    );
  }
}

export default page;
