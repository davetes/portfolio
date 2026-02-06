import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

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
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Providers>
                    <div className="mx-auto max-w-[1390px] min-h-screen bg-background shadow-2xl border-x border-border/50">
                        {children}
                    </div>
                </Providers>
            </body>
        </html>
    );
}

