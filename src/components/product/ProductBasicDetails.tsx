import React from "react";
import StarRatingReadOnly from "../global/StarRatingReadOnly";
function ProductBasicDetails({
  name,
  averageRating,
  NumberOfRatings,
  price_after_discount,
  price,
  discount_percentage,
}: {
  name: string;
  averageRating: number;
  NumberOfRatings: number;
  price_after_discount: number;
  price: number;
  discount_percentage: number;
}) {
  return (
    <div>
      {" "}
      <div>
        <h1 className="text-dark text-3xl font-semibold">
          {name || "Product Name"}
        </h1>
        <p className="text-low-emphasis text-sm md:text-xl font-semibold mb-8">
          Product Description just a small one
        </p>
      </div>
      <div>
        <StarRatingReadOnly
          rating={averageRating}
          numberOfReviews={NumberOfRatings}
        />
      </div>
      <div className="space-x-2 mt-4">
        <strong className="font-bold text-3xl md:text-5xl ">
          ${price_after_discount}
        </strong>{" "}
        <s className="text-low-emphasis text-xl md:text-3xl font-semibold">
          {" "}
          ${price}
        </s>
        <span className="text-red-600 text-xl font-medium">
          {" "}
          {discount_percentage.toFixed(2)}% OFF
        </span>
      </div>
    </div>
  );
}

export default ProductBasicDetails;
