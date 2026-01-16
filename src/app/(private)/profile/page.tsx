import BreadCumber from "@/components/global/BreadCumber";
import UserDataForm from "@/components/Profile/UserDataForm";
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
    });
    const data = await response.json();
    if (!response.ok) {
      throw data;
    }
    return (
      <div className="global-container">
        <BreadCumber name="Profile" />
        <h2 className="text-[34px] font-semibold text-primary py-2 ">
          Personal Info
        </h2>

        <div className="my-8">
          <UserDataForm />
        </div>
      </div>
    );
  } catch (error) {
    console.log("This is the Error");
    console.log("ERROR", JSON.stringify(error));
  }
}

export default page;
