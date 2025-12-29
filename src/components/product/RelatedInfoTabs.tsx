import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";

function RelatedInfoTabs() {
  return (
    <>
      <Tabs>
        <div className=" bg-grey/50  p-1 rounded-t-md">
          <TabsList className="space-x-2 rounded-md p-1 ">
            <TabsTrigger value="description ">Product Description</TabsTrigger>
            <TabsTrigger value="related-products">Related Products</TabsTrigger>
            <TabsTrigger value="reviews">Ratings and Reviews</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="description" className="p-4  rounded-b-md">
          <p className="text-dark">
            This is a detailed description of the product. It provides
            information about the features, specifications, and benefits of the
            product to help customers make informed purchasing decisions.
          </p>
        </TabsContent>
        <TabsContent value="related-products" className="p-4  rounded-b-md">
          <p className="text-dark">
            Here are some related products that you might be interested in.
          </p>
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
