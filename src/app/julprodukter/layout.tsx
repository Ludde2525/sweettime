import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julprodukter",
  description:
    "Upptäck vårt utvalda julsortiment med premiumgodis och julprodukter. Perfekta gåvor och säsongsprodukter för företag och privatpersoner.",
  keywords: [
    "julprodukter",
    "julgodis",
    "julklapp företag",
    "julpresentkorgar",
    "Sweet Time UF jul",
    "godis jul",
  ],
  openGraph: {
    title: "Julprodukter — Sweet Time UF",
    description:
      "Upptäck vårt utvalda julsortiment — perfekta gåvor och säsongsprodukter för företag och privatpersoner.",
    images: ["/images/sweettime-vit-loggo.png"],
  },
};

export default function ChristmasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
