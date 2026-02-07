import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Tesfahun Kere | Portfolio",
    description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${inter.variable} ${outfit.variable} font-sans overflow-x-hidden bg-background text-foreground`}>
                <div className="bg-noise" />

                {/* Frame Borders */}
                <div className="fixed top-0 left-0 w-full h-2 md:h-4 bg-background z-[100] border-b border-border/20" />
                <div className="fixed bottom-0 left-0 w-full h-2 md:h-4 bg-background z-[100] border-t border-border/20" />
                <div className="fixed top-0 left-0 w-2 md:w-4 h-full bg-background z-[100] border-r border-border/20" />
                <div className="fixed top-0 right-0 w-2 md:w-4 h-full bg-background z-[100] border-l border-border/20" />

                {/* Corner Accents */}
                <div className="fixed top-2 left-2 md:top-4 md:left-4 w-4 h-4 border-t-2 border-l-2 border-primary z-[101]" />
                <div className="fixed top-2 right-2 md:top-4 md:right-4 w-4 h-4 border-t-2 border-r-2 border-primary z-[101]" />
                <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 w-4 h-4 border-b-2 border-l-2 border-primary z-[101]" />
                <div className="fixed bottom-2 right-2 md:bottom-4 md:right-4 w-4 h-4 border-b-2 border-r-2 border-primary z-[101]" />

                <Providers>
                    {/* Main Content Area - Full Width with Paddings for Frame */}
                    <div className="min-h-screen relative z-10 pt-2 pb-2 px-2 md:pt-4 md:pb-4 md:px-4">
                        <div className="rounded-3xl border border-border/40 bg-card/30 overflow-hidden shadow-2xl min-h-[calc(100vh-1rem)] md:min-h-[calc(100vh-2rem)] relative">
                            {children}
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}

