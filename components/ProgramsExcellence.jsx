"use client";

import { useState } from "react";
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";

const excellenceItems = [
  {
    id: 1,
    title: "UNDER GRADUATE",
    subtitle: "B.Sc Allied Health Sciences (4 Years)",
    desc: "B.Sc Medical Laboratory Technology, Radiology & Imaging, Operation Theatre Tech, and Physiotherapy.",
    image: "/images/hero-lab.jpg",
    link: "#program-finder",
  },
  {
    id: 2,
    title: "POST GRADUATE",
    subtitle: "M.Sc & Master Programs (2 Years)",
    desc: "Advanced diagnostic pathology, functional radiation imaging, and clinical neuromuscular physiotherapy.",
    image: "/images/classroom.jpg",
    link: "#program-finder",
  },
  {
    id: 3,
    title: "DIPLOMA COURSES",
    subtitle: "State Paramedical Board Recognized (2 Years)",
    desc: "DMLT, Medical X-Ray, Dialysis Support, and Surgical Operation Theatre Assistantship.",
    image: "/images/course-theatre.jpg",
    link: "#program-finder",
  },
];

export default function ProgramsExcellence() {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <section id="programs" className="relative py-20 lg:py-28 z-10 -mb-20">
      {/* Container with BMSIT .home-excellence-bg rounded #F4F3F3 background */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] bg-[#F4F3F3] p-8 sm:p-12 lg:p-16 shadow-sm border border-[#ececec]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (5 columns) matching BMSIT text layout */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-normal leading-[1.12] text-[#231F20]">
                Where <span className="block font-medium">Healthcare</span> Meets Excellence
              </h2>

              <p className="text-base leading-relaxed !text-[#333333] font-medium text-justify">
                At Central Institute of Technical and Paramedical Sciences, we nurture clinical talent,
                inspire diagnostic innovation, and prepare students to lead in a rapidly evolving healthcare world.
                With state-of-the-art simulation labs and structured rotations in premier hospitals, our graduates
                excel from day one.
              </p>

              <div className="pt-2">
                <a href="#admissions" className="btn-one-full">
                  <span>APPLY NOW</span>
                  <LuArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Column: Expandable Image Accordion matching BMSIT .home-excellence-list */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row gap-3 h-auto sm:h-[450px] w-full overflow-hidden">
                {excellenceItems.map((item) => {
                  const isActive = activeItem === item.id;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveItem(item.id)}
                      onClick={() => setActiveItem(item.id)}
                      className={`relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-700 ease-out border-4 border-white shadow-md ${
                        isActive
                          ? "sm:flex-[3] h-64 sm:h-[450px]"
                          : "sm:flex-[1] h-32 sm:h-[450px] opacity-90 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />

                      {/* Content Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t from-[#231F20] via-[#231F20]/75 to-transparent flex flex-col justify-end p-6 text-white transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-80 sm:opacity-0 hover:opacity-100"
                        }`}
                      >
                        <span className="text-[11px] font-extrabold text-[#FF3B3B] uppercase tracking-wider mb-1 drop-shadow-xs">
                          {item.subtitle}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight !text-white drop-shadow-sm">
                          {item.title}
                        </h3>
                        {isActive && (
                          <p className="mt-2 text-xs sm:text-sm !text-gray-100 font-medium line-clamp-2 drop-shadow-xs">
                            {item.desc}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
