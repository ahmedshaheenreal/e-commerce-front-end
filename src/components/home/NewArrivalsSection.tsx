"use client";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";

import ProductCard from "../global/ProductCard";
import type { ProductCardProps } from "@/types";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "@/CONSTANTS";

function NewArrivalsSection() {
  const [products, setProducts] = useState<ProductCardProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/newArrivals`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data.products || []);
        }
      } catch (error) {
        console.log("Failed to fetch new arrivals", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return null;

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
