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
            <body className={`${inter.variable} ${outfit.variable} font-sans`}>
                <div className="bg-noise" />
                <Providers>
                    <div className="mx-auto max-w-[1390px] min-h-screen bg-background shadow-2xl border-x border-border/30 relative z-10">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}

