import Image from "next/image";
import { LuCompass, LuMessagesSquare, LuUserCheck } from "react-icons/lu";
import Reveal from "@/components/Reveal";

// Five cells on a 12-column grid: 7+5 on the first row, 3+5+4 on the second. No empty tiles.
export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
            Why students choose CITPS
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="relative min-h-[380px] overflow-hidden rounded-[28px] shadow-sm lg:h-[440px]">
              <Image
                src="/images/clinical-training.jpg"
                alt="Students practise on a training mannequin in a clinical skills lab"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex max-w-xl flex-col gap-3 p-7 text-white">
                <h3 className="text-3xl font-semibold leading-tight tracking-tight">Practice from the first semester</h3>
                <p className="text-base leading-relaxed text-teal-100/90">
                  Skills labs and training models let you repeat a procedure until it is steady, before you meet a
                  patient.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <article className="flex min-h-[320px] flex-col justify-between gap-8 rounded-[28px] bg-teal-950 p-8 text-white shadow-sm lg:h-[440px]">
              <span className="grid size-12 place-items-center rounded-full bg-teal-600 text-white shadow-xs">
                <LuUserCheck size={22} />
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold leading-tight tracking-tight">Teachers from the field</h3>
                <p className="max-w-[42ch] text-base leading-relaxed text-teal-100/80">
                  Faculty who have worked in hospitals and diagnostic centres bring real cases into the classroom.
                </p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-3">
            <article className="flex min-h-[300px] flex-col justify-between gap-8 rounded-[28px] bg-teal-700 p-7 text-white shadow-sm lg:h-[340px]">
              <span className="grid size-12 place-items-center rounded-full bg-white text-teal-800 shadow-xs">
                <LuCompass size={22} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">Clinical exposure built in</h3>
                <p className="text-sm leading-relaxed text-teal-100/80">Planned hospital training runs alongside coursework.</p>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.08}>
            <article className="relative min-h-[300px] overflow-hidden rounded-[28px] shadow-sm lg:h-[340px]">
              <Image
                src="/images/classroom.jpg"
                alt="Students in white coats attend a lecture beside an anatomical model"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-950/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight">Classrooms that mirror the workplace</h3>
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-4" delay={0.16}>
            <article className="flex min-h-[300px] flex-col justify-between gap-8 rounded-[28px] bg-teal-50/80 p-7 text-teal-950 ring-1 ring-teal-100 shadow-xs lg:h-[340px]">
              <span className="grid size-12 place-items-center rounded-full bg-teal-700 text-white shadow-xs">
                <LuMessagesSquare size={22} />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-teal-950">Career guidance</h3>
                <p className="text-sm leading-relaxed text-teal-950/70">
                  Help with resumes, interview preparation and finding placement opportunities after your course.
                </p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
