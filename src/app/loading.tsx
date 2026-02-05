"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer pulsating ring */}
        <div className="absolute h-24 w-24 animate-ping rounded-full bg-primary/20 opacity-75"></div>

        {/* Middle spinning gradient ring */}
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-primary border-r-primary/30"></div>

        {/* Inner static logo placeholder or icon */}
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg">
          <div className="h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.3s]"></div>
          <div className="mx-0.5 h-2 w-2 animate-bounce rounded-full bg-white [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 animate-bounce rounded-full bg-white"></div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2">
        <h2 className="text-xl font-bold tracking-tight text-primary animate-pulse">
          CORA{"'"}L
        </h2>
        <p className="text-sm font-medium text-low-emphasis animate-pulse">
          Loading your experience...
        </p>
      </div>

      {/* Skeleton-like progress bar at the bottom for extra polish */}
      <div className="mt-12 w-48 overflow-hidden rounded-full bg-accent h-1.5">
        <div className="h-full w-full origin-left animate-[loading_1.5s_infinite_ease-in-out] bg-primary"></div>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(0.5); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
