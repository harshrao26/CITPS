import { Suspense } from "react";
import { notFound } from "next/navigation";
import CoursePillarView from "@/components/CoursePillarView";
import { courses, getCourse } from "@/data/courses";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return pageMetadata({
    title: `${course.title} Course in Patna | Fees, Eligibility, Syllabus | CITPS`,
    description: `${course.summary} Approved by Bihar Paramedical Council & AICTE with 1200+ clinical hours and 100% hospital placements.`,
    path: `/courses/${course.id}`,
  });
}

async function CourseContent({ params }) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  // Strip non-serializable function props across server-client boundary
  const { icon, ...serializableCourse } = course;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    courseCode: course.degreeCode,
    description: course.summary,
    provider: {
      "@type": "CollegeOrUniversity",
      name: site.name,
      url: site.url,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bailey Road Extension, Near AIIMS Corridor",
        addressLocality: "Patna",
        addressRegion: "Bihar",
        postalCode: "801505",
        addressCountry: "IN",
      },
    },
    educationalCredentialAwarded: course.title,
    timeRequired: course.duration,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Full-Time",
      courseWorkload: course.clinicalHours,
      startDate: "2026-08-01",
      location: "CITPS Patna Campus & Affiliated Teaching Hospitals",
    },
    offers: {
      "@type": "Offer",
      category: "Tuition Fee",
      priceCurrency: "INR",
      price: "75000",
      availability: "https://schema.org/InStock",
      validFrom: "2026-01-01",
    },
  };

  const faqSchema = course.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
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
        name: "Academics",
        item: "https://citps.in/courses",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.title,
        item: `https://citps.in/courses/${course.id}`,
      },
    ],
  };

  return (
    <>
      <CoursePillarView course={serializableCourse} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

export default function CoursePage({ params }) {
  return (
    <main>
      <Suspense
        fallback={
          <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center text-slate-500 font-semibold">
            Loading course details...
          </div>
        }
      >
        <CourseContent params={params} />
      </Suspense>
    </main>
  );
}
