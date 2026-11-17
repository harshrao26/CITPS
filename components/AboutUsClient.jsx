"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  LuShieldCheck,
  LuAward,
  LuBuilding2,
  LuHospital,
  LuGraduationCap,
  LuCheck,
  LuClock,
  LuUsers,
  LuFileText,
  LuPhoneCall,
  LuArrowRight,
  LuActivity,
  LuHeartHandshake,
  LuStethoscope,
  LuMicroscope,
  LuCalendar,
  LuBookOpen,
  LuAlertTriangle,
  LuScale,
} from "react-icons/lu";

export default function AboutUsClient() {
  const [activeTab, setActiveTab] = useState("all");

  const accreditations = [
    {
      regulator: "Bihar Paramedical Council",
      authority: "Department of Health, Government of Bihar",
      orderNo: "BPC/ADM/2016-892",
      validity: "Permanent Recognition",
      scope: "B.Sc. MLT, B.Sc. RIT, B.Sc. OTT, BPT & Paramedical Diplomas",
      desc: "Statutory authorization empowering CITPS to conduct university-recognized allied health degree and diploma programs with clinical internship validity across all government and private hospitals in Bihar.",
    },
    {
      regulator: "AICTE New Delhi",
      authority: "Ministry of Education, Government of India",
      orderNo: "F.No. Eastern/1-3514/2018",
      validity: "Annual Academic Extension",
      scope: "Medical Imaging, Laboratory & Surgical Sciences Framework",
      desc: "Curricular alignment ensuring technical laboratory infrastructure, faculty-to-student ratios, and practical workshop standards conform strictly to national technical education norms.",
    },
    {
      regulator: "NCAHP Act 2021",
      authority: "National Commission for Allied & Healthcare Professions",
      orderNo: "Gazette Notification No. 14 of 2021",
      validity: "Central Statutory Standard",
      scope: "Pan-India Central Register & Reciprocal Global Practice",
      desc: "Standardized 8-semester competency-based education framework guaranteeing CITPS graduates registration in the Central Allied Health Register for immediate employability across India and abroad.",
    },
    {
      regulator: "BUHS Alignment",
      authority: "Bihar University of Health Sciences, Patna",
      orderNo: "BUHS/AFF/2023-114",
      validity: "State Health University Standard",
      scope: "Credit-Based Semester Examination & Degree Endorsement",
      desc: "Adherence to uniform medical examination standards, centralized syllabus governance, and rigorous clinical logbook auditing overseen by the state health university.",
    },
    {
      regulator: "NABL & ISO 15189 Aligned",
      authority: "Quality Council of India (QCI) Guidelines",
      orderNo: "QMS/CITPS/2022-QC",
      validity: "Laboratory Safety & Calibration Benchmark",
      scope: "Diagnostic Biochemistry, Hematology & Microbiology Labs",
      desc: "Instructional diagnostic laboratories configured to international ISO 15189:2022 quality standards, using automated analyzers, calibrators, and daily internal quality control runs.",
    },
    {
      regulator: "ISO 9001:2015 Certified",
      authority: "International Quality Management Systems",
      orderNo: "CERT-QMS-44192",
      validity: "Institutional Quality Certification",
      scope: "Healthcare Training, Laboratory Practicals & Hospital Placements",
      desc: "Certified institutional quality management system auditing classroom delivery, clinical internship logbooks, student grievance redressal, and annual placement transparency.",
    },
  ];

  const advisoryCouncil = [
    {
      name: "Dr. R. K. Srivastava",
      role: "Chairman, Governing Medical Advisory Council",
      qualifications: "MBBS, MD (Medicine), FICN",
      experience: "32+ Years Experience",
      pastAffiliation: "Former Civil Surgeon & Regional Chief Medical Officer",
      focus: "Clinical hospital integration, public healthcare policy, and ethical medical compliance.",
      badge: "Physician Leader",
    },
    {
      name: "Dr. Sunita Banerjee",
      role: "Director of Medical Education & Diagnostic Head",
      qualifications: "MBBS, MD (Pathology)",
      experience: "26+ Years Experience",
      pastAffiliation: "Formerly Senior Faculty, Department of Pathology, PMCH & AIIMS Patna",
      focus: "Laboratory quality systems, histopathology curricula, and automated analyzer protocols.",
      badge: "Clinical Pathologist",
    },
    {
      name: "Dr. Amitabh Verma",
      role: "Chief Medical Superintendent & OT Advisor",
      qualifications: "MBBS, MS (Surgery), M.Ch (Trauma & Critical Care)",
      experience: "22+ Years Experience",
      pastAffiliation: "Chief Surgical Consultant, Tertiary Care Trauma Network",
      focus: "Operation theatre asepsis, critical care mechanical ventilation, and surgical technician training.",
      badge: "Trauma Surgeon",
    },
    {
      name: "Prof. Anita Narayan",
      role: "Dean of Allied Health & Paramedical Sciences",
      qualifications: "M.Sc. MLT, Ph.D. (Medical Microbiology)",
      experience: "19+ Years Academic Leadership",
      pastAffiliation: "State Paramedical Curriculum Committee Delegate",
      focus: "Competency-based clinical logbooks, NCAHP modular syllabus, and molecular biology suites.",
      badge: "Academic Dean",
    },
    {
      name: "Dr. Alok Kumar Roy",
      role: "Director of Diagnostic Imaging & Radiology",
      qualifications: "MBBS, MD (Radiodiagnosis)",
      experience: "20+ Years Experience",
      pastAffiliation: "Senior Consultant Radiologist, Multi-Specialty Imaging Centers",
      focus: "MRI pulse sequences, multi-slice CT reconstruction, and AERB radiation safety compliance.",
      badge: "Consultant Radiologist",
    },
    {
      name: "Dr. Priya Ranjan",
      role: "Head, Department of Physiotherapy & Rehabilitation",
      qualifications: "BPT, MPT (Neurology), MIAP",
      experience: "15+ Years Clinical Experience",
      pastAffiliation: "Senior Neuro-Physiotherapist, Apex Neuro-Rehab Center",
      focus: "Gait analysis, stroke recovery protocols, electrotherapy modalities, and pediatric rehabilitation.",
      badge: "Physiotherapy Specialist",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Founding of CITPS Patna",
      desc: "Established on Bailey Road with an initial batch of 60 students in Medical Laboratory Technology, addressing Bihar's acute shortage of certified clinical pathologists.",
    },
    {
      year: "2017",
      title: "Expansion into Radiology & OT Technology",
      desc: "Sanctioned by Bihar Paramedical Council for B.Sc. Radiology (BRIT) and Operation Theatre Technology (BOTT). First dedicated mock OT and X-ray simulation suites commissioned.",
    },
    {
      year: "2020",
      title: "Frontline Healthcare & Molecular Diagnostics",
      desc: "Installed high-throughput automated biochemistry analyzers and established RT-PCR molecular biology facilities during the public health crisis, training over 200 technologists for frontline hospital deployment.",
    },
    {
      year: "2022",
      title: "Apex Hospital Internship Consortia",
      desc: "Signed formal institutional MoUs with AIIMS Patna, Paras HMRI, Ruban Memorial Hospital, and Narayana Health for structured 6-month clinical rotational residencies.",
    },
    {
      year: "2024",
      title: "NCAHP Act 2021 Model Curriculum Adoption",
      desc: "Became one of Eastern India's first paramedical institutes to implement the National Commission for Allied & Healthcare Professions standardized credit matrix.",
    },
    {
      year: "2026",
      title: "Super-Specialty Simulation Suites & Central Admissions",
      desc: "Commissioned advanced hemodialysis training stations, digital radiographic consoles, and a dedicated Bihar Student Credit Card (MNSSBY) 0% interest counseling desk.",
    },
  ];

  const governanceCells = [
    {
      title: "Anti-Ragging Squad & Monitoring Cell",
      regulation: "UGC & Supreme Court Regulations 2009",
      contact: "Toll-Free Helpline: 1800-180-5522 | Direct: +91 612 299 8844",
      desc: "Zero-tolerance anti-ragging policy enforced by faculty patrols, biometric hostel entry, and mandatory annual undertakings signed by students and guardians.",
      icon: LuShieldCheck,
    },
    {
      title: "Internal Complaints Committee (ICC)",
      regulation: "Sexual Harassment of Women at Workplace (POSH) Act 2013",
      contact: "Presiding Officer: Dr. Sunita Banerjee | icc@citps.in",
      desc: "Statutory committee ensuring a safe, dignified, and supportive environment for female scholars, clinical residents, and faculty across campus and affiliated hospital wards.",
      icon: LuScale,
    },
    {
      title: "Equal Opportunity & SC/ST Welfare Cell",
      regulation: "Ministry of Social Justice & Government of Bihar Norms",
      contact: "Welfare Coordinator: Prof. S. Paswan | welfare@citps.in",
      desc: "Oversees affirmative scholarship disbursement, Bihar Post-Matric schemes, and specialized academic tutoring for under-represented healthcare scholars.",
      icon: LuHeartHandshake,
    },
    {
      title: "AISHE & Statutory Audit Public Disclosures",
      regulation: "All India Survey on Higher Education (AISHE Code: C-61298)",
      contact: "Registrar Secretariat: compliance@citps.in",
      desc: "Annual public disclosure of student enrollment rosters, audited financial accounts, laboratory infrastructure audits, and faculty credential records.",
      icon: LuFileText,
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
              Statutory Disclosures
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> Approved by Bihar Paramedical Council (Govt. of Bihar)
            </span>
            <span className="hidden lg:inline text-slate-500">•</span>
            <span className="hidden lg:inline text-slate-300">
              AICTE New Delhi Recognized | BUHS Exam Aligned | NCAHP Act 2021 Compliant
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>AISHE Code: C-61298</span>
            <span className="text-slate-500">|</span>
            <Link
              href="/admissions"
              className="text-[#FF3B3B] hover:text-red-400 font-bold flex items-center gap-1"
            >
              Admissions 2026-27 Active <LuArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Institutional Authority */}
      <section className="relative bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#005A9C]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#004275]">About CITPS</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Accreditations & Governance</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005A9C] text-xs font-bold uppercase tracking-wider mb-4">
                <LuAward className="text-sm" />
                ESTABLISHED 2014 : GOVT. HEALTH REGISTRY CODE: BPC/2014/PAT-88
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
                Pioneering Clinical Excellence &amp; Paramedical Education in Eastern India
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                Founded to bridge Eastern India&apos;s critical deficit of certified allied healthcare technologists, Central Institute of Technical &amp; Paramedical Sciences (CITPS) combines university-governed academic curricula with 1,200+ hours of compulsory rotational hospital residencies, state-of-the-art diagnostic instrumentation, and ethical clinical mentorship.
              </p>

              {/* Regulatory Highlights Pill Badges */}
              <div className="flex flex-wrap items-center gap-2.5 mb-8">
                {[
                  "Bihar Paramedical Council Approved",
                  "AICTE New Delhi Recognized",
                  "NCAHP Act 2021 Aligned",
                  "ISO 9001:2015 Certified",
                  "100% Compulsory Hospital Residency",
                ].map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 bg-[#f8f9ff] text-slate-800 border border-slate-200 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    <LuCheck className="text-emerald-600 text-sm" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Key Trust Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">50,000+</span>
                  <span className="text-xs font-semibold text-slate-600">Sq. Ft. Campus</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">80+</span>
                  <span className="text-xs font-semibold text-slate-600">Hospital MoUs</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#004275] block">1,200+</span>
                  <span className="text-xs font-semibold text-slate-600">Clinical Hours</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80">
                  <span className="text-2xl font-extrabold text-[#FF3B3B] block">100%</span>
                  <span className="text-xs font-semibold text-slate-600">Placement Track</span>
                </div>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#f8f9ff] border-2 border-slate-200 rounded-2xl p-3 shadow-sm overflow-hidden">
                <div className="relative h-72 sm:h-80 w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src="/images/clinical-lab-stitch.jpg"
                    alt="CITPS Advanced Medical Laboratory Simulation Suite"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30]/90 via-[#0b1c30]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="inline-block bg-[#FF3B3B] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1">
                      NABL Aligned Infrastructure
                    </span>
                    <h3 className="text-sm font-bold leading-snug">
                      Central Diagnostic Biochemistry &amp; Pathological Skill Suite
                    </h3>
                    <p className="text-[11px] text-slate-200 mt-0.5">
                      Hands-on practical exposure on automated clinical chemistry analyzers and 5-part hematology counters.
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-[#005A9C] flex items-center justify-center text-xl">
                      <LuHospital />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-900 block">
                        Super-Specialty Hospital Attachments
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Compulsory rotational postings across Patna, Delhi NCR &amp; Kolkata
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/placements"
                    className="text-xs font-bold text-[#005A9C] hover:underline flex items-center gap-1 shrink-0 ml-2"
                  >
                    View Placements <LuArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statutory Recognitions & Legal Accreditations Bento Grid */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Legal Compliance &amp; Regulatory Validity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Statutory Authorizations, Affiliations &amp; Government Gazettes
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every academic degree and paramedical diploma awarded at CITPS operates under unambiguous statutory sanctions from state and central regulatory authorities, ensuring complete legality for hospital employment, government recruitment, and overseas licensing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accreditations.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 hover:border-blue-300 rounded-2xl p-6 shadow-xs flex flex-col justify-between transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-[#005A9C] bg-blue-50 px-2.5 py-1 rounded border border-blue-100">
                      {item.regulator}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <LuShieldCheck /> {item.validity}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">{item.authority}</h3>

                  <div className="text-xs font-mono text-slate-500 bg-slate-50 p-2 rounded border border-slate-100 mb-3">
                    Order Ref: <span className="font-semibold text-slate-800">{item.orderNo}</span>
                  </div>

                  <div className="mb-3">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Academic Scope
                    </span>
                    <span className="text-xs font-semibold text-slate-700 block">{item.scope}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Statutory Compliance</span>
                  <span className="text-emerald-600 font-bold flex items-center gap-1">
                    <LuCheck /> 100% Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dossier Download Callout */}
          <div className="mt-8 bg-blue-900/5 border border-blue-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#005A9C] text-white flex items-center justify-center text-xl shrink-0">
                <LuFileText />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  Institutional Accreditation &amp; Government Gazette Dossier
                </h4>
                <p className="text-xs text-slate-600">
                  Download official council orders, syllabus frameworks, and public health statutory gazette copies.
                </p>
              </div>
            </div>
            <Link
              href="/admissions#apply-form"
              className="bg-[#005A9C] hover:bg-[#004275] text-white px-5 py-2.5 rounded-lg text-xs font-bold shadow-xs whitespace-nowrap transition-all"
            >
              Request Compliance Dossier (.PDF)
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Institutional Creed: Vision, Mission & Core Values */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-6 bg-gradient-to-br from-[#004275] to-[#0b1c30] text-white rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <span className="inline-block text-xs font-bold text-blue-200 uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full mb-3">
                Institutional Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 leading-snug">
                Eastern India&apos;s Apex Allied Healthcare &amp; Clinical Sciences Institute
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                To stand as the national benchmark for paramedical and allied health pedagogy, fostering clinicians whose diagnostic precision, technological mastery, and compassionate bedside ethics collectively elevate India&apos;s secondary and tertiary healthcare ecosystem.
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-xs text-blue-200">
                <LuCheck className="text-emerald-400" />
                <span>Zero-tolerance diagnostic error training philosophy</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#f8f9ff] border border-slate-200 rounded-2xl p-8">
              <span className="inline-block text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full mb-3">
                Institutional Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mb-4 leading-snug">
                Bridging Diagnostic Deficits Through Rigorous Clinical Immersion
              </h2>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <LuCheck className="text-emerald-600 mt-1 shrink-0" />
                  <span>
                    <strong>1,200+ Documented Clinical Hours:</strong> Enforcing compulsory hospital rotations in accredited teaching hospitals before graduation.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <LuCheck className="text-emerald-600 mt-1 shrink-0" />
                  <span>
                    <strong>Simulated High-Stakes Environments:</strong> Providing hands-on mastery over automated biochemistry stations, mock OTs, and radiography consoles.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <LuCheck className="text-emerald-600 mt-1 shrink-0" />
                  <span>
                    <strong>Inclusive Medical Education:</strong> Supporting students across Bihar through the Bihar Student Credit Card (MNSSBY) 0% interest loan facility.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4 Core Pillars of Clinical Rigor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Diagnostic Accuracy",
                desc: "Rigorous quality controls, zero-tolerance analytical errors, and international standard calibration training across all pathology and imaging modalities.",
                icon: LuMicroscope,
              },
              {
                title: "Clinical Integrity",
                desc: "Strict adherence to biomedical waste management protocols, surgical asepsis, patient data confidentiality, and medical council ethics.",
                icon: LuShieldCheck,
              },
              {
                title: "Patient-Centric Empathy",
                desc: "Instilling deep human empathy during pre-analytical phlebotomy, radiologic positioning, trauma life-support, and physical rehabilitation.",
                icon: LuHeartHandshake,
              },
              {
                title: "Technological Modernity",
                desc: "Continuous curriculum upgrades covering artificial intelligence in radiology, molecular RT-PCR testing, and automated extracorporeal dialysis.",
                icon: LuActivity,
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 hover:bg-white hover:border-blue-300 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                    <Icon />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Medical Advisory Council & Academic Leadership */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Distinguished Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Governing Medical Advisory Council &amp; Senior Faculty
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              CITPS academic governance is stewarded by senior clinical consultants, former medical college department heads, and state healthcare administrators dedicated to clinical discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisoryCouncil.map((member, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold text-[#005A9C] bg-blue-50 px-2.5 py-0.5 rounded border border-blue-100">
                      {member.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <LuClock className="text-slate-400" /> {member.experience}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900">{member.name}</h3>
                  <span className="text-xs font-bold text-[#FF3B3B] block mb-1">{member.role}</span>
                  <span className="text-xs font-mono text-slate-600 block mb-2">{member.qualifications}</span>

                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs text-slate-600 mb-3">
                    <strong className="text-slate-800">Background:</strong> {member.pastAffiliation}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{member.focus}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span>CITPS Academic Board</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <LuCheck /> Active Mentor
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 10-Year Clinical Impact Milestones Timeline */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Decade of Impact (2014 - 2026)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Milestones in Healthcare Training &amp; Clinical Excellence
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              From a dedicated medical laboratory training institute in 2014 to Eastern India&apos;s recognized multi-disciplinary paramedical college, explore CITPS&apos;s transformative trajectory.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 space-y-8 pl-6 md:pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Circle */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#005A9C] group-hover:border-[#FF3B3B] transition-all" />

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-1">
                  <span className="text-sm font-extrabold text-[#FF3B3B] bg-red-50 border border-red-200 px-2.5 py-0.5 rounded w-fit">
                    {m.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">{m.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Statutory Student Safeguards & Institutional Governance */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 border border-red-200 px-3 py-1 rounded-full">
              Statutory Safeguards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              Institutional Governance, Ethics &amp; Student Oversight Cells
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In full compliance with Supreme Court orders, UGC regulations, and the POSH Act 2013, CITPS enforces statutory student welfare and anti-harassment bodies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governanceCells.map((cell, idx) => {
              const Icon = cell.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl shrink-0">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-900">{cell.title}</h3>
                        <span className="text-[11px] font-semibold text-slate-500 block">
                          {cell.regulation}
                        </span>
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-xs font-mono text-slate-700 mb-3">
                      {cell.contact}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{cell.desc}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span>Statutory Mandate</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <LuCheck /> Fully Operational 2026
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-14 bg-[#004275] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#FF3B3B] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            Admissions Open : Session 2026-27
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            Begin Your Career in Allied Healthcare at CITPS Patna
          </h2>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Experience university-accredited training, 1,200+ clinical hours in super-specialty hospitals, and guaranteed placement assistance. Apply online or schedule a campus walkthrough.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/admissions#apply-form"
              className="bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-all"
            >
              Apply Online for 2026 Batch
            </Link>
            <Link
              href="/courses"
              className="bg-white text-[#004275] hover:bg-blue-50 px-6 py-3 rounded-lg font-bold text-sm shadow-md transition-all"
            >
              Explore Paramedical Programs
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-5 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
