"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  title: string;
  text: string;
  image: string;
};

const slides: Slide[] = [
  {
    title: "Müslibar flowpack",
    text: "Müslibar i smakerna choklad och kokos. Perfekt som mellanmål eller snacks",
    image: "/images/bildspel/Muslibar-flowpack.png",
  },
  {
    title: "Chokladbitar express",
    text: "Små chokladbitar med tryck runt omslaget. Perfekt för event och giveaways",
    image: "/images/bildspel/Chokladbitar-express-01.png",
  },

    {
    title: "Twistad Choklad",
    text: "Chokladöverdragna smörkolor, klassiskt reklamgodis.",
    image: "/images/bildspel/Twistad-choklad-01.jpg",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const max = useMemo(() => slides.length, []);
  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % max), 5000);
    return () => clearInterval(id);
  }, [max]);

  const prev = () => setCurrent((i) => (i - 1 + max) % max);
  const next = () => setCurrent((i) => (i + 1) % max);

  return (
    <section className="py-16 bg-white" id="hem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-semibold text-4xl text-gray-900 mb-4">
            Våra Specialiteter
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Upptäck vårt handplockade sortiment av premium godis och choklad
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full aspect-[4/3] md:aspect-[3/2]">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === current ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  priority={i === current}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}

            <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8 z-10">
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">
                  {slides[current].title}
                </h3>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                  {slides[current].text}
                </p>
                <div className="mt-6">
                  <Link
                    href="/produkter"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition"
                  >
                    Se Produkter!
                  </Link>
                </div>
              </div>
            </div>

            <button
              aria-label="Föregående"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              aria-label="Nästa"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Gå till slide ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-opacity ${
                    i === current ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
