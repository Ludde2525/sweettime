import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Site/Navbar";
import Footer from "../components/Site/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Sweet Time UF – Premium godis i bulk",
    template: "%s | Sweet Time UF",
  },
  description:
    "Sweet Time UF erbjuder premiumgodis i bulk för privatpersoner, företag och föreningar. Skräddarsydda paket, profilprodukter och snabba leveranser. Begär offert via e-post.",
  keywords: [
    "godis i bulk",
    "profilprodukter",
    "presentkorgar",
    "företagsgåvor",
    "Sweet Time UF",
  ],
  authors: [{ name: "Sweet Time UF", url: "https://sweettime-uf.se" }],
  metadataBase: new URL("https://sweettime-uf.se"),
  alternates: { canonical: "https://sweettime-uf.se" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Sweet Time UF – Premium godis i bulk",
    description:
      "Premiumgodis och profilprodukter i bulk för privatpersoner, företag och föreningar. Begär offert via e-post.",
    url: "https://sweettime-uf.se",
    siteName: "Sweet Time UF",
    images: [
      {
        url: "/images/sweettime-vit-loggo.png",
        alt: "Sweet Time UF logotyp",
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sweet Time UF – Premium godis i bulk",
    description:
      "Premiumgodis och profilprodukter i bulk för privatpersoner, företag och föreningar.",
    images: ["/images/sweettime-vit-loggo.png"],
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
