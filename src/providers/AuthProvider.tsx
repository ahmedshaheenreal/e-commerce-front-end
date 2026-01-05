// src/providers/AuthProvider.tsx
"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { User } from "@/types";

type Props = {
  initialUser: User | null;
  children: React.ReactNode;
};

export default function AuthProvider({ initialUser, children }: Props) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    setUser(initialUser);
  }, [initialUser, setUser]);

  return <>{children}</>;
}
