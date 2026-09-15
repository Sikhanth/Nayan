function StatsCard({
  title,
  value,
  subtitle,
  icon,
  color = "bg-[#5C3527]",
  isLive = false,
}) {
  return (
    <div className="rounded-lg border border-[#5C3527]/12 bg-white p-5 transition hover:border-[#5C3527]/25">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-md ${color} text-sm text-white`}
        >
          {icon}
        </span>

        {isLive && (
          <span className="flex items-center gap-1.5 text-xs font-medium text-[#5A6B4C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6B7F5B]" />
            Live
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xs text-[#8A7060]">
        {title}
      </h3>

      {/* Value */}
      <p className="mt-1 text-2xl font-semibold text-[#2A211C]">
        {value}
      </p>

      {/* Subtitle */}
      <p className="mt-1 text-xs text-[#8A7060]">
        {subtitle}
      </p>
    </div>
  );
}

export default StatsCard;