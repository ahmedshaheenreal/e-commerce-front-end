import Link from "next/link";
import SearchBar from "./SearchBar";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
function NavBar() {
  const categories = [
    "Handbags",
    "Watches",
    "Skincare",
    "Jewellery",
    "Apparels",
  ];
  return (
    <header>
      <div className="flex justify-between py-4 px-5 global-container border-b-2 border-grey ">
        <div className="flex gap-8 items-center">
          <div className="logo">
            <Link href={"/"}>
              <img src="/logo.png" alt="Logo " />
            </Link>
          </div>
          <nav className="flex gap-4">
            {categories.map((c, i) => (
              <Link href={`/${c}`} key={i}>
                {c}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <div className="search">
            <SearchBar />

            {/* <input 
                
                  type="text"
                  placeholder="Search for products or brands....."
                  className="bg-grey outline-none p-2 placeholder:text-xs"
                /> */}
          </div>
          <div className="customer-options flex gap-4 items-center">
            <ShoppingCart className="text-primary" />
            <Heart className="text-primary" />
            <User className="text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
