import {
    FaEye,
    FaClock,
    FaHeart,
    FaSmile,
} from "react-icons/fa";

import StatsCard from "../components/dashboard/StatsCard";
import CameraCard from "../components/dashboard/CameraCard";
import BlinkChart from "../components/dashboard/BlinkChart";
import SummaryCard from "../components/dashboard/SummaryCard";
import RecentSessions from "../components/dashboard/RecentSessions";

function Dashboard() {
    return (
        <div className="min-h-screen bg-[#FCF9F3] p-8">

            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#A99077]">
                        Live Dashboard
                    </p>
                    <h1 className="text-4xl font-bold text-[#2A211C]">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-[#8A7060]">
                        Monitor your eye health in real time.
                    </p>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-[#5C3527]/15 bg-white px-4 py-2 text-sm font-medium text-[#5A473C] shadow-sm">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#6B7F5B]" />
                    Session active
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <StatsCard
                    title="Blink Rate"
                    value="14/min"
                    subtitle="Normal blinking"
                    icon={<FaEye />}
                    color="bg-[#5C3527]"
                />

                <StatsCard
                    title="Eye Status"
                    value="Healthy"
                    subtitle="Eyes are relaxed"
                    icon={<FaSmile />}
                    color="bg-[#6B7F5B]"
                />

                <StatsCard
                    title="Session Time"
                    value="00:18:42"
                    subtitle="Current session"
                    icon={<FaClock />}
                    color="bg-[#8A5A3B]"
                />

                <StatsCard
                    title="Health Score"
                    value="92%"
                    subtitle="Excellent"
                    icon={<FaHeart />}
                    color="bg-[#A65D45]"
                />

            </div>

            <CameraCard />
            <BlinkChart />
            <SummaryCard />
            <RecentSessions />

        </div>
    );
}

export default Dashboard;