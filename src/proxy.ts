// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { BASE_API_URL } from "./CONSTANTS";
import { redirect } from "next/navigation";
export async function proxy(request: NextRequest) {
  // Your logic here
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && refreshToken) {
    const refreshResponse = await fetch(`${BASE_API_URL}/refresh`, {
      headers: {
        Cookie: `refreshToken=${refreshToken}`,
      },
      method: "POST",
      cache: "no-store",
    });
    if (!refreshToken) {
      redirect(`/login`);
    }
    if (refreshResponse.ok) {
      // 2. Get the new tokens from the backend response
      // Assuming your backend sends them via Set-Cookie headers
      const newCookies = refreshResponse.headers.getSetCookie();

      // 3. Create a redirect to the same URL to "retry" the request
      const nextResponse = NextResponse.next();

      // 4. IMPORTANT: Manually forward the new cookies to the browser
      newCookies.forEach((cookie) => {
        nextResponse.headers.append("Set-Cookie", cookie);
      });

      return nextResponse;
    }
  }

  return NextResponse.next();
}

// This limits the middleware to specific paths
export const config = {
  matcher: [
    "/profile",
    "/cart",
    "/wishlist",
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
