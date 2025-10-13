import { XCircle, CheckCircle } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useRef, useState } from "react";
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

  // --- Mobile scroll state (for dots) ---
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    setActive(idx);
  };

  return (
    <section className="px-4 md:px-6 py-14 md:py-20 bg-[#F8F6E8]">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading-serif text-2xl md:text-4xl lg:text-5xl text-[#312B24]">
            From <span className="heading-italic">Struggler</span> →{" "}
            <span className="heading-italic">Scientific Manifestor</span>
          </h2>
          <p className="mt-3 text-[#312B24]/70 text-base md:text-lg max-w-2xl mx-auto">
            See the exact shift this 90-minute session creates—clear, measurable, and immediate.
          </p>
        </div>

        {/* ---------- MOBILE: swipeable classy cards ---------- */}
        <div className="md:hidden">
          <div
            ref={scrollerRef}
            onScroll={handleScroll}
            className="relative flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 -mx-4 px-4 pb-2"
          >
            {/* BEFORE slide */}
            <motion.div
              className="snap-start w-full shrink-0 rounded-2xl overflow-hidden shadow-xl min-h-[440px] relative"
              style={{
                backgroundImage: `url(${sadimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={0}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              {/* badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#FEE2E2]/95 text-[#991B1B] px-3 py-1 text-xs font-semibold">
                <XCircle className="w-4 h-4" />
                BEFORE
              </div>
              {/* content */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <ul className="space-y-3 text-white text-[15px] leading-snug">
                  {beforeItems.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-red-400" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AFTER slide */}
            <motion.div
              className="snap-start w-full shrink-0 rounded-2xl overflow-hidden shadow-xl min-h-[440px] relative"
              style={{
                backgroundImage: `url(${happyimage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              custom={1}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#DCFCE7]/95 text-[#166534] px-3 py-1 text-xs font-semibold">
                <CheckCircle className="w-4 h-4" />
                AFTER
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <ul className="space-y-3 text-white text-[15px] leading-snug">
                  {afterItems.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, duration: 0.35 }}
                      viewport={{ once: true }}
                    >
                      <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {[0, 1].map((i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  const el = scrollerRef.current;
                  if (!el) return;
                  el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                }}
                className={`h-2 rounded-full transition-all ${
                  active === i ? "w-6 bg-[#2B1844]" : "w-2 bg-[#2B1844]/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ---------- DESKTOP/TABLET: elegant 2-column ---------- */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 md:gap-10">
          {/* BEFORE */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[460px] flex flex-col"
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
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 p-6 flex flex-col justify-start h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FEE2E2]/90 text-[#991B1B] px-3 py-1 text-sm font-semibold mb-4">
                <XCircle className="w-4 h-4" />
                BEFORE
              </div>
              <ul className="space-y-3 text-white text-base font-medium">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
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
            className="relative rounded-2xl overflow-hidden shadow-xl min-h-[460px] flex flex-col"
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
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6 flex flex-col justify-start h-full">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#DCFCE7]/95 text-[#166534] px-3 py-1 text-sm font-semibold mb-4">
                <CheckCircle className="w-4 h-4" />
                AFTER
              </div>
              <ul className="space-y-3 text-white text-base font-medium">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
