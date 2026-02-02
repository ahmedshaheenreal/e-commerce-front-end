"use client";
import { Suspense, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";
function HeroImageCategories() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Suspense fallback={<Skeleton className="w-full h-80]" />}>
      <Image
        width={1200}
        height={400}
        src="https://iili.io/fZ7WPPs.png"
        alt="Hero Banner for Category page"
        className="w-full object-cover rounded-2xl "
        onLoad={() => setIsLoading(false)}
      />
    </Suspense>
  );
}

export default HeroImageCategories;
