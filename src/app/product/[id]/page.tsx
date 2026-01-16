import { BASE_API_URL } from "@/CONSTANTS";
import { Product } from "@/types";
import ProductImages from "@/components/product/ProductImages";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedInfoTabs from "@/components/product/RelatedInfoTabs";

async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`${BASE_API_URL}/product/${id}`, {
    cache: "force-cache",
  });
  const product: Product = await response.json();

  const categoryName = product?.categories?.[0]?.name;
  console.log("The Product", JSON.stringify(product));
  return (
    <div className="block md:grid space-y-8 md:space-y-0 grid-cols-12 gap-8 global-container py-8">
      {/* Product Images Section */}
      <ProductImages imageUrl={product.product_image_url || "/product.png"} />
      <div className="product-info col-span-6">
        {}
        <ProductInfo
          name={product.name}
          price_after_discount={product.price_after_discount}
          averageRating={product.averageRating}
          NumberOfRatings={product.NumberOfRatings}
          price={product.price}
          discount_percentage={product.discount_percentage}
        />
      </div>

      <div className="description col-span-12">
        <RelatedInfoTabs
          productDescription={product.description || "description"}
          categoryName={categoryName || "category"}
          productId={id}
        />
      </div>
    </div>
  );
}
export const revalidate = 3600;
export default page;
