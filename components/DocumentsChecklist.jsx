import { LuCheck } from "react-icons/lu";
import Reveal from "@/components/Reveal";
import { courses } from "@/data/courses";

// SAMPLE checklist. Confirm the exact documents, eligibility and fee process with the institute.
const documents = [
  "Class 10 marksheet and certificate",
  "Class 12 marksheet and certificate",
  "Government photo ID",
  "Passport-size photographs",
  "Transfer or migration certificate",
  "Category certificate, if applicable",
];

export default function DocumentsChecklist() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
            Before you apply
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="h-full rounded-[28px] bg-surface p-7 ring-1 ring-teal-950/10 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-teal-950">Documents to keep ready</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {documents.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-teal-950/85">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                      <LuCheck size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="flex h-full flex-col gap-6 rounded-[28px] bg-teal-950 p-7 text-white md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">Eligibility and duration</h3>
              <ul className="flex flex-col divide-y divide-white/15">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-base font-semibold">{course.title}</span>
                    <span className="text-sm text-teal-100/80">
                      {course.eligibility}, {course.duration}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-teal-100/70">
                Fee structure and scholarship options are shared by the admissions team. Contact us for the current
                details.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
