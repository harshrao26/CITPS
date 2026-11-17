import CoursesCatalogClient from "@/components/CoursesCatalogClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Paramedical Degree & Diploma Courses in Patna | CITPS Programs 2026",
  description:
    "Explore approved Paramedical Courses at CITPS Patna: B.Sc. MLT, BPT, Radiology, OTT, Dialysis, Optometry & DMLT. Industry-aligned syllabus with 1200+ clinical hours. View details.",
  path: "/courses",
});

export default function CoursesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
            name: "Academics & Paramedical Courses",
            item: "https://citps.in/courses",
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "CITPS Patna Paramedical Degree and Diploma Programs",
        description:
          "University-governed allied health sciences degree and technical diploma programs approved by Bihar Paramedical Council and AICTE.",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "B.Sc. Medical Laboratory Technology (BMLT)",
            url: "https://citps.in/courses/medical-laboratory-technology",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "B.Sc. Radiology & Medical Imaging Technology (BRIT)",
            url: "https://citps.in/courses/radiology-imaging-technology",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Bachelor of Physiotherapy (BPT)",
            url: "https://citps.in/courses/bachelor-of-physiotherapy",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "B.Sc. Operation Theatre & Anesthesia Technology (BOTT)",
            url: "https://citps.in/courses/operation-theatre-technology",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "B.Sc. Renal Dialysis Technology",
            url: "https://citps.in/courses/dialysis-technology",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Bachelor of Clinical Optometry (B.Optom)",
            url: "https://citps.in/courses/optometry",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which paramedical course has the highest starting salary in Bihar?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "B.Sc. Radiology & Medical Imaging Technology (BRIT) and B.Sc. Operation Theatre & Anesthesia Technology (BOTT) offer the highest entry-level packages, typically ranging between ₹4.0 LPA and ₹7.5 LPA across corporate hospital networks.",
            },
          },
          {
            "@type": "Question",
            name: "Is NEET mandatory for admission to CITPS paramedical degree courses?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No, NEET is not mandatory for admission to paramedical degrees or diploma courses at CITPS. Admissions are conducted directly based on 10+2 science marks followed by counseling.",
            },
          },
          {
            "@type": "Question",
            name: "Are CITPS paramedical degrees valid for government jobs and state health society recruitment?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, 100%. CITPS degrees are approved by the Bihar State Paramedical Council and aligned with the NCAHP Act 2021, qualifying graduates for BSSC, AIIMS, Railway, and State Health Society recruitment.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <CoursesCatalogClient />
      </main>
    </>
  );
}
