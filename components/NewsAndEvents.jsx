import Image from "next/image";
import { newsEventsList } from "@/data/bmsitData";

export default function NewsAndEvents() {
  return (
    <section id="news-events" className="relative pt-36 sm:pt-48 pb-20 sm:pb-28 bg-[#231F20] text-white z-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Heading matching BMSIT .main-head */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#FF3B3B]">
              NEWS &amp; EVENTS
            </h2>
            <p className="text-xs sm:text-sm !text-gray-200 font-medium mt-1">
              Latest academic circulars, clinical seminars, workshops, and campus notifications
            </p>
          </div>
          <a href="#news-events" className="btn-four shrink-0 self-start sm:self-auto">
            <span>VIEW ALL</span>
          </a>
        </div>

        {/* 4 Cards Grid matching BMSIT .home-news-box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsEventsList.map((item) => (
            <article key={item.id} className="group">
              <a href="#news-events" className="block transition duration-300">
                {/* News Image with rounded-[12px] */}
                <div className="relative h-44 w-full overflow-hidden rounded-[14px] bg-[#1a1718] mb-3.5 border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 rounded bg-[#FF3B3B] px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.category}
                  </div>
                </div>

                {/* News Title */}
                <p className="text-sm font-semibold !text-white line-clamp-2 leading-snug group-hover:!text-[#FF3B3B] transition min-h-[2.5rem]">
                  {item.title}
                </p>

                {/* Date Stamp & View More link */}
                <div className="flex items-center justify-between text-xs mt-2 pt-1 border-t border-white/10">
                  <span className="!text-gray-300 font-mono text-[11px]">{item.date}</span>
                  <span className="text-[#FF3B3B] font-bold text-xs group-hover:underline inline-flex items-center gap-0.5">
                    View more &raquo;
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
