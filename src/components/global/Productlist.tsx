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
  console.log("Productlist API PATH:", apiPath);
  const response = await fetch(`${BASE_API_URL}${apiPath}`, {
    cache: "force-cache",
  });
  if (!response.ok) {
    console.log("Failed to fetch products:", response.statusText);
  }

  const data: {
    products: Product[];
    number_of_pages?: number;
    numberOfPages?: number;
    count?: number;
  } = await response.json();

  console.log(` fetching from: >>> ${BASE_API_URL}${apiPath}`);
  console.log("Searchinggg:", data, path);
  return (
    <>
      {data?.products?.length ? (
        <main className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-8">
          {data.products?.map((product: Product) => (
            <ProductCard
              key={product.product_id}
              product={product}
              isHomePage={false}
            />
          ))}
        </main>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold">No products found</h3>
        </div>
      )}

      <PaginationComponent
        number_of_pages={data.number_of_pages || data.numberOfPages || 1}
        pagenationPath={path || ""}
      />
    </>
  );
}

export default Productlist;
