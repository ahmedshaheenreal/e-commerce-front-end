import { cookies } from "next/headers";
import { BASE_API_URL } from "@/CONSTANTS";
async function page() {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/wishlist`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });
    const data = await response.json();
    return <div>{JSON.stringify(data)}</div>;
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
