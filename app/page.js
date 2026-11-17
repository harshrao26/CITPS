import HeroSlider from "@/components/HeroSlider";
import AnnouncementTicker from "@/components/AnnouncementTicker";
import AboutInstitute from "@/components/AboutInstitute";
import ProgramFinder from "@/components/ProgramFinder";
import Accolades from "@/components/Accolades";
import PlacementsSection from "@/components/PlacementsSection";
import TopRecruiters from "@/components/TopRecruiters";
import VirtualTour360 from "@/components/VirtualTour360";
import ProgramsExcellence from "@/components/ProgramsExcellence";
import NewsAndEvents from "@/components/NewsAndEvents";
import ResearchSection from "@/components/ResearchSection";
import StatsHighlights from "@/components/StatsHighlights";
import WhyChooseCITPS from "@/components/WhyChooseCITPS";
import InspiringServices from "@/components/InspiringServices";
import TestimonialsBMSIT from "@/components/TestimonialsBMSIT";
import PreFooterCTA from "@/components/PreFooterCTA";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      {/* 1. Hero Multi-Banner Slider with Quick Action Badges Bar */}
      <HeroSlider />

      {/* 2. Live Notification / Announcements Marquee Ticker */}
      <AnnouncementTicker />

      {/* 3. About us: A Legacy of Learning, A Future of Discovery */}
      <AboutInstitute />

      {/* 4. Interactive Program Selector: Find Your Interest! */}
      <ProgramFinder />

      {/* 5. Accreditations: Recognized for Quality, Accredited for Excellence */}
      <Accolades />

      {/* 6. Placement & Career Enablement: Launching Careers, Shaping Futures */}
      <PlacementsSection />

      {/* 7. Corporate & Hospital Recruiters Logo Strip */}
      <TopRecruiters />

      {/* 8. Campus Walkthrough: Immersive 360 Virtual Tour */}
      <VirtualTour360 />

      {/* 9. Where Healthcare Education Meets Excellence (UG, PG, Diploma) */}
      <ProgramsExcellence />

      {/* 10. News & Events with Date Stamps */}
      <NewsAndEvents />

      {/* 11. Research & Development: Innovating Today, Transforming Tomorrow */}
      <ResearchSection />

      {/* 12. Institutional Key Statistics & Numbers */}
      <StatsHighlights />

      {/* 13. Why Choose CITPS: 8 Institutional Pillars */}
      <WhyChooseCITPS />

      {/* 14. Quick Student Services & Inspiring Resources (8 Icon Portals) */}
      <InspiringServices />

      {/* 15. Student Testimonials: Voices of Success */}
      <TestimonialsBMSIT />

      {/* 16. Reach Out Call to Action Pre-Footer Banner */}
      <PreFooterCTA />
    </main>
  );
}
