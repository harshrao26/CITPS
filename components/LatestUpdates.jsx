import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "@/components/Reveal";
import { updates } from "@/data/updates";

// Layout: one featured update with a photo, two compact updates beside it (as on the HCPC homepage).
export default function LatestUpdates() {
  const [featured, ...others] = updates;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
            Latest from CITPS
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link
              href={featured.href}
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[28px] bg-teal-950 p-7 text-white shadow-lg ring-1 ring-teal-950/10 lg:h-full lg:p-9"
            >
              <Image
                src="/images/campus.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-teal-950/95 via-teal-950/55 to-teal-950/10" />
              <div className="relative flex max-w-xl flex-col gap-4">
                <p className="flex items-center gap-3 text-sm text-teal-100">
                  <span className="rounded-full bg-teal-300 px-3 py-1 text-xs font-semibold text-teal-950">
                    {featured.tag}
                  </span>
                  <time>{featured.date}</time>
                </p>
                <h3 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">{featured.title}</h3>
                <p className="text-base leading-relaxed text-teal-50/85">{featured.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-200">
                  Read more
                  <LuArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {others.map((item, index) => (
              <Reveal key={item.title} delay={0.08 + index * 0.08} className="flex-1">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between gap-8 rounded-[28px] bg-white p-7 shadow-xs ring-1 ring-teal-950/10 transition duration-300 hover:ring-teal-600/50"
                >
                  <p className="flex items-center gap-3 text-sm text-teal-950/70">
                    <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                      {item.tag}
                    </span>
                    <time>{item.date}</time>
                  </p>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold leading-snug tracking-tight text-teal-950">{item.title}</h3>
                    <p className="text-base leading-relaxed text-teal-950/70">{item.text}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                    Read more
                    <LuArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
