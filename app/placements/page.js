import PlacementsHubClient from "@/components/PlacementsHubClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Placements & Clinical Internships | CITPS Patna Healthcare Recruiter Network",
  description:
    "Explore CITPS Patna placement records. 100% internship assistance with top recruiters: Apollo Hospitals, Fortis, Max, Narayana Health, Dr. Lal PathLabs. Highest CTC ₹6.8 LPA.",
  path: "/placements",
});

export default function PlacementsPage() {
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
            name: "Placements & Internships",
            item: "https://citps.in/placements",
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        "@id": "https://citps.in/#organization",
        name: "Central Institute of Technical & Paramedical Sciences (CITPS)",
        url: "https://citps.in",
        department: {
          "@type": "Organization",
          name: "CITPS Corporate Relations and Clinical Placement Cell",
          description:
            "Facilitates 100% rotational clinical internships and direct campus recruitment for paramedical graduates across top hospital chains and diagnostic laboratories.",
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
        <PlacementsHubClient />
      </main>
    </>
  );
}
