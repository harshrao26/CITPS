"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

const spaces = [
  {
    title: "Clinical skills lab",
    text: "Practise procedures on training models before you work with patients.",
    image: "/images/clinical-training.jpg",
    alt: "Students practise on a training mannequin in a clinical skills lab",
  },
  {
    title: "Diagnostic laboratory",
    text: "Learn sample handling and testing at a real laboratory bench.",
    image: "/images/hero-lab.jpg",
    alt: "A student works with a microscope in a medical laboratory",
  },
  {
    title: "Classrooms",
    text: "Teaching rooms where theory connects directly to the labs you use next.",
    image: "/images/classroom.jpg",
    alt: "Students in white coats attend a lecture beside an anatomical model",
  },
  {
    title: "Green campus",
    text: "A modern building with open space around it, built for focused study.",
    image: "/images/campus.jpg",
    alt: "The CITPS campus building with a green lawn in front",
  },
];

// Desktop: the section pins and the photo changes as each space becomes active.
// Mobile and reduced motion: the same four spaces as a simple stacked list.
export default function Campus() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const slides = gsap.utils.toArray("[data-slide]");
        const items = gsap.utils.toArray("[data-item]");

        gsap.set(slides.slice(1), { opacity: 0, scale: 1.08 });
        gsap.set(items.slice(1), { opacity: 0.35 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 2.4}`,
            pin: true,
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        slides.forEach((slide, i) => {
          if (i === 0) return;
          tl.to(slide, { opacity: 1, scale: 1, duration: 1 }, i - 1)
            .to(slides[i - 1], { opacity: 0, duration: 1 }, i - 1)
            .to(items[i], { opacity: 1, duration: 0.6 }, i - 1)
            .to(items[i - 1], { opacity: 0.35, duration: 0.6 }, i - 1);
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="campus" ref={root} className="bg-surface py-24 lg:flex lg:h-[100dvh] lg:items-center lg:py-0">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:col-span-5">
          <h2 className="text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
            Learn where the work happens
          </h2>

          <ul className="hidden flex-col gap-7 lg:flex">
            {spaces.map((space) => (
              <li key={space.title} data-item className="flex flex-col gap-1 border-l-2 border-teal-700 pl-5">
                <h3 className="text-xl font-semibold tracking-tight text-teal-950">{space.title}</h3>
                <p className="max-w-[40ch] text-base leading-relaxed text-teal-950/70">{space.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-[28px] bg-teal-950 shadow-xl ring-1 ring-teal-950/10 lg:col-span-7 lg:block lg:h-[68dvh] lg:aspect-auto">
          {spaces.map((space, index) => (
            <div key={space.title} data-slide className="absolute inset-0">
              <Image
                src={space.image}
                alt={space.alt}
                fill
                sizes="58vw"
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile fallback: standard stacked list */}
        <div className="flex flex-col gap-10 lg:hidden">
          {spaces.map((space) => (
            <div key={space.title} className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-teal-50 ring-1 ring-teal-950/10">
                <Image src={space.image} alt={space.alt} fill sizes="90vw" className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-teal-950">{space.title}</h3>
              <p className="text-base leading-relaxed text-teal-950/70">{space.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
