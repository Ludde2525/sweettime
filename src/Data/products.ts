export type PriceTier = {
  qtyLabel: string; // e.g., "250 st" or "10 kg"
  price: string; // e.g., "12,95 kr" or "329 kr/kg"
  unit?: string; // optional unit suffix
  note?: string; // additional note
};

export type Product = {
  title: string;
  sku: string;
  shortDescription: string;
  longDescription: string;
  priceTiers?: PriceTier[];
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
    title: "Tuggummi 6-pack",
    sku: "8041",
    shortDescription:
      "Sockerfria tuggummin med mintsmak i blister med sleeve i egen design. CMYK-tryck fram/bak. FSC-märkt, 30% xylitol.",
    longDescription:
      "Sockerfria tuggummin med mintsmak i praktisk blisterförpackning tillsammans med en sleeve i din design. Tryck är möjligt på både fram- och baksida. Sleeven är FSC-märkt, klimatkompenserad och innehåller 30 % xylitol.",
    priceTiers: [
      { qtyLabel: "250 st", price: "12,95 kr" },
      { qtyLabel: "1000 st", price: "10,95 kr" },
      { qtyLabel: "3000 st", price: "9,95 kr" },
    ],
    weight: "8 g",
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 8 månader",
    packaging: "Kartong om 250 st (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: [
      "/images/products/Tuggummi-6-pack-01.jpg",
      "/images/products/Tuggummi-6-pack-02.jpg",
    ],
  },
  {
    title: "Mixade klubbor, rund",
    sku: "15306",
    shortDescription:
      "Rundklubbor i smakerna jordgubb, mandarin, citron, päron och cola. Etikett som tillval.",
    longDescription:
      "Rundklubba i smakerna jordgubb, mandarin, citron, päron och cola.",
    priceTiers: [
      { qtyLabel: "200 st", price: "1,60 kr" },
      { qtyLabel: "200 st med etikett", price: "3,20 kr" },
    ],
    weight: "5,2 g",
    setupCost: "1000 kr/design (CMYK på etikett)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 12 månader",
    packaging:
      "Påse om 200 st, 6 påsar per kartong (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: ["/images/products/Mixade-klubbor-01.jpg"],
  },
  {
    title: "Clic Clac",
    sku: "1927",
    shortDescription:
      "Klassisk mintask fylld med fräscha minttabletter. Flera färger och din design.",
    longDescription:
      "Klassisk mintask fylld med fräscha minttabletter. Finns i flera färger och trycks med din design.",
    priceTiers: [
      { qtyLabel: "144 st", price: "24 kr" },
      { qtyLabel: "288 st", price: "22 kr" },
      { qtyLabel: "576 st", price: "20 kr" },
      { qtyLabel: "1152 st", price: "19 kr" },
    ],
    weight: "12 g",
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 24 månader",
    packaging: "Kartong om 144 st",
    leadTime: "ca 3 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: [
      "/images/products/Clic-Clac-02.jpg",
      "/images/products/Clic-Clac-01.jpg",
    ],
  },
  {
    title: "Mintbox",
    sku: "1932",
    shortDescription:
      "Mintbox fylld med fräscha minttabletter, tryckt med din logotyp i önskad färg.",
    longDescription:
      "Mintbox fylld med fräscha minttabletter, tryckt med din logotyp i önskad färg.",
    priceTiers: [
      { qtyLabel: "144 st", price: "26 kr" },
      { qtyLabel: "288 st", price: "24 kr" },
      { qtyLabel: "576 st", price: "22 kr" },
      { qtyLabel: "1152 st", price: "21 kr" },
    ],
    weight: "23 g",
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 24 månader",
    packaging: "Kartong om 144 st",
    leadTime: "ca 3 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: ["/images/products/mintbox-01.jpg"],
  },
  {
    title: "Pringles 40 g",
    sku: "5015",
    shortDescription:
      "Pringles-burk, välj Original, Sourcream & Onion eller Paprika. Egen design runt burken.",
    longDescription:
      "Burk med Pringles – välj mellan Original (salt), Sourcream & Onion eller Paprika. Din design trycks runt burken och du kan även lägga till etikett på locket.",
    priceTiers: [{ qtyLabel: "120 st", price: "39 kr" }],
    setupCost: "100 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 12 månader",
    packaging: "Kartong om 12 st",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: [
      "/images/products/pringles-01.jpg",
      "/images/products/pringles-02.jpg",
    ],
  },
  {
    title: "Energidryck",
    sku: "3073",
    shortDescription:
      "Svalkande energidryck med din design på etiketten runt burken. Pris enligt offert.",
    longDescription:
      "Svalkande energidryck med din design på etiketten runt burken.",
    priceTiers: [{ qtyLabel: "Pris", price: "enligt offert" }],
    packaging: "Levereras 24 st/platta",
    images: ["/images/products/Energidryck01.jpg"],
  },
  {
    title: "Ingefärsshot 60 ml",
    sku: "827",
    shortDescription:
      "Frisk och stark ingefärsshot. Etiketten runt flaskan trycks med din design. Pris enligt offert.",
    longDescription:
      "En frisk och stark ingefärsshot. Etiketten runt flaskan trycks med din design.",
    priceTiers: [{ qtyLabel: "Pris", price: "enligt offert" }],
    packaging: "Levereras 25 st/platta",
    images: ["/images/products/ingefarsshot-01.jpg"],
  },
  {
    title: "Tablettaskar",
    sku: "7010-1",
    shortDescription:
      "Storsäljare för både barn och vuxna. Fyll med tuggisar eller tabletter. Stor tryckyta. FSC-märkt, klimatkompenserad.",
    longDescription:
      "En storsäljare för både barn och vuxna. Fyll med mjuka tuggisar eller hårda tabletter. Generös tryckyta på fram, bak, sidor och lock. Trycks på FSC-märkt och klimatkompenserat papper.",
    priceTiers: [
      { qtyLabel: "100 st", price: "11,95 kr" },
      { qtyLabel: "500 st", price: "7,95 kr" },
      { qtyLabel: "1000 st", price: "7,25 kr" },
      { qtyLabel: "2000 st", price: "6,95 kr" },
      { qtyLabel: "4000 st", price: "6,55 kr" },
      { qtyLabel: "6000 st", price: "6,25 kr" },
      { qtyLabel: "10 000 st", price: "5,95 kr" },
    ],
    minOrder: "100 st",
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "12 månader",
    packaging:
      "50, 100 eller 250 askar (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: ["/images/products/Tablettaskar-01.jpg"],
  },
  {
    title: "Twistad choklad – smörkola",
    sku: "7046",
    shortDescription:
      "Chokladöverdragna smörkolor, klassiskt reklamgodis. Tydlig avsändare med logotyp.",
    longDescription:
      "Chokladöverdragna smörkolor, klassiskt reklamgodis som blir en tydlig avsändare med logotyp.",
    priceTiers: [
      { qtyLabel: "10 kg (ca 140 st/kg)", price: "329 kr/kg" },
      { qtyLabel: "30 kg", price: "279 kr/kg" },
      { qtyLabel: "120 kg", price: "259 kr/kg" },
      { qtyLabel: "210 kg", price: "249 kr/kg" },
    ],
    setupCost: "1200 kr/design (CMYK)",
    repeatCost: "600 kr/design",
    shelfLife: "ca 8 månader",
    packaging: "Kartong om 5 kg (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 3 veckor från godkänt korrektur",
    images: [
      "/images/products/Twistad-choklad-01.jpg",
      "/images/products/Twistad-choklad-02.jpg",
    ],
  },
  {
    title: "Vätskeersättning",
    sku: "8758",
    shortDescription:
      "Rör med vätskeersättning, smak citron. Etikett med egen design. Perfekt vid sport/varma dagar.",
    longDescription:
      "Rör med vätskeersättning, smak av citron. Etikett trycks med din design. Perfekt vid sport eller varma dagar.",
    priceTiers: [{ qtyLabel: "från 100 st", price: "39 kr" }],
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "18 månader",
    packaging: "Kartong om 100 st (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: ["/images/products/Vätskeersättning-01.png"],
  },
  {
    title: "Proteinbar flowpack RE:DO",
    sku: "8006-CHOKLAD",
    shortDescription:
      "Proteinbars: choklad, chokladboll, salt karamell, hallon. Digitalt CMYK-tryck.",
    longDescription:
      "Proteinbars i smakerna choklad, chokladboll, salt karamell och hallon. Din design trycks digitalt på flowpacken.",
    priceTiers: [
      { qtyLabel: "500 st", price: "39 kr" },
      { qtyLabel: "1000 st", price: "37 kr" },
      { qtyLabel: "3000 st", price: "35 kr" },
    ],
    setupCost: "1500 kr/design (CMYK)",
    repeatCost: "900 kr/design",
    shelfLife: "ca 8 månader",
    packaging: "Kartong om 50 st (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 3 veckor från godkänt korrektur",
    images: [
      "/images/products/Proteinbar-flowpack-01.png",
      "/images/products/Proteinbar-flowpack-02.png",
    ],
  },
  {
    title: "Müslibar flowpack",
    sku: "9448 / 9513-CHOKLAD",
    shortDescription:
      "Müslibar i smakerna choklad och kokos. Digitalt CMYK-tryck för tydlig avsändare.",
    longDescription:
      "Müslibars i smakerna choklad och kokos. Flowpacken trycks digitalt i CMYK för tydlig avsändare.",
    priceTiers: [
      { qtyLabel: "500 st (25 g / 40–50 g)", price: "22 kr / 29 kr" },
      { qtyLabel: "1000 st", price: "20 kr / 27 kr" },
      { qtyLabel: "2000 st", price: "18 kr / 25 kr" },
    ],
    setupCost: "1500 kr/design (CMYK)",
    repeatCost: "900 kr/design",
    shelfLife: "ca 8 månader",
    packaging: "Kartong om 50 st (15 kr extra om annan förpackning önskas)",
    leadTime: "ca 3 veckor från godkänt korrektur",
    images: [
      "/images/products/Muslibar-flowpack.png",
      "/images/products/Muslibar-flowpack-02.png",
      "/images/products/Muslibar-flowpack-03.png",
    ],
  },
  {
    title: "Chokladbitar express",
    sku: "7075",
    shortDescription:
      "Små chokladbitar med tryck runt omslaget. Guld-/silverfolie, mjölk- eller mörk choklad.",
    longDescription:
      "Små chokladbitar med tryck runt omslaget. Finns i guld- och silverfolie, mjölk- eller mörk choklad. Minsta kvantitet 570 bitar.",
    priceTiers: [
      { qtyLabel: "570 st", price: "5,95 kr" },
      { qtyLabel: "1140 st", price: "5,25 kr" },
      { qtyLabel: "2280 st", price: "4,95 kr" },
    ],
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 12 månader",
    packaging:
      "Svart standardkartong om 190 st (15 kr extra om annan packning eller sampackning önskas)",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: [
      "/images/products/Chokladbitar-express-01.png",
      "/images/products/Chokladbitar-express-02.png",
      "/images/products/Chokladbitar-express-03.png",
      "/images/products/Chokladbitar-express-04.png",
    ],
  },
  {
    title: "Choklad crisp",
    sku: "6471",
    shortDescription:
      "Elizabeth Shaws mint crisp, mörk eller mjölk. Logotyp på etikett ovanpå chokladen.",
    longDescription:
      "Elizabeth Shaws mint crisp i både mörk och mjölkchoklad. Logotyp trycks på etikett som placeras ovanpå chokladen. Mjölkchoklad i silverfolie och mörk i guldfolie.",
    priceTiers: [{ qtyLabel: "300 st", price: "5,85 kr" }],
    weight: "ca 6,3 g",
    setupCost: "1000 kr/design (CMYK)",
    repeatCost: "500 kr/design",
    shelfLife: "ca 6 månader",
    packaging: "Kartong om 300 st",
    leadTime: "ca 2 veckor från godkänt korrektur",
    express: "1 vecka, tillägg 1500 kr/order",
    images: [
      "/images/products/Choklad-crisp-01.png",
      "/images/products/Choklad-crisp-02.png",
    ],
  },
  {
    title: "Twistade karameller",
    sku: "7040-1",
    shortDescription:
      "Klassiska twistade karameller i många smaker. Trycks nu i CMYK för fler designmöjligheter.",
    longDescription:
      "De klassiska, twistade karamellerna i många olika smaker. Trycks nu i CMYK, vilket ger fler möjligheter för färg och design. Välj mellan metalliserat papper för att sticka ut lite extra, eller transparent papper så att innehållet syns lika bra som utsidan.",
    images: [
      "/images/products/Twistade-karameller-01.jpg",
      "/images/products/Twistade-karameller-02.jpg",
    ],
  },
];
