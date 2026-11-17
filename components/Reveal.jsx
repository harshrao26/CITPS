"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Fades and lifts a block into place once as it enters the viewport. Skipped under reduced motion.
export default function Reveal({ children, className = "", delay = 0, y = 40 }) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(ref.current, {
          y,
          opacity: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
