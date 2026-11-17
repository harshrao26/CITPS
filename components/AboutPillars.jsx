import Image from "next/image";
import Reveal from "@/components/Reveal";

// Three settings where learning happens. Layout: image-led panels in a row, tall on desktop.
const pillars = [
  {
    title: "Classroom",
    text: "Clear teaching of the science behind each procedure, tied to the labs you use next.",
    image: "/images/classroom.jpg",
    alt: "Students in white coats attend a lecture beside an anatomical model",
  },
  {
    title: "Lab",
    text: "Repeated, supervised practice on equipment and training models until routines are steady.",
    image: "/images/clinical-training.jpg",
    alt: "Students practise on a training mannequin in a clinical skills lab",
  },
  {
    title: "Clinic",
    text: "Planned training in a working healthcare setting, with real patients and real teams.",
    image: "/images/course-theatre.jpg",
    alt: "A surgical team inside an operation theatre",
  },
];

export default function AboutPillars() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
            How we teach: classroom, lab and clinic
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <li key={pillar.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <article className="relative flex min-h-[440px] flex-col justify-end overflow-hidden rounded-[28px] bg-teal-950 p-7 text-white shadow-lg ring-1 ring-teal-950/10">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-teal-950/95 via-teal-950/45 to-transparent" />
                  <div className="relative flex flex-col gap-2">
                    <h3 className="text-3xl font-semibold tracking-tight">{pillar.title}</h3>
                    <p className="text-base leading-relaxed text-teal-50/85">{pillar.text}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
