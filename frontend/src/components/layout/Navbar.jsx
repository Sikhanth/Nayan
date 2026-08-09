import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { motion } from "framer-motion";
import Menubar from "./Menubar";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 z-50 w-full"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          {/* Logo */}
          <div
            className="flex items-center gap-4"
            style={{ mixBlendMode: "difference" }}
          >
            <div>
              <h1 className="text-2xl font-bold tracking-wide text-white">
                Nayan
              </h1>
              <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                The Eye Guardian
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div
            className="hidden items-center gap-10 md:flex"
            style={{ mixBlendMode: "difference" }}
          >
            <a
              href="#features"
              className="text-white transition duration-300 hover:opacity-70"
            >
              Features
            </a>

            <a
              href="#dashboard"
              className="text-white transition duration-300 hover:opacity-70"
            >
              Dashboard
            </a>

            <a
              href="#contact"
              className="text-white transition duration-300 hover:opacity-70"
            >
              Contact
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button className="hidden rounded-xl px-6 py-2.5 font-medium text-white transition-all duration-300 hover:bg-[#8B684A] hover:shadow-lg md:block">
              Login
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="rounded-xl border border-[#8B684A]/40 bg-[#5A3E2B]/60 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-[#8B684A]"
            >
              <HiOutlineMenu className="text-2xl" />
            </button>
          </div>
        </div>
      </motion.nav>

      <Menubar
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default Navbar;