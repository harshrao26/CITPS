import AdmissionsHubClient from "@/components/AdmissionsHubClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Paramedical Admissions 2026-27 | CITPS Patna Eligibility, Fees & Apply Online",
  description:
    "Direct Merit Admission 2026 at CITPS Patna for B.Sc. MLT, BPT, Radiology, OTT & DMLT. Approved by Bihar Paramedical Council & AICTE. Bihar Student Credit Card (MNSSBY) 0% loan approved. Apply online now.",
  path: "/admissions",
});

export default function AdmissionsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is NEET UG mandatory for admission to B.Sc. Paramedical courses at CITPS Patna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, NEET is not mandatory for admission to B.Sc. MLT, BPT, B.Sc. Radiology, or B.Sc. OTT at CITPS. Admissions are conducted directly on merit based on 10+2 marks in Physics, Chemistry, and Biology/Mathematics followed by institutional counseling.",
        },
      },
      {
        "@type": "Question",
        name: "How does the Bihar Student Credit Card (MNSSBY) scheme work at CITPS?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CITPS is an approved institution under Govt. of Bihar's MNSSBY framework. Eligible Bihar students can receive up to ₹4,00,000 for course fees, hostel, and books with zero collateral. CITPS provides official Bonafide Admission Letters and Fee Breakup certificates for instant DRCC processing.",
        },
      },
      {
        "@type": "Question",
        name: "Are CITPS paramedical degrees valid for State & Central Government hospital recruitments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All degrees and diplomas awarded are fully recognized by the State Paramedical Council, Department of Health (Govt. of Bihar), and adhere strictly to the National Commission for Allied and Healthcare Professions (NCAHP) Act 2021. Graduates are fully eligible for vacancies in AIIMS, Railway Hospitals, ESIC, BSSC, and State Health Society Bihar.",
        },
      },
      {
        "@type": "Question",
        name: "What is the clinical hospital internship arrangement at CITPS Patna?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every undergraduate degree includes a compulsory 6-month full-time rotational clinical internship across premier hospital partners, including AIIMS Patna corridor facilities, Paras HMRI Hospital, Ruban Memorial, Mahavir Cancer Sansthan, Apollo, and Dr. Lal PathLabs.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://citps.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Admissions 2026-27 Central Hub",
        item: "https://citps.in/admissions",
      },
    ],
  };

  const educationalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Central Institute of Technical & Paramedical Sciences",
    alternateName: "CITPS Patna",
    url: "https://citps.in",
    telephone: "+91-612-2998844",
    email: "admissions@citps.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bailey Road Extension, Near AIIMS Corridor",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "801505",
      addressCountry: "IN",
    },
  };

  return (
    <main>
      <AdmissionsHubClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalOrganizationSchema) }}
      />
    </main>
  );
}
