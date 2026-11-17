import { LuAward, LuShieldCheck, LuMedal, LuCheck, LuSparkles, LuGlobe, LuFlame } from "react-icons/lu";
import { accoladesList } from "@/data/bmsitData";

const iconMap = [LuAward, LuShieldCheck, LuCheck, LuMedal, LuSparkles, LuGlobe, LuFlame];

export default function Accolades() {
  return (
    <section id="accolades" className="relative bg-[#fafafa] pt-24 pb-16 border-t border-[#ececec]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-4xl font-normal text-[#231F20] leading-tight">
            Recognized for Quality, <strong>Accredited for Excellence.</strong>
          </h2>
          <h3 className="text-xl sm:text-2xl font-bold text-[#FF3B3B] mt-2 uppercase tracking-wide">
            Accolades
          </h3>
        </div>

        {/* Accolades Cards Grid (Matches BMSIT .home-accolades-box) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accoladesList.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-[20px] bg-white p-6 shadow-sm border border-[#ececec] transition duration-300 hover:shadow-xl hover:border-[#3A74B8] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#3A74B8]/10 text-[#3A74B8]">
                      <Icon size={24} />
                    </div>
                    <span className="rounded bg-[#FF3B3B]/10 px-2 py-0.5 text-[10px] font-bold text-[#FF3B3B] uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#231F20] mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-relaxed !text-[#333333]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#f0f0f0] text-[11px] font-semibold text-[#3A74B8]">
                  Outcome-Based Standards
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
