import {
  LuGraduationCap,
  LuUsers,
  LuShieldCheck,
  LuPartyPopper,
  LuBell,
  LuBookMarked,
  LuLightbulb,
  LuNewspaper,
  LuArrowRight,
} from "react-icons/lu";

const boxes = [
  {
    title: "Scholarship",
    href: "#admissions",
    icon: LuGraduationCap,
    type: "dark-img",
    bg: "/images/classroom.jpg",
  },
  {
    title: "Student Clubs",
    href: "#campus-life",
    icon: LuUsers,
    type: "light",
  },
  {
    title: "Paramedical Council",
    href: "#accolades",
    icon: LuShieldCheck,
    type: "red-img",
    bg: "/images/campus.jpg",
  },
  {
    title: "Aarogya Fest",
    href: "#campus-life",
    icon: LuPartyPopper,
    type: "light",
  },
  {
    title: "Circulars & Notices",
    href: "#news-events",
    icon: LuBell,
    type: "light",
  },
  {
    title: "Syllabus",
    href: "#programs",
    icon: LuBookMarked,
    type: "dark-img",
    bg: "/images/hero-lab.jpg",
  },
  {
    title: "CITPS SPARK",
    href: "#research",
    icon: LuLightbulb,
    type: "light",
  },
  {
    title: "Newsletters",
    href: "#news-events",
    icon: LuNewspaper,
    type: "light",
  },
];

export default function InspiringServices() {
  return (
    <section id="inspiring" className="relative py-16 sm:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Heading & Enquire Now matching BMSIT col-md-4 */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.15] text-[#231F20]">
              Educating <span className="block font-medium">Brilliance, Inspiring</span> Generations.
            </h2>
            <p className="text-sm sm:text-base !text-[#444444] font-medium leading-relaxed">
              Explore vital portals for students, faculty, and research candidates across admissions, circulars, and student clubs.
            </p>
            <div>
              <a href="#contact" className="btn-one">
                <span>ENQUIRE NOW</span>
                <LuArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right 8-Boxes Grid matching BMSIT col-md-8 */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {boxes.map((box) => {
                const Icon = box.icon;

                if (box.type === "dark-img") {
                  return (
                    <a
                      key={box.title}
                      href={box.href}
                      style={{ backgroundImage: `url(${box.bg})` }}
                      className="group relative rounded-[20px] bg-cover bg-center min-h-[180px] p-4 flex flex-col items-center justify-center text-center text-white overflow-hidden shadow-sm transition duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-[#231F20]/80 group-hover:bg-[#231F20]/90 transition duration-300" />
                      <div className="relative z-10 flex flex-col items-center gap-2.5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-white/15 backdrop-blur-md text-white group-hover:bg-white/25 transition">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-sm font-bold !text-white drop-shadow-sm transition">
                          {box.title}
                        </h3>
                      </div>
                    </a>
                  );
                }

                if (box.type === "red-img") {
                  return (
                    <a
                      key={box.title}
                      href={box.href}
                      style={{ backgroundImage: `url(${box.bg})` }}
                      className="group relative rounded-[20px] bg-cover bg-center min-h-[180px] p-4 flex flex-col items-center justify-center text-center text-white overflow-hidden shadow-sm transition duration-300 hover:shadow-xl hover:scale-[1.02]"
                    >
                      <div className="absolute inset-0 bg-[#FF3B3B]/90 group-hover:bg-[#FF3B3B]/95 transition duration-300" />
                      <div className="relative z-10 flex flex-col items-center gap-2.5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md text-white group-hover:bg-white/30 transition">
                          <Icon size={24} />
                        </div>
                        <h3 className="text-sm font-bold !text-white drop-shadow-sm transition">
                          {box.title}
                        </h3>
                      </div>
                    </a>
                  );
                }

                return (
                  <a
                    key={box.title}
                    href={box.href}
                    className="group relative rounded-[20px] bg-[#f8f8f8] border border-[#ececec] min-h-[180px] p-4 flex flex-col items-center justify-center text-center text-[#231F20] transition duration-300 hover:bg-white hover:border-[#3A74B8] hover:shadow-xl hover:scale-[1.02]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#3A74B8]/10 text-[#3A74B8] group-hover:bg-[#3A74B8] group-hover:text-white transition duration-300">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-sm font-semibold mt-3 group-hover:text-[#FF3B3B] transition">
                      {box.title}
                    </h3>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
