import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

// SAMPLE wording. Replace with the institute's real story, founders and milestones.
export default function AboutStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-8">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-teal-100 shadow-lg ring-1 ring-teal-950/10">
            <Image
              src="/images/campus.jpg"
              alt="The CITPS campus building with a green lawn in front"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-6">
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
            Training the people behind patient care
          </h2>
          <p className="max-w-[58ch] text-lg leading-relaxed text-teal-950/75">
            {site.name} ({site.shortName}) prepares students for technical and paramedical careers in hospitals,
            laboratories and clinics.
          </p>
          <p className="max-w-[58ch] text-lg leading-relaxed text-teal-950/75">
            Our programmes put practice first. Students spend their time in labs and clinical settings, guided by
            teachers who understand the work, so the first day on the job feels familiar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
