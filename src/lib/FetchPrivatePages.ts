import { BASE_API_URL } from "@/CONSTANTS";
import { cookies } from "next/headers";

export async function refreshAccessToken() {
  const cookieStore = await cookies();

  const refreshResponse = await fetch(`${BASE_API_URL}/refresh`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    method: "POST",
    cache: "no-store",
  });

  console.log("REFRESH RESPONSE DUNCTION", refreshResponse);
  if (!refreshResponse.ok) throw new Error("Token refresh failed");
  return true;
}

export async function fetchPrivatePageData(path: string) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken && !cookieStore.get("refreshToken")?.value) {
    throw new Error("No access token found. Please log in.");
  }
  console.log("OG Cookie store", cookieStore);
  const response = await fetch(`${BASE_API_URL}${path}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  const data = await response.json();

  if (response.status === 403) {
    try {
      await refreshAccessToken();
      const newCookieStore = await cookies();
      const newAccessToken = newCookieStore.get("accessToken")?.value;
      console.log("new access token", newAccessToken);
      if (!newAccessToken) {
        throw new Error("Failed to obtain new accesss token");
      }

      const retryResponse = await fetch(`${BASE_API_URL}${path}`, {
        headers: {
          Cookie: newCookieStore.toString(),
        },
        cache: "no-store",
      });
      console.log("RETRY RESPONSE", retryResponse);
      return await retryResponse.json();
    } catch (error) {
      return { message: (error as any).message };
    }
  }

  return data;
}
