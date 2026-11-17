"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuCheck,
  LuShieldCheck,
  LuGraduationCap,
  LuPhoneCall,
  LuMail,
  LuAward,
  LuHospital,
  LuTrendingUp,
  LuBuilding2,
  LuArrowRight,
  LuBriefcase,
  LuQuote,
  LuBadgeCheck,
} from "react-icons/lu";
import { topRecruiterLogos, placedStudents } from "@/data/bmsitData";

export default function PlacementsHubClient() {
  const placementMetrics = [
    {
      label: "Clinical Internship Rate",
      value: "100%",
      sub: "Compulsory Rotational Postings across NABH/NABL Teaching Hospitals",
    },
    {
      label: "Highest Annual CTC",
      value: "₹6.8 LPA",
      sub: "Offered to Senior Radiologic & Cardiac Technologists",
    },
    {
      label: "Average Starting CTC",
      value: "₹3.85 LPA",
      sub: "Consistent across BMLT, BRIT, BOTT & BPT graduates",
    },
    {
      label: "Healthcare Network Partners",
      value: "80+",
      sub: "Corporate hospital chains, multi-specialty trauma centers & pathology labs",
    },
  ];

  const internshipPhases = [
    {
      phase: "Phase 01",
      duration: "Months 1 - 12",
      title: "Pre-Clinical Simulation & OSCE Training",
      desc: "Mastering diagnostic instrumentation, phlebotomy arms, mock OT sterilization, and medical terminology inside CITPS simulation labs before any patient contact.",
      badge: "In-Campus Simulation Suites",
    },
    {
      phase: "Phase 02",
      duration: "Months 13 - 30",
      title: "Supervised Hospital Ward & Lab Postings",
      desc: "Weekly rotational postings in partner hospitals across Outpatient Phlebotomy, Emergency STAT Labs, Inpatient Wards, and Radiodiagnosis suites under chief consultants.",
      badge: "Clinical Observer & Junior Assist",
    },
    {
      phase: "Phase 03",
      duration: "Final 6 Months",
      title: "Compulsory Full-Time Clinical Residency",
      desc: "Full-time 8-hour daily hospital residency handling real patient caseloads, emergency blood cross-matching, surgical assists, and direct on-campus recruitment drives.",
      badge: "Full Clinical Technologist Residency",
    },
  ];

  const testimonials = [
    {
      quote:
        "Graduates from CITPS demonstrate remarkable diagnostic discipline and familiarity with automated analyzers from their first day. Their training on Roche and Sysmex platforms sets them apart.",
      author: "Dr. Alok Verma",
      title: "Director of Laboratory Medicine",
      hospital: "Paras HMRI Hospital, Patna",
    },
    {
      quote:
        "The operation theatre and radiology technicians from CITPS exhibit exemplary sterile protocols and radiation safety awareness. They seamlessly integrate into tertiary surgical units.",
      author: "Dr. Meenakshi Sundaram",
      title: "Chief Medical Superintendent",
      hospital: "Ruban Memorial Hospital",
    },
  ];

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      {/* 1. Top Verification Ribbon */}
      <div className="bg-[#0b1c30] text-[#e5eeff] text-xs py-2 px-4 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-[#FF3B3B] text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              100% Placement Record
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> Approved by Bihar Paramedical Council & AICTE
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a href="tel:+916122998844" className="hover:text-white flex items-center gap-1 transition-colors">
              <LuPhoneCall className="text-[#3A74B8]" />
              <span>Corporate Relations: +91 612 299 8844</span>
            </a>
            <span className="text-slate-500">•</span>
            <a href="mailto:placements@citps.in" className="hover:text-white flex items-center gap-1 transition-colors">
              <LuMail className="text-[#3A74B8]" />
              <span>placements@citps.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumbs & Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 py-10 lg:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#005A9C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Career & Internships</span>
            <span>/</span>
            <span className="text-[#005A9C]">Training & Placements Hub</span>
          </nav>

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
              <span className="text-xs font-bold text-slate-700 tracking-wide">
                Corporate Relations & Career Development Cell (CRDC)
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
              Training & Placements: Bridging Academic Rigor with India&apos;s Leading Healthcare Networks
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
              At CITPS Patna, medical training is never confined to theoretical textbooks. Every candidate undergoes mandatory rotational clinical postings across premier NABH/NABL accredited multi-specialty hospitals and national diagnostic chains.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/admissions#apply-form"
                className="inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-all"
              >
                <span>Apply for 2026 Batch</span>
                <LuArrowRight />
              </Link>
              <a
                href="#recruiters"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#005A9C] text-[#005A9C] hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all"
              >
                <LuBuilding2 />
                <span>View Hospital Partners</span>
              </a>
            </div>
          </div>

          {/* Metric Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-100">
            {placementMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-[#005A9C] transition-all"
              >
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">{metric.label}</span>
                <span className="text-3xl font-black text-[#005A9C] block mt-1">{metric.value}</span>
                <span className="text-xs text-slate-600 block mt-1 leading-snug">{metric.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Corporate Healthcare & Recruiter Partners */}
      <section id="recruiters" className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Apex Clinical Network
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
                Our Marquee Healthcare & Diagnostic Partners
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Premier super-specialty hospital chains and diagnostic networks actively recruiting CITPS graduates
              </p>
            </div>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 self-start sm:self-auto">
              Pan-India Clinical Postings
            </span>
          </div>

          {/* Partner Cards Grid with Official Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topRecruiterLogos.map((recruiter, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-white hover:border-[#005A9C] hover:shadow-sm transition-all"
              >
                <div className="relative h-10 w-28 shrink-0 flex items-center justify-center p-1 mb-2 bg-white rounded-lg">
                  <Image
                    src={recruiter.logo}
                    alt={recruiter.name}
                    fill
                    sizes="112px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-slate-900 leading-tight line-clamp-1">{recruiter.name}</span>
                <span className="text-[10px] font-semibold text-[#005A9C] uppercase tracking-wide mt-0.5">{recruiter.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Placed Student Showcase (Hall of Fame Bento Grid) */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Graduate Success
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Recent Placement Highlights (Hall of Fame)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Real CITPS graduates serving in leadership clinical roles across India&apos;s apex healthcare providers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placedStudents.map((student) => (
              <div
                key={student.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-[#005A9C] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="relative size-14 rounded-full overflow-hidden border-2 border-slate-200 shrink-0">
                      <Image
                        src={student.image}
                        alt={student.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug flex items-center gap-1.5">
                        <span>{student.name}</span>
                        <LuBadgeCheck className="text-[#005A9C] text-sm shrink-0" />
                      </h4>
                      <span className="text-[11px] font-semibold text-slate-500 block">USN: {student.usn}</span>
                      <span className="text-[11px] font-bold text-[#005A9C] block line-clamp-1">{student.branch}</span>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 mb-3">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Recruited By</span>
                    <span className="text-xs font-extrabold text-slate-900 block mt-0.5">{student.recruiter}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                    {student.package}
                  </span>
                  <span className="text-[11px] text-slate-500 font-semibold">Verified Placement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 3-Phase Clinical Internship Roadmap */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Hands-On Roadmap
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Our 3-Phase Clinical Internship Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Guaranteed progression from laboratory simulation to tertiary hospital residency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {internshipPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-white bg-[#004275] px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{phase.duration}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{phase.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{phase.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs font-bold text-[#005A9C] flex items-center gap-1.5">
                  <LuCheck className="text-emerald-600" />
                  <span>{phase.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Recruiter Testimonials */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Industry Endorsement
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              What Hospital Leadership Says About CITPS Graduates
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div className="mb-4">
                  <LuQuote className="text-2xl text-[#005A9C] mb-2" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 block">{t.author}</span>
                  <span className="text-[11px] text-slate-500 block">{t.title}</span>
                  <span className="text-[11px] font-bold text-[#005A9C] block">{t.hospital}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Action CTA */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Shape Your Clinical Future
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
            Join the Next Cohort of Hospital-Ready Healthcare Professionals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Admissions for the 2026-27 academic session are active. Secure your counseling seat with guaranteed hospital internship placements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions#apply-form"
              className="bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-all"
            >
              Apply Online for 2026 Batch
            </Link>
            <Link
              href="/courses"
              className="bg-white border-2 border-[#005A9C] text-[#005A9C] hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Explore All Paramedical Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
