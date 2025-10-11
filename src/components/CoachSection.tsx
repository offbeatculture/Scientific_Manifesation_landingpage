import {
  Activity,
  Users,
  Trophy,
  BadgeCheck,
} from "lucide-react";
import coachImage from "@/assets/Coach1.avif"; // TODO: replace with Ankit image when ready
import certificate1 from "@/assets/Certificate.jpeg"; // optional: swap to Ankit’s certificate

export const CoachSection = () => {
  return (
    <section className="px-4 py-2 lg:py-20 bg-[#F8F6E8]">
      {/* light top separator */}
      <div className="mx-auto max-w-6xl h-px bg-[#E9E4D6] mb-10" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* ===== LEFT: Photo + awards + CERTIFICATE ===== */}
        <div className="order-2 lg:order-1">
          <div className="relative max-w-md mx-auto w-full">
            {/* Coach image (taller on mobile) */}
            <div className="rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.12)] h-[420px] sm:h-[480px] lg:h-auto lg:aspect-square">
              <img
                src={coachImage}
                alt="Ankit Neerav — Life Coach & Scientific Manifestation Expert"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Awards — one line; wraps on small screens */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-[#0F2925] font-bold">
              <span className="inline-flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#175B53]" />
                Impact Award — Robbins-Madanes Institute
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[#175B53]" />
                Unicorn Coach ’23 • Unicorn X ’24
              </span>
            </div>

            {/* Certificate block (optional) */}
            {/* <div className="mt-4">
              <img
                src={certificate1}
                alt="Certification"
                className="w-full max-w-sm rounded-xl border border-[#E9E4D6]"
              />
            </div> */}
          </div>
        </div>

        {/* ===== RIGHT: Content ===== */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h2 className="heading-serif text-lg md:text-3xl text-[#312B24]">
              Meet Your <span className="heading-italic">Scientific Guide</span>
            </h2>
            <p className="mt-2 text-xl md:text-3xl font-bold text-[#312B24]">
              Ankit Neerav
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                India’s #1 Scientific Manifestation Expert
              </span>
              <span className="inline-flex items-center rounded-full bg-[#0F2925] text-white text-xs md:text-sm px-3 py-1">
                From Engineering Skeptic → Manifestation Master
              </span>
            </div>

            <p className="mt-4 text-[#312B24]/80 md:text-lg leading-relaxed">
              As an IT engineer, Ankit doubted manifestation—until evidence changed
              everything. Since then, he’s helped{" "}
              <span className="font-semibold">1,000,000+</span> people turn doubt into
              scientific certainty using real experiments, neuroscience, and
              practical frameworks you can apply immediately.
            </p>
          </div>

          {/* Creds/Stats grid — aura-colored cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-aura-700 via-aura-600 to-aura-500 text-white shadow-[0_8px_24px_rgba(141,62,242,0.25)]">
              <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-gild-200 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Impact Awardee — Robbins-Madanes Institute
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-aura-700 via-aura-600 to-aura-500 text-white shadow-[0_8px_24px_rgba(141,62,242,0.25)]">
              <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-gild-200 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Unicorn Coach ’23 • Unicorn X ’24
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-aura-700 via-aura-600 to-aura-500 text-white shadow-[0_8px_24px_rgba(141,62,242,0.25)]">
              <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-gild-200 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                Generated ₹50+ Crore in Business Revenue
              </p>
            </div>

            <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-aura-700 via-aura-600 to-aura-500 text-white shadow-[0_8px_24px_rgba(141,62,242,0.25)]">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gild-200 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-snug">
                1,000,000+ Students Enrolled in Trainings
              </p>
            </div>
          </div>

          {/* Bonus line about investment in learning */}
          <p className="text-[#312B24]/75 text-sm sm:text-base">
            “I spent <span className="font-semibold">₹96 lakhs</span> learning from the
            world’s top coaches—so you don’t have to.”
          </p>
        </div>
      </div>

      {/* bottom separator */}
      <div className="mx-auto max-w-6xl h-px bg-[#E9E4D6] mt-10" />
    </section>
  );
};
