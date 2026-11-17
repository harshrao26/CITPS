"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuCheck,
  LuShieldCheck,
  LuFileText,
  LuPhoneCall,
  LuMail,
  LuCalendar,
  LuClock,
  LuDownload,
  LuChevronDown,
  LuChevronUp,
  LuArrowRight,
  LuHospital,
  LuMessageCircle,
  LuBadgeCheck,
  LuSparkles,
  LuBuilding2,
  LuCpu,
} from "react-icons/lu";
import { topRecruiterLogos } from "@/data/bmsitData";
import { courses } from "@/data/courses";
import { submitLead } from "@/lib/submitLead";

export default function CoursePillarView({ course }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [leadRefId, setLeadRefId] = useState("");
  const [applicant, setApplicant] = useState({
    name: "",
    phone: "",
    email: "",
    fatherName: "",
    district: "Patna",
    board: "BSEB",
    percent: "",
    creditCard: "Yes",
  });

  const handleApply = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitLead({
      form_type: `Course Pillar Priority Desk: ${course.shortCode || course.title}`,
      name: applicant.name,
      phone: applicant.phone,
      email: applicant.email,
      course: course.title,
      father_name: applicant.fatherName,
      district: applicant.district,
      board: applicant.board,
      pcb_percent: applicant.percent ? `${applicant.percent}%` : "-",
      bihar_student_credit_card: applicant.creditCard,
    });

    setIsSubmitting(false);

    if (res.success) {
      setLeadRefId(res.leadId || `CITPS-${course.shortCode || "MED"}-${Math.floor(1000 + Math.random() * 9000)}`);
      setFormSubmitted(true);
    } else {
      setSubmitError(res.error || "Failed to submit. Please try calling directly.");
    }
  };

  const otherCourses = courses.filter((c) => c.id !== course.id).slice(0, 3);

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      {/* 1. Top Verification Ribbon */}
      <div className="bg-[#0b1c30] text-[#e5eeff] text-xs py-2 px-4 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-[#FF3B3B] text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions Open 2026-27
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> {course.councilApproval}
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 text-xs">
            <a href="tel:+916122998844" className="hover:text-white flex items-center gap-1 transition-colors">
              <LuPhoneCall className="text-[#3A74B8]" />
              <span>Helpline: +91 612 299 8844</span>
            </a>
            <span className="text-slate-500">•</span>
            <a href="mailto:admissions@citps.in" className="hover:text-white flex items-center gap-1 transition-colors">
              <LuMail className="text-[#3A74B8]" />
              <span>admissions@citps.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Breadcrumbs & Hero Pillar */}
      <section className="relative bg-white border-b border-slate-200/80 py-10 lg:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-5 flex-wrap">
            <Link href="/" className="hover:text-[#005A9C] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-[#005A9C] transition-colors">Academics</Link>
            <span>/</span>
            <span className="text-slate-400">Department of Allied Health Sciences</span>
            <span>/</span>
            <span className="text-[#005A9C]">{course.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Hero Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                <span className="text-xs font-bold text-slate-700 tracking-wide">
                  {course.level} • Code: {course.degreeCode} • Bihar Paramedical Council Approved
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-3xl leading-relaxed">
                {course.summary}
              </p>

              {/* Trust Validation Pills */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuCheck className="text-emerald-600 text-sm" /> NCAHP Act 2021 Aligned
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuHospital className="text-[#005A9C] text-sm" /> {course.clinicalHours}
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuBadgeCheck className="text-blue-600 text-sm" /> 100% Internship Placement Record
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuShieldCheck className="text-[#FF3B3B] text-sm" /> Bihar Student Credit Card (MNSSBY) Approved
                </div>
              </div>

              {/* Hero Actions */}
              <div className="flex flex-wrap items-center gap-3.5">
                <Link
                  href="/admissions#apply-form"
                  className="inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-all duration-150 active:scale-95"
                >
                  <span>Apply for 2026 Batch</span>
                  <LuArrowRight className="text-base" />
                </Link>
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#005A9C] text-[#005A9C] hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all"
                >
                  <LuDownload className="text-base" />
                  <span>Download Syllabus & Brochure</span>
                </a>
                <a
                  href="https://wa.me/916122998844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 px-3 py-2 font-bold text-sm transition-colors"
                >
                  <LuMessageCircle className="text-lg" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Quick Metric Card */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">Program Key Metrics</span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">
                  Active Enrollment
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Duration</span>
                  <span className="text-base font-extrabold text-[#005A9C] block mt-0.5">{course.duration}</span>
                  <span className="text-xs text-slate-600 block mt-0.5">{course.durationDetail}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Eligibility</span>
                  <span className="text-sm font-extrabold text-[#005A9C] block mt-0.5">{course.eligibility}</span>
                  <span className="text-xs text-slate-600 block mt-0.5">{course.eligibilityDetail}</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Approved Intake</span>
                  <span className="text-base font-extrabold text-[#005A9C] block mt-0.5">{course.annualIntake}</span>
                  <span className="text-xs text-slate-600 block mt-0.5">Merit & Counseling quota seats</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Starting Package</span>
                  <span className="text-base font-extrabold text-[#FF3B3B] block mt-0.5">{course.startingPackage}</span>
                  <span className="text-xs text-slate-600 block mt-0.5">Corporate hospitals & diagnostic chains</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Academic Overview & Hands-on Clinical Training (Split Layout) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative & 5 Disciplines */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Clinical Foundations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] tracking-tight">
                The Diagnostic Backbone of Modern Healthcare
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 70% of all medical interventions rely fundamentally on clinical technology and diagnostic precision. At CITPS Patna, candidates undergo intensive simulation training across 5 essential technical pillars:
              </p>

              <div className="space-y-3">
                {course.disciplines?.map((disc, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                  >
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <span className="size-6 rounded-md bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center text-xs font-black">
                        {idx + 1}
                      </span>
                      {disc.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 pl-8 leading-relaxed">
                      {disc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Clinical Lab Image & Overlays */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
                <Image
                  src={course.image || "/images/clinical-lab-stitch.jpg"}
                  alt={course.alt || "Clinical Laboratory at CITPS Patna"}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-md">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-lg bg-[#005A9C] text-white flex items-center justify-center shrink-0">
                      <LuCpu className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                        Advanced NABL-Simulated Training Labs
                      </h4>
                      <p className="text-[11px] text-slate-600">
                        Hands-on training from Day 1 on real diagnostic analyzers under certified clinical pathologists.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#005A9C]">
                    <span className="flex items-center gap-1">
                      <LuCheck className="text-emerald-600" /> 1:1 Analyzer Ratio
                    </span>
                    <span className="flex items-center gap-1">
                      <LuCheck className="text-emerald-600" /> Biosafety Level-2 Compliance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Semester-Wise Curriculum Structure */}
      <section id="curriculum" className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Academic Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Curriculum Architecture & Clinical Practicums
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Curriculum structured in accordance with the National Commission for Allied and Healthcare Professions (NCAHP) model framework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.curriculum?.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-[#005A9C] transition-all"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                  <span className="text-base font-extrabold text-[#004275]">{item.sem}</span>
                  <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
                    {item.credits}
                  </span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600">
                  {item.subjects.map((sub, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <LuCheck className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-[#005A9C] flex items-center justify-between">
                  <span>Practical Lab Hours:</span>
                  <span>{item.labHours}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Mandatory Clinical Internship Banner */}
          <div className="mt-8 bg-gradient-to-r from-[#004275] to-[#005A9C] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <span className="inline-block bg-white/20 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2">
                Mandatory Clinical Residency
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">
                Final Phase: Compulsory 6-Month Rotational Clinical Hospital Internship
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-2xl">
                Students rotate full-time through Outpatient Phlebotomy, Emergency STAT Trauma Labs, Intensive Care Units, and Blood Transfusion Centers across affiliated tertiary teaching hospitals.
              </p>
            </div>
            <Link
              href="/placements"
              className="shrink-0 bg-white text-[#004275] hover:bg-slate-100 px-5 py-2.5 rounded-lg font-bold text-xs shadow transition-all flex items-center gap-1.5"
            >
              <span>View Hospital Network</span>
              <LuArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Diagnostic Laboratory Infrastructure */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Benchmark Facilities
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
                World-Class Diagnostic Laboratory Infrastructure
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Campus laboratories modeled directly after ISO 15189 NABL-accredited diagnostic centers.
              </p>
            </div>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
              Total Lab Campus Area: 14,500 sq.ft.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {course.labFacilities?.map((lab, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 border border-slate-200 rounded-2xl p-5 hover:bg-white hover:border-[#005A9C] hover:shadow-sm transition-all"
              >
                <div className="size-9 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm mb-3">
                  {idx + 1}
                </div>
                <span className="text-[10px] font-bold text-[#FF3B3B] uppercase tracking-wider block">Instrumentation</span>
                <h3 className="text-sm font-bold text-slate-900 mt-1 mb-2">{lab.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{lab.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Clinical Hospital Rotations & Top Recruiter Marquee */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Clinical Placements
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
                Hospital Rotations & Top Recruiters
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Clinical postings and placements across India&apos;s apex healthcare chains
              </p>
            </div>
            <Link
              href="/placements"
              className="text-xs font-bold text-[#005A9C] hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore All 80+ Partners</span>
              <LuArrowRight />
            </Link>
          </div>
        </div>

        {/* Recruiter Logos Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
            {topRecruiterLogos.slice(0, 12).map((recruiter, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-2xs hover:border-[#005A9C] hover:shadow-xs transition-all"
              >
                <div className="relative h-9 w-24 shrink-0 flex items-center justify-center p-1 mb-1.5">
                  <Image
                    src={recruiter.logo}
                    alt={recruiter.name}
                    fill
                    sizes="96px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-800 leading-tight line-clamp-1">{recruiter.name}</span>
                <span className="text-[9px] font-semibold text-[#005A9C] uppercase tracking-wide mt-0.5">{recruiter.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Career Pathways & Industry Salary Progression */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Career Trajectory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Career Opportunities & Salary Benchmarks
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              High-growth job profiles for graduates across private hospitals, diagnostic chains, and public healthcare
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {course.careerRoles?.map((career, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider">Role {idx + 1}</span>
                    <span className="text-xs font-extrabold text-[#FF3B3B] bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
                      {career.ctc}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{career.role}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{career.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Course-Specific Interactive FAQ Accordion */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Frequently Asked Questions on {course.shortCode || course.title}
            </h2>
          </div>

          <div className="space-y-3">
            {course.faqs?.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <span className="size-6 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Direct Admission CTA Bar with Inline Lead Capture */}
      <section className="py-14 bg-gradient-to-b from-[#f8f9ff] to-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
            Limited Seats for 2026-27
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-2">
            Apply for Priority Admission in {course.shortCode || course.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Direct counseling seats are allocated on 10+2 merit marks. Submit your details for instant eligibility screening and seat reservation.
          </p>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md max-w-2xl mx-auto text-left mb-6">
            {formSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                  <LuCheck />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Application Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  Thank you, <strong>{applicant.name}</strong>. Application Reference: <strong className="font-mono text-[#005A9C]">{leadRefId}</strong>.
                </p>
                <p className="text-xs text-slate-500 mb-4">
                  Our department counselor for {course.shortCode} will contact you at <strong>{applicant.phone}</strong> with the 2026 syllabus and counseling date.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setApplicant({ name: "", phone: "", email: "", percent: "" });
                  }}
                  className="text-xs font-bold text-[#005A9C] hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-semibold">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Candidate Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aman Verma"
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Father / Guardian Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Father's full name"
                      value={applicant.fatherName}
                      onChange={(e) => setApplicant({ ...applicant, fatherName: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="student@gmail.com"
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      District / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patna, Gaya"
                      value={applicant.district}
                      onChange={(e) => setApplicant({ ...applicant, district: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      12th Board *
                    </label>
                    <select
                      value={applicant.board}
                      onChange={(e) => setApplicant({ ...applicant, board: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    >
                      <option>BSEB (Bihar Board)</option>
                      <option>CBSE</option>
                      <option>ICSE / ISC</option>
                      <option>Other State Board</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      12th PCB/PCM % *
                    </label>
                    <input
                      type="number"
                      required
                      min="35"
                      max="100"
                      placeholder="e.g. 72"
                      value={applicant.percent}
                      onChange={(e) => setApplicant({ ...applicant, percent: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    Availing Bihar Student Credit Card (MNSSBY)?
                  </span>
                  <div className="flex items-center gap-3 font-bold">
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="creditCard"
                        value="Yes"
                        checked={applicant.creditCard === "Yes"}
                        onChange={() => setApplicant({ ...applicant, creditCard: "Yes" })}
                        className="text-[#005A9C]"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-1 cursor-pointer">
                      <input
                        type="radio"
                        name="creditCard"
                        value="No"
                        checked={applicant.creditCard === "No"}
                        onChange={() => setApplicant({ ...applicant, creditCard: "No" })}
                        className="text-[#005A9C]"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF3B3B] hover:bg-[#e03434] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{isSubmitting ? "Submitting Application..." : `Apply for ${course.shortCode} Counseling`}</span>
                  <LuArrowRight className="text-sm" />
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  Approved by Bihar Paramedical Council. Direct seat allocation on merit.
                </p>
              </form>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600">
            <span>Or speak directly with counselor:</span>
            <a
              href="tel:+916122998844"
              className="text-[#005A9C] font-bold hover:underline flex items-center gap-1"
            >
              <LuPhoneCall className="text-xs" /> +91 612 299 8844
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
