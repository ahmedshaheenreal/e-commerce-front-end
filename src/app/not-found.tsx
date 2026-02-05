import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <div className="relative">
                <h1 className="text-9xl font-extrabold text-primary opacity-10">404</h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-high-emphasis">Page Not Found</h2>
                </div>
            </div>

            <p className="mt-6 text-lg text-low-emphasis max-w-md">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/">
                    <Button size="lg" className="px-8 py-6 text-lg rounded-full shadow-lg hover:translate-y-[-2px] transition-transform">
                        Back to Home
                    </Button>
                </Link>
                <Link href="/search/all">
                    <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full border-primary text-primary hover:bg-primary/5 transition-colors">
                        Our Products
                    </Button>
                </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-low-emphasis opacity-60">
                <div>
                    <h4 className="font-semibold text-high-emphasis mb-2">Need help?</h4>
                    <p>Contact our support team 24/7</p>
                </div>
                <div>
                    <h4 className="font-semibold text-high-emphasis mb-2">Quick Links</h4>
                    <p>My Orders • Profile • Wishlist</p>
                </div>
                <div>
                    <h4 className="font-semibold text-high-emphasis mb-2">Shopping</h4>
                    <p>Free delivery on orders over $50</p>
                </div>
            </div>
        </div>
    );
}
