import { Car, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { Card } from "../ui/card";
import ProductCard from "../global/ProductCard";
import type { ProductCardProps } from "@/types";

async function NewArrivalsSection() {
  const response = await fetch("http://localhost:8000/api/newArrivals", {
    cache: "force-cache",
  });
  const { products }: { products: ProductCardProps[] } = await response.json();
  return (
    <section className="py-4">
      <div className="flex justify-between global-container mb-8 items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          New Arrivals
        </h2>
        <span>
          <Link
            href="/newarrivals?page=1"
            className="text-primary font-medium flex gap-2"
          >
            View All <ChevronsRight />
          </Link>
        </span>
      </div>
      <div className="global-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            isHomePage={true}
          />
        ))}
      </div>
    </section>
  );
}

export default NewArrivalsSection;
