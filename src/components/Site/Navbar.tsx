"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/sweettime-vit-loggo.png"
              alt="Sweet Time UF Logo"
              width={48}
              height={48}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/#hem"
                className="text-white hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Hem
              </Link>
              <Link
                href="/produkter"
                className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Produkter
              </Link>
              <Link
                href="/julprodukter"
                className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Julprodukter
              </Link>
              <Link
                href="/#om-oss"
                className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Om Oss
              </Link>
              <Link
                href="/#kontakt"
                className="text-gray-400 hover:text-gray-200 px-3 py-2 text-sm font-medium transition-colors"
              >
                Kontakt
              </Link>
              <a
                href="mailto:lg.sweets10@gmail.com"
                className="bg-gray-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                Begär Offert
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-white hover:text-gray-200 p-2"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/#hem"
              className="block px-3 py-2 text-white hover:text-gray-200 font-medium"
              onClick={() => setOpen(false)}
            >
              Hem
            </Link>
            <Link
              href="/produkter"
              className="block px-3 py-2 text-gray-400 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Produkter
            </Link>
            <Link
              href="/julprodukter"
              className="block px-3 py-2 text-gray-400 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Julprodukter
            </Link>
            <Link
              href="/#om-oss"
              className="block px-3 py-2 text-gray-400 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Om Oss
            </Link>
            <Link
              href="/#kontakt"
              className="block px-3 py-2 text-gray-400 hover:text-gray-200"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>
            <a
              href="mailto:lg.sweets10@gmail.com"
              className="w-full mt-2 bg-gray-700 text-white px-6 py-2 rounded-full font-medium inline-block text-center"
              onClick={() => setOpen(false)}
            >
              Begär Offert
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
