import { cookies } from "next/headers";
import { BASE_API_URL } from "@/CONSTANTS";
import { User } from "@/types";
// lib/auth.ts
import { cache } from "react";

export const getCurrentUser = cache(async () => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/user/profile`, {
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Error fetching user data: ");
    }
    const data: User = await response.json();
    return data;
  } catch (error) {
    console.log("ERROR", JSON.stringify(error));
  }
});
