import { motion } from "framer-motion";

const sessions = [
  {
    date: "Today",
    duration: "25 min",
    blinkRate: "14/min",
    status: "Healthy",
  },
  {
    date: "Yesterday",
    duration: "1h 12m",
    blinkRate: "11/min",
    status: "Warning",
  },
  {
    date: "Monday",
    duration: "42 min",
    blinkRate: "15/min",
    status: "Healthy",
  },
  {
    date: "Sunday",
    duration: "30 min",
    blinkRate: "13/min",
    status: "Normal",
  },
];

function RecentSessions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 rounded-3xl border border-[#5C3527]/8 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-[#2A211C]">
        Recent Sessions
      </h2>

      <p className="mt-2 text-[#8A7060]">
        Your latest monitoring sessions.
      </p>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#5C3527]/10 text-[#8A7060]">
              <th className="pb-4 font-medium">Date</th>
              <th className="pb-4 font-medium">Duration</th>
              <th className="pb-4 font-medium">Blink Rate</th>
              <th className="pb-4 font-medium">Status</th>
            </tr>
          </thead>

          <tbody>
            {sessions.map((session) => (
              <tr
                key={`${session.date}-${session.duration}`}
                className="border-b border-[#5C3527]/8 text-[#2A211C] last:border-none hover:bg-[#FCF9F3]"
              >
                <td className="py-4">{session.date}</td>
                <td>{session.duration}</td>
                <td>{session.blinkRate}</td>
                <td>
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${
                      session.status === "Healthy"
                        ? "bg-[#6B7F5B]/15 text-[#4E5E42]"
                        : session.status === "Warning"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-[#A99077]/20 text-[#5C3527]"
                    }`}
                  >
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default RecentSessions;