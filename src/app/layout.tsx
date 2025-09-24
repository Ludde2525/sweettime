import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Site/Navbar";
import Footer from "../components/Site/Footer";

export const metadata: Metadata = {
  title: "Sweet Time UF - Premium Godis i Bulk",
  description:
    "Premium godis och profilprodukter för privatpersoner, företag och föreningar. Begär offert via e-post.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sweet Time UF",
    description: "Premium godis och profilprodukter i bulk.",
    type: "website",
  },
};

import { Quicksand } from "next/font/google";
import { cn } from "@/lib/utils";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-dvh bg-gray-900 text-gray-200 font-body antialiased",
          quicksand.variable
        )}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
