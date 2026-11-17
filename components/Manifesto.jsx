"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";

// Words are plain strings; objects are small inline photos that sit in the sentence.
const tokens = [
  "Behind",
  "every",
  "diagnosis,",
  { image: "/images/course-lab.jpg" },
  "every",
  "scan",
  { image: "/images/course-radiology.jpg" },
  "and",
  "every",
  "surgery",
  { image: "/images/course-theatre.jpg" },
  "is",
  "a",
  "trained",
  "professional",
  "you",
  "rarely",
  "see.",
  "CITPS",
  "prepares",
  "the",
  "people",
  "who",
  "make",
  "healthcare",
  "work.",
];

export default function Manifesto() {
  const root = useRef(null);

  // Reading pace is tied to scroll, so the sentence lands one word at a time.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-word]",
          { opacity: 0.18 },
          {
            opacity: 1,
            ease: "none",
            stagger: 0.1,
            scrollTrigger: { trigger: root.current, start: "top 72%", end: "bottom 60%", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="border-y border-teal-100/80 bg-teal-50/40 py-24 md:py-36">
      <p className="mx-auto max-w-6xl px-5 text-[2rem] font-medium leading-[1.2] tracking-tight text-teal-950 sm:px-6 md:text-5xl lg:px-8 lg:text-[3.75rem]">
        {tokens.map((token, index) =>
          typeof token === "string" ? (
            <span key={index} data-word className="mr-[0.26em] inline-block">
              {token}
            </span>
          ) : (
            <span
              key={index}
              data-word
              aria-hidden="true"
              className="relative mr-[0.26em] inline-block h-[0.82em] w-[1.5em] translate-y-[0.1em] overflow-hidden rounded-full bg-teal-100 ring-2 ring-teal-600/25 shadow-xs"
            >
              <Image src={token.image} alt="" fill sizes="120px" className="object-cover" />
            </span>
          ),
        )}
      </p>
    </section>
  );
}
