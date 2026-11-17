"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuCheck,
  LuShieldCheck,
  LuGraduationCap,
  LuFileText,
  LuPhoneCall,
  LuMail,
  LuCalendar,
  LuMapPin,
  LuClock,
  LuDownload,
  LuChevronDown,
  LuChevronUp,
  LuArrowRight,
  LuUser,
  LuCreditCard,
  LuAlertCircle,
  LuHospital,
  LuMessageCircle,
  LuBadgeCheck,
} from "react-icons/lu";
import { submitLead } from "@/lib/submitLead";

export default function AdmissionsHubClient() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [leadRefId, setLeadRefId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    fatherName: "",
    board: "BSEB",
    pcbPercent: "",
    course: "B.Sc. Medical Laboratory Technology (BMLT)",
    district: "Patna",
    creditCard: "Yes",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitLead({
      form_type: "Admissions Central Hub Online Application",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      course: formData.course,
      father_name: formData.fatherName,
      board: formData.board,
      pcb_percent: formData.pcbPercent,
      district: formData.district,
      bihar_student_credit_card: formData.creditCard,
    });

    setIsSubmitting(false);

    if (res.success) {
      setLeadRefId(res.leadId || `CITPS/2026/${Math.floor(1000 + Math.random() * 9000)}`);
      setFormSubmitted(true);
    } else {
      setSubmitError(res.error || "Failed to submit. Please try again or call our helpline.");
    }
  };

  const faqs = [
    {
      q: "Is NEET UG mandatory for admission to B.Sc. Paramedical courses at CITPS Patna?",
      a: "No, NEET is not mandatory for admission to B.Sc. MLT, BPT, B.Sc. Radiology, or B.Sc. OTT at CITPS. In accordance with the Bihar State Allied and Healthcare Council and NCAHP guidelines, admissions are conducted directly on merit based on 10+2 marks (Physics, Chemistry, and Biology/Mathematics aggregate) followed by institutional counseling.",
    },
    {
      q: "How does the Bihar Student Credit Card (MNSSBY) scheme work at CITPS?",
      a: "CITPS is an authorized technical & paramedical institution under the Govt. of Bihar's MNSSBY framework. Eligible Bihar domicile students can secure up to ₹4,00,000 for course fees, hostel, and books with zero collateral. CITPS provides official Bonafide Admission Letters and Fee Breakup certificates for instant approval at your local District Registration and Counseling Center (DRCC).",
    },
    {
      q: "Are CITPS paramedical degrees valid for State & Central Government hospital recruitments?",
      a: "Yes. All degrees and diplomas awarded are fully recognized by the State Paramedical Council, Department of Health (Govt. of Bihar), and adhere strictly to the National Commission for Allied and Healthcare Professions (NCAHP) Act 2021. Graduates are fully eligible for vacancies in AIIMS, Railway Hospitals, ESIC, BSSC, and State Health Society Bihar.",
    },
    {
      q: "What is the clinical hospital internship arrangement?",
      a: "Every undergraduate degree includes a compulsory 6-month full-time rotational clinical internship across premier hospital partners, including AIIMS Patna corridor facilities, Paras HMRI Hospital, Ruban Memorial, Mahavir Cancer Sansthan, Apollo, and Dr. Lal PathLabs. Students receive practical postings in Emergency STAT Labs, ICUs, Operation Theatres, and Radiodiagnosis suites.",
    },
    {
      q: "What hostel and transport facilities are available for outstation students?",
      a: "CITPS provides safe, separate residential hostels for male and female students with 24/7 security, Wi-Fi, hygienic dining mess serving nutritious meals, and dedicated transport buses connecting Patna Junction, Danapur, Bailey Road, Phulwari Sharif, and Hajipur.",
    },
    {
      q: "What is the fee payment schedule and installment options?",
      a: "Annual fees can be paid in two equal semester installments. Students utilizing the Bihar Student Credit Card (MNSSBY) or education loans can pay upon institutional disbursement from the state treasury without penalties.",
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
              Admissions Open 2026-27
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> Approved by Bihar Paramedical Council & AICTE
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

      {/* 2. Breadcrumbs & Hero Section */}
      <section className="relative bg-white border-b border-slate-200/80 py-10 lg:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-5">
            <Link href="/" className="hover:text-[#005A9C] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-slate-400">Admissions</span>
            <span>/</span>
            <span className="text-[#005A9C]">Admissions 2026-27 Central Hub</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Hero Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-full mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#FF3B3B]" />
                <span className="text-xs font-bold text-slate-700 tracking-wide">
                  Govt. of Bihar Health Registry Code: BPC/2016/PAT-88
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
                Paramedical Admissions 2026-27: Shape the Future of Healthcare at CITPS Patna
              </h1>
              <p className="text-base sm:text-lg text-slate-600 mb-6 max-w-3xl leading-relaxed">
                Direct merit-based counseling and entrance applications are now open for Bachelor of Science degrees in Medical Laboratory Technology (BMLT), Physiotherapy (BPT), Radiology & Imaging (BRIT), Operation Theatre Technology (BOTT), Dialysis, and Premier Clinical Diplomas.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuCheck className="text-emerald-600 text-sm" /> No Mandatory NEET Score Required
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuCreditCard className="text-[#005A9C] text-sm" /> Bihar Student Credit Card (MNSSBY) ₹4L Approved
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuHospital className="text-[#FF3B3B] text-sm" /> 100% Hospital Clinical Internships
                </div>
                <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-800">
                  <LuBadgeCheck className="text-blue-600 text-sm" /> NCAHP Act 2021 Aligned
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#apply-form"
                  className="inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#e03434] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition-all duration-150 active:scale-95"
                >
                  <span>Fill Online Application 2026</span>
                  <LuArrowRight className="text-base" />
                </a>
                <a
                  href="#fee-structure"
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#005A9C] text-[#005A9C] hover:bg-slate-50 px-5 py-3 rounded-lg font-bold text-sm transition-all"
                >
                  <LuDownload className="text-base" />
                  <span>Download Fee & Prospectus PDF</span>
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

            {/* Right Status Card */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="border-b border-slate-200 pb-3 mb-4 flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">Counseling Schedule</span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold uppercase">
                  Round 1 Active
                </span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Current Phase</span>
                  <span className="text-sm font-bold text-[#005A9C] block mt-0.5">Round 1 Merit Application & Scrutiny</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Application Deadline</span>
                  <span className="text-sm font-bold text-[#FF3B3B] block mt-0.5">15 July 2026 (5:00 PM IST)</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Verification Desk</span>
                  <span className="text-xs font-semibold text-slate-700 block mt-0.5">
                    CITPS Bailey Road Campus, Patna (Mon - Sat, 9:00 AM - 5:00 PM)
                  </span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200/80">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Helpline Numbers</span>
                  <span className="text-xs font-bold text-slate-900 block mt-0.5">
                    +91 612 299 8844 / +91 94310 12345
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-Stage Admission Workflow */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Transparent Enrollment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Simple 3-Stage Admission Workflow
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From online application submission to clinical orientation, our structured admissions process ensures zero hassle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative">
              <div className="size-10 rounded-xl bg-[#005A9C] text-white flex items-center justify-center font-black text-base mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Online Registration & Application</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Fill the online registration form below with your 10+2 marks, select your preferred course stream, and upload your marksheet copy.
              </p>
              <div className="border-t border-slate-100 pt-3 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <LuCheck /> Instant SMS & Email Acknowledgement
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative">
              <div className="size-10 rounded-xl bg-[#FF3B3B] text-white flex items-center justify-center font-black text-base mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Merit Evaluation & Document Scrutiny</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                The CITPS Academic Council reviews your science aggregate marks. Shortlisted candidates receive counseling call letters within 48 hours.
              </p>
              <div className="border-t border-slate-100 pt-3 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <LuCheck /> 48-Hour Turnaround Merit List
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs relative">
              <div className="size-10 rounded-xl bg-[#0b1c30] text-white flex items-center justify-center font-black text-base mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Counseling & Seat Confirmation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Attend counseling at the Bailey Road campus, verify original credentials, process tuition or MNSSBY student credit card paperwork, and secure admission.
              </p>
              <div className="border-t border-slate-100 pt-3 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <LuCheck /> On-Campus MNSSBY DRCC Assistance Desk
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Course Eligibility & Seat Matrix Table */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Seat Distribution 2026-27
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
                Course Eligibility & Approved Seat Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Approved by Bihar State Allied & Healthcare Professionals Council and AICTE
              </p>
            </div>
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 self-start sm:self-auto">
              Total Annual Intake: 350 Seats
            </span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-[#0b1c30] text-white text-xs font-bold uppercase tracking-wider">
                <tr>
                  <th scope="col" className="px-4 py-3.5">Program Name</th>
                  <th scope="col" className="px-4 py-3.5">Level</th>
                  <th scope="col" className="px-4 py-3.5">Duration</th>
                  <th scope="col" className="px-4 py-3.5">Intake</th>
                  <th scope="col" className="px-4 py-3.5">Eligibility Criteria</th>
                  <th scope="col" className="px-4 py-3.5">Selection Mode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    B.Sc. Medical Laboratory Technology (BMLT)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">UG Degree</span></td>
                  <td className="px-4 py-3.5">3.5 Years (Inc. 6M Internship)</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">60 Seats</td>
                  <td className="px-4 py-3.5">10+2 with PCB (Min 50% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Merit / Counseling</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    Bachelor of Physiotherapy (BPT)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">UG Degree</span></td>
                  <td className="px-4 py-3.5">4.5 Years (Inc. 6M Rotational)</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">60 Seats</td>
                  <td className="px-4 py-3.5">10+2 with PCB (Min 50% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Merit / Counseling</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    B.Sc. Radiology & Imaging Technology (BRIT)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">UG Degree</span></td>
                  <td className="px-4 py-3.5">3.5 Years</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">40 Seats</td>
                  <td className="px-4 py-3.5">10+2 with PCB/PCM (Min 50% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Merit / Counseling</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    B.Sc. Operation Theatre Technology (BOTT)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">UG Degree</span></td>
                  <td className="px-4 py-3.5">3.5 Years</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">40 Seats</td>
                  <td className="px-4 py-3.5">10+2 with PCB (Min 50% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Merit / Counseling</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    Diploma in Medical Laboratory Technology (DMLT)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Diploma</span></td>
                  <td className="px-4 py-3.5">2.0 Years</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">60 Seats</td>
                  <td className="px-4 py-3.5">10+2 with Science (Min 45% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Direct Merit</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    Diploma in Operation Theatre Assistant (DOTA)
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Diploma</span></td>
                  <td className="px-4 py-3.5">2.0 Years</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">40 Seats</td>
                  <td className="px-4 py-3.5">10+2 with Science (PCB/PCM)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Direct Merit</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900">
                    Diploma in Dialysis Technology
                  </td>
                  <td className="px-4 py-3.5"><span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[11px] font-bold">Diploma</span></td>
                  <td className="px-4 py-3.5">2.0 Years</td>
                  <td className="px-4 py-3.5 font-bold text-[#005A9C]">30 Seats</td>
                  <td className="px-4 py-3.5">10+2 with PCB (Min 45% Aggregate)</td>
                  <td className="px-4 py-3.5 font-semibold text-emerald-700">Direct Merit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Transparent Fee Schedule & Bihar Student Credit Card (MNSSBY) */}
      <section id="fee-structure" className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Fee Structure */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
                Standard Fee Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-4">
                Transparent Fee Structure & Payment Slabs
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                CITPS ensures complete financial transparency with zero hidden charges. All laboratory consumables, hospital clinical posting charges, and clinical apron fees are bundled clearly.
              </p>

              <div className="space-y-4">
                {/* Undergraduate Degrees Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                    <span className="font-bold text-slate-900 text-sm">Undergraduate Degree Programs (B.Sc. MLT, BPT, BRIT, BOTT)</span>
                    <span className="text-xs font-bold text-[#005A9C] bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
                      ₹75,000 / Year
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Tuition Fee: ₹50,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Clinical Lab Fee: ₹15,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Hospital Posting: ₹7,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Library & Council: ₹3,000 / year</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                    *Payable in 2 equal semester installments of ₹37,500. Fully covered under MNSSBY.
                  </div>
                </div>

                {/* Professional Diplomas Card */}
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                    <span className="font-bold text-slate-900 text-sm">Professional Diplomas (DMLT, DOTA, Dialysis Tech)</span>
                    <span className="text-xs font-bold text-[#FF3B3B] bg-red-50 px-2.5 py-1 rounded border border-red-200">
                      ₹55,000 / Year
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Tuition Fee: ₹38,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Lab & Practical Fee: ₹10,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Examination & Registry: ₹4,000 / year</li>
                    <li className="flex items-center gap-1.5"><LuCheck className="text-emerald-600" /> Uniform & ID Card: ₹3,000 (One-time)</li>
                  </ul>
                  <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] font-semibold text-slate-500">
                    *Payable in 2 installments of ₹27,500 per semester.
                  </div>
                </div>
              </div>
            </div>

            {/* Right MNSSBY Credit Card Guide */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0b1c30] to-[#004275] text-white rounded-2xl p-6 sm:p-7 shadow-lg">
              <div className="inline-flex items-center gap-1.5 bg-[#FF3B3B] text-white px-2.5 py-1 rounded text-xs font-bold uppercase mb-4">
                Govt. of Bihar Initiative
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Bihar Student Credit Card Yojana (MNSSBY)
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mb-5 leading-relaxed">
                Avail up to <strong>₹4,00,000 Education Loan</strong> at 0% or nominal interest with zero bank collateral. CITPS is an approved institute under the 7 Nishchay portal.
              </p>

              <div className="space-y-3 mb-6">
                <div className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/10 text-xs">
                  <span className="font-bold text-white block">1. Dedicated Campus DRCC Desk</span>
                  <span className="text-slate-300 mt-0.5 block">Get official Bonafide Admission Letter and Prospectus Fee Breakup signed within 2 hours.</span>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/10 text-xs">
                  <span className="font-bold text-white block">2. Zero Collateral & Easy Repayment</span>
                  <span className="text-slate-300 mt-0.5 block">Repayment starts only 1 year after course completion or upon securing employment.</span>
                </div>
                <div className="p-3 bg-white/10 backdrop-blur rounded-xl border border-white/10 text-xs">
                  <span className="font-bold text-white block">3. 100% Covers Tuition + Hostel</span>
                  <span className="text-slate-300 mt-0.5 block">Covers full 3.5-year degree fees, laptop allowance, and residential mess costs.</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="tel:+916122998844"
                  className="inline-flex items-center gap-2 bg-[#FF3B3B] hover:bg-[#e03434] text-white px-5 py-2.5 rounded-lg font-bold text-xs shadow transition-all"
                >
                  <LuPhoneCall />
                  <span>Call MNSSBY Desk</span>
                </a>
                <span className="text-xs text-slate-300">Helpline: +91 612 299 8844</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mandatory Counseling Checklist */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Document Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Mandatory Counseling & Verification Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Please carry original copies and 2 sets of self-attested photocopies during counseling
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">1</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">10th (Matric) Marksheet & Certificate</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Proof of date of birth and secondary education</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">2</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">12th (Intermediate) Marksheet & Admit Card</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Proof of PCB / PCM science eligibility (min 50%)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">3</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">College Leaving (CLC) / Migration Certificate</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Original copy required for university registration</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">4</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Bihar Domicile / Residential Certificate</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Mandatory for Bihar Student Credit Card (MNSSBY)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">5</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">Category Certificate (OBC / SC / ST / EWS)</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Issued by competent revenue authority (CO / SDO)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="size-8 rounded-lg bg-[#005A9C]/10 text-[#005A9C] flex items-center justify-center font-bold text-sm shrink-0">6</span>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">6 Passport Photographs & Aadhaar Card</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Recent color photographs with white background</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Direct Application & Lead Capture Form */}
      <section id="apply-form" className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-md">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-[#FF3B3B] uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-200">
                Official Application Portal 2026-27
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
                Submit Online Application for Admission
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill the details below to receive direct counselor callback, prospectus PDF, and seat allocation priority.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center p-8 bg-emerald-50 border border-emerald-200 rounded-xl">
                <LuShieldCheck className="text-4xl text-emerald-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-emerald-900 mb-1">Application Submitted Successfully!</h3>
                <p className="text-sm text-emerald-800 mb-4">
                  Thank you, <strong>{formData.name}</strong>. Your provisional application reference ID is <strong>{leadRefId}</strong>. A copy of your submission has been forwarded to the central counseling desk and our senior admission counselor will call your WhatsApp number <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="bg-[#005A9C] text-white px-5 py-2 rounded-lg text-xs font-bold hover:bg-[#004275]"
                >
                  Submit Another Application
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
                    <label className="block text-xs font-bold text-slate-700 mb-1">Candidate Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Father&apos;s / Guardian&apos;s Name</label>
                    <input
                      type="text"
                      placeholder="Guardian name"
                      value={formData.fatherName}
                      onChange={(e) => setFormData({ ...formData, fatherName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">12th Board</label>
                    <select
                      value={formData.board}
                      onChange={(e) => setFormData({ ...formData, board: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    >
                      <option value="BSEB">Bihar Board (BSEB)</option>
                      <option value="CBSE">CBSE Board</option>
                      <option value="ICSE">ICSE / ISC</option>
                      <option value="Other">Other State Board</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">12th PCB/PCM % *</label>
                    <input
                      type="number"
                      required
                      min="35"
                      max="100"
                      placeholder="e.g. 68%"
                      value={formData.pcbPercent}
                      onChange={(e) => setFormData({ ...formData, pcbPercent: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Domicile District</label>
                    <input
                      type="text"
                      placeholder="e.g. Patna, Gaya, Muzaffarpur"
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Preferred Program *</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#005A9C] focus:bg-white transition-colors"
                  >
                    <option value="B.Sc. Medical Laboratory Technology (BMLT)">B.Sc. Medical Laboratory Technology (BMLT) - 3.5 Yrs</option>
                    <option value="Bachelor of Physiotherapy (BPT)">Bachelor of Physiotherapy (BPT) - 4.5 Yrs</option>
                    <option value="B.Sc. Radiology & Imaging Technology (BRIT)">B.Sc. Radiology & Imaging Technology (BRIT) - 3.5 Yrs</option>
                    <option value="B.Sc. Operation Theatre Technology (BOTT)">B.Sc. Operation Theatre Technology (BOTT) - 3.5 Yrs</option>
                    <option value="Diploma in Medical Laboratory Technology (DMLT)">Diploma in Medical Laboratory Technology (DMLT) - 2 Yrs</option>
                    <option value="Diploma in Operation Theatre Assistant (DOTA)">Diploma in Operation Theatre Assistant (DOTA) - 2 Yrs</option>
                    <option value="Diploma in Dialysis Technology">Diploma in Dialysis Technology - 2 Yrs</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Do you want to avail Bihar Student Credit Card (MNSSBY) 0% Interest Loan?
                  </label>
                  <div className="flex items-center gap-6 mt-1 text-sm font-semibold text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="creditCard"
                        value="Yes"
                        checked={formData.creditCard === "Yes"}
                        onChange={() => setFormData({ ...formData, creditCard: "Yes" })}
                        className="text-[#005A9C]"
                      />
                      <span>Yes, please assist with DRCC Loan</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="creditCard"
                        value="No"
                        checked={formData.creditCard === "No"}
                        onChange={() => setFormData({ ...formData, creditCard: "No" })}
                        className="text-[#005A9C]"
                      />
                      <span>No, self-financing</span>
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF3B3B] hover:bg-[#e03434] disabled:opacity-75 disabled:cursor-not-allowed text-white py-3.5 px-6 rounded-lg font-bold text-sm shadow-md transition-all active:scale-[0.99] flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Submitting Application..." : "Submit Online Application Now"}</span>
                    <LuArrowRight className="text-base" />
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2">
                    *Your details are confidential under CITPS privacy policy and shared exclusively with Bihar Paramedical Council counseling coordinators.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 8. Admissions FAQ Accordion */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/60 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2">
              Frequently Asked Admission Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Clear answers to the most common queries asked by paramedical aspirants and parents
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 transition-all"
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
    </div>
  );
}
