import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
function Contact() {
  const [focused, setFocused] = useState(false);
  return (
    <section id="contact" className="bg-[#2A211C] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#A99077] sm:mb-5 sm:text-sm sm:tracking-[0.4em]">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Got something in{" "}
            <span className="italic text-[#A99077]">focus?</span> Let&apos;s
            talk.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-[1.75rem] bg-[#5C3527] p-2.5 sm:rounded-4xl sm:p-3 md:p-4"
        >
          <div className="grid overflow-hidden rounded-[1.35rem] bg-[#FCF9F3] lg:grid-cols-2 lg:rounded-3xl">
            {/* Left — contact information */}
            <div className="p-6 sm:p-10 md:p-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7060]">
                Let&apos;s connect
              </p>
              <p className="max-w-sm text-sm leading-7 text-[#5A473C] sm:text-base sm:leading-8">
                Feel free to reach out if you have any questions about Nayan,
                collaboration opportunities, or just want to say hello.
              </p>
              <div className="mt-8 space-y-1 border-t border-[#5C3527]/15 pt-6 sm:mt-10 sm:pt-8">
                <a
                  href="mailto:yourmail@example.com"
                  className="group flex min-h-16 items-center justify-between gap-3 border-b border-[#5C3527]/12 py-4 transition"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <HiOutlineEnvelope className="shrink-0 text-xl text-[#8A5A3B]" />
                    <span className="min-w-0">
                      <span className="block text-xs text-[#8A7060]">
                        Email
                      </span>
                      <span className="block break-all text-sm text-[#371C10] sm:text-base">
                        sikhanthsv@gmail.com
                      </span>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="shrink-0 text-lg text-[#8A5A3B] opacity-100 transition lg:opacity-0 lg:group-hover:opacity-100" />
                </a>
                <a
                  href="tel:+918590636162"
                  className="group flex min-h-16 items-center justify-between gap-3 border-b border-[#5C3527]/12 py-4 transition"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <HiOutlinePhone className="shrink-0 text-xl text-[#8A5A3B]" />
                    <span>
                      <span className="block text-xs text-[#8A7060]">
                        Phone
                      </span>
                      <span className="block text-sm text-[#371C10] sm:text-base">
                        +91 8590636162
                      </span>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="shrink-0 text-lg text-[#8A5A3B] opacity-100 transition lg:opacity-0 lg:group-hover:opacity-100" />
                </a>
                <a
                  href="https://instagram.com/sikha_nth_"
                  className="group flex min-h-16 items-center justify-between gap-3 py-4 transition"
                >
                  <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <FaInstagram className="shrink-0 text-xl text-[#8A5A3B]" />
                    <span>
                      <span className="block text-xs text-[#8A7060]">
                        Instagram
                      </span>
                      <span className="block text-sm text-[#371C10] sm:text-base">
                        @sikha_nth_
                      </span>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="shrink-0 text-lg text-[#8A5A3B] opacity-100 transition lg:opacity-0 lg:group-hover:opacity-100" />
                </a>
              </div>
            </div>
            {/* Right — contact form */}
            <form className="border-t border-[#5C3527]/12 p-6 sm:p-10 lg:border-l lg:border-t-0 md:p-14">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7060]">
                Send a message
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-[#8A7060]">
                    Name
                  </span>
                  <input
                    type="text"
                    placeholder="Your name"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] outline-none transition placeholder:text-[#B3A08F] focus:border-[#8A5A3B]"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs text-[#8A7060]">
                    Email
                  </span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] outline-none transition placeholder:text-[#B3A08F] focus:border-[#8A5A3B]"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs text-[#8A7060]">
                    Subject
                  </span>
                  <input
                    type="text"
                    placeholder="What&apos;s this about?"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] outline-none transition placeholder:text-[#B3A08F] focus:border-[#8A5A3B]"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs text-[#8A7060]">
                    Message
                  </span>
                  <textarea
                    rows="4"
                    placeholder="Tell me a bit more..."
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full resize-none border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] outline-none transition placeholder:text-[#B3A08F] focus:border-[#8A5A3B]"
                  />
                </label>
              </div>
              <button
                type="submit"
                className={`mt-8 flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#5C3527] py-4 text-base font-semibold text-[#FCF9F3] transition hover:bg-[#4A2A1F] sm:mt-10 sm:text-lg ${
                  focused
                    ? "ring-2 ring-[#8A5A3B] ring-offset-2 ring-offset-[#FCF9F3]"
                    : ""
                }`}
              >
                Send Message
                <HiOutlineArrowUpRight className="text-xl" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Contact;