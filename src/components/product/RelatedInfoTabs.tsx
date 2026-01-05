import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { BASE_API_URL } from "@/CONSTANTS";
import RelatedProductsTab from "./RelatedProductsTab";

interface RelatedInfoTabsProps {
  productDescription?: string;
  categoryName: string;
  productId: string;
}
async function RelatedInfoTabs({
  productDescription,
  categoryName,
  productId,
}: RelatedInfoTabsProps) {
  const response = await fetch(
    `${BASE_API_URL}/products/${categoryName}/${productId}`,
    {
      cache: "force-cache",
    }
  );
  const products = await response.json();

  console.log(
    "Fetched related products:",
    `${BASE_API_URL}/products/${categoryName}/${productId}`
  );
  return (
    <>
      <Tabs className="min-h-50 lg:min-h-70" defaultValue="description">
        <div className=" bg-grey/50  p-1 rounded-md  overflow-x-scroll md:overflow-auto">
          <TabsList className="space-x-2 rounded-md p-1 ">
            <TabsTrigger value="description">Product Description</TabsTrigger>
            <TabsTrigger value="related-products">Related Products</TabsTrigger>
            <TabsTrigger value="reviews">Ratings and Reviews</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="description" className="p-4  rounded-b-md">
          <p className="text-dark">
            {productDescription ||
              `This is a detailed description of the product. It provides
            information about the features, specifications, and benefits of the
            product to help customers make informed purchasing decisions.`}
          </p>
        </TabsContent>
        <TabsContent value="related-products" className="p-4  rounded-b-md">
          <RelatedProductsTab products={products} />
        </TabsContent>
        <TabsContent value="reviews" className="p-4  rounded-b-md">
          <p className="text-dark">
            {" "}
            Customer reviews and ratings will be displayed here.
          </p>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default RelatedInfoTabs;
