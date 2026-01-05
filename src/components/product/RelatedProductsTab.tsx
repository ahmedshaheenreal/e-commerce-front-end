import { Product } from "@/types";
import React from "react";
import ProductCard from "../global/ProductCard";

function RelatedProductsTab({ products }: { products: Product[] }) {
  console.log("Related products:", products);
  return (
    <div className="grid grid-cols-12  gap-4 ">
      {products?.map((product) => (
        <div
          className="lg:col-span-3 md:col-span-6 col-span-12"
          key={product.product_id}
        >
          <ProductCard product={product} isHomePage={true} />
        </div>
      ))}
    </div>
  );
}

export default RelatedProductsTab;
