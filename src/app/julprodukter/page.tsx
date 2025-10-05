"use client";

import { useState, useEffect } from "react";
import ProductCard from "../../components/products/ProductCard";
import { products } from "../../Data/julproducts";
import type { Product } from "../../Data/products";

// Snöflinga-komponent
const Snowflake = ({
  delay,
  duration,
  left,
}: {
  delay: number;
  duration: number;
  left: number;
}) => (
  <div
    className="absolute text-white opacity-70 pointer-events-none animate-fall"
    style={{
      left: `${left}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      top: "-10px",
    }}
  >
    ❄
  </div>
);

export default function ChristmasProductsPage() {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: number; delay: number; duration: number; left: number }>
  >([]);

  useEffect(() => {
    // Skapa snöflingor
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      left: Math.random() * 100,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-900 via-red-800 to-green-900">
      {/* Snöflingor */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {snowflakes.map((flake) => (
          <Snowflake key={flake.id} {...flake} />
        ))}
      </div>

      {/* Dekorativa element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-900/20 to-transparent pointer-events-none"></div>

      {/* Julstjärnor i hörnen */}
      <div className="absolute top-8 left-8 text-yellow-300 text-4xl animate-pulse">
        ⭐
      </div>
      <div
        className="absolute top-8 right-8 text-yellow-300 text-4xl animate-pulse"
        style={{ animationDelay: "0.5s" }}
      >
        ⭐
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Header med juldekorationer */}
        <div className="mb-12 text-center space-y-6">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span
              className="text-5xl animate-bounce"
              style={{ animationDelay: "0s" }}
            >
              🎄
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
              Julprodukter
            </h1>
            <span
              className="text-5xl animate-bounce"
              style={{ animationDelay: "0.3s" }}
            >
              🎄
            </span>
          </div>

          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border-2 border-white/20">
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              🎅 Upptäck vårt utvalda julsortiment — perfekta gåvor och
              säsongsprodukter för företag och privatpersoner 🎁
            </p>
          </div>

          {/* Julgirlang-effekt */}
          <div className="flex justify-center gap-2 text-3xl my-6">
            <span className="animate-pulse">🔴</span>
            <span className="animate-pulse" style={{ animationDelay: "0.2s" }}>
              🟢
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.4s" }}>
              🔴
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.6s" }}>
              🟢
            </span>
            <span className="animate-pulse" style={{ animationDelay: "0.8s" }}>
              🔴
            </span>
          </div>
        </div>

        {/* Produktgrid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p: Product, index: number) => (
            <div
              key={p.sku}
              className="transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Kontaktkort */}
        <div className="mt-16 text-center">
          <div className="relative bg-gradient-to-br from-green-800/90 to-red-900/90 backdrop-blur-sm border-2 border-white/30 rounded-3xl p-8 shadow-2xl overflow-hidden">
            {/* Dekorativa snöflingor i kortet */}
            <div className="absolute top-4 left-4 text-white/20 text-6xl">
              ❄
            </div>
            <div className="absolute bottom-4 right-4 text-white/20 text-6xl">
              ❄
            </div>

            <div className="relative z-10">
              <div className="text-5xl mb-4">🎁</div>
              <h2 className="text-2xl font-bold mb-4 text-white drop-shadow-md">
                Begär offert
              </h2>
              <p className="text-white/90 mb-6 max-w-md mx-auto text-lg">
                Begär en offert direkt — ange produktnamn eller dina önskemål i
                mailet så återkommer vi så snart som möjligt.
              </p>
              <a
                href={`mailto:lg.sweets10@gmail.com?subject=${encodeURIComponent(
                  "Offertförfrågan: Julprodukter"
                )}`}
                className="inline-flex items-center px-8 py-4 bg-white text-red-800 rounded-xl font-bold hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                ✉️ Begär offert
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer-dekoration */}
        <div className="mt-12 flex justify-center gap-4 text-4xl">
          <span className="animate-bounce">🎅</span>
          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
            🤶
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
            🦌
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </section>
  );
}
