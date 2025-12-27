"use client";
import { Suspense, useState } from "react";
import { Skeleton } from "../ui/skeleton";
function HeroImageCategories() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Suspense fallback={<Skeleton className="w-full h-80]" />}>
      <img
        src="/blackfridayedited.png"
        alt="Hero Banner for Category page"
        className="w-full object-cover rounded-2xl "
        onLoad={() => setIsLoading(false)}
      />
    </Suspense>
  );
}

export default HeroImageCategories;
