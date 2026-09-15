import { motion } from "framer-motion";
import {
  FaCamera,
  FaUser,
  FaEye,
  FaChartLine,
  FaDatabase,
  FaHeartbeat,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FaCamera />,
      title: "Start Your Session",
      description:
        "Log in and start a monitoring session from the Nayan dashboard. Your webcam is used as the input source for eye monitoring.",
    },
    {
      number: "02",
      icon: <FaUser />,
      title: "Face Detection",
      description:
        "Nayan processes the webcam frames and identifies the facial landmarks required for eye analysis.",
    },
    {
      number: "03",
      icon: <FaEye />,
      title: "Eye & Blink Analysis",
      description:
        "Eye landmarks are used to calculate the Eye Aspect Ratio and identify eye closures and blinks.",
    },
    {
      number: "04",
      icon: <FaChartLine />,
      title: "Analyze Blink Behavior",
      description:
        "Nayan counts actual detected blinks in each 60-second window. A window with fewer than 8 blinks is classified as a low-blink risk window.",
    },
    {
      number: "05",
      icon: <FaHeartbeat />,
      title: "Detect Sustained Low Blinking",
      description:
        "Nayan checks whether low-blink behavior continues for three consecutive 60-second windows. This helps avoid triggering an alert from a single unusual minute.",
    },
    {
      number: "06",
      icon: <FaHeartbeat />,
      title: "Break Recommendation",
      description:
        "When three consecutive low-blink windows are detected, Nayan provides a break reminder and recommends taking a 20-second break.",
    },
    {
      number: "07",
      icon: <FaDatabase />,
      title: "Save Your Session",
      description:
        "When you stop monitoring, the final session metrics are stored and become available in Recent Sessions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FCF9F3]">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#A99077]">
              How It Works
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#2A211C] sm:text-5xl lg:text-6xl">
              From webcam frames to eye health insights.
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#8A7060]">
              Nayan combines a React dashboard, FastAPI backend, computer
              vision, and database sessions to turn webcam input into
              understandable eye-monitoring information.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="relative rounded-3xl border border-[#5C3527]/10 bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C3527] text-xl text-white">
                    {step.icon}
                  </div>

                  <span className="text-3xl font-bold text-[#A99077]/40">
                    {step.number}
                  </span>
                </div>

                <h2 className="mt-7 text-xl font-bold text-[#2A211C]">
                  {step.title}
                </h2>

                <p className="mt-3 leading-7 text-[#8A7060]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Technology */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-8 shadow-sm sm:p-10">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A99077]">
            Under the hood
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#2A211C]">
            Built as a full-stack computer vision application
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-[#FCF9F3] p-6">
              <h3 className="font-bold text-[#2A211C]">
                Frontend
              </h3>

              <p className="mt-3 leading-7 text-[#8A7060]">
                React, React Router, Tailwind CSS, Framer Motion,
                Axios and Recharts power the interactive dashboard.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FCF9F3] p-6">
              <h3 className="font-bold text-[#2A211C]">
                Computer Vision
              </h3>

              <p className="mt-3 leading-7 text-[#8A7060]">
                Facial and eye landmarks are processed to detect eye
                closures, blinks and calculate eye-related metrics.
              </p>
            </div>

            <div className="rounded-2xl bg-[#FCF9F3] p-6">
              <h3 className="font-bold text-[#2A211C]">
                Backend & Database
              </h3>

              <p className="mt-3 leading-7 text-[#8A7060]">
                FastAPI handles detection and session APIs while
                PostgreSQL stores completed monitoring sessions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#5C3527] px-8 py-12 text-center text-white sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            See Nayan in action
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/75">
            Start a session and watch your eye-monitoring metrics update
            in real time.
          </p>

          <a
            href="/dashboard"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#5C3527] transition hover:bg-[#FCF9F3]"
          >
            Go to Dashboard
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HowItWorks;