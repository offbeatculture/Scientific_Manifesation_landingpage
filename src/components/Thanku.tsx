import { CheckCircle } from "lucide-react";

export const ThankYouPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F8F6E8] px-4 py-12">
      <div className="max-w-lg w-full text-center space-y-6">
        {/* Icon */}
        <CheckCircle className="w-16 h-16 mx-auto text-[#175B53]" />

        {/* Heading */}
        <h1 className="heading-serif text-2xl md:text-4xl text-[#312B24]">
          Thank You for <span className="heading-italic">Joining!</span>
        </h1>

        {/* Subtext */}
        <p className="text-[#312B24]/80 text-base md:text-lg leading-relaxed">
          Your spot for the <strong>2-Day Energy Reset Challenge</strong> is confirmed.  
          We can’t wait to see you there!
        </p>

        {/* WhatsApp Group CTA */}
        <a
          href="https://energyshift.valarmathisrinivasan.in/erc-wap-fb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#175B53] hover:bg-[#134741] px-6 py-3 text-white font-semibold shadow-md transition-all duration-300"
        >
          👉 Click here to join WhatsApp Group
        </a>

        {/* Extra note */}
        <p className="text-sm text-[#312B24]/70 mt-4">
          Important details and Zoom link will be shared in the group.
        </p>
      </div>
    </section>
  );
};
