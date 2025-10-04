import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebook, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-700 bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4 mb-8">
          <div className="md:col-span-2">
            <Image
              src="/images/sweettime-vit-loggo.png"
              alt="Sweet Time UF"
              width={120}
              height={64}
              className="h-16 w-auto mb-4"
            />
            <h3 className="text-2xl mb-3 text-white font-semibold">
              Sweet Time UF
            </h3>
            <p className="text-gray-300 max-w-prose">
              Premium godis och choklad för privatpersoner, företag och
              föreningar. Vi skapar magiska stunder genom kvalitetsprodukter och
              personlig service.
            </p>
            <div className="mt-4 flex items-center text-gray-300">
              <FiMapPin className="mr-2" />
              <span>Mjölby, Östergötland</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-4 font-semibold text-white">Kontakt</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div>
                <p className="font-medium text-white">Ludvig Hedlund</p>
                <p>Verkställande Direktör</p>
                <p className="flex items-center gap-2">
                  <FiPhone /> 076 794 29 82
                </p>
              </div>
              <div>
                <p className="font-medium text-white">Gabriel Kass Alias</p>
                <p>Vice VD - Ekonomiansvarig</p>
                <p className="flex items-center gap-2">
                  <FiPhone /> 070 459 93 67
                </p>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <FiMail />{" "}
                <a
                  className="hover:text-gray-300"
                  href="mailto:lg.sweets10@gmail.com"
                >
                  lg.sweets10@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl mb-4 font-semi text-white">Länkar</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link className="hover:text-gray-300" href="/#hem">
                  Hem
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/produkter">
                  Produkter
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/#om-oss">
                  Om oss
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-300" href="/#kontakt">
                  Kontakt
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-gray-300"
                  href="https://www.instagram.com/sweet_timeuf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaInstagram /> Instagram
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-300"
                  href="https://www.facebook.com/profile.php?id=61581595476624"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaFacebook /> Facebook
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-gray-300"
                  href="https://ungforetagsamhet.se/company/sweet-time-uf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <FaGlobe /> UF-sida
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-700 pt-6 text-sm text-gray-300">
          <div>
            © {new Date().getFullYear()} Sweet Time UF. Alla rättigheter
            förbehållna.
          </div>
          <div className="mt-2 md:mt-0">
            Kod och Design:{" "}
            <span className="text-gray-300 font-medium">
              <a
                href="https://www.kodochdesign.se"
                target="_blank"
                rel="noopener noreferrer"
              >
                Josefine Eriksson
              </a>
            </span>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="mailto:lg.sweets10@gmail.com"
            aria-label="Maila offertförfrågan"
            className="inline-flex items-center px-6 py-3 bg-gray-300 text-black rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
          >
            Maila offertförfrågan
          </a>
        </div>
      </div>
    </footer>
  );
}
