export default function About() {
  return (
    <section id="om-oss" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-semibold text-white mb-6">
            Om Sweet Time UF
          </h2>
        </div>

        <div className="bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white mb-6">
                Om oss
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sweet Time UF erbjuder ett brett sortiment av kvalitetsgodis
                från Karamello AB via en enkel och användarvänlig hemsida. Våra
                kunder är både privatpersoner, företag och föreningar som vill
                njuta av vardagen, skapa helgmys eller beställa personliga
                presenter.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Vi erbjuder dessutom möjligheten att specialdesigna godisboxar
                och förpackningar, vilket gör våra produkter perfekta för
                bröllop, mässor eller andra evenemang.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
                  Personlig Service
                </span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
                  Snabb Leverans
                </span>
                <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm">
                  Kvalitetsgodis
                </span>
              </div>
            </div>
            <div className="bg-gray-700 rounded-2xl p-8 text-white">
              <h4 className="font-display text-xl mb-4">Våra Fördelar</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Smidig e-handel
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Specialdesignade lådor
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7-293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Engagerad kundservice
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
