export default function Team() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl text-white mb-4">Vårt Team</h2>
          <p className="text-lg text-gray-400">
            Lär känna teamet bakom Sweet Time UF
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-display">LH</span>
            </div>
            <h3 className="font-display text-2xl mb-2">Ludvig Hedlund</h3>
            <p className="text-xl mb-4 opacity-90">Verkställande Direktör</p>
            <p className="mb-6 opacity-80 leading-relaxed">
              Ludvig är företagets VD och har det övergripande ansvaret för
              Sweet Time. Han leder verksamheten, ser till att företaget följer
              sina mål och fattar beslut samt håller ihop arbetet inom gruppen.
            </p>
            <div className="text-sm opacity-90">
              <p className="mb-1">📞 076 794 29 82</p>
              <p>✉️ lg.sweets10@gmail.com</p>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-4xl font-display">GK</span>
            </div>
            <h3 className="font-display text-2xl mb-2">Gabriel Kass Alias</h3>
            <p className="text-xl mb-4 opacity-90">Vice VD - Ekonomiansvarig</p>
            <p className="mb-6 opacity-80 leading-relaxed">
              Gabriel är ekonomiansvarig och ansvarar för företagets ekonomi.
              Han sköter bokföring, budgetering, fakturering och kontrollerar
              både inkomster och utgifter.
            </p>
            <div className="text-sm opacity-90">
              <p className="mb-1">📞 070 459 93 67</p>
              <p>✉️ lg.sweets10@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
