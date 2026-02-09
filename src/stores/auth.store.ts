// src/stores/auth.store.ts
import { create } from "zustand";
import { User } from "@/types/user";
import { BASE_API_URL } from "@/CONSTANTS";

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  loading: boolean;
  fetchUser: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  logout: async () => {
    try {
      const res = await fetch(`${BASE_API_URL}/logout`, {
        method: "DELETE",
        credentials: "include",
      });
      set((s) => ({ loading: true }));

      if (res.ok) {
        set({
          user: null,
          isAuthenticated: false,
        });
      }
    } catch (error) {
    } finally {
      set((s) => ({ loading: false }));
    }
    set({
      user: null,
      isAuthenticated: false,
    });
  },

  loading: true,
  fetchUser: async () => {
    set({ loading: true });
    try {
      const res = await fetch(`${BASE_API_URL}/user/profile`, {
        credentials: "include",
      });
      if (res.ok) {
        const user: User = await res.json();
        set({ user, isAuthenticated: true, loading: false });
      } else {
        set({ user: null, isAuthenticated: false, loading: false });
      }
    } catch {
      set({ user: null, isAuthenticated: false, loading: false });
    }
  },
}));
