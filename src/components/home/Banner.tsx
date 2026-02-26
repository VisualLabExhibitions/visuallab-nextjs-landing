"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HomePageSlider() {
  const slides = [
    {
      image: "/images/banner-test.png",
      title: "Global Experts in Exhibition Stand Design & Build",
      description:
        "Experience world-class exhibition solutions with Visual Lab. From the UAE to Europe and the UK, we deliver outstanding design, build, and execution for every event — on time, every time, with guaranteed quality and precision.",
      buttonText: "Explore Now",
      buttonLink: "#",
    },
    {
      image: "/images/banner4.png",
      title: "Global Experts in Exhibition Stand Design & Build",
      description:
        "Experience world-class exhibition solutions with Visual Lab. From the UAE to Europe and the UK, we deliver outstanding design, build, and execution for every event — on time, every time, with guaranteed quality and precision.",
      buttonText: "Explore Now",
      buttonLink: "#",
    },
    {
      image: "/images/banner3.jpg",
      title: "Global Experts in Exhibition Stand Design & Build",
      description:
        "Experience world-class exhibition solutions with Visual Lab. From the UAE to Europe and the UK, we deliver outstanding design, build, and execution for every event — on time, every time, with guaranteed quality and precision.",
      buttonText: "Explore Up",
      buttonLink: "#",
    },
  ];

  return (
    <div className="relative w-full aspect-[16/9] md:h-[650px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="h-full">
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/50">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-4xl">
                  {slide.title}
                </h2>

                <p className="hidden md:block text-white text-lg mb-6 max-w-5xl">
                  {slide.description}
                </p>

                <a
                  href={slide.buttonLink}
                  className="bg-[var(--theme-primary)] hover:bg-[#400719] text-white px-6 py-3 rounded-md font-semibold transition"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}