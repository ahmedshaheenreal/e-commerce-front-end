import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="block md:grid space-y-8 md:space-y-0 grid-cols-12 gap-8 global-container py-8">
            {/* Product Images Section Skeleton */}
            <div className="col-span-12 md:col-span-6 space-y-4">
                <Skeleton className="aspect-square w-full rounded-xl" />
                <div className="flex gap-4 overflow-hidden">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-20 w-20 flex-shrink-0 rounded-lg" />
                    ))}
                </div>
            </div>

            {/* Product Info Section Skeleton */}
            <div className="col-span-12 md:col-span-6 space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-10 w-3/4" />
                    <Skeleton className="h-6 w-1/2" />
                </div>

                <div className="flex gap-2 items-center">
                    <Skeleton className="h-5 w-32" />
                    <Skeleton className="h-5 w-16" />
                </div>

                <div className="flex gap-4 items-center pt-4">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-16" />
                </div>

                <div className="space-y-4 pt-6">
                    <div className="flex gap-4">
                        <Skeleton className="h-12 w-32 rounded-full" />
                        <Skeleton className="h-12 w-48 rounded-full" />
                    </div>
                    <Skeleton className="h-12 w-12 rounded-full" />
                </div>
            </div>

            {/* Description Section Skeleton */}
            <div className="col-span-12 pt-12">
                <div className="border-b border-border flex gap-8 pb-4 mb-6">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-6 w-20" />
                </div>
                <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                </div>
            </div>
        </div>
    );
}
