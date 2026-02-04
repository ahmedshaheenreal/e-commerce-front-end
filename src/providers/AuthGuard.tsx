"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";

export default function AuthGuard() {
  const router = useRouter();
  const { user, loading, fetchUser } = useAuthStore();
  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, []);
  useEffect(() => {
    if (!user && !loading) {
      router.replace("/login");
    }
  }, [user, loading]);

  return null;
}
