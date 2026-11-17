import FacilitiesClient from "@/components/FacilitiesClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Campus Facilities & Simulation Labs | CITPS Patna Infrastructure",
  description:
    "Tour CITPS Patna infrastructure: Advanced hematology labs, mock operation theatre, radiography suites, digital anatomy museum, separate hostels & sports amenities.",
  path: "/facilities",
});

export default function FacilitiesPage() {
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
            name: "Campus Facilities & Simulation Labs",
            item: "https://citps.in/facilities",
          },
        ],
      },
      {
        "@type": "CollegeOrUniversity",
        "@id": "https://citps.in/#organization",
        name: "Central Institute of Technical & Paramedical Sciences (CITPS)",
        url: "https://citps.in",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Campus Diagnostic Laboratories & Facilities",
          itemListElement: [
            {
              "@type": "Offer",
              name: "Central Pathology & Clinical Biochemistry Suite",
              description: "Roche automated chemistry analyzer and 5-part hematology stations.",
            },
            {
              "@type": "Offer",
              name: "Advanced Medical Imaging & Radiography Pavilion",
              description: "AERB-certified lead-shielded digital X-ray simulation suite and PACS consoles.",
            },
            {
              "@type": "Offer",
              name: "Sterile Mock Operation Theatre & Anesthesia Pavilion",
              description: "Boyle's anesthesia machine, ICU ventilators, and surgical scrub stations.",
            },
            {
              "@type": "Offer",
              name: "Physical Medicine & Neuro-Rehabilitation Clinic",
              description: "Gait analysis treadmill, electrotherapy modalities, and pediatric sensory gym.",
            },
            {
              "@type": "Offer",
              name: "Specialized Hemodialysis Training Station",
              description: "Fresenius hemodialysis machines and clinical reverse-osmosis filtration plant.",
            },
            {
              "@type": "Offer",
              name: "Central Medical Library & Digital DelNet Consortium",
              description: "15,000+ print volumes, PubMed and ScienceDirect journal access.",
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
        <FacilitiesClient />
      </main>
    </>
  );
}
