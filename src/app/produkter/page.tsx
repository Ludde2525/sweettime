import ProductCard from "../../components/products/ProductCard";
import { products } from "../../Data/products";

export const metadata = {
  title: "Produkter — Sweet Time UF",
};

export default function ProductsPage() {
  return (
    <section className="py-16 bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="mb-12 text-center space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Våra Produkter
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Upptäck vårt sortiment av högkvalitativa produkter, noggrant utvalt
            för att möta dina behov
          </p>
        </div>

        {/* Enhanced Grid with Staggered Animation Effect */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p, index) => (
            <div
              key={p.sku}
              className="transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Hittar du inte vad du letar efter?
            </h2>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Kontakta oss så hjälper vi dig att hitta den perfekta lösningen
              för dina behov
            </p>
            <a
              href="mailto:lg.sweets10@gmail.com?subject=Allmän förfrågan"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-300 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Kontakta oss
              <svg
                className="ml-2 w-4 h-4"
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
    </section>
  );
}
