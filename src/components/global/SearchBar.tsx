"use client";

import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    // Handle the search query (e.g., fetch search results)

    const response = await fetch(`http://localhost:8000/api/search/${query}`);
    const data = await response.json();
  };

  return (
    <div className="relative w-full grow">
      {/* Icon */}
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 border-transparent outline-none  "
      />

      {/* Input */}
      {/* <input
        type="text"
        placeholder="Search products"
        className="
          w-full
          rounded-md
          outline-none
          border-none
          bg-grey
         
          pl-10
          pr-1
          text-text-primary
          placeholder:text-text-muted
        
        "
      /> */}

      <Input
        type="text"
        placeholder="Search products"
        className="w-full pl-10 pr-1 py-2 focus-visible:ring-neutral-500/30"
        onChange={handleChange}
      />
    </div>
  );
}
