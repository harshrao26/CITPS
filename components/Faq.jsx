import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Reveal from "@/components/Reveal";
import { faqs } from "@/data/faq";

// Native details/summary keeps the accordion working smoothly without heavy runtime scripts.
// Pass `limit` on the home page to show the first few questions and link to the full list.
export default function Faq({ limit }) {
  const items = limit ? faqs.slice(0, limit) : faqs;

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl font-semibold leading-[1] tracking-tighter text-teal-950 md:text-6xl">
              Questions students and parents ask
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-teal-950/70">
              Find clear answers on admissions, eligibility criteria, practical lab training and certification.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3.5 lg:col-span-7">
          {items.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.05} y={24}>
              <details className="group rounded-[24px] bg-white ring-1 ring-teal-950/10 shadow-xs transition open:ring-teal-600/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 text-left text-lg font-medium text-teal-950 md:p-7 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-800 shadow-xs transition group-open:rotate-45 group-open:bg-teal-700 group-open:text-white">
                    <FiPlus size={18} />
                  </span>
                </summary>
                <p className="max-w-[56ch] px-6 pb-7 text-base leading-relaxed text-teal-950/75 md:px-7">{item.answer}</p>
              </details>
            </Reveal>
          ))}
          {limit ? (
            <div className="pt-3">
              <Link
                href="/faq"
                className="inline-flex h-12 items-center whitespace-nowrap rounded-full px-6 text-sm font-semibold text-teal-950 ring-1 ring-teal-950/25 transition hover:bg-teal-50"
              >
                See all questions
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
