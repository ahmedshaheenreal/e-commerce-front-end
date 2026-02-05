// src/providers/AuthProvider.tsx
"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { User } from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";

export default function AuthProvider() {
  const fetchUser = useAuthStore((s) => s.fetchUser);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return null;
}
