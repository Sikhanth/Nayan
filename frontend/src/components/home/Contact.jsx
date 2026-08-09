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
    <section id="contact" className="py-28 bg-[#2A211C]">
      <div className="mx-auto max-w-6xl px-6 ">

        {/* Eyebrow + heading sit on the dark page, outside the frame —
            same rhythm as the rest of the site */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.4em] text-[#A99077]">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Got something in <span className="italic text-[#A99077]">focus?</span> Let's talk.
          </h2>
        </motion.div>

        {/* Thick brown frame wrapping a cream inner panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-4xl bg-[#5C3527] p-3 md:p-4"
        >
          <div className="grid gap-0 rounded-[1.5rem] bg-[#FCF9F3] lg:grid-cols-2">

            {/* Left — info, dark warm text on cream */}
            <div className="p-10 md:p-14">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7060]">
                Let's connect
              </p>
              <p className="max-w-sm leading-8 text-[#5A473C]">
                Feel free to reach out if you have any questions about Nayan,
                collaboration opportunities, or just want to say hello.
              </p>

              <div className="mt-10 space-y-1 border-t border-[#5C3527]/15 pt-8">
                <a
                  href="mailto:yourmail@example.com"
                  className="group flex items-center justify-between border-b border-[#5C3527]/12 py-4 transition"
                >
                  <span className="flex items-center gap-4">
                    <HiOutlineEnvelope className="text-xl text-[#8A5A3B]" />
                    <span>
                      <p className="text-xs text-[#8A7060]">Email</p>
                      <p className="text-[#371C10]">yourmail@example.com</p>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="text-lg text-[#8A5A3B] opacity-0 transition group-hover:opacity-100" />
                </a>

                <a
                  href="tel:+91XXXXXXXXXX"
                  className="group flex items-center justify-between border-b border-[#5C3527]/12 py-4 transition"
                >
                  <span className="flex items-center gap-4">
                    <HiOutlinePhone className="text-xl text-[#8A5A3B]" />
                    <span>
                      <p className="text-xs text-[#8A7060]">Phone</p>
                      <p className="text-[#371C10]">+91 XXXXX XXXXX</p>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="text-lg text-[#8A5A3B] opacity-0 transition group-hover:opacity-100" />
                </a>

                <a
                  href="https://instagram.com/your_username"
                  className="group flex items-center justify-between py-4 transition"
                >
                  <span className="flex items-center gap-4">
                    <FaInstagram className="text-xl text-[#8A5A3B]" />
                    <span>
                      <p className="text-xs text-[#8A7060]">Instagram</p>
                      <p className="text-[#371C10]">@your_username</p>
                    </span>
                  </span>
                  <HiOutlineArrowUpRight className="text-lg text-[#8A5A3B] opacity-0 transition group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Right — form, same cream, separated by a hairline on desktop */}
            <form className="border-t border-[#5C3527]/12 p-10 md:border-l md:border-t-0 md:p-14">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-[#8A7060]">
                Send a message
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-xs text-[#8A7060]">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] placeholder:text-[#B3A08F] outline-none transition focus:border-[#8A5A3B]"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs text-[#8A7060]">Email</span>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] placeholder:text-[#B3A08F] outline-none transition focus:border-[#8A5A3B]"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs text-[#8A7060]">Subject</span>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] placeholder:text-[#B3A08F] outline-none transition focus:border-[#8A5A3B]"
                  />
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-xs text-[#8A7060]">Message</span>
                  <textarea
                    rows="4"
                    placeholder="Tell me a bit more..."
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    className="w-full resize-none border-b border-[#5C3527]/25 bg-transparent py-3 text-[#371C10] placeholder:text-[#B3A08F] outline-none transition focus:border-[#8A5A3B]"
                  />
                </label>
              </div>

              <button
                type="submit"
                className={`mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5C3527] py-4 text-lg font-semibold text-[#FCF9F3] transition hover:bg-[#4A2A1F] ${
                  focused ? "ring-2 ring-[#8A5A3B] ring-offset-2 ring-offset-[#FCF9F3]" : ""
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