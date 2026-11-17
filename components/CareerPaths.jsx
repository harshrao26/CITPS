import Reveal from "@/components/Reveal";
import { workplaces } from "@/data/careers";

// Layout: a ruled grid (not cards) so this section reads differently from the card sections around it.
export default function CareerPaths() {
  return (
    <section id="careers" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <h2 className="text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
            Where a paramedical career can take you
          </h2>
          <p className="max-w-[56ch] text-lg leading-relaxed text-teal-950/70">
            Healthcare needs trained technical staff in many settings. These are the places where graduates of these
            programmes typically find work.
          </p>
        </Reveal>

        <ul className="mt-14 grid grid-cols-1 border-l border-t border-teal-950/15 sm:grid-cols-2 lg:grid-cols-4">
          {workplaces.map((place) => {
            const Icon = place.icon;
            return (
              <li
                key={place.title}
                className="group flex flex-col gap-6 border-b border-r border-teal-950/15 p-7 transition duration-300 hover:bg-teal-50"
              >
                <span className="grid size-12 place-items-center rounded-full bg-teal-50 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold tracking-tight text-teal-950">{place.title}</h3>
                  <p className="text-sm leading-relaxed text-teal-950/70">{place.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
