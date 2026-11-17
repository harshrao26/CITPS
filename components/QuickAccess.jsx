import Link from "next/link";
import { LuArrowUpRight, LuBuilding2, LuCircleHelp, LuClipboardList, LuGraduationCap, LuImages, LuPhoneCall } from "react-icons/lu";
import Reveal from "@/components/Reveal";

// Quick tiles in the spirit of the regulator homepages: the most common destinations, one tap away.
const tiles = [
  { label: "Explore courses", note: "Six programmes", href: "/courses", icon: LuGraduationCap },
  { label: "How to apply", note: "Admission process", href: "/admissions", icon: LuClipboardList },
  { label: "About CITPS", note: "Who we are", href: "/about", icon: LuBuilding2 },
  { label: "Campus gallery", note: "Labs and classrooms", href: "/gallery", icon: LuImages },
  { label: "Common questions", note: "Eligibility and fees", href: "/faq", icon: LuCircleHelp },
  { label: "Contact us", note: "Call or write", href: "/contact", icon: LuPhoneCall },
];

export default function QuickAccess() {
  return (
    <section className="bg-white pb-16 pt-20 md:pb-24 md:pt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-teal-950 md:text-4xl">Find what you need</h2>
        </Reveal>

        <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <li key={tile.href}>
                <Reveal delay={index * 0.05} y={24} className="h-full">
                  <Link
                    href={tile.href}
                    className="group flex h-full min-h-[168px] flex-col justify-between gap-6 rounded-[24px] bg-surface p-5 ring-1 ring-teal-950/10 transition duration-300 hover:bg-teal-700 hover:ring-teal-700"
                  >
                    <span className="flex items-start justify-between">
                      <span className="grid size-11 place-items-center rounded-full bg-white text-teal-700 shadow-xs transition group-hover:bg-teal-600 group-hover:text-white">
                        <Icon size={20} />
                      </span>
                      <LuArrowUpRight
                        size={18}
                        className="text-teal-950/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-base font-semibold leading-snug text-teal-950 transition group-hover:text-white">
                        {tile.label}
                      </span>
                      <span className="text-sm text-teal-950/65 transition group-hover:text-teal-50">{tile.note}</span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
