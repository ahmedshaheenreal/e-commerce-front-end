import { BASE_API_URL } from "@/CONSTANTS";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
async function page() {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/user/profile`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });
    const data = await response.json();
    return <div>{JSON.stringify(data)}</div>;
  } catch (error) {
    console.log("This is the Error");
    console.log("ERROR", JSON.stringify(error));
  }
}

export default page;
