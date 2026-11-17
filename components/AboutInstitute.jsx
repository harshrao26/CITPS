import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function AboutInstitute() {
  return (
    <section id="about" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Text Block (Exact BMSIT .home-about-text-box) */}
          <div className="flex flex-col gap-6 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF3B3B]">
              About us
            </span>

            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#231F20] leading-[1.15]">
              A Legacy of Learning, <br />
              <strong>A Future of Discovery.</strong>
            </h2>

            <p className="text-base leading-relaxed !text-[#333333] text-left sm:text-justify">
              Central Institute of Technical &amp; Paramedical Sciences has been a pioneer in paramedical
              and technical healthcare education, shaping future clinicians and innovators for decades.
              With a strong foundation in excellence, we continue to push boundaries, focusing on world-class
              clinical education, laboratory diagnostics, and research.
            </p>

            <p className="text-base leading-relaxed !text-[#333333] text-left sm:text-justify">
              As an autonomous institution of technical and health sciences, our legacy thrives through a
              dedicated network of alumni making an impact in premier super-speciality hospitals and research
              institutions worldwide.
            </p>

            <div className="pt-2">
              <a href="#admissions" className="btn-one">
                <span>VIEW MORE</span>
                <LuArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Image Block with 20px rounded border */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-xl border border-[#ececec]">
              <Image
                src="/images/campus.jpg"
                alt="CITPS Campus main building"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
