"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuClock } from "react-icons/lu";
import { courseCategories, courses } from "@/data/courses";

// Category chips filter the list. Every card links to its own programme page.
export default function CourseExplorer() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? courses : courses.filter((course) => course.category === active);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter programmes by field">
          {courseCategories.map((category) => {
            const selected = active === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={selected}
                onClick={() => setActive(category)}
                className={`h-11 rounded-full px-5 text-sm font-semibold transition active:scale-[0.98] ${
                  selected
                    ? "bg-teal-700 text-white shadow-xs"
                    : "bg-white text-teal-950 ring-1 ring-teal-950/20 hover:ring-teal-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => {
            const Icon = course.icon;
            return (
              <li key={course.id}>
                <Link
                  href={`/courses/${course.id}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[28px] bg-white shadow-xs ring-1 ring-teal-950/10 transition duration-300 hover:shadow-lg hover:ring-teal-600/50"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden bg-teal-100">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 grid size-11 place-items-center rounded-full bg-white text-teal-700 shadow-sm">
                      <Icon size={20} />
                    </span>
                  </span>
                  <span className="flex flex-1 flex-col gap-3 p-6">
                    <span className="text-sm font-semibold text-teal-700">{course.category}</span>
                    <span className="text-2xl font-semibold leading-tight tracking-tight text-teal-950">{course.title}</span>
                    <span className="text-base leading-relaxed text-teal-950/70">{course.summary}</span>
                    <span className="mt-auto flex items-center justify-between border-t border-teal-950/10 pt-4 text-sm font-semibold">
                      <span className="inline-flex items-center gap-1.5 text-teal-950/75">
                        <LuClock size={16} />
                        {course.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-teal-700">
                        View course
                        <LuArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
