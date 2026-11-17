"use client";

import Link from "next/link";
import { LuPhone, LuMail, LuShieldAlert } from "react-icons/lu";
import { topUtilityLinks } from "@/data/bmsitData";
import { site } from "@/data/site";

export default function TopUtilityBar() {
  const phoneHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

  return (
    <div className="bg-teal-950 text-teal-100 text-xs border-b border-teal-900/60">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left Utility Links (Exact BMSIT top-xtra-menu) */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none py-1">
          <span className="hidden lg:inline-flex items-center gap-1.5 font-semibold text-teal-300">
            <span className="size-2 rounded-full bg-teal-400 animate-pulse" />
            Admissions Open 2026-27
          </span>

          <nav aria-label="Quick Access" className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">
            {topUtilityLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-white hover:underline underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Contact & Helpline */}
        <div className="hidden md:flex items-center gap-4 shrink-0 text-[11.5px]">
          <a
            href={phoneHref}
            className="inline-flex items-center gap-1.5 text-teal-200 transition hover:text-white"
          >
            <LuPhone size={12} className="text-teal-400" />
            <span>Admissions: {site.contact.phone}</span>
          </a>
          <a
            href={`mailto:${site.contact.email}`}
            className="hidden lg:inline-flex items-center gap-1.5 text-teal-200 transition hover:text-white"
          >
            <LuMail size={12} className="text-teal-400" />
            <span>{site.contact.email}</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-amber-300 font-medium hover:text-amber-200 transition"
          >
            <LuShieldAlert size={12} />
            <span>24x7 Helpline</span>
          </a>
        </div>
      </div>
    </div>
  );
}
