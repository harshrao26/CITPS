import Image from "next/image";
import { topRecruiterLogos } from "@/data/bmsitData";

export default function TopRecruiters() {
  // Duplicate list twice for seamless infinite marquee loop
  const fullList = [...topRecruiterLogos, ...topRecruiterLogos];

  return (
    <section
      id="recruiters"
      className="relative py-12 sm:py-16 bg-[#ffffff] border-y border-[#ececec] overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-[#ececec] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF3B3B]" />
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FF3B3B]">
                Our Top Recruiters & Clinical Partners
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#555555] mt-1 font-medium">
              Top-tier corporate healthcare networks, multi-specialty hospitals, and national pathology chains recruiting CITPS graduates
            </p>
          </div>
          <span className="text-xs font-bold text-[#005A9C] bg-[#005A9C]/10 px-3.5 py-1.5 rounded-full uppercase tracking-wider self-start sm:self-auto border border-[#005A9C]/20">
            80+ Healthcare Partners
          </span>
        </div>
      </div>

      {/* Infinite Scrolling Logo Marquee */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <div className="animate-logo-marquee flex items-center gap-5 py-3">
          {fullList.map((recruiter, idx) => (
            <div
              key={`${recruiter.name}-${idx}`}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200/90 bg-white px-4 py-2.5 shrink-0 shadow-xs transition-all duration-300 hover:border-[#005A9C] hover:shadow-md hover:-translate-y-0.5"
            >
              {/* Authentic Company Logo */}
              <div className="relative h-10 w-24 sm:w-28 shrink-0 flex items-center justify-center p-1 bg-white rounded-lg">
                <Image
                  src={recruiter.logo}
                  alt={`${recruiter.name} logo`}
                  fill
                  sizes="120px"
                  className="object-contain"
                  priority={idx < 6}
                />
              </div>

              {/* Vertical divider */}
              <div className="h-8 w-px bg-slate-200/80 shrink-0" />

              {/* Company Info */}
              <div className="flex flex-col justify-center pr-2">
                <span className="text-xs font-bold text-slate-900 whitespace-nowrap">
                  {recruiter.name}
                </span>
                <span className="text-[10px] font-semibold text-[#005A9C] tracking-wide uppercase whitespace-nowrap">
                  {recruiter.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
