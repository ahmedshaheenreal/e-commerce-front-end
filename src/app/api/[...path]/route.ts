import { BASE_API_URL } from "@/CONSTANTS";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const myparasms = (await params).path.join("/");
  const url = `${BASE_API_URL}/${myparasms}`;

  const res = await fetch(url, {
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
    credentials: "include",
  });

  const data = await res.text();

  return new NextResponse(data, {
    status: res.status,
    headers: res.headers,
  });
}
