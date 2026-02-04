// app/(protected)/layout.tsx
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  console.log("ProtectedLayout user:", user);
  if (!user) {
    redirect("/login");
  }

  return <>{children}</>;
}
