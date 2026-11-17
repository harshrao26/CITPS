import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import { site } from "@/data/site";

export default function CtaBand() {
  const { contact } = site;
  const details = [
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { label: "Visit", value: contact.address },
    { label: "Hours", value: contact.hours },
  ];

  return (
    <section id="contact" className="bg-teal-950 py-24 text-white md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-teal-900 shadow-xl ring-1 ring-white/10 lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src="/images/cta-team.jpg"
            alt="Healthcare students in scrubs and lab coats on campus"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10 lg:col-span-7">
          <div className="flex flex-col gap-6">
            <h2 className="max-w-[16ch] text-5xl font-semibold leading-[0.98] tracking-tighter text-white md:text-7xl">
              Let&rsquo;s find the course that fits you.
            </h2>
            <p className="max-w-[48ch] text-lg leading-relaxed text-teal-100/80">
              Talk to our admissions team. We will help you compare programmes and check eligibility for your background.
            </p>
            <div>
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex h-14 items-center gap-3 whitespace-nowrap rounded-full bg-teal-600 pl-7 pr-2 text-base font-medium text-white shadow-md transition hover:bg-teal-500 active:scale-[0.98]"
              >
                Talk to admissions
                <span className="grid size-10 place-items-center rounded-full bg-teal-950 text-teal-200 transition group-hover:translate-x-0.5">
                  <LuArrowUpRight size={18} />
                </span>
              </a>
            </div>
          </div>

          <dl className="grid gap-6 sm:grid-cols-2">
            {details.map((item) => (
              <div key={item.label} className="flex flex-col gap-1 border-t border-teal-800/60 pt-4">
                <dt className="text-sm font-medium text-teal-200/60">{item.label}</dt>
                <dd className="text-base text-white">
                  {item.href ? (
                    <a href={item.href} className="transition hover:text-teal-300">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
