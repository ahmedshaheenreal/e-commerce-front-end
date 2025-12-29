import { BASE_API_URL } from "@/CONSTANTS";
import { Product } from "@/types";

import ProductImages from "@/components/product/ProductImages";
import ProductInfo from "@/components/product/ProductInfo";
import RelatedInfoTabs from "@/components/product/RelatedInfoTabs";
async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const response = await fetch(`${BASE_API_URL}/product/${id}`);
  const {
    name,
    price_after_discount,
    averageRating,
    NumberOfRatings,
    price,
    discount_percentage,
  }: Product = await response.json();

  return (
    <div className="block md:grid space-y-8 md:space-y-0 grid-cols-12 gap-8 global-container py-8">
      {/* Product Images Section */}
      <ProductImages imageUrl={"/product.png"} />
      <div className="product-info col-span-6">
        {/* //info section */}
        <ProductInfo
          name={name}
          price_after_discount={price_after_discount}
          averageRating={averageRating}
          NumberOfRatings={NumberOfRatings}
          price={price}
          discount_percentage={discount_percentage}
        />
      </div>

      <div className="description col-span-12">
        <RelatedInfoTabs />
      </div>
    </div>
  );
}

export default page;
