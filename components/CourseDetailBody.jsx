import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight, LuCheck, LuClock, LuFileCheck, LuLayers, LuStethoscope } from "react-icons/lu";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";

export default function CourseDetailBody({ course }) {
  const facts = [
    { label: "Duration", value: course.duration, icon: LuClock },
    { label: "Eligibility", value: course.eligibility, icon: LuFileCheck },
    { label: "Training", value: course.mode, icon: LuLayers },
    { label: "Field", value: course.category, icon: LuStethoscope },
  ];
  const related = courses.filter((item) => item.id !== course.id).slice(0, 3);

  return (
    <>
      {/* Fact bar straddles the page header edge, the same device as the home enquiry card. */}
      <div className="relative z-10 mx-auto -mt-12 max-w-7xl px-5 sm:px-6 lg:px-8">
        <dl className="grid gap-6 rounded-[28px] bg-white p-6 shadow-2xl ring-1 ring-teal-950/10 sm:grid-cols-2 md:p-8 lg:grid-cols-4">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.label} className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                  <Icon size={20} />
                </span>
                <div className="flex flex-col gap-1">
                  <dt className="text-sm font-medium text-teal-950/65">{fact.label}</dt>
                  <dd className="text-base font-semibold leading-snug text-teal-950">{fact.value}</dd>
                </div>
              </div>
            );
          })}
        </dl>
      </div>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
          <Reveal className="flex flex-col gap-6 lg:col-span-6">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
              About this programme
            </h2>
            {course.overview.map((paragraph) => (
              <p key={paragraph} className="max-w-[56ch] text-lg leading-relaxed text-teal-950/75">
                {paragraph}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-teal-100 shadow-lg ring-1 ring-teal-950/10">
              <Image
                src={course.image}
                alt={course.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="max-w-2xl text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
              What you will learn
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-3 md:grid-cols-2">
            {course.learn.map((item, index) => (
              <li key={item}>
                <Reveal delay={index * 0.05} y={24}>
                  <div className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-xs ring-1 ring-teal-950/10">
                    <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                      <LuCheck size={16} />
                    </span>
                    <span className="text-base leading-relaxed text-teal-950">{item}</span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <Reveal className="flex flex-col gap-4 lg:col-span-5">
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
              Where it can lead
            </h2>
            <p className="max-w-[44ch] text-lg leading-relaxed text-teal-950/75">
              Typical roles for graduates of this programme. Outcomes depend on the individual and the job market.
            </p>
          </Reveal>
          <ul className="flex flex-wrap content-start gap-3 lg:col-span-7">
            {course.careers.map((career, index) => (
              <li key={career}>
                <Reveal delay={index * 0.05} y={20}>
                  <span className="inline-flex h-14 items-center rounded-full bg-teal-50 px-7 text-base font-semibold text-teal-900 ring-1 ring-teal-700/20">
                    {career}
                  </span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface pb-4 pt-20 md:pt-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-teal-950 p-8 text-white shadow-xl md:flex-row md:items-center md:p-12">
              <div className="flex max-w-xl flex-col gap-3">
                <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                  Interested in {course.title}?
                </h2>
                <p className="text-base leading-relaxed text-teal-100/80">
                  Talk to admissions about eligibility, the application process and the next batch.
                </p>
              </div>
              <Link
                href="/contact"
                className="group inline-flex h-14 shrink-0 items-center gap-3 whitespace-nowrap rounded-full bg-teal-300 pl-7 pr-2 text-base font-semibold text-teal-950 transition hover:bg-teal-200 active:scale-[0.98]"
              >
                Talk to admissions
                <span className="grid size-10 place-items-center rounded-full bg-teal-950 text-teal-200 transition group-hover:translate-x-0.5">
                  <LuArrowUpRight size={18} />
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
              Other programmes
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {related.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <Link
                    href={`/courses/${item.id}`}
                    className="group flex h-full flex-col gap-5 rounded-[28px] bg-white p-6 shadow-xs ring-1 ring-teal-950/10 transition duration-300 hover:ring-teal-600/50"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-teal-50 text-teal-700">
                      <Icon size={20} />
                    </span>
                    <span className="text-xl font-semibold leading-snug tracking-tight text-teal-950">{item.title}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                      View course
                      <LuArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
