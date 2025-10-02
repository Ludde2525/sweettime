"use client";

import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import type { Product } from "../../Data/products";
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

// Ensure there is only ever ONE modal root in the document (avoids duplicate flashing in dev / StrictMode)
function ensureModalRoot(): HTMLElement {
  const id = "__sweettime_modal_root";
  let el = document.getElementById(id) as HTMLElement | null;
  if (!el) {
    el = document.createElement("div");
    el.id = id;
    document.body.appendChild(el);
  }
  return el;
}

export default function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const img = product.images?.[0] ?? "/images/placeholder.png";
  const modalRootRef = useRef<HTMLElement | null>(null);

  // Prepare portal root AFTER mount (prevents hydration mismatch & duplicate nodes)
  useEffect(() => {
    modalRootRef.current = ensureModalRoot();
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // Lock body scroll & esc handler
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, handleClose]);

  // Modal element (portal content) kept separate for clarity
  const modalContent =
    open && modalRootRef.current
      ? createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
            aria-modal="true"
            role="dialog"
            onClick={handleClose}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            {/* Modal shell */}
            <div
              className="relative w-[92vw] max-w-[1400px] max-h-[90vh] flex flex-col bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 px-8 pt-6 pb-4 border-b border-gray-700">
                <h2 className="font-display text-2xl md:text-3xl text-white leading-snug">
                  {product.title} — {product.sku}
                </h2>
                <button
                  onClick={handleClose}
                  aria-label="Stäng"
                  className="text-gray-400 hover:text-white text-3xl leading-none px-2"
                >
                  ×
                </button>
              </div>
              {/* Body (scrollable only inside) */}
              <div className="flex-1 overflow-y-auto px-8 pb-8 pt-4">
                <div className="grid gap-10 xl:gap-12 md:grid-cols-2">
                  <div className="relative w-full aspect-[4/3] rounded-lg font-bold overflow-hidden bg-gray-700">
                    <ImageCarousel
                      images={product.images ?? [img]}
                      alt={product.title}
                      className="h-full"
                    />
                  </div>
                  <div className="space-y-6 text-base text-gray-300 leading-relaxed">
                    <p className="whitespace-pre-line">
                      {product.longDescription}
                    </p>
                    {product.priceTiers?.length ? (
                      <div>
                        <h3 className="font-semibold text-white text-lg mb-3">
                          Pris
                        </h3>
                        <ul className="list-disc pl-6 space-y-1.5">
                          {product.priceTiers.map((p, i) => (
                            <li key={i}>
                              {p.qtyLabel}: {p.price} {p.unit ?? "kr"}
                              {p.note ? ` — ${p.note}` : ""}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                      {product.weight && (
                        <div>
                          <span className="text-gray-400">Vikt:</span>{" "}
                          {product.weight}
                        </div>
                      )}
                      {product.minOrder && (
                        <div>
                          <span className="text-gray-400">Minsta order:</span>{" "}
                          {product.minOrder}
                        </div>
                      )}
                      {product.shelfLife && (
                        <div>
                          <span className="text-gray-400">Hållbarhet:</span>{" "}
                          {product.shelfLife}
                        </div>
                      )}
                      {product.packaging && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-400">Förpackning:</span>{" "}
                          {product.packaging}
                        </div>
                      )}
                      {product.leadTime && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-400">Leveranstid:</span>{" "}
                          {product.leadTime}
                        </div>
                      )}
                      {product.express && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-400">Expressorder:</span>{" "}
                          {product.express}
                        </div>
                      )}
                      {(product.setupCost || product.repeatCost) && (
                        <div className="sm:col-span-2">
                          <span className="text-gray-400">Klichékostnad:</span>{" "}
                          {product.setupCost}
                          {product.repeatCost
                            ? ` • Repetitionsorder: ${product.repeatCost}`
                            : ""}
                        </div>
                      )}
                    </div>
                    <div>
                      <a
                        href={`mailto:lg.sweets10@gmail.com?subject=Offertförfrågan: ${encodeURIComponent(
                          product.title
                        )} (${product.sku})`}
                        className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg"
                      >
                        Maila offertförfrågan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          modalRootRef.current
        )
      : null;

  return (
    <>
      <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
        <Image
          src={img}
          alt={product.title}
          width={400}
          height={288}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h3 className="font-display text-xl text-white mb-3">
            {product.title}
          </h3>
          <p className="text-xs text-gray-400 mb-2">Art. nr: {product.sku}</p>
          <p className="text-gray-400 mb-4">{product.shortDescription}</p>
          <button
            onClick={handleOpen}
            className="bg-gray-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Läs mer!
          </button>
        </div>
      </div>
      {modalContent}
    </>
  );
}
