import { Clock } from "lucide-react";

/* Smooth scroll to the register form */
function scrollToRegister() {
  const el = document.getElementById("register");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24 px-4 bg-aura-900 flex items-center justify-center">
      <div className="container mx-auto max-w-2xl text-center">
        <div className="space-y-8 fade-in">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white font-medium text-sm">
            <Clock className="w-4 h-4" />
            Final Hours • LAST 50 SEATS
          </div>

          {/* Heading */}
          <h2 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-white leading-snug">
            From <span className="heading-italic">Frustrated Dreamer</span> →{" "}
            <span className="heading-italic">Manifestation Master</span>
          </h2>

          {/* Subheading */}
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto">
            90-Minute <b>LIVE</b> Scientific Manifestation Breakthrough with <b>Ankit Neerav</b>.
            Discover the science, activate your RAS, and start attracting immediately.
          </p>

          {/* Pricing */}
          <div className="space-y-2">
            <div className="text-sm text-white/60">
              Worth <span className="line-through">₹2,499</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gild-200">
              Today Only Free
            </div>
            <div className="text-xs md:text-sm text-white/60">
              <span className="font-semibold text-white/80">IRON-CLAD GUARANTEE:</span> If the first 30 minutes
              don’t give you chills from the scientific evidence.
            </div>
          </div>

          {/* CTA — Scroll to register */}
          <div className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-4 shadow-sm">
            <button
              onClick={scrollToRegister}
              className="w-full max-w-[260px] rounded-xl bg-aura-600 text-white font-semibold px-6 py-3 shadow-md hover:bg-aura-500 focus:outline-none focus:ring-4 focus:ring-aura-300 transition"
            >
              Register Now
            </button>
          </div>

          {/* Footer note */}
          <p className="text-xs md:text-sm text-white/60">
            LIVE only • No recordings • Next Monday • 7:30 PM • Seats update every 30 seconds
          </p>
        </div>
      </div>
    </section>
  );
};
