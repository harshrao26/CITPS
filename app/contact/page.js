import ContactHubClient from "@/components/ContactHubClient";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact CITPS Patna | Admissions Helpline, Campus Address & Transit Map",
  description:
    "Reach CITPS Patna admissions desk. Call +91 612 299 8844 or visit our Bailey Road campus. Transit guide from Patna Junction, Danapur Station & AIIMS Patna.",
  path: "/contact",
});

export default function ContactPage() {
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
            name: "Contact Us & Campus Directions",
            item: "https://citps.in/contact",
          },
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://citps.in/contact#webpage",
        url: "https://citps.in/contact",
        name: "Contact CITPS Patna - Admissions Helpline, Campus Address & Transit Map",
        description:
          "Official contact desk, admissions helpline numbers, email addresses, and detailed transit navigation for the Central Institute of Technical and Paramedical Sciences, Patna.",
        mainEntity: {
          "@type": "CollegeOrUniversity",
          "@id": "https://citps.in/#organization",
          name: "Central Institute of Technical & Paramedical Sciences (CITPS)",
          telephone: "+91-612-299-8844",
          email: "admissions@citps.in",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bailey Road, Near Saguna More, Danapur",
            addressLocality: "Patna",
            addressRegion: "Bihar",
            postalCode: "801503",
            addressCountry: "IN",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
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
        <ContactHubClient />
      </main>
    </>
  );
}
