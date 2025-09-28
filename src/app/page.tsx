import Hero from "../components/Site/Hero";
import About from "../components/Site/About";
import Team from "../components/Site/Team";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <section id="kontakt" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl text-white mb-4">
              Kontakta Oss
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Har du en fråga eller vill du skicka en offertförfrågan? Kontakta
              oss så hör vi av oss!
            </p>
          </div>

          <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Skicka din offertförfrågan via e-post så återkommer vi!
            </p>
            <a
              href="mailto:lg.sweets10@gmail.com"
              className="bg-gray-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 inline-block"
            >
              Maila din offertförfrågan
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
