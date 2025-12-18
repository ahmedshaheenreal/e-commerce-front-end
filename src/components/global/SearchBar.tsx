import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative w-full">
      {/* Icon */}
      <Search
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search products"
        className="
          w-full
          rounded-md
          outline-none
          border-none
          bg-grey
          py-2
          pl-10
          pr-1
          text-text-primary
          placeholder:text-text-muted
        
        "
      />
    </div>
  );
}
