import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";
import { useClarity } from "@/hooks/useClarity";  // 👈 added

const Index = () => {
  useFadeInAnimation();
  useFacebookPixel();
  useClarity();  // 👈 initialize Clarity

  useEffect(() => {
    // Update meta tags for SEO
    document.title =
      "Manifest Your Dream Life – 90-Minute Science-Based Masterclass with Ankit Neerav (Only ₹9)";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join Ankit Neerav’s 90-Minute Science-Backed Manifestation Masterclass and learn practical Law of Attraction techniques, scientific experiments, and proven frameworks. Limited seats at just ₹9 – claim your spot today.."
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F8F6E8]">
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=586972862820606&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      <HeroSection />
    </main>
  );
};

export default Index;
