"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight, LuArrowRight } from "react-icons/lu";
import { heroSlides } from "@/data/bmsitData";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#231F20] min-h-[560px] sm:min-h-[620px] lg:min-h-[680px]">
      {heroSlides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 visible" : "opacity-0 z-0 pointer-events-none invisible"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover object-center scale-100 transition-transform duration-7000 ease-out"
            />
            {/* BMSIT High-Contrast Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/35 z-10" />

            {/* Slide Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 sm:px-8 lg:px-12 pt-16 pb-36">
              <div className="max-w-2xl flex flex-col gap-4">
                <span className="inline-block w-fit rounded-md bg-[#FF3B3B] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                  {slide.badge}
                </span>

                <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15] drop-shadow-md">
                  {slide.title}
                </h1>

                <p className="text-base text-white/95 font-medium leading-relaxed sm:text-lg drop-shadow-sm max-w-2xl">
                  {slide.subtitle}
                </p>

                {/* BMSIT Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a href="#admissions" className="btn-two-full">
                    <span>{slide.ctaPrimary}</span>
                    <LuArrowRight size={16} />
                  </a>
                  <a href="#programs" className="btn-four-full">
                    <span>{slide.ctaSecondary}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev & Next Controls (Matches BMSIT .carousel-control-prev/next) */}
      <div className="absolute bottom-24 right-8 z-30 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={prevSlide}
          className="grid size-12 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/30 transition hover:bg-[#FF3B3B] hover:ring-[#FF3B3B]"
        >
          <LuChevronLeft size={22} />
        </button>

        <span className="text-sm font-bold text-white px-2 font-mono">
          0{current + 1} / 0{heroSlides.length}
        </span>

        <button
          type="button"
          aria-label="Next slide"
          onClick={nextSlide}
          className="grid size-12 place-items-center rounded-full bg-black/40 text-white ring-1 ring-white/30 transition hover:bg-[#FF3B3B] hover:ring-[#FF3B3B]"
        >
          <LuChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
