import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

// Title band for inner pages: breadcrumb, headline and a short intro on a deep panel.
export default function PageHeader({ title, intro, crumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-teal-950 text-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-14 sm:px-6 md:pb-24 md:pt-16 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-teal-100/80">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1.5">
                <LuChevronRight size={14} className="text-teal-300/70" />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 flex max-w-3xl flex-col gap-5">
          <h1 className="text-4xl font-semibold leading-[1.02] tracking-tighter text-white md:text-6xl">{title}</h1>
          {intro ? <p className="max-w-[56ch] text-lg leading-relaxed text-teal-50/85">{intro}</p> : null}
          {children}
        </div>
      </div>
    </section>
  );
}
