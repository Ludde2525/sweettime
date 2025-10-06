"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt?: string;
  className?: string;
};

export default function ImageCarousel({
  images,
  alt = "",
  className = "",
}: Props) {
  const [current, setCurrent] = useState(0);
  const [srcs, setSrcs] = useState<string[]>(images ?? []);

  useEffect(() => setSrcs(images ?? []), [images]);

  const hasImages = Array.isArray(srcs) && srcs.length > 0;
  const total = hasImages ? srcs.length : 0;

  const prev = useCallback(() => {
    if (!hasImages) return;
    setCurrent((i) => (i - 1 + total) % total);
  }, [hasImages, total]);

  const next = useCallback(() => {
    if (!hasImages) return;
    setCurrent((i) => (i + 1) % total);
  }, [hasImages, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (!hasImages) {
    return (
      <div className={`w-full h-64 bg-gray-800 rounded-lg ${className}`} />
    );
  }

  return (
    <div
      className={`w-full select-none ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Main image */}
      {/* Use viewport-based height on small screens so images are more visible in modals on mobile */}
      <div className="relative w-full overflow-hidden rounded-xl bg-black/20 h-[50vh] md:h-[420px]">
        <Image
          src={srcs[current]}
          alt={alt}
          fill
          className="object-contain bg-gray-900"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          onError={() => {
            setSrcs((prev) =>
              prev.map((s, i) =>
                i === current ? "/images/placeholder.png" : s
              )
            );
          }}
        />

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Föregående bild"
              className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/50 hover:bg-black/60 text-white w-9 h-9"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Nästa bild"
              className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/50 hover:bg-black/60 text-white w-9 h-9"
            >
              ›
            </button>

            <div className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/60 text-white">
              {current + 1} / {total}
            </div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {total > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {srcs.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`relative shrink-0 border rounded-lg overflow-hidden ${
                i === current
                  ? "border-yellow-400 ring-2 ring-yellow-400/40"
                  : "border-gray-700"
              }`}
              aria-label={`Välj bild ${i + 1}`}
              title={`Bild ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${alt} – bild ${i + 1}`}
                width={64}
                height={64}
                className="h-16 w-16 object-cover bg-gray-800"
                onError={() => {
                  setSrcs((prev) =>
                    prev.map((s, idx) =>
                      idx === i ? "/images/placeholder.png" : s
                    )
                  );
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
