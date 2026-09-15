import { motion } from "framer-motion";
import {
  FaEye,
  FaLaptop,
  FaHeartbeat,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

function WhyNayan() {
  const benefits = [
    {
      icon: <FaEye />,
      title: "Understand Your Blinking",
      description:
        "Nayan monitors your blinking pattern and provides useful metrics such as blink count, blink rate, and inter-blink interval.",
    },
    {
      icon: <FaLaptop />,
      title: "Designed for Screen Users",
      description:
        "Long periods of screen use can affect normal blinking. Nayan helps you become more aware of your eye behavior while using a computer.",
    },
    {
      icon: <FaChartLine />,
      title: "See Your Metrics",
      description:
        "Live monitoring turns your webcam data into simple metrics that are easier to understand during a monitoring session.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Eye Health Awareness",
      description:
        "Nayan provides an awareness-oriented health score and eye status based on the measurements collected during a session.",
    },
    {
      icon: <FaClock />,
      title: "Track Sessions",
      description:
        "Every completed monitoring session can be saved so you can review your previous duration, blink count, blink rate, and health score.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacy First",
      description:
        "Nayan is designed around webcam-based monitoring without requiring unnecessary personal information for the core monitoring experience.",
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
              Why Nayan
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#2A211C] sm:text-5xl lg:text-6xl">
              Your screen should not make you forget about your eyes.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8A7060]">
              Nayan is an eye monitoring application that uses your webcam
              to observe blinking patterns and provide simple, real-time
              eye health awareness while you use your computer.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-[#5C3527] p-8 text-white sm:p-10"
          >
            <FaLaptop className="mb-6 text-4xl" />

            <h2 className="text-3xl font-bold">
              The problem
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              When people concentrate on screens, they may become less aware
              of their natural blinking behavior. Long periods of computer
              use can therefore be accompanied by eye discomfort and fatigue.
            </p>

            <p className="mt-4 leading-8 text-white/75">
              The problem is not simply spending time in front of a screen.
              It is also being unaware of what your eyes are doing during
              that time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#5C3527]/10 bg-white p-8 shadow-sm sm:p-10"
          >
            <FaEye className="mb-6 text-4xl text-[#6B7F5B]" />

            <h2 className="text-3xl font-bold text-[#2A211C]">
              The Nayan approach
            </h2>

            <p className="mt-5 leading-8 text-[#8A7060]">
              Nayan turns your webcam into a simple eye-monitoring tool.
              It analyzes facial and eye landmarks to detect blinks and
              calculate useful eye-related metrics.
            </p>

            <p className="mt-4 leading-8 text-[#8A7060]">
              Instead of giving you complicated computer-vision data,
              Nayan presents the information through a simple dashboard.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A99077]">
              Built for awareness
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#2A211C] sm:text-4xl">
              What Nayan helps you understand
            </h2>

            <p className="mt-4 leading-7 text-[#8A7060]">
              Nayan focuses on turning eye-monitoring data into information
              that is easy to understand and useful during everyday computer
              use.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-3xl border border-[#5C3527]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5C3527] text-xl text-white">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-[#2A211C]">
                  {benefit.title}
                </h3>

                <p className="mt-3 leading-7 text-[#8A7060]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#6B7F5B] px-8 py-12 text-center text-white sm:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to understand your eye habits?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Start a monitoring session and explore your blink activity
            through the Nayan dashboard.
          </p>

          <a
            href="/dashboard"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#5C3527] transition hover:bg-[#FCF9F3]"
          >
            Open Dashboard
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default WhyNayan;