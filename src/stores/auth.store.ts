// src/stores/auth.store.ts
import { create } from "zustand";
import { User } from "@/types/user";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
