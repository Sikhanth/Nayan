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

const HEX_CLIP = "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)";
const HEX_W = 172;
const HEX_GAP = 20;

function Features() {
  const [active, setActive] = useState(null);

  const topRow = features.slice(0, 3);
  const bottomRow = features.slice(3, 6);

  const Hex = ({ feature, index }) => {
    const Icon = feature.icon;
    const isActive = active === index;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="relative"
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(null)}
        style={{ width: HEX_W }}
      >
        <div
          style={{ clipPath: HEX_CLIP, height: HEX_W }}
          className={`flex w-full flex-col items-center justify-center gap-2 px-7 transition-colors duration-300 ${
            isActive ? "bg-[#5C3527]" : "bg-[#EFE3D3]"
          }`}
        >
          <Icon
            className={`text-3xl transition-colors duration-300 ${
              isActive ? "text-[#FCF9F3]" : "text-[#8A5A3B]"
            }`}
          />
          <h3
            className={`text-center text-sm font-semibold leading-tight transition-colors duration-300 ${
              isActive ? "text-[#FCF9F3]" : "text-[#371C10]"
            }`}
          >
            {feature.title}
          </h3>

          <span
            className={`absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-[#A99077] transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div
          className={`pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-56 -translate-x-1/2 rounded-2xl border border-[#5C3527]/15 bg-[#FCF9F3] p-4 text-center text-sm leading-6 text-[#5A473C] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-all duration-300 ${
            isActive ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          {feature.description}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="features" className="relative w-full bg-[#2A211C] py-28">
      {/* Top fade — bridges the hero video's dark edge into this
          section's flat background so the seam disappears */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        
      />
      <div className="relative mx-auto max-w-7xl px-6">

        {/* Eyebrow + heading on the dark page, outside the frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#A99077]">
            Features
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Six facets, one compound eye
          </h2>
        </motion.div>

        {/* Thick brown frame wrapping a cream inner panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-4xl bg-[#5C3527] p-3 md:p-4"
        >
          <div className="rounded-3xl bg-[#FCF9F3] px-6 py-16 md:px-10 md:py-20">

            <p className="mb-16 text-center text-sm text-[#8A7060]">
              Hover a facet to see what it watches for.
            </p>

            <div className="flex flex-col items-center pb-4">
              <div className="mx-auto flex justify-center" style={{ gap: HEX_GAP }}>
                {topRow.map((feature, i) => (
                  <Hex key={feature.title} feature={feature} index={i} />
                ))}
              </div>

              <div
                className="mx-auto mt-6 hidden justify-center sm:flex"
                style={{
                  gap: HEX_GAP,
                  marginTop: -(HEX_W * 0.25),
                  transform: `translateX(${(HEX_W + HEX_GAP) / 2}px)`,
                }}
              >
                {bottomRow.map((feature, i) => (
                  <Hex key={feature.title} feature={feature} index={i + 3} />
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-5 sm:hidden">
                {bottomRow.map((feature, i) => (
                  <Hex key={`m-${feature.title}`} feature={feature} index={i + 3} />
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