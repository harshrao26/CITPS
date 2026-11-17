"use client";

import { LuBell, LuArrowRight } from "react-icons/lu";
import { announcementItems, quickBadges } from "@/data/bmsitData";

export default function AnnouncementTicker() {
  return (
    <section className="relative z-20 -mt-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Exact BMSIT .home-announcement-box style */}
        <div className="bms-glass-card p-5 sm:p-7 bg-white/95">
          {/* Top Row: Marquee Ticker */}
          <div className="flex items-center gap-4 pb-4 border-b border-[#ececec]">
            <div className="flex items-center gap-2 shrink-0">
              <span className="flex size-7 items-center justify-center rounded-full bg-[#FF3B3B] text-white">
                <LuBell size={14} className="animate-bounce" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#231F20] hidden sm:inline">
                Latest Announcements
              </span>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div className="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-semibold text-[#231F20]">
                {announcementItems.concat(announcementItems).map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="inline-flex items-center gap-2 hover:text-[#FF3B3B] whitespace-nowrap transition"
                  >
                    <span className="rounded bg-[#3A74B8] px-2 py-0.5 text-[10px] font-bold text-white uppercase">
                      {item.tag}
                    </span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#news-events"
              className="text-xs font-bold text-[#3A74B8] hover:text-[#FF3B3B] whitespace-nowrap shrink-0 hidden md:inline-flex items-center gap-1"
            >
              <span>View All</span>
              <LuArrowRight size={13} />
            </a>
          </div>

          {/* Bottom Row: Quick Action Links (Matches BMSIT Brochure / Fees / Bus Routes strip) */}
          <div className="flex items-center gap-3 pt-3 overflow-x-auto scrollbar-none text-xs font-semibold text-[#444] whitespace-nowrap">
            {quickBadges.map((badge, idx) => (
              <a
                key={badge.label}
                href={badge.href}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f5f5f5] hover:bg-[#3A74B8] hover:text-white transition"
              >
                <span className="size-1.5 rounded-full bg-[#FF3B3B]" />
                <span>{badge.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
