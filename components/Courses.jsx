"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import { courses } from "@/data/courses";
import { gsap, useGSAP } from "@/lib/gsap";

// Desktop: the section pins and the track pans sideways as you scroll (canonical horizontal-pan).
// Mobile and reduced motion: a plain swipeable row with scroll-snap.
export default function Courses() {
  const root = useRef(null);
  const viewport = useRef(null);
  const track = useRef(null);
  const bar = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const distance = () => track.current.scrollWidth - window.innerWidth;
        gsap.set(viewport.current, { overflowX: "hidden" });

        gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(bar.current, { scaleX: self.progress }),
          },
        });
      });
    },
    { scope: root },
  );

  return (
    <section id="courses" ref={root} className="relative bg-white lg:h-[100dvh]">
      <div ref={viewport} className="snap-x snap-mandatory overflow-x-auto lg:h-full lg:snap-none">
        <div
          ref={track}
          className="flex w-max items-stretch gap-5 px-5 py-20 sm:px-6 lg:h-full lg:items-center lg:gap-6 lg:px-8 lg:py-0"
        >
          <div className="flex w-[84vw] shrink-0 snap-start flex-col justify-center gap-6 sm:w-[420px] lg:w-[30vw] lg:pr-10">
            <h2 className="text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
              Six programmes, each built around a real clinical role.
            </h2>
            <p className="max-w-[40ch] text-lg leading-relaxed text-teal-950/75">
              Every programme pairs classroom theory with supervised practice in a working lab or ward.
            </p>
            <div>
              <Link
                href="/courses"
                className="inline-flex h-12 items-center whitespace-nowrap rounded-full px-6 text-sm font-semibold text-teal-950 ring-1 ring-teal-950/25 transition hover:bg-teal-50"
              >
                View all courses
              </Link>
            </div>
          </div>

          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article
                key={course.id}
                className="group relative h-[500px] w-[78vw] shrink-0 snap-start overflow-hidden rounded-[28px] bg-teal-950 shadow-lg ring-1 ring-teal-950/15 sm:w-[340px] lg:h-[min(66dvh,600px)] lg:w-[360px]"
              >
                <Image
                  src={course.image}
                  alt={course.alt}
                  fill
                  sizes="(min-width: 1024px) 360px, 80vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/95 via-teal-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 text-white">
                  <span className="grid size-11 place-items-center rounded-full bg-teal-600 text-white shadow-xs">
                    <Icon size={20} />
                  </span>
                  <h3 className="text-2xl font-semibold leading-tight tracking-tight">{course.title}</h3>
                  <p className="text-sm leading-relaxed text-teal-100/80">{course.summary}</p>
                  <p className="flex items-center justify-between border-t border-white/20 pt-3 text-sm font-semibold">
                    <span className="text-teal-200">{course.duration}</span>
                    <span className="inline-flex items-center gap-1.5">
                      View course
                      <LuArrowUpRight size={16} />
                    </span>
                  </p>
                </div>
                <Link
                  href={`/courses/${course.id}`}
                  aria-label={`View ${course.title}`}
                  className="absolute inset-0 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-teal-300"
                />
              </article>
            );
          })}
        </div>
      </div>

      <div aria-hidden="true" className="absolute inset-x-8 bottom-10 hidden h-px bg-teal-950/15 lg:block">
        <div ref={bar} className="h-full origin-left scale-x-0 bg-teal-700" />
      </div>
    </section>
  );
}
