import { motion } from "framer-motion";

function StatsCard({
  title,
  value,
  subtitle,
  icon,
  color = "bg-[#5C3527]",
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.25 },
      }}
      className="relative overflow-hidden rounded-3xl border border-[#5C3527]/8 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      {/* thin accent bar, ties the card back to its icon color */}
      <span className={`absolute inset-x-0 top-0 h-1 ${color}`} />

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color} text-2xl text-white`}
        >
          {icon}
        </div>

        <span className="flex items-center gap-1.5 rounded-full bg-[#6B7F5B]/12 px-3 py-1 text-xs font-semibold text-[#5A6B4C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6B7F5B]" />
          Live
        </span>
      </div>

      {/* Content */}
      <h3 className="text-sm font-medium text-[#8A7060]">
        {title}
      </h3>

      <h2 className="mt-2 text-3xl font-bold text-[#2A211C]">
        {value}
      </h2>

      <p className="mt-2 text-sm text-[#8A7060]">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default StatsCard;