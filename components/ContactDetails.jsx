import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import HeroEnquiry from "@/components/HeroEnquiry";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

// Contact values come from data/site.js and are DUMMY until the real details are added there.
export default function ContactDetails() {
  const { contact } = site;
  const items = [
    { label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}`, icon: LuPhone },
    { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: LuMail },
    { label: "Visit us", value: contact.address, icon: LuMapPin },
    { label: "Office hours", value: contact.hours, icon: LuClock },
  ];

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-12 lg:gap-14 lg:px-8">
        <Reveal className="flex flex-col gap-6 lg:col-span-5">
          <h2 className="text-3xl font-semibold leading-[1.05] tracking-tighter text-teal-950 md:text-5xl">
            Reach the admissions team
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-teal-950/75">
            Call, write or fill in the form. We will answer questions on courses, eligibility and the application
            process.
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-start gap-4 rounded-[24px] bg-white p-5 shadow-xs ring-1 ring-teal-950/10"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-700">
                    <Icon size={20} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-teal-950/65">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-base font-semibold text-teal-950 transition hover:text-teal-700">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-base font-semibold text-teal-950">{item.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <HeroEnquiry />
        </Reveal>
      </div>
    </section>
  );
}
