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
  LuBookOpen,
  LuBuilding2,
  LuShieldCheck,
  LuBus,
  LuCheck,
  LuArrowRight,
  LuClock,
  LuMapPin,
  LuPhoneCall,
  LuWifi,
  LuCoffee,
  LuBed,
  LuLock,
  LuCalendar,
  LuFileText,
  LuHospital,
} from "react-icons/lu";
import { submitLead } from "@/lib/submitLead";

export default function FacilitiesClient() {
  const [activeLabTab, setActiveLabTab] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [leadRefId, setLeadRefId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "Patna",
    program: "B.Sc. Medical Laboratory Technology (BMLT)",
    visitDate: "",
    parentAttending: "Yes",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitLead({
      form_type: "Campus Facilities Guided Walkthrough Booking",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: formData.program,
      preferred_visit_date: formData.visitDate,
      district: formData.district,
      message: `Parent Attending: ${formData.parentAttending}${formData.notes ? ` • Focus: ${formData.notes}` : ""}`,
    });

    setIsSubmitting(false);

    if (res.success) {
      setLeadRefId(res.leadId || `CITPS-VISIT-${Math.floor(1000 + Math.random() * 9000)}`);
      setFormSubmitted(true);
    } else {
      setSubmitError(res.error || "Failed to book tour. Please try calling directly.");
    }
  };

  const simulationLabs = [
    {
      id: "lab-pathology",
      name: "Central Pathology & Clinical Biochemistry Suite",
      category: "pathology",
      icon: LuFlaskConical,
      image: "/images/clinical-lab-stitch.jpg",
      hours: "400+ Practical Hours",
      standard: "NABL ISO 15189 Aligned",
      equipment: [
        "Automated Clinical Chemistry Analyzers (Roche Cobas architecture)",
        "5-Part Differential Hematology Cell Counters",
        "Rotary Microtomes for Precision Histopathology Sections",
        "Spectrophotometers, Immunoassay Decks & Clinical Centrifuges",
        "Cold-Chain Bio-Specimen Refrigeration Units (-20°C / -80°C)",
      ],
      competencies:
        "Serum chemistry profiling, automated liver and renal diagnostics, microscopic peripheral blood smear evaluation, biopsy microtomy, and diagnostic microbiology plating.",
    },
    {
      id: "lab-radiology",
      name: "Advanced Medical Imaging & Radiography Pavilion",
      category: "radiology",
      icon: LuScanLine,
      image: "/images/imaging-xray.jpg",
      hours: "450+ Practical Hours",
      standard: "AERB Radiation Safety Certified",
      equipment: [
        "High-Frequency Digital Radiography (DR) Simulation Console",
        "Lead-Lined Radiation Shielded Training Suite (2mm Pb equivalence)",
        "PACS / DICOM Image Viewing & Multi-Planar Reconstruction Workstations",
        "Darkroom CR Plate Processing Stations & Quality Phantoms",
        "Diagnostic Ultrasound Doppler Simulation Module",
      ],
      competencies:
        "Full-body radiographic positioning, contrast media protocol execution, radiation exposure dose calculation, digital artifact correction, and emergency trauma X-ray execution.",
    },
    {
      id: "lab-ot",
      name: "Sterile Mock Operation Theatre & Anesthesia Pavilion",
      category: "surgery",
      icon: LuSyringe,
      image: "/images/course-theatre.jpg",
      hours: "400+ Practical Hours",
      standard: "NABH Hospital Surgical Standards",
      equipment: [
        "Multi-Gas Boyle's Anesthesia Workstation with Vaporizers",
        "Critical Care Mechanical ICU Ventilators with Patient Simulators",
        "Surgical Shadowless LED Overhead Lighting & Hydraulic OT Table",
        "Complete Surgeon Scrubbing Station with Surgical Asepsis Sinks",
        "Laparoscopic Simulation Training Box & Electrosurgical Cautery Units",
      ],
      competencies:
        "Surgical instrument trolley arrangement, endotracheal intubation life support, intraoperative vital monitoring, CSSD autoclave validation, and surgical emergency crash-cart mobilization.",
    },
    {
      id: "lab-physio",
      name: "Physical Medicine & Neuro-Rehabilitation Clinic",
      category: "rehab",
      icon: LuActivity,
      image: "/images/course-physio.jpg",
      hours: "500+ Practical Hours",
      standard: "IAP Clinical Benchmarks",
      equipment: [
        "Advanced Electrotherapy Units: SWD, TENS, Iontophoresis & Therapeutic Ultrasound",
        "Computerized Gait Analysis Treadmill with Body Weight Support",
        "Parallel Walking Bars, Quadriceps Tables & Resistance Pulleys",
        "Specialized Pediatric Sensory Integration Gymnasium",
        "Ergonomic Cervical and Lumbar Mechanical Traction Tables",
      ],
      competencies:
        "Musculoskeletal manual joint mobilization, post-stroke neuromuscular re-education, cardiopulmonary chest physiotherapy, sports ligament injury rehab, and postural realignment.",
    },
    {
      id: "lab-dialysis",
      name: "Specialized Hemodialysis Training Station",
      category: "renal",
      icon: LuDroplet,
      image: "/images/course-dialysis.jpg",
      hours: "350+ Practical Hours",
      standard: "Clinical Nephrology Society Norms",
      equipment: [
        "Multi-Station Fresenius 4008S Hemodialysis Consoles",
        "Clinical Double-Pass Reverse Osmosis (RO) Water Filtration Plant",
        "Automated Dialyzer Reprocessing System & Chemical Disinfection Deck",
        "Silicone Arteriovenous Fistula (AVF) Cannulation Simulators",
        "Heparin Infusion Pumps & Conductivity Monitoring Sensors",
      ],
      competencies:
        "Extracorporeal blood tubing priming, dialyzer clearance monitoring, sterile vascular needle cannulation, dialysis machine alarm troubleshooting, and emergency hypotension management.",
    },
    {
      id: "lab-optometry",
      name: "Clinical Optometry & Ophthalmic Diagnostics Wing",
      category: "optometry",
      icon: LuEye,
      image: "/images/course-optometry.jpg",
      hours: "350+ Practical Hours",
      standard: "National Eye Care Standards",
      equipment: [
        "Advanced Slit-Lamp Biomicroscopes with Digital Camera Attachments",
        "Automated Refractometers & Keratometers",
        "Manual Phoropters & Precision Trial Lens Assemblies",
        "Humphrey-Style Visual Field Perimeter Analyzer",
        "Clinical Applanation Tonometers & Ophthalmoscopes",
      ],
      competencies:
        "Refractive error determination, anterior eye segment examination, intraocular pressure measurement for glaucoma screening, specialized contact lens fitting, and binocular vision orthoptics.",
    },
  ];

  const filteredLabs =
    activeLabTab === "all"
      ? simulationLabs
      : simulationLabs.filter((lab) => lab.category === activeLabTab);

  const transitRoutes = [
    {
      routeNo: "Route 01",
      corridor: "Patna Junction & Central Hubs",
      stops: "Patna Junction -> Dak Bunglow -> Income Tax Golambar -> Bailey Road -> CITPS Campus",
      frequency: "3 Morning Pickups | 3 Evening Returns",
      busCount: "4 Dedicated Buses",
    },
    {
      routeNo: "Route 02",
      corridor: "Danapur & Saguna More Transit",
      stops: "Danapur Station -> Danapur Cantonment -> RPS More -> Saguna More -> CITPS Campus",
      frequency: "Every 20 Minutes (Continuous Campus Shuttles)",
      busCount: "3 Dedicated Buses",
    },
    {
      routeNo: "Route 03",
      corridor: "Khagaul & Phulwari Sharif Loop",
      stops: "Khagaul Lakh -> Anisabad -> Phulwari Sharif -> AIIMS Road -> CITPS Campus",
      frequency: "3 Morning Pickups | 3 Evening Returns",
      busCount: "3 Dedicated Buses",
    },
    {
      routeNo: "Route 04",
      corridor: "Clinical Posting Hospital Shuttles",
      stops: "CITPS Campus -> Paras HMRI Hospital -> Ruban Memorial -> AIIMS Patna Clinical Wing",
      frequency: "Scheduled Hospital Shift Rotations (Morning & Evening)",
      busCount: "2 Hospital Transit Coaches",
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
              Campus Infrastructure
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> NABL &amp; AERB Aligned Simulation Labs
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline text-slate-300">
              50,000+ Sq. Ft. Integrated Medical Complex on Bailey Road, Patna
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>Visits: Mon - Sat (9:00 AM - 5:30 PM)</span>
            <span className="text-slate-500">|</span>
            <a
              href="#book-visit"
              className="text-[#FF3B3B] hover:text-red-400 font-bold flex items-center gap-1"
            >
              Book Guided Tour <LuArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: 50,000+ Sq. Ft. Paramedical Campus */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#005A9C]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#004275]">Campus Infrastructure</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Facilities &amp; Simulation Labs</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005A9C] text-xs font-bold uppercase tracking-wider mb-4">
                <LuBuilding2 className="text-sm" />
                50,000+ SQ. FT. INTEGRATED HEALTHCARE CAMPUS : BAILEY ROAD, PATNA
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
                50,000+ Sq. Ft. World-Class Paramedical Simulation Infrastructure &amp; Campus Life
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Purpose-built to bridge textbook biomedical concepts and emergency hospital intensive care, CITPS delivers ISO and NABL-aligned diagnostic training suites, 1,200+ hours of mandatory hands-on clinical training, and strategic proximity to Patna&apos;s apex healthcare corridors on Bailey Road.
              </p>

              {/* 4 Stats Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">50,000+</span>
                  <span className="text-xs font-semibold text-slate-600">Built-Up Sq. Ft.</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">6 High-Tech</span>
                  <span className="text-xs font-semibold text-slate-600">Simulation Labs</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">1:1 Ratio</span>
                  <span className="text-xs font-semibold text-slate-600">Equipment Access</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#FF3B3B] block">100%</span>
                  <span className="text-xs font-semibold text-slate-600">Hospital Residencies</span>
                </div>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9ff] border-2 border-slate-200 rounded-2xl p-3 shadow-sm overflow-hidden">
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src="/images/clinical-lab-stitch.jpg"
                    alt="CITPS Central Pathology & Clinical Biochemistry Lab"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-[#0b1c30]/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block bg-[#FF3B3B] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                      NABL Standard Facility
                    </span>
                    <h3 className="text-sm font-bold leading-snug">
                      Central Pathology &amp; Immunoassay Simulation Pavilion
                    </h3>
                    <p className="text-[11px] text-slate-200 mt-0.5">
                      Equipped with automated clinical biochemistry systems, 5-part hematology analyzers, and real clinical QC calibrators.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#005A9C] flex items-center justify-center text-xl">
                      <LuMapPin />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Prime Bailey Road Campus, Patna
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Opp. Saguna More corridor, minutes from Danapur &amp; AIIMS Patna
                      </span>
                    </div>
                  </div>
                  <a
                    href="#book-visit"
                    className="text-xs font-bold text-[#FF3B3B] hover:underline flex items-center gap-1 shrink-0 ml-2"
                  >
                    Visit Campus <LuArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 6 Core Diagnostic Simulation Laboratories Bento Grid */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              In-Campus Diagnostic Laboratories
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              The 6 Core Diagnostic Simulation Laboratories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every laboratory at CITPS is engineered to mirror corporate hospital workflows, ensuring our scholars master clinical instrumentation before stepping into live emergency rooms and pathology centers.
            </p>
          </div>

          {/* Interactive Lab Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {[
              { id: "all", label: "All Laboratories (6)" },
              { id: "pathology", label: "Biochemistry & Pathology" },
              { id: "radiology", label: "Medical Imaging & X-Ray" },
              { id: "surgery", label: "Mock OT & Anesthesia" },
              { id: "rehab", label: "Physiotherapy & Rehab" },
              { id: "renal", label: "Hemodialysis Suite" },
              { id: "optometry", label: "Clinical Optometry" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveLabTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeLabTab === tab.id
                    ? "bg-[#004275] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLabs.map((lab) => {
              const Icon = lab.icon;
              return (
                <div
                  key={lab.id}
                  className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Lab Thumbnail */}
                    <div className="relative h-44 w-full bg-slate-100">
                      <Image
                        src={lab.image}
                        alt={lab.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1 bg-[#004275]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded backdrop-blur-xs">
                          {lab.standard}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] font-bold text-blue-200 flex items-center gap-1">
                          <LuClock className="text-xs" /> {lab.hours}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#005A9C] flex items-center justify-center text-lg shrink-0 border border-blue-100">
                          <Icon />
                        </div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug">
                          {lab.name}
                        </h3>
                      </div>

                      <div className="mb-4">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Installed Core Instrumentation:
                        </span>
                        <ul className="space-y-1 text-xs text-slate-700">
                          {lab.equipment.map((eq, eIdx) => (
                            <li key={eIdx} className="flex items-start gap-1.5">
                              <LuCheck className="text-emerald-600 mt-0.5 shrink-0 text-xs" />
                              <span>{eq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-[11px] font-bold text-[#005A9C] uppercase tracking-wider block mb-1">
                          Competencies Mastered:
                        </span>
                        <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          {lab.competencies}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">1:1 Practical Ratio</span>
                      <a
                        href="#book-visit"
                        className="text-[#005A9C] font-bold hover:underline flex items-center gap-1"
                      >
                        Inspect in Person &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Central Medical Library & Digital DelNet Repository */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full mb-3 inline-block">
                Academic Knowledge Center
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mb-4 leading-tight">
                Central Medical Library &amp; DelNet Digital E-Journal Repository
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our central medical library is configured for focused clinical research and deep curriculum revision. Housing over 15,000 physical medical texts, standard pharmacopeias, and high-speed digital consortia, scholars enjoy 24/7 access to international healthcare discoveries.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block font-bold text-sm mb-1">
                    15,000+ Print Volumes
                  </strong>
                  <span className="text-slate-600">
                    Covering pathology, radiology, surgical anatomy, physical therapy, and pharmacology.
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block font-bold text-sm mb-1">
                    DelNet &amp; PubMed Subscriptions
                  </strong>
                  <span className="text-slate-600">
                    Unlimited digital access to peer-reviewed indexed journals and medical papers.
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block font-bold text-sm mb-1">
                    Gigabit LAN Research Pods
                  </strong>
                  <span className="text-slate-600">
                    Individual carrels equipped with power points and high-speed internet terminals.
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-slate-900 block font-bold text-sm mb-1">
                    Faculty Theses &amp; Case Archive
                  </strong>
                  <span className="text-slate-600">
                    Over a decade of clinical case presentations, diagnostic logbooks, and research dissertations.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-200 w-fit">
                <LuShieldCheck /> Quiet Study Environment Open 7 Days a Week During Exam Sessions
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
                <Image
                  src="/images/classroom.jpg"
                  alt="CITPS Smart Digital Medical Classrooms and Library"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold text-blue-200 block mb-0.5">
                    Audio-Visual Smart Lecture Halls
                  </span>
                  <p className="text-xs text-slate-200">
                    Tiered clinical lecture suites equipped with high-definition medical projection systems and interactive demonstration displays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. On-Campus Student Living, Hostels & Residential Amenities */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Student Life &amp; Residential Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Secure Hostels, Nutritious Dining &amp; Campus Well-Being
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              For scholars travelling from across Bihar and neighbouring states, CITPS provides secure, hygienic, and home-like residential living designed around study discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuBed />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Separate Secure Hostels</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Independent residential blocks for male and female scholars with air-cooled double and triple occupancy rooms, individual study desks, and attached modern washrooms.
              </p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <LuCheck /> 24/7 Resident Wardens
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuCoffee />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">FSSAI Certified Mess</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Four balanced meals served daily (breakfast, lunch, evening tea &amp; dinner) prepared in stainless steel commercial kitchens with certified RO drinking water systems.
              </p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <LuCheck /> Nutritious Diet Monitoring
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuLock />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Biometric Security &amp; CCTV</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Multi-tier campus security with turnstile biometric entry, 120+ high-resolution CCTV cameras covering corridors, and 24/7 manned security guards at all perimeter gates.
              </p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <LuCheck /> Zero-Ragging Guarantee
              </span>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuWifi />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">High-Speed Wi-Fi &amp; Power</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                Campus-wide 100 Mbps fiber optic wireless connectivity and heavy-duty automatic diesel generator sets ensuring uninterrupted power supply for laboratory freezers and hostels.
              </p>
              <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                <LuCheck /> 100% Power Redundancy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Campus Transit Network & Strategic Bailey Road Advantage */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Transit &amp; Commute Fleet
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Fleet of 12+ Dedicated College Buses &amp; Hospital Shuttles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              CITPS operates a synchronized fleet of GPS-monitored buses ensuring safe, punctual transit for day-scholars across major Patna and Danapur arterial routes, as well as hospital rotations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transitRoutes.map((route, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#004275] bg-blue-100/70 px-2.5 py-0.5 rounded">
                      {route.routeNo}
                    </span>
                    <span className="text-xs font-bold text-[#FF3B3B]">{route.busCount}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{route.corridor}</h3>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-xs text-slate-700 font-medium mb-3">
                    <strong className="text-slate-900">Stops:</strong> {route.stops}
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
                  <span>Frequency:</span>
                  <span className="text-[#005A9C]">{route.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Interactive Campus Visit & 360 Walkthrough Booking */}
      <section id="book-visit" className="py-14 sm:py-16 bg-[#004275] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF3B3B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              Schedule A Guided Walkthrough
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">
              Experience Our Simulation Suites in Person
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl mx-auto">
              Inspect our automated biochemistry decks, mock operating theatres, digital radiography consoles, and campus hostels. Speak directly with senior faculty.
            </p>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto">
            {formSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  <LuCheck />
                </div>
                <h3 className="text-xl font-extrabold text-[#004275] mb-2">
                  Campus Visit Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  Thank you, <strong>{formData.name}</strong>. Booking Reference: <strong className="font-mono text-[#005A9C]">{leadRefId}</strong>.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Our admissions counseling desk has reserved your guided tour on <strong>{formData.visitDate || "the upcoming Saturday"}</strong>.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-slate-700 mb-4">
                  Campus Location Pin &amp; Parking Pass dispatched to your WhatsApp: <strong>{formData.phone}</strong>.
                </div>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-bold text-[#005A9C] hover:underline"
                >
                  Book another visit or update details
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {submitError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-semibold">
                    {submitError}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      District / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Patna, Muzaffarpur"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    >
                      <option>B.Sc. Medical Laboratory Technology (BMLT)</option>
                      <option>B.Sc. Radiology &amp; Imaging Technology (BRIT)</option>
                      <option>Bachelor of Physiotherapy (BPT)</option>
                      <option>B.Sc. Operation Theatre Technology (BOTT)</option>
                      <option>B.Sc. Renal Dialysis Technology</option>
                      <option>Bachelor of Clinical Optometry (B.Optom)</option>
                      <option>Diploma Programs (DMLT / DXT / DOT)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Visit Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Will parents / guardians accompany you?
                  </label>
                  <div className="flex gap-4 text-xs font-semibold text-slate-700 mt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="parent"
                        value="Yes"
                        checked={formData.parentAttending === "Yes"}
                        onChange={(e) => setFormData({ ...formData, parentAttending: e.target.value })}
                      />
                      <span>Yes, attending with parents</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="parent"
                        value="No"
                        checked={formData.parentAttending === "No"}
                        onChange={(e) => setFormData({ ...formData, parentAttending: e.target.value })}
                      />
                      <span>Solo student visit</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FF3B3B] hover:bg-[#e03434] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-sm shadow-md transition-all mt-2"
                >
                  {isSubmitting ? "Confirming Booking..." : "Confirm Guided Campus Visit"}
                </button>
                <p className="text-[11px] text-center text-slate-500">
                  Instant confirmation with location pin and admission counseling slot dispatched via WhatsApp.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
