import type {Metadata} from "next";
import {Geist, Geist_Mono, Roboto, Manrope} from "next/font/google";
import "./globals.css";

const roboto = Roboto({subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto'});
const manrope = Manrope({subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-manrope'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Matheus Melo",
    description: "Matheus Melo's Portfolio",
    icons: {icon: "/M.ico"}
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${manrope.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
