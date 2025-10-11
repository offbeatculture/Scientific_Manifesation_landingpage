import { Quote, Star } from "lucide-react";

// (Optional) keep these if you later render an image strip carousel
import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";

const imageTestimonials = [img1, img2, img3, img4, img5].filter(Boolean);

const textTestimonials = [
  {
    name: "Dr. Rajesh Gupta",
    location: "",
    role: "",
    content:
      "The physics evidence convinced me instantly. Started attracting clients within 48 hours.",
  },
  {
    name: "Priya Sharma",
    location: "",
    role: "",
    content:
      "I was crying during the water experiment reveal. Finally understood why nothing worked before.",
  },
  {
    name: "Amit Kumar",
    location: "",
    role: "",
    content:
      "Life changing! Finally understood how to talk in the language of the universe.",
  },
  {
    name: "Meera Patel",
    location: "",
    role: "Designer",
    content:
      "Realized I'd been unconsciously manifesting poverty. The frequency shift was immediate.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 px-4 bg-[#F8F6E8]">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-left lg:text-center mb-8 lg:mb-12">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-5xl text-[#0F2925] mb-3">
            Real <span className="heading-italic">Breakthroughs</span>
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-3xl lg:mx-auto">
            What people discovered in the 90-Minute Scientific Manifestation Breakthrough.
          </p>
        </div>

        {/* TEXT TESTIMONIALS CAROUSEL */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {textTestimonials.map((t, index) => (
              <div
                key={index}
                className="snap-center bg-cream-light rounded-xl border border-[#E9E4D6] shadow-sm p-6 w-[300px] sm:w-[320px] flex-shrink-0"
              >
                <Quote className="w-8 h-8 text-[#E9E4D6] mb-4" />
                <p className="italic text-[#312B24] leading-relaxed mb-6">
                  "{t.content}"
                </p>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#0F2925] text-[#0F2925]" />
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#E9E4D6]">
                  <div>
                    <div className="font-semibold text-[#0F2925]">
                      {t.name}
                      {t.role ? <span className="text-muted-foreground">, {t.role}</span> : null}
                    </div>
                    {t.location ? (
                      <div className="text-sm text-muted-foreground">{t.location}</div>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nav buttons (optional, decorative) */}
        <div className="flex justify-start lg:justify-center gap-3 mt-6">
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ‹
          </button>
          <button className="w-8 h-8 rounded-md bg-cream-dark flex items-center justify-center text-[#0F2925]">
            ›
          </button>
        </div>
      </div>

      {/* hide scrollbar nicely for WebKit + Firefox/Edge */}
      <style>{`
        .testimonials-scroll::-webkit-scrollbar { display: none; }
        .testimonials-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};
