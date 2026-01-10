"use server";

import { cookies } from "next/headers";
import { BASE_API_URL } from "@/CONSTANTS";
import { getCurrentUser } from "./auth";
import { revalidatePath } from "next/cache";
export async function addToWhislist({
  userId,
  productId,
}: {
  userId: number;
  productId: number;
}) {
  const cookieStore = await cookies();

  await fetch(`${BASE_API_URL}/wishlist`, {
    method: "POST",

    headers: {
      cookie: cookieStore.toString(),
    },
    body: JSON.stringify({
      userId: userId,

      productId: productId,
    }),
  });
}

export const getCart = async () => {
  try {
    const cookieStore = await cookies();
    const response = await fetch(`${BASE_API_URL}/cart`, {
      method: "GET",
      headers: {
        cookie: cookieStore.toString(),
      },
    });
    const cart = await response.json();
    return cart;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  console.log("LOGGING OUT");
  const cookieStore = await cookies();

  await fetch(`${BASE_API_URL}/logout`, {
    method: "DELETE",
    headers: {
      cookie: cookieStore.toString(),
    },
  });
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  revalidatePath("/");
};
