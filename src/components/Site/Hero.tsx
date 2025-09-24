"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Slide = {
  title: string;
  text: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Premium Chokladupplevelser",
    text: "Upptäck vårt exklusiva utbud av handplockade chokladkreationer",
    image: "/images/bildspel-hero/Choklad20Image.webp",
  },
  {
    title: "Ekologiska Godisalternativ",
    text: "Njut av våra miljövänliga produkter och flexibla profiltryck",
    image: "/images/bildspel-hero/Good202023.webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const max = useMemo(() => slides.length, []);
  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % max), 5000);
    return () => clearInterval(id);
  }, [max]);

  return (
    <section
      id="hem"
      className="relative bg-gray-800 h-96 md:h-[500px] flex items-center w-full"
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative w-full px-4 sm:px-6 lg:px-8 text-center text-white">
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 animate-pulse">
          Sweet Time UF
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto font-light">
          Premium godis som skapar magiska stunder för privatpersoner, företag
          och föreningar
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/produkter"
            className="bg-gray-700 text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105"
          >
            Utforska Våra Produkter
          </Link>
          <Link
            href="/#om-oss"
            className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all"
          >
            Läs Mer Om Oss
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Gå till slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
