"use client";

import { useRef } from "react";
import { LuBadgeCheck, LuClipboardCheck, LuFileText, LuListChecks } from "react-icons/lu";
import { gsap, useGSAP } from "@/lib/gsap";

const steps = [
  {
    word: "Choose",
    icon: LuListChecks,
    title: "Pick the course that fits",
    text: "Compare programmes and choose the clinical role you want to train for.",
    tone: "bg-teal-950 text-white shadow-md",
    sub: "text-teal-100/80",
    chip: "bg-teal-600 text-white shadow-xs",
  },
  {
    word: "Apply",
    icon: LuFileText,
    title: "Send your application",
    text: "Share your academic records and contact details with the admissions team.",
    tone: "bg-teal-700 text-white shadow-md",
    sub: "text-teal-100/90",
    chip: "bg-white text-teal-800 shadow-xs",
  },
  {
    word: "Qualify",
    icon: LuClipboardCheck,
    title: "Clear the selection",
    text: "Admission is by merit or entrance test, depending on the programme you choose.",
    tone: "bg-white text-teal-950 ring-1 ring-teal-200/80 shadow-md",
    sub: "text-teal-950/75",
    chip: "bg-teal-50 text-teal-800 ring-1 ring-teal-200",
  },
  {
    word: "Enrol",
    icon: LuBadgeCheck,
    title: "Confirm your seat",
    text: "Finish document verification and the fee payment to lock your place in the batch.",
    tone: "bg-teal-50 text-teal-950 ring-1 ring-teal-200/60 shadow-md",
    sub: "text-teal-950/75",
    chip: "bg-teal-700 text-white shadow-xs",
  },
];

// Sticky stack: each card pins near the top and the previous one settles back as the next arrives.
export default function Admissions() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const wraps = gsap.utils.toArray("[data-stack]");
        wraps.forEach((wrap, i) => {
          if (i === wraps.length - 1) return;
          gsap.to(wrap.firstElementChild, {
            scale: 0.94,
            ease: "none",
            scrollTrigger: { trigger: wraps[i + 1], start: "top 88%", end: "top 28%", scrub: true },
          });
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="admissions" ref={root} className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
          From first enquiry to first class
        </h2>

        <div className="mt-14 flex flex-col gap-6 pb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.word} data-stack className="sticky" style={{ top: `${96 + index * 14}px` }}>
                <article
                  className={`grid origin-top items-end gap-8 rounded-[28px] p-7 md:p-10 lg:min-h-[340px] lg:grid-cols-12 ${step.tone}`}
                >
                  <p className="text-[4.5rem] font-semibold leading-[0.85] tracking-tighter sm:text-[7rem] lg:col-span-7 lg:text-[9.5rem]">
                    {step.word}
                  </p>
                  <div className="flex flex-col gap-4 lg:col-span-5">
                    <span className={`grid size-12 place-items-center rounded-full ${step.chip}`}>
                      <Icon size={22} />
                    </span>
                    <h3 className="text-2xl font-semibold tracking-tight">{step.title}</h3>
                    <p className={`max-w-[42ch] text-base leading-relaxed ${step.sub}`}>{step.text}</p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
