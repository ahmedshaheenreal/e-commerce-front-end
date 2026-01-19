import BreadCumber from "@/components/global/BreadCumber";
import UserDataForm from "@/components/Profile/UserDataForm";
import { BASE_API_URL } from "@/CONSTANTS";
import { cookies } from "next/headers";
import SideBar from "@/components/global/SideBar";
export const dynamic = "force-dynamic";
async function page() {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/user/profile`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    return <UserDataForm />;
  } catch (error) {
    console.log("This is the Error");
    console.log("ERROR", JSON.stringify(error));
  }
}

export default page;
