import Image from "next/image";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";
import Reveal from "@/components/Reveal";

// Mosaic: one large tile (2 x 2) and four small tiles fill a 4 x 2 grid exactly. Photos are placeholders.
const tiles = [
  { src: "/images/campus.jpg", alt: "The CITPS campus building with a green lawn in front", large: true },
  { src: "/images/clinical-training.jpg", alt: "Students practise on a training mannequin in a clinical skills lab" },
  { src: "/images/classroom.jpg", alt: "Students in white coats attend a lecture beside an anatomical model" },
  { src: "/images/course-lab.jpg", alt: "A laboratory technician pipettes samples beside a centrifuge" },
  { src: "/images/cta-team.jpg", alt: "Healthcare students in scrubs and lab coats on campus" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
            Life at CITPS
          </h2>
          <Link
            href="/gallery"
            className="group inline-flex h-12 w-fit items-center gap-2 whitespace-nowrap rounded-full px-6 text-sm font-semibold text-teal-950 ring-1 ring-teal-950/25 transition hover:bg-teal-50"
          >
            View gallery
            <LuArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {tiles.map((tile, index) => (
            <Reveal
              key={tile.src}
              delay={index * 0.06}
              y={28}
              className={tile.large ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`relative overflow-hidden rounded-[24px] bg-teal-100 ring-1 ring-teal-950/10 ${
                  tile.large ? "aspect-square md:aspect-auto md:h-full md:min-h-[460px]" : "aspect-square md:aspect-auto md:h-full md:min-h-[222px]"
                }`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  sizes={tile.large ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
