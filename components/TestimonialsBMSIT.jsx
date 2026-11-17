"use client";

import { useState } from "react";
import Image from "next/image";
import { LuChevronLeft, LuChevronRight, LuQuote } from "react-icons/lu";

const bmsitTestimonials = [
  {
    id: 1,
    name: "Deepasha Singh",
    role: "B.Sc Medical Laboratory Technology (Batch 2024)",
    placement: "Placed at Apollo Hospitals",
    image: "/images/students/student-5.jpg",
    quote:
      "Joining CITPS has been a defining milestone in my academic journey. Serving as Class Representative helped me develop strong leadership skills, clinical responsibility, and a deep connection with the healthcare profession. The thoughtfully designed curriculum offered a perfect balance of academic learning and hands-on practical exposure through diagnostic case studies, live postings, and regular hospital rotations.",
  },
  {
    id: 2,
    name: "Ankit Basavaraj",
    role: "B.Sc Radiology & Imaging Technology (Batch 2024)",
    placement: "Placed at Fortis Healthcare",
    image: "/images/students/student-2.jpg",
    quote:
      "Our department is exceptional, with dedicated and supportive faculty who guided us every step toward our goals. The institute has outstanding infrastructure with modern diagnostic suites. The laboratories are equipped with automated analyzers and high-frequency digital X-ray consoles for real practical mastery.",
  },
  {
    id: 3,
    name: "Akanksh Rao",
    role: "Bachelor of Physiotherapy - BPT (Batch 2023)",
    placement: "Placed at Manipal Hospitals",
    image: "/images/students/student-4.jpg",
    quote:
      "My time at CITPS played a crucial role in shaping both my clinical foundation and professional mindset. The degree in Physiotherapy provided comprehensive exposure to neuromuscular rehabilitation, biomechanics, and sports kinesiology through continuous, hands-on hospital-based mentorship.",
  },
  {
    id: 4,
    name: "Shinola M F",
    role: "B.Sc Operation Theatre Technology (Batch 2023)",
    placement: "Placed at Max Super Speciality Hospital",
    image: "/images/students/student-6.jpg",
    quote:
      "Studying at CITPS has been a truly enriching and memorable experience. The department provided an outstanding learning environment with mentors who continuously inspired us to excel both academically and in operating room discipline. Through extensive live surgical case observations, I gained immense clinical confidence.",
  },
];

export default function TestimonialsBMSIT() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prevIdx) => (prevIdx - 1 + bmsitTestimonials.length) % bmsitTestimonials.length);
  };

  const next = () => {
    setIndex((prevIdx) => (prevIdx + 1) % bmsitTestimonials.length);
  };

  const current = bmsitTestimonials[index];

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-white border-t border-[#231F20] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Title Block matching BMSIT col-md-6 */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h2 className="text-base font-bold uppercase tracking-wider text-[#FF3B3B]">
              Student Testimonials
            </h2>
            <h3 className="text-3xl sm:text-5xl lg:text-[56px] font-normal leading-[1.12] text-[#231F20]">
              Voices of <span className="block font-medium">Success - Our</span> Students Speak!
            </h3>
            <p className="text-sm sm:text-base !text-[#444444] font-medium mt-2">
              Discover real accounts of transformation, diagnostic rigor, and super-specialty hospital placement success.
            </p>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 pt-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="grid size-12 place-items-center rounded-full border-2 border-[#231F20] text-[#231F20] transition duration-200 hover:bg-[#231F20] hover:text-white active:scale-95"
              >
                <LuChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="grid size-12 place-items-center rounded-full bg-[#3A74B8] text-white border-2 border-[#3A74B8] shadow-md transition duration-200 hover:bg-[#2a598f] active:scale-95"
              >
                <LuChevronRight size={22} />
              </button>
              <span className="text-xs font-mono text-[#888] ml-2">
                0{index + 1} / 0{bmsitTestimonials.length}
              </span>
            </div>
          </div>

          {/* Right Testimonial Content Box matching BMSIT .home-testimonial-box */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[24px] bg-[#fafafa] p-8 sm:p-12 border border-[#ececec] shadow-md">
              <LuQuote className="size-12 text-[#3A74B8]/20 mb-4" />

              <p className="text-base sm:text-lg leading-relaxed !text-[#231F20] text-justify italic mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#ececec]">
                <div className="relative size-14 rounded-full overflow-hidden border-2 border-[#3A74B8] shrink-0">
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-base sm:text-lg font-bold text-[#231F20]">
                    {current.name}
                  </h4>
                  <span className="text-xs sm:text-sm text-[#3A74B8] font-medium">
                    {current.role}
                  </span>
                  <span className="text-xs text-[#FF3B3B] font-semibold mt-0.5">
                    {current.placement}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
