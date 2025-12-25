import { BASE_API_URL } from "@/CONSTANTS";
import { Product } from "@/types";
import ProductCard from "./ProductCard";
import PaginationComponent from "./PaginationComponent";

async function Productlist({
  path,

  apiPath,
}: {
  apiPath?: string;
  path: string;
}) {
  const response = await fetch(`${BASE_API_URL}${apiPath}`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    console.error("Failed to fetch products:", response.statusText);
  }

  const data: {
    products: Product[];
    number_of_pages?: number;
    numberOfPages?: number;
    count?: number;
  } = await response.json();

  return (
    <>
      <main className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-8">
        {data.products?.map((product: Product) => (
          <ProductCard
            key={product.product_id}
            product={product}
            isHomePage={false}
          />
        ))}
      </main>

      <PaginationComponent
        number_of_pages={data.number_of_pages || data.numberOfPages || 1}
        pagenationPath={path || ""}
      />
    </>
  );
}

export default Productlist;
