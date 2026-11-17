import { institutionalStats } from "@/data/bmsitData";
import { LuPlus } from "react-icons/lu";

export default function StatsHighlights() {
  return (
    <section id="stats" className="relative z-10 -my-10 sm:-my-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Floating Glassmorphism Box matching BMSIT .home-stats-box-bg */}
        <div className="rounded-[20px] bg-white p-6 sm:p-10 backdrop-blur-[20px] shadow-[0_20px_60px_0_rgba(58,116,184,0.25)] border border-white">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-[#e8e8e8]">
            {institutionalStats.map((item, idx) => {
              // Strip trailing '+' if present to render custom red plus
              const hasPlus = item.value.includes("+");
              const cleanVal = item.value.replace("+", "");

              return (
                <div
                  key={item.label}
                  className={`flex flex-col items-center justify-center text-center ${
                    idx > 0 ? "pt-4 lg:pt-0 lg:px-4" : "lg:px-4"
                  } ${idx === institutionalStats.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <div className="flex items-center justify-center text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#231F20] tracking-tight leading-none">
                    <span>{cleanVal}</span>
                    {hasPlus && (
                      <LuPlus size={24} className="text-[#FF3B3B] ml-1 stroke-[3]" />
                    )}
                  </div>
                  <h4 className="mt-2 text-xs sm:text-sm font-semibold !text-[#333333] max-w-[22ch] leading-snug">
                    {item.label}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
