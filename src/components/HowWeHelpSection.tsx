import {
  FlaskConical,
  Brain,
  Droplets,
  Globe,
  Languages,
} from "lucide-react";
import { motion, type Variants, type Transition } from "framer-motion";
import { useEffect } from "react";

/* Smooth scroll to register form */
function scrollToRegister() {
  const el = document.getElementById("register");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const solutions = [
  {
    icon: FlaskConical,
    title: "See the Science in Action",
    description:
      "Mind-blowing experiments that demystify manifestation—so you stop guessing and start knowing.",
  },
  {
    icon: Brain,
    title: "Activate Your Brain’s RAS",
    description:
      "Turn on the Reticular Activating System—the filter that pulls aligned people, ideas, and opportunities to you.",
  },
  {
    icon: Droplets,
    title: "Your Emotions Program Matter",
    description:
      "Discover how emotion changes structure (water-test reveal) and why feeling—not wording—drives results.",
  },
  {
    icon: Globe,
    title: "Experience Global Consciousness",
    description:
      "See how collective emotion influences real-world systems—and plug into a field bigger than ‘just you’.",
  },
  {
    icon: Languages,
    title: "Speak the Universe’s Only Language",
    description:
      "Ditch empty affirmations. Learn the precise signal the universe responds to—every single time.",
  },
];

const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 22,
  mass: 0.6,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, rotateX: 8, y: 18, transition: spring },
  show: { opacity: 1, rotateX: 0, y: 0, transition: spring },
};

export const HowWeHelpSection = () => {
  return (
    <section className="py-12 lg:py-16 px-4 md:px-6 bg-[#F8F6E8]">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-left lg:text-center mb-8 lg:mb-10">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-4xl text-[#2B1844] mb-2 font-bold">
            What Happens in This <span className="heading-italic">90-Minute</span> Session
          </h2>
          <p className="text-sm md:text-base text-[#2B1844]/80 max-w-2xl lg:mx-auto">
            Ankit walks you through the science behind manifestation—so you can start attracting immediately.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left lg:text-center">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                className="p-5 md:p-6 rounded-xl bg-gradient-to-br from-aura-700 via-aura-600 to-aura-500 text-white shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.35 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Icon className="w-7 h-7 text-[#FDE68A] mb-3 mx-0 lg:mx-auto" />
                <h3 className="text-base md:text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm md:text-base text-[#EDE9FE] leading-snug">{s.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="text-left lg:text-center mt-8">
          <p className="text-sm md:text-lg text-[#2B1844] font-semibold">
            In one session, shift from{" "}
            <span className="italic">confused struggler → scientific manifestor.</span>
          </p>
        </div>

        {/* Separator */}
        <div className="mt-6 mb-6 h-px w-full bg-[#E9E4D6]" />

        {/* CTA → Scroll to register */}
        <div className="text-center">
          <button
            onClick={scrollToRegister}
            className="inline-block rounded-xl bg-aura-700 text-white font-semibold px-6 py-3 shadow-md hover:bg-aura-800 focus:outline-none focus:ring-4 focus:ring-aura-200 transition"
          >
            Register Now
          </button>
          <p className="mt-3 text-xs text-[#312B24]/70">
            Secure • Instant confirmation • Today Only Free
          </p>
        </div>
      </div>
    </section>
  );
};
