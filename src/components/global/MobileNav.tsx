"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { ShoppingCart, Heart, User, Menu, LogIn, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { logout } from "@/lib/actions";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ];

  const user = useAuthStore((s) => s.user);
  const logoutState = useAuthStore((s) => s.logout);

  const menuClasses = isMenuOpen
    ? "translate-0 bg-grey opacity-100 transition-all duration-300 z-50 shadow-2xl"
    : "-z-100 -translate-3 opacity-0 scale-y-0 pointer-events-none overflow-hidden transition-all duration-200";

  return (
    <div>
      <div className="flex items-center justify-between py-4 px-5 global-container border-b-2 border-grey relative">
        <div className="logo w-28">
          <Link
            href={"/"}
            className="text-2xl font-bold text-primary flex items-center gap-2"
          >
            CORA'L
          </Link>
        </div>

        <div
          className={`${menuClasses} origin-top flex absolute z-100 top-full left-0 w-full p-6 gap-6 flex-col border-b border-border`}
        >
          <nav className="flex flex-col gap-5 text-lg font-medium text-primary">
            {categories.map((c, i) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={`/category/${c}`}
                key={i}
                className="hover:translate-x-2 transition-transform duration-200"
              >
                {c}
              </Link>
            ))}
          </nav>

          <div className="h-[1px] bg-border w-full opacity-50" />

          <div className="search w-full">
            <SearchBar setIsMenuOpen={setIsMenuOpen} />
          </div>

          <div className="flex flex-col gap-6 pt-2">
            <div className="customer-options flex gap-8 items-center">
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/cart"}
                className="flex flex-col items-center gap-1"
              >
                <ShoppingCart className="text-primary" size={24} />
                <span className="text-[10px] font-bold">Cart</span>
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/wishlist"}
                className="flex flex-col items-center gap-1"
              >
                <Heart className="text-primary" size={24} />
                <span className="text-[10px] font-bold">Wishlist</span>
              </Link>
              <Link
                onClick={() => setIsMenuOpen(false)}
                href={"/profile"}
                className="flex flex-col items-center gap-1"
              >
                <User className="text-primary" size={24} />
                <span className="text-[10px] font-bold">Account</span>
              </Link>
            </div>

            <div className="auth-section mt-4">
              {user ? (
                <form
                  action={async () => {
                    await logout();
                    logoutState();
                    setIsMenuOpen(false);
                  }}
                >
                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full gap-2 rounded-full py-6 text-lg border-primary text-primary hover:bg-primary/5 transition-all"
                  >
                    <LogOut size={20} />
                    Logout
                  </Button>
                </form>
              ) : (
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={"/login"}
                  className="w-full"
                >
                  <Button className="w-full gap-2 rounded-full py-6 text-lg shadow-md transition-all active:scale-95">
                    <LogIn size={20} />
                    Login / Sign Up
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
        <Menu onClick={toggleMenu} className="text-primary cursor-pointer" />
      </div>
    </div>
  );
}
