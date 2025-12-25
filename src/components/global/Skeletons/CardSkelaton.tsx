import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
function CardSkelaton() {
  return (
    <div className="flex flex-col space-y-3 basis-1/4">
      <Skeleton className="h-50 w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
    </div>
  );
}

export default CardSkelaton;
