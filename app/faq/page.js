import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import PageHeader from "@/components/PageHeader";
import { faqs } from "@/data/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "Answers on eligibility, entrance tests, documents, fees and practical training at CITPS.",
  path: "/faq",
});

// FAQ markup lets search engines and AI answers read each question and answer pair directly.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <main>
      <PageHeader
        title="Frequently asked questions"
        intro="Clear answers on eligibility, documents, fees and practical training."
        crumbs={[{ label: "FAQ" }]}
      />
      <Faq />
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
