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
    });

    const data = await response.json();
    if (!response.ok) {
      throw { message: data.message };
    }
    return data;
  } catch (error) {
    console.log("ERROR getting user", JSON.stringify(error));
  }
});
