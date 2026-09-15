import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineEye,
  HiOutlineChartBar,
  HiOutlineBellAlert,
  HiOutlineComputerDesktop,
  HiOutlineDocumentChartBar,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
const features = [
  {
    icon: HiOutlineEye,
    title: "Blink Detection",
    description:
      "Monitor your eye blinks in real time using AI-powered computer vision for healthier screen habits.",
  },
  {
    icon: HiOutlineChartBar,
    title: "Live Analytics",
    description:
      "Track blink rate, blink intervals, and eye activity with easy-to-understand visual insights.",
  },
  {
    icon: HiOutlineBellAlert,
    title: "Smart Reminders",
    description:
      "Receive timely reminders to blink more often and take healthy breaks from prolonged screen usage.",
  },
  {
    icon: HiOutlineComputerDesktop,
    title: "Screen Monitoring",
    description:
      "Measure your continuous screen usage and identify habits that may contribute to digital eye strain.",
  },
  {
    icon: HiOutlineDocumentChartBar,
    title: "Health Reports",
    description:
      "Review daily and weekly summaries to better understand your eye health over time.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Privacy First",
    description:
      "Your webcam data stays on your device whenever possible, helping keep your personal information private.",
  },
];
const HEX_CLIP =
  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const HEX_W = 172;
const HEX_GAP = 20;
function Features() {
  const [active, setActive] = useState(null);
  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3, 6);
  const Hex = ({ feature, index }) => {
    const Icon = feature.icon;
    const isActive = active === index;
    const toggleFeature = () => {
      setActive(isActive ? null : index);
    };
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="relative w-[132px] shrink-0 sm:w-[150px] md:w-[172px]"
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}
        onClick={toggleFeature}
      >
        <button
          type="button"
          aria-expanded={isActive}
          aria-label={`${feature.title}: ${feature.description}`}
          className={`flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 px-5 text-center transition-colors duration-300 sm:px-7 ${
            isActive ? "bg-[#5C3527]" : "bg-[#EFE3D3]"
          }`}
          style={{ clipPath: HEX_CLIP }}
        >
          <Icon
            className={`text-2xl transition-colors duration-300 sm:text-3xl ${
              isActive ? "text-[#FCF9F3]" : "text-[#8A5A3B]"
            }`}
          />
          <span
            className={`text-center text-xs font-semibold leading-tight transition-colors duration-300 sm:text-sm ${
              isActive ? "text-[#FCF9F3]" : "text-[#371C10]"
            }`}
          >
            {feature.title}
          </span>
          <span
            className={`absolute right-7 top-7 h-1.5 w-1.5 rounded-full bg-[#A99077] transition-opacity duration-300 sm:right-8 sm:top-8 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </button>
        <div
          className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-2xl border border-[#5C3527]/15 bg-[#FCF9F3] p-4 text-center text-sm leading-6 text-[#5A473C] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 sm:w-56 ${
            isActive
              ? "translate-y-0 opacity-100"
              : "-translate-y-2 opacity-0"
          }`}
        >
          {feature.description}
        </div>
      </motion.div>
    );
  };
  return (
    <section id="features" className="relative w-full bg-[#2A211C] py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#A99077] sm:text-sm sm:tracking-[0.35em]">
            Features
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Six facets, one compound eye
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[1.75rem] bg-[#5C3527] p-2.5 sm:rounded-4xl sm:p-3 md:p-4"
        >
          <div className="flex min-h-full flex-col justify-center rounded-[1.35rem] bg-[#FCF9F3] px-4 py-12 sm:rounded-3xl sm:px-6 sm:py-16 md:px-10 md:py-20 lg:min-h-[588px]">
            <p className="mb-12 text-center text-xs leading-6 text-[#8A7060] sm:mb-16 sm:text-sm">
              Tap a facet to see what it watches for.
            </p>
            {/* Mobile layout */}
            <div className="grid grid-cols-2 justify-items-center gap-x-3 gap-y-7 sm:hidden">
              {features.map((feature, index) => (
                <Hex key={feature.title} feature={feature} index={index} />
              ))}
            </div>
            {/* Tablet and desktop layout */}
            <div className="hidden flex-col items-center pb-4 sm:flex">
              <div
                className="mx-auto flex justify-center"
                style={{ gap: HEX_GAP }}
              >
                {topRow.map((feature, index) => (
                  <Hex key={feature.title} feature={feature} index={index} />
                ))}
              </div>
              <div
                className="mx-auto flex justify-center"
                style={{
                  gap: HEX_GAP,
                  marginTop: -(HEX_W * 0.25),
                  transform: `translateX(${(HEX_W + HEX_GAP) / 2}px)`,
                }}
              >
                {bottomRow.map((feature, index) => (
                  <Hex
                    key={feature.title}
                    feature={feature}
                    index={index + 3}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Features;