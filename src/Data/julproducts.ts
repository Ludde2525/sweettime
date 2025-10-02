export type PriceTier = {
  qtyLabel: string; // e.g., "250 st" or "10 kg"
  price: string; // e.g., "12,95 kr" eller "329 kr/kg"
  unit?: string; // optional unit suffix
  note?: string; // additional note
};

export type Variant = {
  title?: string;
  sku?: string;
  weight?: string;
  price?: string;
};

export type Product = {
  title: string;
  sku: string;
  shortDescription: string;
  longDescription: string;
  priceTiers?: PriceTier[];
  variants?: Variant[];
  weight?: string;
  setupCost?: string;
  repeatCost?: string;
  minOrder?: string;
  shelfLife?: string;
  packaging?: string;
  leadTime?: string;
  express?: string;
  images?: string[];
};

export const products: Product[] = [
  {
    title: "Liten Julkorg",
    sku: "61701",
    shortDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor! Lägg till kort 20:- för tydlig avsändare på korgen. Ingen kliché vid standard design – vid egen design tillkommer kliché 600:-.",
    images: [
      "/images/jul/litenjulkorg-01.jpg",
      "/images/jul/kort-till-korg-01.jpg",
    ],
  },

  {
    title: "Mellan Julkorg",
    sku: "61702",
    shortDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor! Lägg till kort 20:- för tydlig avsändare på korgen. Ingen kliché vid standard design – vid egen design tillkommer kliché 600:-.",
    images: [
      "/images/jul/mellan-julkorg-01.jpg",
      "/images/jul/kort-till-korg-01.jpg",
    ],
  },

  {
    title: "Stor Julkorg",
    sku: "61703",
    shortDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor! Lägg till kort 20:- för tydlig avsändare på korgen. Ingen kliché vid standard design – vid egen design tillkommer kliché 600:-.",
    images: [
      "/images/jul/stor-julkorg-01.jpg",
      "/images/jul/mega-julkorg-01.jpg",
    ],
  },

  {
    title: "Jätte Julkorg",
    sku: "61700",
    shortDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Korg med blandat inslaget varumärkesgodis och pralinkulor! Lägg till kort 20:- för tydlig avsändare på korgen. Ingen kliché vid standard design – vid egen design tillkommer kliché 600:-.",
    images: [
      "/images/jul/mega-julkorg-01.jpg",
      "/images/jul/kort-till-korg-01.jpg",
    ],
  },

  {
    title: "Liten Julsäck",
    sku: "61716",
    shortDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor! Tomte och 'God jul och Gott Nytt år'-hälsning är standard – tryck till logga direkt på säcken eller julkort som knyts i snöret för tydlig avsändare!",
    images: ["/images/jul/liten-julsack-01.jpg"],
  },

  {
    title: "Mellan Julsäck",
    sku: "61704",
    shortDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor! Tomte och 'God jul och Gott Nytt år'-hälsning är standard – tryck till logga direkt på säcken eller julkort som knyts i snöret för tydlig avsändare!",
    images: ["/images/jul/mellan-julsack-01.jpg"],
  },

  {
    title: "Stor Julsäck",
    sku: "61705",
    shortDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor! Tomte och 'God jul och Gott Nytt år'-hälsning är standard – tryck till logga direkt på säcken eller julkort som knyts i snöret för tydlig avsändare!",
    images: ["/images/jul/stor-julsack-01.jpg"],
  },

  {
    title: "Jätte Julsäck",
    sku: "61708",
    shortDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor.",
    longDescription:
      "Säck med blandat inslaget varumärkesgodis och pralinkulor! Tomte och 'God jul och Gott Nytt år'-hälsning är standard – tryck till logga direkt på säcken eller julkort som knyts i snöret för tydlig avsändare!",
    images: ["/images/jul/mega-julsack-01.jpg"],
  },

  {
    title: "Trälåda liten",
    sku: "61736",
    shortDescription: "Trälåda med mixade pralinkulor eller varumärkesgodis.",
    longDescription:
      "Trälåda med mixade pralinkulor eller varumärkesgodis! Minsta kvantitet vid bränning 50 lådor, annars lägg till julkort med standardmotiv!",
    images: ["/images/jul/wood-box-liten-01.jpg"],
  },

  {
    title: "Trälåda liten Drivved",
    sku: "61736-standard",
    shortDescription:
      "Trälåda i drivved med blandat inslaget varumärkesgodis eller pralinkulor.",
    longDescription:
      "Trälåda i drivved med blandat inslaget varumärkesgodis eller pralinkulor.",
    images: [
      "/images/jul/box-drivved-liten-01.jpg",
      "/images/jul/wood-box-liten-01.jpg",
    ],
  },

  {
    title: "Trälåda mellan",
    sku: "61737",
    shortDescription:
      "Klassisk trälåda med blandat inslaget varumärkesgodis eller pralinkulor.",
    longDescription:
      "Klassisk trälåda med blandat inslaget varumärkesgodis eller pralinkulor.",
    images: ["/images/jul/wood-box-mellan-01.jpg"],
  },

  {
    title: "Trälåda mellan Drivved",
    sku: "9393",
    shortDescription: "Trälåda med mixade pralinkulor eller varumärkesgodis.",
    longDescription:
      "Trälåda med mixade pralinkulor eller varumärkesgodis! Minsta kvantitet vid bränning 50 lådor, annars lägg till julkort med standardmotiv!",
    images: ["/images/jul/box-drivved-mellan-01.jpg"],
  },

  {
    title: "Trälåda stor",
    sku: "61738",
    shortDescription:
      "Klassisk trälåda med blandat inslaget varumärkesgodis eller pralinkulor.",
    longDescription:
      "Klassisk trälåda med blandat inslaget varumärkesgodis eller pralinkulor.",
    images: ["/images/jul/wood-box-stor-01.jpg"],
  },

  {
    title: "Trälåda stor Drivved",
    sku: "9395",
    shortDescription: "Trälåda med mixade pralinkulor eller varumärkesgodis.",
    longDescription:
      "Trälåda med mixade pralinkulor eller varumärkesgodis! Minsta kvantitet vid bränning 50 lådor, annars lägg till julkort med standardmotiv!",
    images: ["/images/jul/box-drivved-stor-01.jpg"],
  },

  {
    title: "Plåtburk med pepparkakor låg",
    sku: "617262",
    shortDescription: "Pepparkakor i plåtburk med egen etikett.",
    longDescription:
      "Pepparkakor i plåtburk med egen etikett! Inget digitaltryck!",
    images: ["/images/jul/pepparkaka-liten-01.png"],
  },

  {
    title: "Plåtburk med pepparkakor hög",
    sku: "61744",
    shortDescription: "Pepparkakor i plåtburk med egen etikett.",
    longDescription:
      "Pepparkakor i plåtburk med egen etikett! Inget digitaltryck!",
    images: [
      "/images/jul/pepparkaka-stor-01.png",
      "/images/jul/pepparkaka-stor-02.png",
      "/images/jul/pepparkaka-stor-03.png",
      "/images/jul/pepparkaka-stor-04.png",
      "/images/jul/pepparkaka-stor-05.png",
    ],
  },

  {
    title: "Adventshus",
    sku: "9531-9532",
    shortDescription:
      "NYHET! Räkna ner till julafton med söta adventshus fyllda med godis.",
    longDescription:
      "NYHET! Räkna ner till julafton med söta adventshus. I varje hus finns överraskande gott godis! Finns i ett mindre och ett större utförande. Minsta antal: 25 st. Tryck din logotyp på brickan i 4-färgstryck (CMYK), husen är standard. Tryckt standardmotiv och egen logotyp i 4-färgstryck ingår. För helt egen design på brickan tillkommer en klichékostnad på 1000 kr per design.",
    images: ["/images/jul/adventshus-01.png", "/images/jul/adventshus-02.png"],
    variants: [
      { title: "Julehus", sku: "9531", weight: "187 g", price: "129 kr" },
      { title: "Pepparkakshus", sku: "9532", weight: "187 g", price: "129 kr" },
    ],
  },

  {
    title: "Julkula röd",
    sku: "9430",
    shortDescription: "Nyhet! Röd julgranskula i plåt fylld med godis.",
    longDescription:
      "Nyhet! Röd julgranskula i plåt fylld med varumärkesmix, tryfflar, pralinkulor eller Lindtkulor – levereras i förpackning med din hälsning/logo! Tryck direkt på kula mot tillägg 30:-/tryck. Minst antal: 50 st.",
    images: [
      "/images/jul/julkula-01.png",
      "/images/jul/julkula-02.png",
      "/images/jul/julkula-03.png",
    ],
    variants: [
      { title: "Varumärkesmix", weight: "140 g", price: "119 kr" },
      { title: "Pralinkulor", weight: "140 g", price: "119 kr" },
      { title: "Tryfflar kola salt", weight: "140 g", price: "119 kr" },
      { title: "Lindtkulor", weight: "140 g", price: "139 kr" },
    ],
  },

  {
    title: "Julkula guld",
    sku: "9433",
    shortDescription: "Nyhet! Guldig julgranskula i plåt fylld med godis.",
    longDescription:
      "Nyhet! Guldig julgranskula i plåt fylld med varumärkesmix, tryfflar, pralinkulor eller Lindtkulor – levereras i förpackning med din hälsning/logo! Tryck direkt på kula mot tillägg 30:-/tryck. Minst antal: 50 st.",
    images: [
      "/images/jul/julkula-guld-01.png",
      "/images/jul/julkula-guld-02.png",
      "/images/jul/julkula-guld-03.png",
    ],
    variants: [
      { title: "Varumärkesmix", weight: "140 g", price: "119 kr" },
      { title: "Pralinkulor", weight: "140 g", price: "119 kr" },
      { title: "Tryfflar kola salt", weight: "140 g", price: "119 kr" },
      { title: "Lindtkulor", weight: "140 g", price: "139 kr" },
    ],
  },

  {
    title: "Strutar",
    sku: "9034",
    shortDescription:
      "Strutar med juligt innehåll i standarddesign eller egen design.",
    longDescription:
      "Välj standarddesign på våra strutar eller designa dem själv för att sedan få dem levererade med juligt innehåll! Minsta antal: 25 st, vid större antal skickas separat offert. Tryck i 4-färgstryck (CMYK). För helt egen design på förpackningen tillkommer en klichékostnad på 100 kr per design.",
    images: ["/images/jul/strutar-01.png"],
    variants: [
      { title: "Grenna kolor", weight: "80 g", price: "59 kr" },
      { title: "Skumtomtar", weight: "50 g", price: "59 kr" },
      { title: "Marsipanpraliner", weight: "75 g", price: "69 kr" },
      { title: "Tryfflar kola/salt", weight: "100 g", price: "69 kr" },
    ],
  },
];
