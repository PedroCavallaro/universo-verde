import "./globals.css";
import type { Metadata } from "next";
import { Inter, Judson } from "next/font/google";
import Header from "./components/Header/Header";
import { Providers } from "./providers/Providers";

const inter = Inter({ subsets: ["latin"] });
const judson = Judson({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-title",
});

export const metadata: Metadata = {
    title: "Universo Verde",
    description: "My Portifólio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <Providers>
                <body
                    className={`${inter.className} ${judson.variable} flex flex-col`}
                >
                    <Header />
                    {children}
                </body>
            </Providers>
        </html>
    );
}
