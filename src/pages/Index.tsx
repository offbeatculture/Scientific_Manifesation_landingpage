import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { useFacebookPixel } from "@/hooks/useFacebookPixelHome";

const Index = () => {
  useFadeInAnimation();

  useEffect(() => {
    // Update meta tags for SEO
    document.title = "Energy Transformation Challenge - From Chaotic Overthinker to Peaceful Powerhouse";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your energy in 2 days! Heal your gut, calm your mind, and reset your energy with Dr. Valarmathi Srinivasan. Join the Energy Reset Challenge for ₹99.');
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
  <HeroSection />
</main>

  );
};

export default Index;