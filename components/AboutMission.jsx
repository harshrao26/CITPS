import { LuHandshake, LuHeart, LuShieldCheck, LuTarget } from "react-icons/lu";
import Reveal from "@/components/Reveal";

// SAMPLE wording. Replace with the institute's approved mission, vision and values.
const values = [
  { title: "Practice first", text: "Skills are learned by doing, again and again, before real patients are involved.", icon: LuTarget },
  { title: "Patient safety", text: "Safe, careful habits are taught from the first lab session.", icon: LuShieldCheck },
  { title: "Honest guidance", text: "Clear answers on eligibility, fees and careers, with no pressure.", icon: LuHandshake },
  { title: "Care for people", text: "Technical skill matters most when it is paired with kindness.", icon: LuHeart },
];

export default function AboutMission() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <Reveal>
            <article className="flex h-full min-h-[300px] flex-col justify-between gap-10 rounded-[28px] bg-teal-950 p-8 text-white shadow-lg md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our mission</h2>
              <p className="max-w-[44ch] text-lg leading-relaxed text-teal-50/85">
                To prepare students for technical and paramedical careers through practical training, clear guidance and
                respect for every patient.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="flex h-full min-h-[300px] flex-col justify-between gap-10 rounded-[28px] bg-teal-100 p-8 text-teal-950 md:p-10">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Our vision</h2>
              <p className="max-w-[44ch] text-lg leading-relaxed text-teal-950/80">
                To be a trusted name in paramedical education, known for graduates who are ready to work from day one.
              </p>
            </article>
          </Reveal>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <li key={value.title}>
                <Reveal delay={index * 0.06} y={24} className="h-full">
                  <div className="flex h-full flex-col gap-4 rounded-[28px] bg-white p-6 shadow-xs ring-1 ring-teal-950/10">
                    <span className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-teal-950">{value.title}</h3>
                    <p className="text-sm leading-relaxed text-teal-950/70">{value.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
