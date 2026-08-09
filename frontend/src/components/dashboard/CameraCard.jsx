import { motion } from "framer-motion";
import { FaCamera, FaPlay, FaStop } from "react-icons/fa";

function CameraCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl border border-[#5C3527]/8 bg-white p-6 shadow-sm"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-[#2A211C]">
            Live Monitoring
          </h2>

          <p className="mt-2 text-[#8A7060]">
            Real-time blink detection using your webcam.
          </p>
        </div>

        <span className="hidden items-center gap-2 rounded-full bg-[#6B7F5B]/12 px-4 py-2 text-sm font-semibold text-[#5A6B4C] sm:flex">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#6B7F5B]" />
          Camera ready
        </span>
      </div>

      {/* Camera Placeholder */}
      <div className="flex h-[420px] items-center justify-center rounded-2xl border-2 border-dashed border-[#5C3527]/20 bg-[#FCF9F3]">
        <div className="text-center">
          <FaCamera className="mx-auto mb-4 text-6xl text-[#A99077]" />

          <h3 className="text-xl font-semibold text-[#5A473C]">
            Camera Preview
          </h3>

          <p className="mt-2 text-[#8A7060]">
            Webcam will appear here.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="flex items-center gap-2 rounded-xl bg-[#5C3527] px-6 py-3 font-semibold text-white transition hover:bg-[#4A2A1F]">
          <FaPlay />
          Start Monitoring
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-[#A65D45] px-6 py-3 font-semibold text-white transition hover:bg-[#8C4B37]">
          <FaStop />
          Stop Session
        </button>
      </div>
    </motion.div>
  );
}

export default CameraCard;