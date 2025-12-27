"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function SearchBar() {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}`);
  };
  const [query, setQuery] = useState("");
  return (
    <div className="relative w-full grow">
      {/* Icon */}
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 border-transparent outline-none  "
      />

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search products"
          className="w-full pl-10 pr-1 py-2 focus-visible:ring-neutral-500/30"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
