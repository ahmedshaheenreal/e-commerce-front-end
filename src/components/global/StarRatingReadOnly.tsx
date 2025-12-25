import React from "react";
import { Star, StarHalf, StarOff } from "lucide-react";
function StarRatingReadOnly({
  rating,
  numberOfReviews,
}: {
  rating: number;
  numberOfReviews?: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalf: boolean = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
  return (
    <div className="flex gap-2 my-1 items-center">
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        ))}
        {hasHalf && (
          <StarHalf className="w-4 h-4 fill-yellow-500 text-yellow-500" />
        )}
        {Array.from({ length: emptyStars }, (_, i) => (
          <StarOff key={i} className="w-4 h-4 fill-gray-300 text-gray-300" />
        ))}
      </div>
      <p className="text-sm text-primary">{numberOfReviews || 0} Reviews</p>
    </div>
  );
}

export default StarRatingReadOnly;
