import { useEffect, useState } from "react";
import { getSessions } from "../../services/sessionService";

function RecentSessions({ refreshKey }) {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ---------------------------------------------------------
  // LOAD SESSIONS
  // ---------------------------------------------------------

  const loadSessions = async () => {
    try {
      setLoading(true);

      const data = await getSessions();

      console.log("Sessions:", data);

      setSessions(data);
      setError("");
    } catch (error) {
      console.error(
        "Failed to load sessions:",
        error
      );

      setError(
        "Unable to load recent sessions."
      );
    } finally {
      setLoading(false);
    }
  };

  // ---------------------------------------------------------
  // LOAD ON MOUNT + AFTER SESSION COMPLETION
  // ---------------------------------------------------------

  useEffect(() => {
    loadSessions();
  }, [refreshKey]);

  // ---------------------------------------------------------
  // FORMAT DURATION
  // ---------------------------------------------------------

  const formatDuration = (seconds) => {
    if (!seconds || seconds <= 0) {
      return "0s";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    if (minutes === 0) {
      return `${remainingSeconds}s`;
    }

    if (remainingSeconds === 0) {
      return `${minutes}m`;
    }

    return `${minutes}m ${remainingSeconds}s`;
  };

  // ---------------------------------------------------------
  // HEALTH STATUS STYLE
  // ---------------------------------------------------------

  const getHealthStatusStyle = (status) => {
    if (status === "Healthy") {
      return "bg-[#6B7F5B]/12 text-[#5A6B4C]";
    }

    if (status === "Fatigue Risk") {
      return "bg-[#A65D45]/12 text-[#8C4B37]";
    }

    return "bg-[#A99077]/12 text-[#6F5A4A]";
  };

  // ---------------------------------------------------------
  // UI
  // ---------------------------------------------------------

  return (
    <div className="mt-6 rounded-lg border border-[#5C3527]/12 bg-white p-4 sm:p-6">

      {/* Header */}

      <div className="mb-5">
        <h2 className="text-base font-semibold text-[#2A211C]">
          Recent sessions
        </h2>

        <p className="mt-1 text-sm text-[#8A7060]">
          Your latest eye monitoring sessions.
        </p>
      </div>


      {/* Loading */}

      {loading && (
        <div className="py-8 text-center">
          <p className="text-sm text-[#8A7060]">
            Loading sessions...
          </p>
        </div>
      )}


      {/* Error */}

      {!loading && error && (
        <div className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}


      {/* No Sessions */}

      {!loading &&
        !error &&
        sessions.length === 0 && (
          <div className="py-8 text-center">
            <p className="text-sm text-[#8A7060]">
              No monitoring sessions yet.
            </p>

            <p className="mt-1 text-sm text-[#A99077]">
              Start your first monitoring session to
              see your history here.
            </p>
          </div>
        )}


      {/* Sessions */}

      {!loading &&
        !error &&
        sessions.length > 0 && (
          <div className="space-y-3">

            {sessions.map((session) => (
              <div
                key={session.id}
                className="rounded-md border border-[#5C3527]/10 bg-[#FCF9F3] p-4 transition hover:border-[#5C3527]/25 sm:p-5"
              >

                {/* Session Header */}

                <div className="flex flex-wrap items-center justify-between gap-3">

                  {/* Session Information */}

                  <div>
                    <p className="text-sm font-semibold text-[#2A211C]">
                      Session #{session.id}
                    </p>

                    <p className="mt-0.5 text-xs text-[#8A7060]">
                      {new Date(
                        session.started_at
                      ).toLocaleString()}
                    </p>
                  </div>


                  {/* Health Status */}

                  <div
                    className={`rounded-md px-3 py-1 text-xs font-semibold ${getHealthStatusStyle(
                      session.health_status
                    )}`}
                  >
                    {session.health_status || "Unknown"}
                  </div>

                </div>


                {/* Metrics */}

                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">

                  {/* Duration */}

                  <div>
                    <p className="text-xs text-[#8A7060]">
                      Duration
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[#2A211C]">
                      {formatDuration(
                        session.duration_seconds
                      )}
                    </p>
                  </div>


                  {/* Blinks */}

                  <div>
                    <p className="text-xs text-[#8A7060]">
                      Blinks
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[#2A211C]">
                      {session.total_blinks ?? 0}
                    </p>
                  </div>


                  {/* Blink Rate */}

                  <div>
                    <p className="text-xs text-[#8A7060]">
                      Blink rate
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[#2A211C]">
                      {session.average_blink_rate ?? 0}/min
                    </p>
                  </div>


                  {/* Health Score */}

                  <div>
                    <p className="text-xs text-[#8A7060]">
                      Health score
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-[#2A211C]">
                      {session.health_score ?? 0}/100
                    </p>
                  </div>

                </div>


                {/* Additional Information */}

                <div className="mt-3 border-t border-[#5C3527]/10 pt-3">

                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-[#8A7060]">

                    <span>
                      Average IBI:{" "}
                      <strong className="text-[#5A473C]">
                        {session.average_ibi ?? 0}
                      </strong>
                    </span>

                    <span>
                      Status:{" "}
                      <strong className="text-[#5A473C]">
                        {session.health_status || "Unknown"}
                      </strong>
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

    </div>
  );
}

export default RecentSessions;