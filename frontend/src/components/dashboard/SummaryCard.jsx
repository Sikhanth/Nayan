import { motion } from "framer-motion";
import {
  FaEye,
  FaChartLine,
  FaDesktop,
  FaCoffee,
} from "react-icons/fa";

const summaryData = [
  {
    icon: <FaEye />,
    title: "Total Blinks",
    value: "856",
    color: "bg-[#5C3527]",
  },
  {
    icon: <FaChartLine />,
    title: "Average Blink Rate",
    value: "14/min",
    color: "bg-[#8A5A3B]",
  },
  {
    icon: <FaDesktop />,
    title: "Screen Time",
    value: "3h 42m",
    color: "bg-[#6B7F5B]",
  },
  {
    icon: <FaCoffee />,
    title: "Break Reminders",
    value: "8",
    color: "bg-[#A65D45]",
  },
];

function SummaryCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl border border-[#5C3527]/8 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#2A211C]">
        Today's Summary
      </h2>

      <p className="mt-2 text-[#8A7060]">
        Overview of today's eye health activity.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {summaryData.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-4 rounded-2xl border border-[#5C3527]/10 p-4 transition hover:shadow-md"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-xl text-white`}
            >
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-[#8A7060]">
                {item.title}
              </p>

              <h3 className="text-xl font-bold text-[#2A211C]">
                {item.value}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default SummaryCard;