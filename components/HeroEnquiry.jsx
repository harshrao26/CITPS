"use client";

import { useId, useState } from "react";
import { LuArrowUpRight, LuCheck, LuShieldCheck, LuSparkles } from "react-icons/lu";
import { courses } from "@/data/courses";
import { site } from "@/data/site";
import { submitLead } from "@/lib/submitLead";

const fieldClass =
  "h-11 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-xs sm:text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#005A9C] focus:ring-2 focus:ring-[#005A9C]/20 aria-[invalid=true]:border-red-600";

const BIHAR_DISTRICTS = [
  "Patna",
  "Gaya",
  "Muzaffarpur",
  "Bhagalpur",
  "Darbhanga",
  "Purnia",
  "Begusarai",
  "Samastipur",
  "Nalanda / Bihar Sharif",
  "Rohtas / Sasaram",
  "Vaishali / Hajipur",
  "Saran / Chhapra",
  "Siwan",
  "East Champaran / Motihari",
  "West Champaran / Bettiah",
  "Madhubani",
  "Bhojpur / Arrah",
  "Saharsa",
  "Katihar",
  "Munger",
  "Aurangabad",
  "Nawada",
  "Jehanabad",
  "Other District (Bihar)",
  "Jharkhand",
  "Uttar Pradesh",
  "Other State",
];

function validate({ name, phone, course, district }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Enter full name.";
  const digits = phone.replace(/\D/g, "").replace(/^91(?=\d{10}$)/, "");
  if (!/^[6-9]\d{9}$/.test(digits)) errors.phone = "Enter valid 10-digit mobile.";
  if (!course) errors.course = "Choose course.";
  if (!district) errors.district = "Select district.";
  return errors;
}

export default function HeroEnquiry() {
  const id = useId();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    course: "",
    district: "Patna",
    pcbPercent: "",
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [leadRefId, setLeadRefId] = useState("");

  const update = (field) => (event) =>
    setValues((current) => ({ ...current, [field]: event.target.value }));

  const onSubmit = async (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setSent(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const res = await submitLead({
      form_type: "Homepage Hero Fast Enquiry",
      name: values.name,
      phone: values.phone,
      course: values.course,
      district: values.district,
      pcb_percent: values.pcbPercent ? `${values.pcbPercent}%` : "-",
    });

    setIsSubmitting(false);

    if (res.success) {
      setLeadRefId(res.leadId || `CITPS-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setSent(true);
    } else {
      setSubmitError(res.error || "Submission error. Please call our admissions desk.");
    }
  };

  const errorId = (field) => `${id}-${field}-error`;

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="rounded-2xl bg-white p-5 sm:p-7 shadow-xl border border-slate-200/90"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-[#FF3B3B] text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Admissions 2026
          </span>
          <h2 className="text-base sm:text-lg font-extrabold text-[#004275]">
            Fast-Track Counseling Desk
          </h2>
        </div>
        <p className="text-xs text-slate-500 hidden sm:block">
          Free counseling callback within 15 minutes • MNSSBY Bihar Credit Card Guidance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-start">
        {/* Candidate Name */}
        <div>
          <label htmlFor={`${id}-name`} className="mb-1 block text-xs font-bold text-slate-700">
            Student Full Name *
          </label>
          <input
            id={`${id}-name`}
            type="text"
            autoComplete="name"
            placeholder="e.g. Rahul Kumar"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? errorId("name") : undefined}
            className={fieldClass}
          />
          {errors.name ? (
            <p id={errorId("name")} className="mt-1 text-[11px] font-semibold text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        {/* WhatsApp Mobile */}
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1 block text-xs font-bold text-slate-700">
            WhatsApp Mobile *
          </label>
          <input
            id={`${id}-phone`}
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            placeholder="10-digit number"
            value={values.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errorId("phone") : undefined}
            className={fieldClass}
          />
          {errors.phone ? (
            <p id={errorId("phone")} className="mt-1 text-[11px] font-semibold text-red-600">
              {errors.phone}
            </p>
          ) : null}
        </div>

        {/* Course */}
        <div>
          <label htmlFor={`${id}-course`} className="mb-1 block text-xs font-bold text-slate-700">
            Program *
          </label>
          <select
            id={`${id}-course`}
            value={values.course}
            onChange={update("course")}
            aria-invalid={Boolean(errors.course)}
            aria-describedby={errors.course ? errorId("course") : undefined}
            className={fieldClass}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.title}>
                {course.shortCode || course.title}
              </option>
            ))}
          </select>
          {errors.course ? (
            <p id={errorId("course")} className="mt-1 text-[11px] font-semibold text-red-600">
              {errors.course}
            </p>
          ) : null}
        </div>

        {/* District / City */}
        <div>
          <label htmlFor={`${id}-district`} className="mb-1 block text-xs font-bold text-slate-700">
            District / City *
          </label>
          <select
            id={`${id}-district`}
            value={values.district}
            onChange={update("district")}
            aria-invalid={Boolean(errors.district)}
            aria-describedby={errors.district ? errorId("district") : undefined}
            className={fieldClass}
          >
            {BIHAR_DISTRICTS.map((dist) => (
              <option key={dist} value={dist}>
                {dist}
              </option>
            ))}
          </select>
          {errors.district ? (
            <p id={errorId("district")} className="mt-1 text-[11px] font-semibold text-red-600">
              {errors.district}
            </p>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2 lg:col-span-1 pt-1 sm:pt-0">
          <label className="mb-1 block text-xs font-bold text-transparent select-none hidden lg:block">
            Submit
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#FF3B3B] hover:bg-[#e03434] disabled:opacity-75 disabled:cursor-not-allowed px-4 text-xs sm:text-sm font-bold text-white shadow-md transition-all active:scale-[0.98]"
          >
            <span>{isSubmitting ? "Sending..." : "Apply / Call Back"}</span>
            <LuArrowUpRight size={15} className="transition group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {submitError && (
        <div className="mt-3.5 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-semibold">
          {submitError}
        </div>
      )}

      {sent ? (
        <div className="mt-3.5 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg shrink-0">
              <LuCheck />
            </div>
            <div>
              <p className="text-xs font-bold text-emerald-950">
                Inquiry Logged! Ref ID: <span className="font-mono text-[#005A9C]">{leadRefId}</span>
              </p>
              <p className="text-[11px] text-emerald-800">
                Thank you, <strong>{values.name}</strong> ({values.district}). Our admissions counselor will call <strong>{values.phone}</strong> shortly.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setValues({ name: "", phone: "", course: "", district: "Patna", pcbPercent: "" });
            }}
            className="text-xs font-bold text-[#005A9C] hover:underline whitespace-nowrap self-start sm:self-auto"
          >
            Submit Another
          </button>
        </div>
      ) : null}
    </form>
  );
}
