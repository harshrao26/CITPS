"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuShieldCheck,
  LuCheck,
  LuArrowRight,
  LuTrainFront,
  LuPlane,
  LuBus,
  LuCar,
  LuFileText,
  LuAlertTriangle,
  LuBuilding2,
  LuSend,
} from "react-icons/lu";
import { submitLead } from "@/lib/submitLead";

export default function ContactHubClient() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [leadRefId, setLeadRefId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    district: "Patna",
    course: "B.Sc. Medical Laboratory Technology (BMLT)",
    qualification: "10+2 PCB",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitLead({
      form_type: "Contact Office Admission Query",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      district: formData.district,
      course: formData.course,
      qualification: formData.qualification,
      message: formData.message,
    });

    setIsSubmitting(false);

    if (res.success) {
      setLeadRefId(res.leadId || `CITPS-QUERY-${Math.floor(1000 + Math.random() * 9000)}`);
      setFormSubmitted(true);
    } else {
      setSubmitError(res.error || "Failed to submit query. Please call our admissions desk.");
    }
  };

  const transitGuides = [
    {
      mode: "From Danapur Railway Station (Closest Railhead)",
      distance: "3.8 km (10-12 minutes)",
      route: "Take an auto-rickshaw or e-rickshaw via Saguna More towards Bailey Road. Direct college shuttles run every 20 minutes from Danapur Station platform exit.",
      icon: LuTrainFront,
    },
    {
      mode: "From Patna Junction Railway Station",
      distance: "12.4 km (30-35 minutes)",
      route: "Board any Bailey Road city bus or direct shared auto towards Saguna More / Danapur. CITPS Campus is located prominently on the main Bailey Road arterial highway.",
      icon: LuTrainFront,
    },
    {
      mode: "From Jay Prakash Narayan International Airport (Patna)",
      distance: "7.5 km (20 minutes)",
      route: "Prepaid taxis, Ola/Uber, and auto-rickshaws available at the terminal exit. Transit via Airport Road -> Sheikhpura -> Bailey Road Flyover directly to campus.",
      icon: LuPlane,
    },
    {
      mode: "From AIIMS Patna (Phulwari Sharif Corridor)",
      distance: "8.2 km (18-20 minutes)",
      route: "Direct college clinical posting shuttles and public transit connect AIIMS Patna to our Bailey Road complex via the Khagaul-Danapur highway.",
      icon: LuBus,
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
              Admissions Walk-in Open
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <LuShieldCheck className="text-emerald-400" /> Bihar Paramedical Council Approved
            </span>
            <span className="hidden md:inline text-slate-500">•</span>
            <span className="hidden md:inline text-slate-300">
              Bailey Road Campus, Saguna More, Patna - 801503
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] font-medium text-slate-300">
            <span>Helpline: +91 612 299 8844</span>
            <span className="text-slate-500">|</span>
            <a
              href="tel:18002004567"
              className="text-[#FF3B3B] hover:text-red-400 font-bold flex items-center gap-1"
            >
              Toll Free: 1800-200-4567
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Admissions Office & Campus Directions */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#005A9C]">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#004275]">Contact Us</span>
            <span>/</span>
            <span className="text-slate-900 font-bold">Admissions Desk &amp; Campus Route</span>
          </nav>

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#005A9C] text-xs font-bold uppercase tracking-wider mb-4">
              <LuBuilding2 className="text-sm" />
              CENTRAL ADMISSIONS HELPLINE : ACADEMIC SESSION 2026-27
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#004275] tracking-tight leading-tight mb-4">
              Connect with CITPS Admissions &amp; Campus Guidance Desk
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Have questions regarding eligibility, seat allocations, Bihar Student Credit Card (MNSSBY) 0% interest loans, or hospital clinical rotations? Reach out via phone, email, or visit our integrated 50,000+ sq. ft. simulation campus on Bailey Road, Patna.
            </p>
          </div>

          {/* 4 Core Communication Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuPhone />
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Admissions Hotline
              </span>
              <a
                href="tel:+916122998844"
                className="text-base font-extrabold text-[#004275] hover:text-[#005A9C] block mb-1"
              >
                +91 612 299 8844
              </a>
              <span className="text-xs text-slate-600 block mb-2">Toll-Free: 1800-200-4567</span>
              <span className="text-[11px] font-semibold text-emerald-600 block">
                Mon - Sat: 9:00 AM - 6:00 PM
              </span>
            </div>

            <div className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuMail />
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Official Email Desk
              </span>
              <a
                href="mailto:admissions@citps.in"
                className="text-base font-extrabold text-[#004275] hover:text-[#005A9C] block mb-1"
              >
                admissions@citps.in
              </a>
              <span className="text-xs text-slate-600 block mb-2">compliance@citps.in</span>
              <span className="text-[11px] font-semibold text-slate-500 block">
                Avg. Response: Under 4 Hours
              </span>
            </div>

            <div className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005A9C] flex items-center justify-center text-xl mb-3">
                <LuMapPin />
              </div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Campus Location
              </span>
              <p className="text-xs font-bold text-slate-900 leading-snug mb-2">
                Bailey Road, Near Saguna More, Danapur, Patna, Bihar 801503
              </p>
              <span className="text-[11px] font-semibold text-[#005A9C] block">
                Opposite Saguna Highway Corridor
              </span>
            </div>

            <div className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#FF3B3B] flex items-center justify-center text-xl mb-3">
                <LuShieldCheck />
              </div>
              <span className="text-[11px] font-bold text-[#FF3B3B] uppercase tracking-wider block mb-1">
                24x7 Statutory Helpline
              </span>
              <a
                href="tel:18001805522"
                className="text-base font-extrabold text-[#FF3B3B] hover:text-red-700 block mb-1"
              >
                1800-180-5522
              </a>
              <span className="text-xs text-slate-600 block mb-2">Anti-Ragging Squad</span>
              <span className="text-[11px] font-semibold text-slate-500 block">
                National UGC Redressal Line
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Form & Campus Visit Timings */}
      <section className="py-14 sm:py-16 bg-[#f8f9ff] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Form (Col 7) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
                  Instant Inquiry
                </span>
                <h2 className="text-2xl font-extrabold text-[#004275] mt-2 mb-1">
                  Send an Admission Query to Our Nodal Desk
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill in your academic background for immediate eligibility verification and prospectus dispatch.
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-10 bg-slate-50 rounded-xl border border-slate-200 p-6">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-3">
                    <LuCheck />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Inquiry Submitted Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    Thank you, <strong>{formData.name}</strong>. Inquiry Reference ID: <strong className="font-mono text-[#005A9C]">{leadRefId}</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mb-4">
                    An admission counselor has been assigned to your query and will contact you via WhatsApp or phone at <strong>{formData.phone}</strong> within 2 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-[#005A9C] hover:underline"
                  >
                    Submit another query
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
                        Candidate Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Kumari"
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
                        Email Address
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
                        10+2 Qualification Status
                      </label>
                      <select
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                      >
                        <option>10+2 PCB (Completed)</option>
                        <option>10+2 PCM (Completed)</option>
                        <option>10+2 Appearing 2026</option>
                        <option>Diploma Holder (Lateral Entry)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        District / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patna, Gaya, Muzaffarpur"
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Program of Choice
                      </label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                      >
                        <option>B.Sc. Medical Laboratory Technology (BMLT)</option>
                        <option>B.Sc. Radiology &amp; Medical Imaging Technology (BRIT)</option>
                        <option>Bachelor of Physiotherapy (BPT)</option>
                        <option>B.Sc. Operation Theatre &amp; Anesthesia Technology (BOTT)</option>
                        <option>B.Sc. Renal Dialysis Technology</option>
                        <option>Bachelor of Clinical Optometry (B.Optom)</option>
                        <option>Diploma in Medical Laboratory Technology (DMLT)</option>
                        <option>Diploma in Radiography &amp; X-Ray (DXT)</option>
                        <option>Diploma in Operation Theatre Technology (DOT)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Query or Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ask about fees, hostel accommodations, MNSSBY loan, or hospital postings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#005A9C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF3B3B] hover:bg-[#e03434] disabled:opacity-75 disabled:cursor-not-allowed text-white font-bold py-3 rounded-lg text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <LuSend className="text-sm" /> {isSubmitting ? "Submitting Query..." : "Submit Query for Immediate Callback"}
                  </button>
                  <p className="text-[11px] text-center text-slate-500">
                    By submitting, you agree to receive official CITPS admission notices and scholarship updates via SMS/WhatsApp.
                  </p>
                </form>
              )}
            </div>

            {/* Visit Info & Timings (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center text-xl shrink-0">
                    <LuClock />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Counseling Desk Working Hours
                    </h3>
                    <span className="text-xs text-slate-500">Walk-in Spot Admission Counseling</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Monday - Friday:</span>
                    <span className="text-[#005A9C] font-bold">9:00 AM - 5:30 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Saturday:</span>
                    <span className="text-[#005A9C] font-bold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="font-semibold text-slate-900">Sunday:</span>
                    <span className="text-[#FF3B3B] font-bold">10:00 AM - 2:00 PM (Prior Booking)</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-900">Documents for Spot Counseling:</strong> Please bring 10th &amp; 12th marksheets, Aadhaar card, and 4 passport-size photographs for instant eligibility verification.
                </div>
              </div>

              {/* Campus Location Callout Card */}
              <div className="bg-gradient-to-br from-[#004275] to-[#0b1c30] text-white rounded-2xl p-6 shadow-md">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-1">
                  Location Landmark
                </span>
                <h3 className="text-lg font-bold mb-2">Prime Bailey Road Medical Belt</h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-4">
                  CITPS is situated along Patna&apos;s prime educational and medical corridor, directly connected to Paras HMRI, Ruban Memorial, and AIIMS Patna, enabling daily transit for clinical rotations.
                </p>
                <Link
                  href="/facilities"
                  className="inline-flex items-center gap-1.5 bg-white text-[#004275] px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-50 transition-all"
                >
                  Explore Campus Facilities <LuArrowRight className="text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Strategic Transit Corridors & How to Reach */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#005A9C] uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              Directions &amp; Connectivity
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#004275] mt-2 mb-3">
              How to Reach CITPS Bailey Road Campus
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Convenient transit guidelines whether you are arriving via railway, flight, or interstate bus terminals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transitGuides.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#f8f9ff] border border-slate-200 rounded-2xl p-5 shadow-xs flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#005A9C] flex items-center justify-center text-xl shrink-0 mt-1">
                    <Icon />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">{guide.mode}</h3>
                    </div>
                    <span className="inline-block text-[11px] font-bold text-[#FF3B3B] bg-red-50 border border-red-200 px-2 py-0.5 rounded mb-2">
                      {guide.distance}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">{guide.route}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
