import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import {
  LuMapPin,
  LuShieldAlert,
  LuArrowUpRight,
} from "react-icons/lu";
import { site } from "@/data/site";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "X", href: "https://x.com", icon: FaXTwitter },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#231F20] text-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-12 border-b border-white/10">
          {/* Col 1: Institute Overview & Quick Links matching BMSIT Col 1 */}
          <div className="flex flex-col gap-5 lg:col-span-3">
            {/* Institute Brand with Official Shield & White Logo */}
            <Link href="/" className="inline-block group">
              <div className="relative h-14 sm:h-15 w-auto">
                <Image
                  src="/images/citps-logo-white-text.png"
                  alt="CITPS - Central Institute of Technical and Paramedical Sciences"
                  width={870}
                  height={334}
                  className="h-14 sm:h-15 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            <p className="text-xs !text-gray-300 leading-relaxed max-w-[32ch]">
              {site.name} - Autonomous institution approved by State Paramedical Board and accredited for clinical excellence.
            </p>

            {/* Quick Links List matching BMSIT footer-list */}
            <ul className="flex flex-col gap-2.5 text-xs text-gray-200">
              <li>
                <Link href="/" className="hover:text-[#FF3B3B] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF3B3B] transition">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FF3B3B] transition">
                  Admission 2026-27
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#FF3B3B] transition">
                  Paramedical Programs
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-[#FF3B3B] transition">
                  Placements &amp; Internships
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#FF3B3B] transition">
                  Campus Facilities &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF3B3B] transition">
                  Contact &amp; Campus Route
                </Link>
              </li>
            </ul>

            {/* Social Circle Icons matching BMSIT .social-circle */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#FF3B3B] hover:text-white"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Institutional & Regulatory */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Academics &amp; Governance
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs text-gray-200">
              <li>
                <Link href="/courses" className="hover:text-[#FF3B3B] transition">
                  Undergraduate Degrees (B.Sc.)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-[#FF3B3B] transition">
                  Paramedical Diplomas (2 Years)
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#FF3B3B] transition">
                  Central Medical Library
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF3B3B] transition">
                  Statutory Council Approvals
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FF3B3B] transition">
                  Governing Medical Advisory Council
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF3B3B] transition">
                  Anti-Ragging Squad &amp; Policy
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-[#FF3B3B] transition">
                  Bihar Student Credit Card (MNSSBY)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Admissions & Helplines */}
          <div className="flex flex-col gap-3.5 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Contact for Admissions
            </h3>
            <div className="flex flex-col gap-2.5 text-xs text-gray-200">
              <div>
                <span className="block text-[11px] text-gray-300 font-semibold">CITPS Trust &amp; Campus Office:</span>
                <a href={`tel:${site.contact.phone}`} className="text-white hover:text-[#FF3B3B] transition font-mono font-medium">
                  {site.contact.phone}
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-gray-300 font-semibold">Admissions Helpline:</span>
                <div className="flex flex-wrap gap-1 font-mono text-white font-medium">
                  <a href={`tel:${site.contact.admissionsHelpline}`} className="hover:text-[#FF3B3B] transition">
                    {site.contact.admissionsHelpline}
                  </a>
                </div>
              </div>

              <div>
                <span className="block text-[11px] text-gray-300 font-semibold">Fee &amp; Counselling Desk:</span>
                <a href="tel:+916122998845" className="text-white hover:text-[#FF3B3B] transition font-mono font-medium">
                  +91 612 299 8845
                </a>
              </div>

              <div>
                <span className="block text-[11px] text-gray-300 font-semibold">Admissions Email:</span>
                <a href={`mailto:${site.contact.email}`} className="text-white hover:text-[#FF3B3B] transition font-medium">
                  {site.contact.email}
                </a>
              </div>

              <div className="rounded-xl bg-white/10 p-3 border border-white/20 mt-1">
                <span className="flex items-center gap-1.5 text-[#FF3B3B] font-bold text-[11px]">
                  <LuShieldAlert size={14} />
                  Women &amp; Anti-Ragging Helpline (24x7):
                </span>
                <a href="tel:18001805522" className="block text-white font-mono mt-0.5 hover:text-[#FF3B3B] transition font-semibold">
                  1800-180-5522 (Toll Free)
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Campus Address & Location */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/20 pb-2">
              Campus Address
            </h3>

            <div className="flex items-start gap-2.5 text-xs text-gray-200 leading-relaxed">
              <LuMapPin size={20} className="text-[#FF3B3B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-bold text-sm mb-1">{site.name}</strong>
                Bailey Road, Near Saguna More, Danapur,<br />
                Patna, Bihar - 801503, India.
              </div>
            </div>

            <div className="rounded-xl bg-white/10 p-4 border border-white/20 flex flex-col gap-2 mt-2">
              <span className="text-[11px] font-bold text-white uppercase tracking-wide">
                Campus Timings
              </span>
              <span className="text-xs text-gray-200 font-medium">{site.contact.hours}</span>
              <a
                href="#virtual-tour"
                className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF3B3B] hover:underline mt-1"
              >
                <span>Take Virtual 360 Tour</span>
                <LuArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credentials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-300">
          <div>
            &copy; {site.copyrightYear} {site.name} ({site.shortName}). All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-white transition">
              Terms of Use
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-white transition">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
