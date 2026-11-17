import AboutUsClient from "@/components/AboutUsClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About CITPS Patna | Leadership, Accreditations & Healthcare Vision",
  description:
    "Learn about Central Institute of Technical & Paramedical Sciences (CITPS) Patna. Discover our mission, clinical faculty, state council accreditations & corporate hospital MoUs.",
  path: "/about",
});

export default function AboutPage() {
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
            name: "About Us & Accreditations",
            item: "https://citps.in/about",
          },
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://citps.in/about#webpage",
        url: "https://citps.in/about",
        name: "About CITPS Patna - Leadership, Accreditations & Healthcare Vision",
        description:
          "Institutional authority profile, statutory affiliations, governing medical advisory council, and 10-year milestones of Central Institute of Technical & Paramedical Sciences, Patna.",
        mainEntity: {
          "@type": "CollegeOrUniversity",
          "@id": "https://citps.in/#organization",
          name: "Central Institute of Technical & Paramedical Sciences (CITPS)",
          alternateName: "CITPS Patna",
          url: "https://citps.in",
          foundingDate: "2014",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bailey Road, Saguna More",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            postalCode: "801503",
            addressCountry: "IN",
          },
          telephone: "+91-612-299-8844",
          email: "admissions@citps.in",
          hasCredential: [
            {
              "@type": "EducationalOccupationalCredential",
              name: "Bihar Paramedical Council Permanent Recognition",
              credentialCategory: "Government Regulatory Approval",
              recognizedBy: {
                "@type": "GovernmentOrganization",
                name: "Department of Health, Government of Bihar",
              },
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "NCAHP Act 2021 Model Curriculum Compliance",
              credentialCategory: "National Commission Accreditation",
            },
            {
              "@type": "EducationalOccupationalCredential",
              name: "ISO 9001:2015 Quality Management System Certification",
              credentialCategory: "International Quality Standard",
            },
          ],
        },
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
        <AboutUsClient />
      </main>
    </>
  );
}
