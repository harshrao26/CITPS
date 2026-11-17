"use client";

import { useRef } from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import HeroEnquiry from "@/components/HeroEnquiry";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

// Composition follows the regulator sites: a solid deep panel with a photo on the right,
// then an enquiry card that straddles the panel edge. Elements start hidden only when motion is allowed.
export default function Hero() {
  const root = useRef(null);
  const title = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Headline lines rise out of a mask first: it is the hierarchy anchor for the page.
        SplitText.create(title.current, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) => {
            gsap.set(title.current, { opacity: 1 });
            return gsap.from(self.lines, { yPercent: 115, duration: 1.1, ease: "power4.out", stagger: 0.12 });
          },
        });

        gsap.fromTo(
          "[data-hero-fade]",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12, delay: 0.5 },
        );

        gsap.fromTo(
          "[data-hero-photo]",
          { opacity: 0, scale: 1.06 },
          { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" },
        );

        // The enquiry card arrives last so it reads as the next action after the headline.
        gsap.fromTo(
          "[data-hero-card]",
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.9 },
        );
      });
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <section className="relative isolate overflow-hidden bg-teal-950 text-white">
        <div aria-hidden="true" data-hero-photo className="absolute inset-0 -z-10 lg:left-auto lg:w-[58%]">
          <Image
            src="/images/hero-portrait.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-0 bg-teal-950/80 lg:hidden" />
          <div className="absolute inset-0 hidden bg-linear-to-r from-teal-950 via-teal-950/55 to-teal-950/10 lg:block" />
        </div>

        <div className="mx-auto max-w-7xl px-5 pb-40 pt-16 sm:px-6 md:pt-20 lg:px-8 lg:pb-44 lg:pt-24">
          <div className="flex max-w-2xl flex-col gap-7 lg:max-w-[44rem]">
            <h1
              ref={title}
              className="text-[2.75rem] font-semibold leading-[1.05] tracking-tighter text-white motion-safe:opacity-0 sm:text-6xl lg:text-[5rem]"
            >
              Care starts with <em className="pr-2 italic text-teal-300">skilled hands</em>.
            </h1>
            <p data-hero-fade className="max-w-[46ch] text-lg leading-relaxed text-teal-50/85 motion-safe:opacity-0">
              Career-focused paramedical programmes with hands-on labs, real clinical exposure and teachers who have
              worked in hospitals.
            </p>
            <div data-hero-fade className="motion-safe:opacity-0">
              <a
                href="#courses"
                className="group inline-flex h-14 items-center justify-center gap-3 whitespace-nowrap rounded-full bg-teal-300 pl-7 pr-2 text-base font-semibold text-teal-950 transition hover:bg-teal-200 active:scale-[0.98]"
              >
                Explore courses
                <span className="grid size-10 place-items-center rounded-full bg-teal-950 text-teal-200 transition group-hover:translate-x-0.5">
                  <LuArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Layer: z-10 lets the card sit above the panel edge it overlaps. */}
      <div className="relative z-10 mx-auto -mt-28 max-w-7xl px-5 sm:px-6 lg:-mt-24 lg:px-8">
        <div data-hero-card className="motion-safe:opacity-0">
          <HeroEnquiry />
        </div>
      </div>
    </div>
  );
}
