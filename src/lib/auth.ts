"use server";
import { cookies } from "next/headers";

import { BASE_API_URL } from "@/CONSTANTS";
// lib/auth.ts

export const getCurrentUser = async () => {
  try {
    const cookieStore = await cookies();

    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");
    const response = await fetch(`${BASE_API_URL}/user/profile`, {
      credentials: "include",
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await response.json();
    if (!response.ok) {
      throw { message: data.message };
    }
    return data;
  } catch (error) {
    console.log("ERROR getting user", JSON.stringify(error));
  }
};
