import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="text-center space-y-6 animate-fade-in">
                <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    404
                </h1>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        Page Not Found
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
                        Oops! The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                </div>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Link href="/">
                        Return Home
                    </Link>
                </Button>
            </div>
        </div>
    );
}
