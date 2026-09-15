import {
  FaEye,
  FaChartLine,
  FaDesktop,
  FaRegBell,
} from "react-icons/fa";

function SummaryCard({
  blinkCount = 0,
  blinkRate = 0,
}) {
  const summaryData = [
    {
      icon: <FaEye />,
      title: "Total blinks",
      value: blinkCount,
      color: "bg-[#5C3527]",
    },
    {
      icon: <FaChartLine />,
      title: "Average blink rate",
      value: `${blinkRate}/min`,
      color: "bg-[#8A5A3B]",
    },
    {
      icon: <FaDesktop />,
      title: "Screen time",
      value: "—",
      color: "bg-[#6B7F5B]",
    },
    {
      icon: <FaRegBell />,
      title: "Break reminders",
      value: "—",
      color: "bg-[#A65D45]",
    },
  ];

  return (
    <div className="mt-6 rounded-lg border border-[#5C3527]/12 bg-white p-4 sm:p-6">
      <h2 className="text-base font-semibold text-[#2A211C]">
        Today's summary
      </h2>

      <p className="mt-1 text-sm text-[#8A7060]">
        Overview of today's eye health activity.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {summaryData.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-3 rounded-md border border-[#5C3527]/10 p-3 transition hover:border-[#5C3527]/25"
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${item.color} text-sm text-white`}
            >
              {item.icon}
            </span>

            <div>
              <p className="text-xs text-[#8A7060]">
                {item.title}
              </p>

              <p className="text-lg font-semibold text-[#2A211C]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SummaryCard;