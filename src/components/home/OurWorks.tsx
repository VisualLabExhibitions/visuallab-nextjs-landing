"use client"

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function OurWorks() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/images/OurWorks/01.webp",
    "/images/OurWorks/02.webp",
    "/images/OurWorks/03.webp",
    "/images/OurWorks/04.webp",
    "/images/OurWorks/05.webp",
    "/images/OurWorks/06.webp",
  ];

  return (
    <section className="py-16 bg-gray-100" id="our-works">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[var(--theme-primary)]">
          From concept to creation, our work defines exhibition excellence
        </h2>

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl shadow-xl hover:shadow-2xl transition duration-300 bg-white cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="relative aspect-[15/9] overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  fill
                  className="object-contain p-2 "
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Popup Modal */}
     {/* Popup Modal */}
<AnimatePresence>
  {selectedIndex !== null && (
    <motion.div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Image container with responsive sizing */}
      <div className="relative flex justify-center items-center 
                      w-full max-w-[95vw] 
                      sm:max-h-[80vh] 
                      md:max-h-[100vh] md:max-w-[80vw] 
                      bg-black/90 rounded-lg p-2">

        {/* Close Button */}
        <button
          onClick={() => setSelectedIndex(null)}
          className="absolute top-2 right-2 text-white text-3xl z-50 cursor-pointer"
        >
          ✕
        </button>

        {/* Swiper Container */}
        <Swiper
          modules={[Navigation]}
          navigation
          initialSlide={selectedIndex}
          className="w-full h-full flex justify-center items-center"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center w-full h-full"
            >
              {/* Image wrapper */}
              <div className="w-full h-full  flex justify-center items-center">
                <img
                  src={src}
                  alt={`Popup ${index}`}
                  className="object-contain "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
}