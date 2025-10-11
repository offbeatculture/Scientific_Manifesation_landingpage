import { XCircle, CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import sadimage from "@/assets/challenge.jpg";
import happyimage from "@/assets/challenge2.jpg";

export const TransformationSection = () => {
  const beforeItems = [
    "Begging the universe with no response",
    "Randomly attracting mediocre results",
    "Saying “I don’t have money” (blocking flow)",
    "Feeling separate from universal power",
    "Manifesting by pure accident only",
  ];

  const afterItems = [
    "Speaking the universe’s actual language",
    "STOP blocking wealth attraction",
    "Vibrating wealth, health, love frequencies",
    "KNOWING you are cosmic consciousness",
    "100% clarity on the science behind manifestation",
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  };

  return (
    <section className="px-4 md:px-6 py-14 md:py-20 bg-[#F8F6E8]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-[#312B24]">
            From <span className="heading-italic">Struggler</span> → <span className="heading-italic">Scientific Manifestor</span>
          </h2>
          <p className="mt-3 text-[#312B24]/70 text-base md:text-lg max-w-2xl mx-auto">
            See the exact shift this 90-minute session creates—clear, measurable, and immediate.
          </p>
        </div>

        {/* Two aligned columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {/* BEFORE */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[520px] flex flex-col"
            style={{
              backgroundImage: `url(${sadimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Content */}
            <div className="relative z-10 p-5 md:p-8 flex flex-col justify-start h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEE2E2]/90 text-[#991B1B] px-3 py-1 text-xs md:text-sm font-semibold mb-4">
                <XCircle className="w-4 h-4" />
                BEFORE
              </div>
              <ul className="space-y-3 md:space-y-4 text-white text-sm md:text-lg font-medium">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* AFTER */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[400px] md:min-h-[520px] flex flex-col"
            style={{
              backgroundImage: `url(${happyimage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.3 }}
            custom={1}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 p-5 md:p-8 flex flex-col justify-start h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7]/95 text-[#166534] px-3 py-1 text-xs md:text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" />
                AFTER
              </div>
              <ul className="space-y-3 md:space-y-4 text-white text-sm md:text-lg font-medium">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
