import { XCircle, Eye, Frown, Hourglass, BatteryLow } from "lucide-react";

const struggles = [
  {
    icon: XCircle,
    title: "Constant Rejection by the Universe",
    description:
      "You ask, pray, visualize… yet it feels like the universe isn’t listening at all.",
  },
  {
    icon: Eye,
    title: "Watching Others Get What You Want",
    description:
      "Colleagues get promoted, friends find love—you’re still stuck, like they got a secret manual you didn’t.",
  },
  {
    icon: Frown,
    title: "Feeling Like a Cosmic Joke",
    description:
      "Maybe you’re just not ‘meant’ to have it. Maybe the universe has favorites. That thought hurts.",
  },
  {
    icon: Hourglass,
    title: "Wasting Years on Failed Methods",
    description:
      "Vision boards gather dust. Endless affirmations and meditations—no real change to show for it.",
  },
  {
    icon: BatteryLow,
    title: "Affirmation Burnout & Drained Energy",
    description:
      "You’ve tried to stay positive, but it’s exhausting when results don’t match your effort.",
  },
];

export const StrugglesSection = () => {
  return (
    <section className="py-2 lg:py-16 px-4 bg-[#F8F6E8]">
      <div className="w-full max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-left lg:text-center mb-8 lg:mb-10">
          <h2 className="heading-serif text-xl md:text-3xl lg:text-4xl text-[#312B24] mb-2">
            The <span className="heading-italic">Painful Truth</span> About Your Dreams
          </h2>
          <p className="text-sm md:text-base text-[#312B24]/70 max-w-2xl mx-auto">
            Right now, your biggest dreams feel impossible.{" "}
            <span className="font-semibold">And that’s not your fault.</span>
          </p>
        </div>

        {/* List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 text-left lg:text-center">
          {struggles.map((s, i) => (
            <div
              key={i}
              className="flex items-start lg:items-center gap-3 py-5 border-b border-[#E9E4D6] md:pr-4"
            >
              {/* Icon */}
              <s.icon className="w-6 h-6 shrink-0 text-[#175B53] stroke-[1.6] mx-0 lg:mx-auto" />

              {/* Text block */}
              <div className="lg:mx-auto">
                <h3 className="heading-serif text-base md:text-lg text-[#312B24] mb-1">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-[#312B24]/70 leading-snug">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tiny reassurance */}
        <p className="mt-6 text-center text-xs md:text-sm text-[#312B24]/60">
          You’re about to discover <span className="font-semibold">why</span> this has been happening—and how to fix it with science.
        </p>
      </div>
    </section>
  );
};
