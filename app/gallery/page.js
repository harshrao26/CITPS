import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/GalleryGrid";
import PageHeader from "@/components/PageHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "Photos of CITPS labs, classrooms and campus life.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <main>
      <PageHeader
        title="Gallery"
        intro="A look at the labs, classrooms and campus where students train."
        crumbs={[{ label: "Gallery" }]}
      />
      <GalleryGrid />
      <CtaBand />
    </main>
  );
}
