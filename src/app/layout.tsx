import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopBarNav from "../components/TopNavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "BHI Viajes y Turismo",
  description: "Agencia de viajes en Bahia Blanca con experiencias a medida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <header>
          <TopBarNav />
        </header>
        {children}
      </body>
    </html>
  );
}
