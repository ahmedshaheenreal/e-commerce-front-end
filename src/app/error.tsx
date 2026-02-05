"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <div className="bg-destructive/10 p-6 rounded-full mb-8 animate-pulse text-destructive">
                <AlertCircle size={64} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-high-emphasis mb-4">
                Something went wrong!
            </h1>

            <p className="text-lg text-low-emphasis max-w-md mb-10">
                We apologize for the inconvenience. An unexpected error occurred while processing your request. Our technical team has been notified.
            </p>

            {error.digest && (
                <div className="mb-8 p-3 bg-accent/50 rounded-md text-xs font-mono text-low-emphasis border border-border">
                    Error ID: <span className="select-all font-bold">{error.digest}</span>
                </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
                <Button
                    onClick={() => reset()}
                    size="lg"
                    className="flex-1 gap-2 rounded-full py-6 text-lg shadow-md transition-all active:scale-95"
                >
                    <RefreshCcw size={20} />
                    Try Again
                </Button>
                <Link href="/" className="flex-1">
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full gap-2 rounded-full py-6 text-lg border-primary text-primary hover:bg-primary/5 transition-all"
                    >
                        <Home size={20} />
                        Go Home
                    </Button>
                </Link>
            </div>

            <p className="mt-12 text-sm text-low-emphasis">
                If the problem persists, please contact our support at <span className="font-semibold text-primary">support@coral.com</span>
            </p>
        </div>
    );
}
