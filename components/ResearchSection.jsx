import Image from "next/image";
import { LuArrowRight } from "react-icons/lu";

export default function ResearchSection() {
  return (
    <section id="research" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading matching BMSIT .main-head */}
        <div className="mb-10">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FF3B3B]">
            Research
          </h2>
        </div>

        {/* 2-Image Collage + Narrative matching BMSIT .home-research-bg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Large Photo (4 columns) */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[3/4] w-full rounded-[20px] overflow-hidden shadow-md border border-[#ececec]">
              <Image
                src="/images/course-lab.jpg"
                alt="CITPS Diagnostic Laboratory & Clinical Biochemistry Research"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Narrative & Secondary Photo (8 columns) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              {/* Secondary Photo (5 columns) */}
              <div className="sm:col-span-5">
                <div className="relative aspect-[4/3] w-full rounded-[20px] overflow-hidden shadow-md border border-[#ececec]">
                  <Image
                    src="/images/course-radiology.jpg"
                    alt="CITPS Radiology & DICOM Innovation Suite"
                    fill
                    sizes="(min-width: 640px) 35vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Title Block (7 columns) */}
              <div className="sm:col-span-7">
                <h3 className="text-3xl sm:text-4xl lg:text-[40px] font-normal leading-[1.15] text-[#231F20]">
                  Innovating Today, <span className="block font-medium">Transforming</span> Tomorrow.
                </h3>
              </div>
            </div>

            {/* Paragraph Text & View More Button */}
            <div className="flex flex-col gap-5 pt-2">
              <p className="text-base leading-relaxed !text-[#333333] text-left sm:text-justify">
                R&amp;D at Central Institute of Technical and Paramedical Sciences involves identifying
                breakthrough healthcare research areas, developing interdisciplinary diagnostic projects leading
                to publications in National and International indexed journals, and securing funded clinical trials
                through national medical boards, DST, and biotechnology councils, while filing patents for innovative
                biomedical technologies.
              </p>

              <div>
                <a href="#research" className="btn-two">
                  <span>VIEW MORE</span>
                  <LuArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
