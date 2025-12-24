"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import { ShoppingCart, Heart, User, Menu } from "lucide-react";
import { useState } from "react";

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

  const menuClasses = isMenuOpen
    ? "translate-0 bg-grey opacity-100 transition-all duration-300 z-50"
    : "-z-100 -translate-3 opacity-0 scale-y-0 pointer-events-none overflow-hidden transition-all duration-200";

  return (
    <div>
      <div className="flex items-center justify-between py-4 px-5 global-container border-b-2 border-grey relative">
        <div className="logo w-28">
          <Link href={"/"}>
            <img src="/logo.png" className="w-28" alt="Logo" />
          </Link>
        </div>

        <div
          className={`${menuClasses} origin-top flex absolute top-full left-0 w-full p-2 gap-4 flex-col`}
        >
          <nav className="flex flex-col gap-4 text-sm font-medium text-primary">
            {categories.map((c, i) => (
              <Link href={`/category/${c}`} key={i}>
                {c}
              </Link>
            ))}
          </nav>

          <div className="search w-full">
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
          </div>
        </div>

        <Menu onClick={toggleMenu} className="text-primary cursor-pointer" />
      </div>
    </div>
  );
}
