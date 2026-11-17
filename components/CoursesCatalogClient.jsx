"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LuFlaskConical,
  LuScanLine,
  LuSyringe,
  LuActivity,
  LuDroplet,
  LuEye,
  LuClock,
  LuUsers,
  LuTrendingUp,
  LuShieldCheck,
  LuCheck,
  LuArrowRight,
  LuGraduationCap,
  LuHospital,
  LuFileText,
  LuChevronDown,
  LuCircleHelp,
  LuCreditCard,
  LuStethoscope,
} from "react-icons/lu";

export default function CoursesCatalogClient() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState(null);

  const programs = [
    {
      id: "medical-laboratory-technology",
      slug: "medical-laboratory-technology",
      title: "B.Sc. Medical Laboratory Technology (BMLT)",
      type: "degree",
      typeLabel: "Bachelor Degree",
      duration: "3.5 Years",
      internship: "6 Months Mandatory Hospital Residency",
      eligibility: "10+2 PCB (Min 50%)",
      seats: 60,
      salary: "₹3.8 - ₹7.2 LPA",
      icon: LuFlaskConical,
      accentColor: "from-blue-600 to-indigo-700",
      image: "/images/clinical-lab-stitch.jpg",
      summary:
        "Master automated biochemistry analyzers, 5-part hematology counters, diagnostic bacteriology, and molecular RT-PCR assays. Rotational hospital internship in NABL pathology labs.",
      careers: ["Clinical Biochemist", "Pathology Technologist", "Blood Bank Officer", "Lab Quality Auditor"],
      topRecruiters: ["Dr. Lal PathLabs", "Metropolis", "Apollo Diagnostics", "Paras HMRI"],
    },
    {
      id: "radiology-imaging-technology",
      slug: "radiology-imaging-technology",
      title: "B.Sc. Radiology & Medical Imaging Technology (BRIT)",
      type: "degree",
      typeLabel: "Bachelor Degree",
      duration: "3.5 Years",
      internship: "6 Months Diagnostic Radiology Posting",
      eligibility: "10+2 PCB / PCM (Min 50%)",
      seats: 60,
      salary: "₹4.0 - ₹7.5 LPA",
      icon: LuScanLine,
      accentColor: "from-sky-600 to-blue-800",
      image: "/images/course-radiology.jpg",
      summary:
        "Comprehensive training in 1.5T/3T MRI, 128-slice CT scan, digital X-Ray, mammography, and fluoroscopy following AERB radiation safety guidelines and contrast protocols.",
      careers: ["MRI Technologist", "CT Scan Specialist", "Interventional Radiology Assist", "Application Specialist"],
      topRecruiters: ["Fortis Healthcare", "Max Super Specialty", "Medanta", "Ruban Memorial"],
    },
    {
      id: "bachelor-of-physiotherapy",
      slug: "bachelor-of-physiotherapy",
      title: "Bachelor of Physiotherapy (BPT)",
      type: "degree",
      typeLabel: "Professional Clinical Degree",
      duration: "4.5 Years",
      internship: "6 Months Compulsory Rotational Clinical Posting",
      eligibility: "10+2 PCB (Min 50%)",
      seats: 50,
      salary: "₹3.5 - ₹8.0 LPA",
      icon: LuActivity,
      accentColor: "from-emerald-600 to-teal-800",
      image: "/images/course-physio.jpg",
      summary:
        "Rigorous physical medicine education in musculoskeletal, neuro-rehabilitation, cardiopulmonary ICU recovery, sports injury kinematics, and advanced electrotherapy modalities.",
      careers: ["Consultant Physiotherapist", "Neuro-Rehab Specialist", "Sports Physical Therapist", "Ergonomics Consultant"],
      topRecruiters: ["Narayana Health", "Manipal Hospitals", "Sports Authority", "Private Clinics"],
    },
    {
      id: "operation-theatre-technology",
      slug: "operation-theatre-technology",
      title: "B.Sc. Operation Theatre & Anesthesia Technology (BOTT)",
      type: "degree",
      typeLabel: "Bachelor Degree",
      duration: "3.5 Years",
      internship: "6 Months Super-Specialty Surgical Postings",
      eligibility: "10+2 PCB (Min 50%)",
      seats: 60,
      salary: "₹3.6 - ₹6.8 LPA",
      icon: LuSyringe,
      accentColor: "from-red-600 to-rose-800",
      image: "/images/course-theatre.jpg",
      summary:
        "Prepare for high-stakes surgical suites, anesthesia workstation calibration, sterile CSSD management, intraoperative monitoring, and surgical instrument setups across major surgeries.",
      careers: ["Senior OT Technologist", "Anesthesia Life-Support Tech", "CSSD Sterilization Head", "Critical Care Specialist"],
      topRecruiters: ["Paras HMRI", "Ruban Hospital", "Apollo Hospitals", "Max Healthcare"],
    },
    {
      id: "dialysis-technology",
      slug: "dialysis-technology",
      title: "B.Sc. Renal Dialysis Technology",
      type: "degree",
      typeLabel: "Bachelor Degree",
      duration: "3.5 Years",
      internship: "6 Months Hemodialysis Unit Residency",
      eligibility: "10+2 PCB (Min 50%)",
      seats: 40,
      salary: "₹3.5 - ₹6.5 LPA",
      icon: LuDroplet,
      accentColor: "from-cyan-600 to-blue-800",
      image: "/images/course-dialysis.jpg",
      summary:
        "Master hemodialysis machine priming, dialyzer reprocessing, peritoneal dialysis, vascular access cannulation, water treatment RO plants, and acute ICU renal replacement therapy (CRRT).",
      careers: ["Senior Dialysis Technologist", "Nephrology Care Specialist", "Peritoneal Dialysis Coordinator", "Renal Unit In-Charge"],
      topRecruiters: ["NephroPlus", "Narayana Health", "DaVita", "Fortis Hospital"],
    },
    {
      id: "optometry",
      slug: "optometry",
      title: "Bachelor of Clinical Optometry (B.Optom)",
      type: "degree",
      typeLabel: "Professional Degree",
      duration: "4.0 Years",
      internship: "1 Year Clinical Hospital & Optical Residency",
      eligibility: "10+2 PCB / PCM (Min 50%)",
      seats: 40,
      salary: "₹3.2 - ₹6.0 LPA",
      icon: LuEye,
      accentColor: "from-amber-600 to-orange-800",
      image: "/images/course-optometry.jpg",
      summary:
        "Comprehensive ocular refraction, slit-lamp biomicroscopy, visual field perimetry, contact lens fitting, pediatric binocular vision therapy, and pre/post-operative cataract diagnostics.",
      careers: ["Clinical Optometrist", "Refraction Specialist", "Vision Therapist", "Optical Practice Director"],
      topRecruiters: ["Lenskart", "Titan Eyeplus", "Vasan Eye Care", "Sankara Nethralaya"],
    },
    {
      id: "dmlt-diploma",
      slug: "medical-laboratory-technology",
      title: "Diploma in Medical Laboratory Technology (DMLT)",
      type: "diploma",
      typeLabel: "Fast-Track Diploma",
      duration: "2.0 Years",
      internship: "3 Months Hospital Pathology Lab Training",
      eligibility: "10+2 Science (PCB/PCM)",
      seats: 50,
      salary: "₹2.5 - ₹4.5 LPA",
      icon: LuFlaskConical,
      accentColor: "from-slate-700 to-blue-900",
      image: "/images/clinical-training.jpg",
      summary:
        "Accelerated clinical diploma focusing on practical phlebotomy, manual and semi-automated routine biochemistry, routine urine microscopy, hematology smears, and rapid diagnostic testing.",
      careers: ["Laboratory Technician", "Phlebotomist", "Diagnostic Assistant", "Medical Sample Collector"],
      topRecruiters: ["SRL Agilus", "Dr. Lal PathLabs", "State District Hospitals", "Private Labs"],
    },
    {
      id: "dxt-diploma",
      slug: "radiology-imaging-technology",
      title: "Diploma in Radiography & X-Ray Technology (DXT)",
      type: "diploma",
      typeLabel: "Fast-Track Diploma",
      duration: "2.0 Years",
      internship: "3 Months Hospital X-Ray Posting",
      eligibility: "10+2 Science (PCB/PCM)",
      seats: 40,
      salary: "₹2.4 - ₹4.2 LPA",
      icon: LuScanLine,
      accentColor: "from-slate-700 to-sky-900",
      image: "/images/imaging-xray.jpg",
      summary:
        "Practical diploma program emphasizing diagnostic radiography positioning, darkroom/CR processing, portable bedside X-rays in ICUs, and basic radiation safety shielding protocols.",
      careers: ["X-Ray Technician", "Radiography Assistant", "Darkroom Specialist", "Trauma X-Ray Tech"],
      topRecruiters: ["District Trauma Centers", "Private Diagnostic Clinics", "Orthopedic Hospitals"],
    },
    {
      id: "dot-diploma",
      slug: "operation-theatre-technology",
      title: "Diploma in Operation Theatre Technology (DOT)",
      type: "diploma",
      typeLabel: "Fast-Track Diploma",
      duration: "2.0 Years",
      internship: "3 Months Hospital Surgical Unit Posting",
      eligibility: "10+2 Science (PCB/PCM)",
      seats: 40,
      salary: "₹2.4 - ₹4.0 LPA",
      icon: LuSyringe,
      accentColor: "from-slate-700 to-rose-900",
      image: "/images/course-theatre.jpg",
      summary:
        "Focused hands-on training in OT room preparation, surgical drape autoclaving, assisting surgeons with instrument passing, and maintaining basic anesthesia gas supplies.",
      careers: ["Junior OT Assistant", "Surgical Tray Technician", "CSSD Assistant", "Hospital Ward Attendant"],
      topRecruiters: ["Nursing Homes", "Surgical Centers", "Trauma Centers", "Community Hospitals"],
    },
  ];

  const filteredPrograms =
    selectedFilter === "all"
      ? programs
      : programs.filter((p) => p.type === selectedFilter);

  const faqs = [
    {
      q: "Which paramedical course has the highest starting salary in Bihar?",
      a: "B.Sc. Radiology & Medical Imaging Technology (BRIT) and B.Sc. Operation Theatre & Anesthesia Technology (BOTT) offer the highest entry-level packages, typically ranging between ₹4.0 LPA and ₹7.5 LPA. Radiographers handling advanced MRI and multi-slice CT consoles command substantial demand across corporate hospital networks.",
    },
    {
      q: "Is NEET mandatory for admission to CITPS paramedical degree courses?",
      a: "No, NEET is not mandatory for admission to paramedical degrees (B.Sc. MLT, BRIT, BOTT, Dialysis) or diploma courses. Admissions are conducted directly based on 10+2 (Higher Secondary) PCB/PCM merit marks followed by an institutional counseling session.",
    },
    {
      q: "Are CITPS paramedical degrees valid for government jobs and state health society recruitment?",
      a: "Yes, 100%. CITPS degrees are approved by the Bihar State Paramedical Council (Department of Health, Govt. of Bihar) and aligned with the National Commission for Allied & Healthcare Professions (NCAHP Act 2021). Graduates are registered in state and national registers, making them fully eligible for BSSC, AIIMS, Railway, and State Health Society (SHSB) government recruitment exams.",
    },
    {
      q: "Can I avail Bihar Student Credit Card (MNSSBY) 0% interest loan for these courses?",
      a: "Yes. All approved degree and diploma programs at CITPS are eligible for the Bihar Student Credit Card Scheme (MNSSBY), which provides up to ₹4 Lakhs education loan at 0% interest for female, transgender, and SC/ST candidates (1% for general boys). Our on-campus nodal desk provides same-day DRCC documentation assistance.",
    },
    {
      q: "How many clinical practical hours are included in each program?",
      a: "Every 3.5 to 4.5 year degree program includes over 1,200 documented clinical hours divided between CITPS high-tech on-campus simulation laboratories and mandatory rotational hospital residencies across our 80+ partner hospitals, such as Paras HMRI, Ruban Memorial, and Narayana Health.",
    },
    {
      q: "What is the key difference between B.Sc. MLT (Degree) and DMLT (Diploma)?",
      a: "B.Sc. MLT is a 3.5-Year comprehensive professional degree covering advanced automated analyzers, histopathology, cytogenetics, and lab management. It qualifies you for senior technologist, lab manager, and diagnostic research roles with eligibility for M.Sc. and overseas licensing. DMLT is a 2-Year fast-track vocational diploma focusing on routine blood testing and phlebotomy for faster entry into the job market.",
    },
  ];

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30]">
      {/* 1. Top Regulatory Verification Ribbon */}
      <div className="bg-[#0b1c30] text-[#e5eeff] text-xs py-2 px-4 border-b border-slate-700/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 bg-[#FF3B3B] text-white px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Admissions 2026-27 Open
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> Bihar Paramedical Council &amp; AICTE Approved
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              NCAHP Act 2021 Model Curriculum | 1,200+ Clinical Hours
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>Intake: 350 Annual Seats</span>
            <span className="text-slate-500">|</span>
            <Link
              href="/admissions#apply-form"
              className="text-[#FF3B3B] hover:text-red-400 font-bold flex items-center gap-1"
            >
              Reserve Seat <LuArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Academic Programs Master Header */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#005A9C]">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-bold">Academics &amp; Paramedical Programs</span>
          </nav>

          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005A9C] text-xs font-bold uppercase tracking-wider mb-4">
              <LuGraduationCap className="text-sm" />
              University-Governed Healthcare Degrees &amp; Technical Diplomas
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
              Paramedical Degree &amp; Diploma Courses at CITPS Patna
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Empowering India&apos;s healthcare infrastructure with rigorous, competency-based allied health training. Explore our full spectrum of 3.5 to 4.5 year clinical bachelor degrees and 2-year technical diplomas, combining automated simulation laboratories with compulsory super-specialty hospital rotations.
            </p>

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-[#f8f9ff] px-3 py-1.5 rounded-lg border border-slate-200">
                <LuHospital className="text-[#005A9C]" /> 80+ Hospital Partners
              </span>
              <span className="flex items-center gap-1.5 bg-[#f8f9ff] px-3 py-1.5 rounded-lg border border-slate-200">
                <LuClock className="text-[#005A9C]" /> 1,200+ Clinical Hours
              </span>
              <span className="flex items-center gap-1.5 bg-[#f8f9ff] px-3 py-1.5 rounded-lg border border-slate-200">
                <LuCreditCard className="text-emerald-600" /> Bihar Student Credit Card (MNSSBY) 0% Loan
              </span>
            </div>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">
              Filter By Qualification:
            </span>
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedFilter === "all"
                  ? "bg-[#004275] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All Programs ({programs.length})
            </button>
            <button
              onClick={() => setSelectedFilter("degree")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedFilter === "degree"
                  ? "bg-[#004275] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Bachelor Degrees - 3.5 to 4.5 Yrs ({programs.filter((p) => p.type === "degree").length})
            </button>
            <button
              onClick={() => setSelectedFilter("diploma")}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                selectedFilter === "diploma"
                  ? "bg-[#004275] text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Paramedical Diplomas - 2.0 Yrs ({programs.filter((p) => p.type === "diploma").length})
            </button>
          </div>
        </div>
      </section>

      {/* 3. Program Cards Grid */}
      <section className="py-12 sm:py-16 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.id}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  {/* Card Header & Image */}
                  <div>
                    <div className="relative h-44 w-full bg-slate-100">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 bg-[#004275]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                          {course.typeLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1">
                          <LuClock className="text-xs" /> {course.duration} ({course.internship})
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl shrink-0 border border-blue-100">
                          <Icon />
                        </div>
                        <div>
                          <h2 className="text-base font-bold text-slate-900 leading-snug">
                            {course.title}
                          </h2>
                          <span className="text-[11px] text-slate-500 font-medium">
                            Eligibility: {course.eligibility}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {course.summary}
                      </p>

                      {/* Key Highlights Metrics */}
                      <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            Annual Intake
                          </span>
                          <span className="font-extrabold text-[#004275]">{course.seats} Seats</span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-bold text-slate-400 block">
                            Salary Scope
                          </span>
                          <span className="font-extrabold text-[#FF3B3B]">{course.salary}</span>
                        </div>
                      </div>

                      {/* High-Demand Career Roles */}
                      <div className="mb-3">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                          High-Demand Career Roles:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {course.careers.map((career, cIdx) => (
                            <span
                              key={cIdx}
                              className="text-[11px] bg-blue-50 text-[#005A9C] font-semibold px-2 py-0.5 rounded border border-blue-100/60"
                            >
                              {career}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-xs font-bold text-[#005A9C] hover:text-[#004275] flex items-center gap-1 transition-colors"
                      >
                        Detailed Curriculum <LuArrowRight className="text-xs" />
                      </Link>
                      <Link
                        href="/admissions#apply-form"
                        className="bg-[#FF3B3B] hover:bg-[#e03434] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-2xs transition-all"
                      >
                        Apply Online
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Program Comparison Matrix */}
      <section className="py-14 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Comparative Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Paramedical Degree vs. Diploma Matrix
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Benchmark program durations, mandatory hospital clinical hours, approved seat matrix, and starting compensation packages side-by-side.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#0b1c30] text-white text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Program Name</th>
                  <th className="py-3 px-3">Qualification</th>
                  <th className="py-3 px-3">Duration</th>
                  <th className="py-3 px-3">Clinical Hours</th>
                  <th className="py-3 px-3">Eligibility</th>
                  <th className="py-3 px-3">Intake</th>
                  <th className="py-3 px-3">Starting CTC</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {programs.map((p, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">
                      {p.title}
                    </td>
                    <td className="py-3.5 px-3">
                      <span className="inline-block bg-blue-50 text-[#005A9C] font-semibold text-[11px] px-2 py-0.5 rounded border border-blue-100">
                        {p.typeLabel}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 font-semibold text-slate-700">{p.duration}</td>
                    <td className="py-3.5 px-3 text-slate-600">
                      {p.type === "degree" ? "1,200+ Hours" : "600+ Hours"}
                    </td>
                    <td className="py-3.5 px-3 text-slate-600">{p.eligibility}</td>
                    <td className="py-3.5 px-3 font-bold text-[#004275]">{p.seats} Seats</td>
                    <td className="py-3.5 px-3 font-extrabold text-[#FF3B3B]">{p.salary}</td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/courses/${p.slug}`}
                        className="text-xs font-bold text-[#005A9C] hover:underline whitespace-nowrap"
                      >
                        View Syllabus &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 3-Pillar Academic Pedagogy Breakdown */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Teaching Methodology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              The 40:30:30 Clinical Training Architecture
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              CITPS courses are structured around a balanced ratio of didactic medical science, high-fidelity simulator labs, and direct hospital ward attachments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="text-3xl font-extrabold text-[#004275] mb-2">40%</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Biomedical Sciences &amp; Didactic Theory
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Rigorous grounding in human anatomy, systemic physiology, pathology mechanisms, clinical biochemistry pathways, and medical pharmacology guided by medical college faculty.
              </p>
              <div className="text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <LuCheck className="text-emerald-600" /> Smart AV Classrooms &amp; Medical Library
              </div>
            </div>

            <div className="bg-white border-2 border-[#005A9C]/40 rounded-2xl p-6 shadow-xs relative">
              <span className="absolute -top-3 right-4 bg-[#004275] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                Core Skill Mastery
              </span>
              <div className="text-3xl font-extrabold text-[#005A9C] mb-2">30%</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                In-Campus Diagnostic Simulators &amp; Labs
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Hands-on practical drills on automated biochemistry analyzers, 5-part hematology stations, mock operation theatre suites, and digital radiographic consoles before clinical contact.
              </p>
              <div className="text-xs font-semibold text-[#005A9C] pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <LuCheck className="text-emerald-600" /> NABL-Aligned Lab Instrumentation
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
              <div className="text-3xl font-extrabold text-[#FF3B3B] mb-2">30%</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Compulsory Rotational Hospital Internships
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Full-time rotational hospital postings across super-specialty trauma centers, ICUs, diagnostic chains, and cardiac surgery suites managing real patient caseloads.
              </p>
              <div className="text-xs font-semibold text-slate-500 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                <LuCheck className="text-emerald-600" /> 80+ Partner Hospital Networks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bihar Student Credit Card (MNSSBY) 0% Loan Callout */}
      <section className="py-10 bg-gradient-to-r from-blue-900 to-[#004275] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-block bg-[#FF3B3B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded mb-2">
                Govt. Financial Support Scheme
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-1">
                Zero Financial Barrier: Bihar Student Credit Card (MNSSBY)
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Avail up to ₹4,00,000 education loan at 0% interest for female scholars, transgender candidates, and SC/ST students (1% for general male students). Cover 100% of your tuition, laboratory fees, and hostel charges.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/admissions#apply-form"
                className="bg-[#FF3B3B] hover:bg-[#e03434] text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-lg shadow-md transition-all"
              >
                Apply for MNSSBY Loan Guidance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQs Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-2">
              Common Questions About Paramedical Admissions in Bihar
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear regulatory answers regarding council recognition, NEET exemptions, salary packages, and clinical postings.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-4 bg-slate-50/70 hover:bg-slate-100 flex items-center justify-between gap-3 text-xs sm:text-sm font-bold text-slate-900 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LuCircleHelp className="text-[#005A9C] shrink-0" />
                    {faq.q}
                  </span>
                  <LuChevronDown
                    className={`transform transition-transform text-slate-500 shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#005A9C]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom Action Banner */}
      <section className="py-14 bg-[#f8f9ff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            Limited 350-Seat Quota
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-3 mb-3">
            Reserve Your Paramedical Seat for the 2026-27 Academic Session
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto">
            Direct counseling seats are allocated on first-come merit basis. Speak with our senior academic counselors or visit our Bailey Road campus today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions#apply-form"
              className="bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-all"
            >
              Apply Online Now
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-[#005A9C] text-[#005A9C] hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
