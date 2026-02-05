import React from "react";
import CardSkelaton from "@/components/global/Skeletons/CardSkelaton";

export default function Loading() {
  return (
    <div className="global-container py-8">
      {/* Listing Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <CardSkelaton key={i} />
        ))}
      </div>
    </div>
  );
}
