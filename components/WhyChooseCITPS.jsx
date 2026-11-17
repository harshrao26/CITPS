import {
  LuBuilding2,
  LuUsers,
  LuHandshake,
  LuTrendingUp,
  LuHistory,
  LuMicroscope,
  LuSparkles,
  LuGlobe,
} from "react-icons/lu";
import { whyChoosePillars } from "@/data/bmsitData";

const pillarIcons = [
  LuBuilding2,
  LuUsers,
  LuHandshake,
  LuTrendingUp,
  LuHistory,
  LuMicroscope,
  LuSparkles,
  LuGlobe,
];

export default function WhyChooseCITPS() {
  return (
    <section id="why-us" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rounded Container matching BMSIT .home-why-bg::before */}
        <div className="rounded-[24px] bg-[#F4F3F3] p-6 sm:p-12 lg:p-16 border border-[#ececec]">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B3B]">
              The CITPS Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#231F20] mt-1">
              Why Choose <strong>CITPS?</strong>
            </h2>
            <p className="text-xs sm:text-sm !text-[#444444] font-medium mt-2">
              A holistic ecosystem empowering aspiring clinicians with cutting-edge laboratories, clinical exposure, and career excellence.
            </p>
          </div>

          {/* 8-Grid with Border Dividers matching BMSIT .br and .bb */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoosePillars.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              const isRightBorder = (idx + 1) % 4 !== 0; // border-r on desktop
              const isBottomBorder = idx < 4; // border-b on first row

              return (
                <div
                  key={pillar.title}
                  className={`p-6 sm:p-8 flex flex-col items-center text-center transition duration-300 hover:bg-white/60 ${
                    isRightBorder ? "lg:border-r border-[#e0e0e0]" : ""
                  } ${isBottomBorder ? "lg:border-b border-[#e0e0e0]" : ""} ${
                    idx % 2 === 0 ? "sm:border-r border-[#e0e0e0] lg:border-r-0" : ""
                  } ${idx < 6 ? "sm:border-b border-[#e0e0e0] lg:border-b-0" : ""}`}
                >
                  <div className="flex size-14 items-center justify-center rounded-2xl text-[#3A74B8] mb-4 bg-white shadow-xs">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#3A74B8] mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-sm !text-[#333333] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
