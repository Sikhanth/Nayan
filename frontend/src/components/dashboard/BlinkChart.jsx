import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const data = [
  { time: "10:00", blink: 14 },
  { time: "10:05", blink: 15 },
  { time: "10:10", blink: 13 },
  { time: "10:15", blink: 16 },
  { time: "10:20", blink: 12 },
  { time: "10:25", blink: 15 },
  { time: "10:30", blink: 14 },
];

function BlinkChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl border border-[#5C3527]/8 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#2A211C]">
        Blink Analytics
      </h2>

      <p className="mt-2 text-[#8A7060]">
        Blink rate over the last 30 minutes.
      </p>

      <div className="mt-8 h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="blinkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5C3527" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#5C3527" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="4 4" stroke="#5C3527" strokeOpacity={0.1} />

            <XAxis dataKey="time" stroke="#8A7060" tick={{ fill: "#8A7060", fontSize: 12 }} />

            <YAxis stroke="#8A7060" tick={{ fill: "#8A7060", fontSize: 12 }} />

            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid rgba(92,53,39,0.15)",
                background: "#FCF9F3",
                color: "#2A211C",
              }}
            />

            <Area
              type="monotone"
              dataKey="blink"
              stroke="#5C3527"
              strokeWidth={3}
              fill="url(#blinkFill)"
              dot={{ r: 5, fill: "#5C3527", strokeWidth: 0 }}
              activeDot={{ r: 8, fill: "#8A5A3B" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default BlinkChart;