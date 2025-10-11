import { useEffect } from "react";
import { StrugglesSection } from "@/components/StrugglesSection";
import { HowWeHelpSection } from "@/components/HowWeHelpSection";
import { TransformationSection } from "@/components/TransformationSection";
import { CoachSection } from "@/components/CoachSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { StickyBottomCTA } from "@/components/StickyBottomCTA";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";
import {Carousel} from "@/components/Carousel"
import LeadCapture from "@/components/LeadCapture";


const Index2 = () => {
  useFadeInAnimation();

  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Manifest Your Dream Life – 90-Minute Science-Based Masterclass with Ankit Neerav ";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Join Ankit Neerav’s 90-Minute Science-Backed Manifestation Masterclass and learn practical Law of Attraction techniques, scientific experiments, and proven frameworks. Limited seats at just ₹9 – claim your spot today.');
    }
  }, []);
  useFacebookPixel();

  return (
<main className="min-h-screen bg-[#F8F6E8]">
  <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1525232074920142&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
  <Carousel/>
  <LeadCapture/>
  <StrugglesSection />
  <HowWeHelpSection />
  <TransformationSection />
  <CoachSection />
  <TestimonialsSection />
  <FAQSection/>
  <FinalCTASection />
</main>

  );
};

export default Index2;