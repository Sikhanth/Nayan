import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Nayan?",
      answer:
        "Nayan is a webcam-based eye monitoring application that analyzes blinking behavior and provides metrics such as blink count, blink rate, Eye Aspect Ratio, inter-blink interval, eye status, fatigue level, and a health score.",
    },
    {
      question: "Does Nayan need a webcam?",
      answer:
        "Yes. Nayan uses your computer's webcam as the input source for eye monitoring. You need to grant browser camera permission before starting a monitoring session.",
    },
    {
      question: "Does Nayan continuously record my camera?",
      answer:
        "Nayan uses webcam frames for the monitoring process. The application is designed around processing frames for eye analysis rather than providing a general-purpose video recording feature.",
    },
    {
      question: "What does Nayan detect?",
      answer:
        "Nayan detects facial and eye landmarks and uses them to identify eye closures and blinks. It then calculates metrics including blink count, blink rate, Eye Aspect Ratio and inter-blink interval.",
    },
    {
      question: "What is EAR?",
      answer:
        "EAR stands for Eye Aspect Ratio. It is a numerical measurement derived from eye landmarks that helps describe how open or closed the eye appears.",
    },
    {
      question: "What does the health score mean?",
      answer:
        "The health score is an application-level indicator generated from the monitoring metrics. It is intended for eye health awareness and should not be treated as a medical diagnosis.",
    },
    {
      question: "Why do I need to log in?",
      answer:
        "Nayan uses authentication to protect session-related APIs and associate saved monitoring sessions with the authenticated user.",
    },
    {
      question: "Are my monitoring sessions saved?",
      answer:
        "When you complete a monitoring session, Nayan stores the session information so that you can view recent sessions and review metrics such as duration, blink count, blink rate and health score.",
    },
    {
      question: "Does Nayan require WebSockets?",
      answer:
        "No. The current Nayan architecture uses repeated HTTP requests for webcam frame analysis. A WebSocket connection is not required for the current monitoring workflow.",
    },
    {
      question: "Is Nayan a medical device?",
      answer:
        "No. Nayan is an eye health awareness and monitoring project. Its results should not be used to diagnose or treat a medical condition.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <div className="min-h-screen bg-[#FCF9F3]">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pb-16 pt-24">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A99077]">
              FAQ
            </p>

            <h1 className="mt-4 text-4xl font-bold text-[#2A211C] sm:text-5xl">
              Questions about Nayan?
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#8A7060]">
              Here are answers to common questions about monitoring,
              technology, sessions and privacy.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FAQ List */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl space-y-4">

          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-[#5C3527]/10 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-[#2A211C]">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FCF9F3] text-sm text-[#5C3527]">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-[#5C3527]/10 px-6 pb-6 pt-5 leading-7 text-[#8A7060]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#6B7F5B] px-8 py-12 text-center text-white">

          <h2 className="text-3xl font-bold">
            Still want to explore Nayan?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-white/80">
            Try the dashboard and see how webcam-based eye monitoring
            works in practice.
          </p>

          <a
            href="/dashboard"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3 font-semibold text-[#5C3527] transition hover:bg-[#FCF9F3]"
          >
            Try Nayan
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FAQ;