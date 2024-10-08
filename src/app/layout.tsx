import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBarNav from "../components/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BHI Viajes y Turismo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <TopBarNav />
        </header>
        {children}
        <footer>
          <p>BHI Viajes - info@bhiviajes.com.ar - Tel: 0291 - 4566070 - Caronti 127, Bahía Blanca, Argentina</p>
        </footer>
      </body>
    </html>
  );
}
