"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface SearchBarProps {
  setIsMenuOpen?: (isOpen: boolean) => void;
}

export default function SearchBar({ setIsMenuOpen }: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!query.trim()) return;

    setIsMenuOpen?.(false);
    router.push(`/search/${query.trim()}`);
  };

  return (
    <div className="relative w-full grow">
      <button
        type="button"
        onClick={() => handleSubmit()}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
      >
        <Search size={18} />
      </button>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search products"
          className="w-full pl-10 pr-1 py-2 focus-visible:ring-neutral-500/30 md:focus-visible:ring-0 md:border-none md:rounded-none shadow"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
