"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
  { image: "/images/banner1-2025.png" },
  { image: "/images/banner-3.webp" },
  { image: "/images/banner-2.webp" },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[600px] overflow-hidden">
      <AnimatePresence>
        {banners.map((banner, index) =>
          index === currentIndex ? (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={banner.image}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                quality={80}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Nút chuyển slide */}
      <button
        aria-label="Previous slide"
        onClick={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? banners.length - 1 : prev - 1
          )
        }
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base"
      >
        ❮
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % banners.length)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-2 sm:px-3 py-1 rounded-full text-sm sm:text-base"
      >
        ❯
      </button>
    </div>
  );
}
