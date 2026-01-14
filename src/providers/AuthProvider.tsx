// src/providers/AuthProvider.tsx
"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/stores/auth.store";
import { User } from "@/types";
import { BASE_API_URL } from "@/CONSTANTS";

type Props = {
  initialUser: User | null;
};

export default function AuthProvider({ initialUser }: Props) {
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    // If we have initial user from server, use it
    if (initialUser) {
      setUser(initialUser);
      return;
    }

    // Otherwise fetch user client-side if authenticated
    const fetchUser = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/user/profile`, {
          credentials: "include",
        });
        if (response.ok) {
          const user: User = await response.json();
          setUser(user);
        }
      } catch (error) {
        console.log("Failed to fetch user", error);
        setUser(null);
      }
    };

    fetchUser();
  }, [initialUser, setUser]);

  return null;
}
