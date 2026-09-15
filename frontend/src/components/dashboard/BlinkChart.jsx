import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function BlinkChart({ data }) {
  return (
    <div className="mt-6 rounded-lg border border-[#5C3527]/12 bg-white p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="text-base font-semibold text-[#2A211C]">
          Blink analytics
        </h2>

        <p className="text-sm text-[#8A7060]">
          This session
        </p>
      </div>

      <div className="mt-6 h-80">
        {data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-[#8A7060]">
            Blink data will appear here when a blink is detected.
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="blinkFill"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#5C3527"
                    stopOpacity={0.18}
                  />

                  <stop
                    offset="100%"
                    stopColor="#5C3527"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#5C3527"
                strokeOpacity={0.1}
                vertical={false}
              />

              <XAxis
                dataKey="time"
                stroke="#8A7060"
                tick={{
                  fill: "#8A7060",
                  fontSize: 12,
                }}
                tickLine={false}
                axisLine={{ stroke: "#5C3527", strokeOpacity: 0.15 }}
              />

              <YAxis
                stroke="#8A7060"
                allowDecimals={false}
                tick={{
                  fill: "#8A7060",
                  fontSize: 12,
                }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 6,
                  border: "1px solid rgba(92,53,39,0.15)",
                  background: "#FCF9F3",
                  color: "#2A211C",
                  fontSize: 13,
                }}
              />

              <Area
                type="monotone"
                dataKey="blink"
                stroke="#5C3527"
                strokeWidth={2}
                fill="url(#blinkFill)"
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "#5C3527",
                  strokeWidth: 0,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
}

export default BlinkChart;