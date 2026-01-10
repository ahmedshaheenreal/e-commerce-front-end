"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "../ui/button";
import { useAuthStore } from "@/stores/auth.store";
import { logout } from "@/lib/actions";

export default function DesktopNav() {
  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ];

  const user = useAuthStore((s) => s.user);

  return (
    <div className="flex items-center justify-between  py-5.5 px-5 global-container w-full mb-4">
      <div className="flex gap-5 items-center">
        <div className="logo w-28">
          <Link href={"/"}>
            <img src="/logo.png" className="w-28" alt="Logo" />
          </Link>
        </div>

        <nav className="flex  gap-4 text-sm font-medium  ">
          {categories.map((c, i) => (
            <Link href={`/category/${c}`} key={i}>
              {c}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-end gap-5 basis-1/3 ">
        <div className="grow">
          <SearchBar />
        </div>

        <div className="customer-options flex gap-4 items-center">
          <Link href={"/cart"}>
            <ShoppingCart className="text-primary" />
          </Link>
          <Link href={"/wishlist"}>
            <Heart className="text-primary" />
          </Link>
          <Link href={"/profile"}>
            <User className="text-primary" />
          </Link>
          {user && (
            <form action={logout}>
              <Button type="submit">{"logout"}</Button>
            </form>
          )}
          {!user && <Link href={"/login"}>{"login"}</Link>}
        </div>
      </div>
    </div>
  );
}
