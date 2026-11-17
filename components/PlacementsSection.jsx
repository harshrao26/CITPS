import Image from "next/image";
import {
  LuArrowUpRight,
  LuBuilding2,
  LuBadgeCheck,
  LuStethoscope,
  LuSparkles,
} from "react-icons/lu";
import { placedStudents } from "@/data/bmsitData";

const recruiterBadgeStyles = {
  "Apollo Hospitals": {
    bg: "bg-emerald-50 text-emerald-800 border-emerald-200",
    accent: "text-emerald-600",
  },
  "Fortis Healthcare": {
    bg: "bg-green-50 text-green-800 border-green-200",
    accent: "text-green-600",
  },
  "Max Super Speciality": {
    bg: "bg-blue-50 text-blue-800 border-blue-200",
    accent: "text-blue-600",
  },
  "Manipal Hospitals": {
    bg: "bg-amber-50 text-amber-900 border-amber-200",
    accent: "text-amber-600",
  },
  "Narayana Health": {
    bg: "bg-cyan-50 text-cyan-900 border-cyan-200",
    accent: "text-cyan-600",
  },
  "Dr. Lal PathLabs & Eye Care": {
    bg: "bg-purple-50 text-purple-900 border-purple-200",
    accent: "text-purple-600",
  },
};

export default function PlacementsSection() {
  return (
    <section id="placements" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Top Feature Banner with Hanging Content Box matching BMSIT .home-placement-bg */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Visual Banner (Left 9 columns) */}
            <div className="relative lg:col-span-8 rounded-[20px] overflow-hidden shadow-lg border border-[#ececec]">
              <div className="relative aspect-[16/9] w-full bg-[#231F20]">
                <Image
                  src="/images/cta-team.jpg"
                  alt="CITPS Clinical Placement and Hospital Recruiter Drives"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#231F20]/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Hanging Content Box (Overlapping / responsive right column) */}
            <div className="lg:col-span-4 lg:-ml-16 z-10">
              <div className="rounded-[20px] bg-white p-8 sm:p-10 shadow-[0_20px_60px_0_rgba(58,116,184,0.25)] border border-[#ffffff] flex flex-col gap-4">
                <h3 className="text-base font-bold uppercase tracking-wider text-[#FF3B3B]">
                  PLACEMENT
                </h3>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.15] text-[#231F20]">
                  Launching <span className="block font-medium">Careers, Shaping</span> Futures.
                </h2>
                <div className="pt-2">
                  <a href="#admissions" className="btn-one-full inline-flex">
                    <span>EXPLORE MORE</span>
                    <LuArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Placement Cell Narrative Text Block */}
          <div className="mt-8 max-w-3xl">
            <p className="text-base leading-relaxed !text-[#333333] text-left sm:text-justify">
              The Placement &amp; Training Cell facilitates the entire recruitment process by coordinating with
              various clinical and hospital facilities. For the students to be placed in prestigious healthcare
              organizations and diagnostic chains, comprehensive clinical viva grooming, mock lab practicals,
              and hospital internship modules are conducted continuously throughout the academic session.
            </p>
          </div>
        </div>

        {/* Section Subheading for Placed Students */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pt-6 border-t border-[#ececec]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B3B]">
              Campus Placements · Class of 2024
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#231F20] mt-1">
              Distinguished Alumni &amp; Clinical Appointments
            </h3>
            <p className="text-xs sm:text-sm !text-[#555555] font-medium mt-1 max-w-2xl">
              Graduates securing clinical roles across India&apos;s top-tier super-speciality hospital networks and diagnostic chains.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#3A74B8] bg-[#3A74B8]/10 border border-[#3A74B8]/20 shrink-0 self-start sm:self-auto">
            <LuSparkles size={14} className="text-[#FF3B3B]" />
            <span>100% Verified Hospital Offers</span>
          </span>
        </div>

        {/* Placed Students Cards Grid (3 cols x 2 rows - Mature, Editorial & Executive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placedStudents.map((student) => {
            const recruiterStyle = recruiterBadgeStyles[student.recruiter] || {
              bg: "bg-blue-50 text-blue-900 border-blue-200",
              accent: "text-blue-600",
            };

            return (
              <div
                key={student.id}
                className="group relative rounded-2xl bg-white p-6 border border-[#e5e7eb] shadow-xs transition duration-300 hover:shadow-xl hover:border-[#3A74B8] hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Header: Recruiter Hospital & Batch USN */}
                <div className="flex items-center justify-between gap-2 pb-3.5 border-b border-[#f1f5f9]">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold tracking-wide border ${recruiterStyle.bg}`}
                  >
                    <LuBuilding2 size={13} className={recruiterStyle.accent} />
                    <span>{student.recruiter}</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#71717a] font-medium">
                    {student.usn}
                  </span>
                </div>

                {/* Profile Identity Row */}
                <div className="flex items-start gap-4 my-5">
                  {/* Portrait with rounded-xl frame */}
                  <div className="relative size-20 sm:size-22 rounded-xl overflow-hidden border-2 border-[#f1f5f9] bg-[#f8fafc] shrink-0 shadow-xs group-hover:border-[#3A74B8]/40 transition">
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="88px"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Name and Academic Credentials */}
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-lg font-bold text-[#231F20] tracking-tight group-hover:text-[#3A74B8] transition">
                        {student.name}
                      </h4>
                      <LuBadgeCheck size={16} className="text-[#3A74B8] shrink-0" />
                    </div>

                    <span className="text-xs font-semibold text-[#3A74B8] mt-1 leading-snug">
                      {student.branch}
                    </span>

                    <span className="text-[11px] text-[#64748b] font-medium mt-1">
                      CITPS Allied Health Sciences
                    </span>
                  </div>
                </div>

                {/* Bottom Appointment / Posting Row */}
                <div className="pt-3.5 border-t border-[#f1f5f9] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#1e293b] font-semibold">
                    <LuStethoscope size={15} className="text-[#FF3B3B] shrink-0" />
                    <span>{student.package}</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#059669] bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    Offer Accepted
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
