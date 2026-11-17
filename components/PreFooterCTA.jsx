import { LuPhoneCall, LuClipboardList } from "react-icons/lu";

export default function PreFooterCTA() {
  return (
    <section className="relative z-20 -mb-14 sm:-mb-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Floating Glassmorphism Card matching BMSIT .footer-top-call-bg */}
        <div className="rounded-[20px] bg-white/95 backdrop-blur-[20px] shadow-[0_20px_60px_0_rgba(58,116,184,0.25)] border border-white p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Title matching BMSIT h2 */}
            <div className="md:col-span-7">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.18] text-[#231F20]">
                Reach Out for <span className="block font-bold text-[#FF3B3B]">Admissions &amp; More!</span>
              </h2>
              <p className="text-sm !text-[#231F20]/80 font-medium mt-2 max-w-xl">
                Connect with our academic counseling team for seat matrix, syllabus, and scholarship guidance.
              </p>
            </div>

            {/* Action Buttons matching BMSIT .btn-two-full and .btn-three-full */}
            <div className="md:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-3 sm:gap-4">
              <a href="#contact" className="btn-two-full">
                <LuPhoneCall size={16} />
                <span>ENQUIRE NOW</span>
              </a>

              <a href="#admissions" className="btn-three-full">
                <LuClipboardList size={16} />
                <span>APPLY NOW</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
