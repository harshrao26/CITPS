"use client";

import { useState } from "react";
import Image from "next/image";
import { LuCompass, LuEye, LuMapPin, LuCalendar, LuSparkles, LuMaximize2 } from "react-icons/lu";
import { virtualTourHotspots } from "@/data/bmsitData";

export default function VirtualTour360() {
  const [activeSpot, setActiveSpot] = useState(virtualTourHotspots[0]);
  const [isRotating, setIsRotating] = useState(true);

  return (
    <section id="virtual-tour" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      {/* BMSIT Signature Red Bottom Accent Band (.home-360-bg:after) */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[32%] bg-[#FF3B3B] z-0 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading matching BMSIT */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FF3B3B]">
              Campus Walkthrough
            </h3>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#231F20] mt-1">
              CITPS <strong>Interactive 360 Virtual Tour</strong>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contact" className="btn-two-full">
              <LuCalendar size={15} />
              <span>BOOK CAMPUS VISIT</span>
            </a>
          </div>
        </div>

        {/* 360 Virtual Tour Viewer Frame matching BMSIT .home-360-bg iframe */}
        <div className="relative w-full aspect-[16/9] min-h-[480px] max-h-[620px] rounded-[14px] sm:rounded-[20px] overflow-hidden shadow-[0_20px_60px_0_rgba(0,0,0,0.3)] border-2 border-white bg-[#231F20]">
          {/* Active Hotspot Background Image */}
          <Image
            src={activeSpot.image}
            alt={activeSpot.name}
            fill
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className={`object-cover transition-transform duration-1000 ${
              isRotating ? "scale-105" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#231F20]/90 via-[#231F20]/20 to-transparent" />

          {/* Interactive Top HUD Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 rounded-full bg-[#231F20]/80 backdrop-blur-md px-4 py-1.5 text-white border border-white/20 text-xs font-semibold pointer-events-auto">
              <span className="size-2 rounded-full bg-[#FF3B3B] animate-ping" />
              <LuCompass size={14} className="text-[#3A74B8]" />
              <span>360 Virtual Hotspot Active</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                type="button"
                onClick={() => setIsRotating(!isRotating)}
                className="rounded-full bg-[#231F20]/80 backdrop-blur-md px-3.5 py-1.5 text-xs text-white border border-white/20 hover:bg-[#231F20] transition"
              >
                {isRotating ? "Pause View" : "Resume Pan"}
              </button>
            </div>
          </div>

          {/* Hotspot Floating Caption Box */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-2xl rounded-2xl bg-[#231F20]/85 backdrop-blur-md p-4 sm:p-5 border border-white/20 text-white shadow-xl">
              <div className="flex items-center gap-2 text-[#FF3B3B] text-xs font-bold uppercase tracking-wider mb-1">
                <LuMapPin size={13} />
                <span>CITPS Campus Facility</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight !text-white">{activeSpot.name}</h3>
              <p className="mt-1.5 text-xs sm:text-sm !text-gray-100 line-clamp-2 max-w-xl font-medium">
                {activeSpot.desc}
              </p>
            </div>

            {/* Hotspot Switcher Pills inside frame */}
            <div className="flex flex-wrap gap-2">
              {virtualTourHotspots.map((spot) => {
                const isSelected = spot.id === activeSpot.id;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setActiveSpot(spot)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition duration-200 ${
                      isSelected
                        ? "bg-[#FF3B3B] text-white shadow-md"
                        : "bg-[#231F20]/80 text-white/90 hover:bg-[#231F20] border border-white/20"
                    }`}
                  >
                    {spot.name.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
