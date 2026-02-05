"use client";

import React from "react";
import { Rocket } from "lucide-react";

export default function ComingSoon() {
    return (
        <div className="mb-4 flex flex-col items-center justify-center min-h-[50vh] text-center p-8 bg-grey/30 rounded-lg border border-border border-dashed">
            <div className="bg-primary/10 p-6 rounded-full mb-6 animate-bounce text-primary">
                <Rocket size={48} />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-high-emphasis mb-2">
                Feature Coming Soon!
            </h2>

            <p className="text-low-emphasis max-w-md">
                We are working hard to bring this feature to your dashboard. We can{"'"}t wait to show you what we have been building!
            </p>

            <div className="mt-8 flex gap-2">
                <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
                <div className="h-1.5 w-12 rounded-full bg-primary animate-pulse"></div>
                <div className="h-1.5 w-8 rounded-full bg-primary/20"></div>
            </div>
        </div>
    );
}
