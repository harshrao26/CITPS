"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { LuChevronRight } from "react-icons/lu";
import { mainNavMenu, topUtilityLinks } from "@/data/bmsitData";
import { site } from "@/data/site";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuIdx, setActiveMenuIdx] = useState(0);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ececec] shadow-xs">
        {/* Top Extra Menu Bar (Matches BMSIT top-xtra-menu-bg) */}
        <div className="bg-[#f9f9f9] border-b border-[#ececec] text-xs font-medium text-[#231F20]">
          <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-5 overflow-x-auto scrollbar-none py-1">
              {topUtilityLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="whitespace-nowrap hover:text-[#FF3B3B] transition"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4 text-[11px] text-[#666]">
              <span>Toll Free: <strong>{site.contact.phone}</strong></span>
              <span>|</span>
              <span>Email: <strong>{site.contact.email}</strong></span>
            </div>
          </div>
        </div>

        {/* Main Logo & Action Buttons Row (Matches BMSIT desktoplogo + top buttons) */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3.5 lg:px-8">
          {/* Logo on Left: Official Un-stretched Brand Lockup */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative h-[52px] sm:h-[60px] lg:h-[66px] w-auto">
              <Image
                src="/images/citps-logo-transparent.png"
                alt="CITPS - Central Institute of Technical and Paramedical Sciences"
                width={870}
                height={334}
                priority
                className="h-[52px] sm:h-[60px] lg:h-[66px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
              />
            </div>
            <div className="hidden xl:flex flex-col justify-center border-l border-[#ececec] pl-4 py-0.5">
              <span className="text-[11px] font-bold text-[#3A74B8] tracking-wider uppercase">
                Paramedical &amp; Health Sciences
              </span>
              <span className="text-[10px] text-[#666666] font-medium">
                Approved by Paramedical Council &amp; AICTE | Accredited Grade &apos;A&apos;
              </span>
            </div>
          </Link>

          {/* Right Controls: ADMISSIONS (Blue) + CONTACT US (Red) + Hamburger Toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link href="/admissions" className="btn-two-full hidden sm:inline-flex">
              ADMISSIONS
            </Link>
            <Link href="/contact" className="btn-one-full hidden sm:inline-flex">
              CONTACT US
            </Link>

            {/* BMSIT 3-Line Hamburger Toggle */}
            <button
              type="button"
              aria-label="Toggle navigation drawer"
              onClick={() => setSidebarOpen(true)}
              className="flex size-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#ececec] bg-white text-[#231F20] hover:bg-[#f5f5f5] transition"
            >
              <span className="h-0.5 w-6 bg-[#231F20]" />
              <span className="h-0.5 w-6 bg-[#231F20]" />
              <span className="h-0.5 w-6 bg-[#231F20]" />
            </button>
          </div>
        </div>

        {/* Level 1 Horizontal Navigation Menu (Matches BMSIT Main Menu tabs) */}
        <nav className="hidden lg:block bg-white border-t border-[#ececec]">
          <div className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <ul className="flex items-center gap-6 xl:gap-8 overflow-x-auto scrollbar-none py-2.5 text-[13px] font-semibold tracking-wide uppercase">
              {mainNavMenu.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="text-[#231F20] hover:text-[#FF3B3B] transition py-1 block whitespace-nowrap"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* BMSIT Blue Sidebar Drawer (Matches .mainMenu .sidebar background: rgba(58, 116, 184, 0.95)) */}
      {sidebarOpen ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity">
          <div className="relative w-full max-w-xl bg-[#3A74B8] text-white p-6 sm:p-10 shadow-2xl flex flex-col justify-between overflow-y-auto">
            {/* Close button */}
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setSidebarOpen(false)}
              className="absolute top-6 right-6 grid size-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white hover:text-[#3A74B8] transition"
            >
              <HiOutlineX size={24} />
            </button>

            {/* Menu Header */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="relative size-12 shrink-0 bg-white rounded-xl p-1 shadow-md">
                  <Image
                    src="/images/citps-emblem.png"
                    alt="CITPS Shield Crest"
                    fill
                    sizes="48px"
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white">{site.shortName}</span>
                  <span className="text-[10px] text-[#FCFAEB] font-bold uppercase tracking-wider">
                    Campus Navigation Menu
                  </span>
                </div>
              </div>

              {/* Main Categories List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-widest text-[#FCFAEB] border-b border-white/20 pb-2 mb-3">
                    Navigation
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {mainNavMenu.map((item, idx) => (
                      <li key={item.title}>
                        <button
                          type="button"
                          onClick={() => setActiveMenuIdx(idx)}
                          className={`w-full text-left py-1 text-sm font-semibold flex items-center justify-between transition ${
                            activeMenuIdx === idx
                              ? "text-[#FCFAEB] font-bold"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          <span>{item.title}</span>
                          <LuChevronRight size={14} />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submenu view */}
                <div className="bg-black/15 rounded-xl p-4">
                  <h4 className="text-xs uppercase font-bold tracking-widest text-[#FCFAEB] border-b border-white/20 pb-2 mb-3">
                    {mainNavMenu[activeMenuIdx]?.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {mainNavMenu[activeMenuIdx]?.submenu?.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          onClick={() => setSidebarOpen(false)}
                          className="block text-xs font-medium text-white/90 hover:text-white hover:underline transition"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions & Socials */}
            <div className="pt-8 border-t border-white/20 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="#admissions"
                  onClick={() => setSidebarOpen(false)}
                  className="btn-one-full text-xs font-bold"
                >
                  APPLY ONLINE
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="grid size-8 place-items-center rounded-full border border-white text-white hover:bg-white hover:text-[#3A74B8] transition"
                >
                  <FaLinkedinIn size={12} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid size-8 place-items-center rounded-full border border-white text-white hover:bg-white hover:text-[#3A74B8] transition"
                >
                  <FaFacebookF size={12} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="grid size-8 place-items-center rounded-full border border-white text-white hover:bg-white hover:text-[#3A74B8] transition"
                >
                  <FaXTwitter size={12} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="grid size-8 place-items-center rounded-full border border-white text-white hover:bg-white hover:text-[#3A74B8] transition"
                >
                  <FaYoutube size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
