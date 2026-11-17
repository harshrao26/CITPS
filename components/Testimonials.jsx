"use client";

import { useRef, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";
import { testimonials } from "@/data/testimonials";
import { gsap, useGSAP } from "@/lib/gsap";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const card = useRef(null);
  const current = testimonials[index];
  const go = (step) => setIndex((value) => (value + step + testimonials.length) % testimonials.length);

  // Feedback for the control: the new quote lifts into place instead of snapping.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo("[data-quote]", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
      });
    },
    { scope: card, dependencies: [index] },
  );

  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className="flex flex-col justify-between gap-10 lg:col-span-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
              What students say
            </h2>
            <p className="text-base text-teal-950/70">
              Hear from graduates and current scholars about their clinical learning journey.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => go(-1)}
              className="grid size-14 place-items-center rounded-full text-teal-950 ring-1 ring-teal-950/20 transition hover:bg-teal-50 active:scale-[0.96]"
            >
              <LuArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => go(1)}
              className="grid size-14 place-items-center rounded-full bg-teal-700 text-white shadow-xs transition hover:bg-teal-800 active:scale-[0.96]"
            >
              <LuArrowRight size={20} />
            </button>
          </div>
        </div>

        <figure
          ref={card}
          className="flex min-h-[400px] flex-col justify-between gap-10 rounded-[28px] bg-teal-950 p-8 text-white shadow-xl ring-1 ring-teal-950/20 md:p-12 lg:col-span-8"
        >
          <span className="grid size-14 place-items-center rounded-full bg-teal-600 text-white shadow-xs">
            <RiDoubleQuotesL size={26} />
          </span>
          <div data-quote className="flex flex-col gap-8">
            <blockquote className="text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col gap-1 border-t border-teal-800/60 pt-6">
              <span className="text-lg font-semibold text-white">{current.name}</span>
              <span className="text-sm text-teal-200/80">{current.role}</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
